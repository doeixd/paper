#!/usr/bin/env python3
"""
Academic Paper Release Script v2.0

This script provides a complete pipeline for converting academic papers
from markdown to publication-ready PDFs with customizable formatting,
attachments, and cleanup.

Features:
    - Complete markdown to PDF pipeline
    - Citation processing and reference filtering
    - Configurable formatting (Typst/LaTeX)
    - Front/back page attachments
    - Progress reporting and error recovery
    - Dry-run mode for testing
    - Comprehensive logging

Usage:
    python release.py paper.md                    # Basic release with defaults
    python release.py paper.md --config release.json  # Custom config
    python release.py paper.md --format typst    # Specify format
    python release.py paper.md --output final.pdf # Custom output
    python release.py paper.md --dry-run         # Preview what would happen
    python release.py --create-config            # Create default config file
    python release.py --check-deps               # Check system dependencies
"""

import os
import re
import json
import argparse
import subprocess
import tempfile
import logging
import sys
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional, Any, Tuple

# Try to import yaml, fallback gracefully
try:
    import yaml
    HAS_YAML = True
except ImportError:
    HAS_YAML = False

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler('release.log', mode='a')
    ]
)
logger = logging.getLogger(__name__)

# Import our existing functionality with error handling
try:
    from paper_converter import (
        extract_citations_from_file,
        load_references,
        match_citation_to_reference,
        generate_filtered_references,
        remove_references_section,
        combine_paper_and_references,
        convert_with_pandoc
    )
    logger.info("Successfully imported paper_converter")
except ImportError as e:
    logger.error(f"Failed to import paper_converter: {e}")
    print("ERROR: paper_converter.py not found. Please ensure it's in the same directory.")
    exit(1)

try:
    from pdf_assembler import (
        detect_file_format,
        convert_to_pdf,
        merge_pdfs
    )
    logger.info("Successfully imported pdf_assembler")
except ImportError as e:
    logger.error(f"Failed to import pdf_assembler: {e}")
    print("ERROR: pdf_assembler.py not found. Please ensure it's in the same directory.")
    exit(1)

# Version information
__version__ = "2.0.0"
__author__ = "Academic Paper Tools"

class ReleaseConfig:
    """Configuration class for release settings with validation."""

    def __init__(self, config_file: Optional[str] = None, validate: bool = True):
        self.config = self._load_defaults()
        self.errors: List[str] = []

        if config_file:
            self._load_config_file(config_file)

        if validate:
            self._validate_config()

    def _load_defaults(self) -> Dict[str, Any]:
        """Load default configuration with comprehensive options."""
        return {
            "format": "typst",  # typst or latex
            "preamble": {
                "typst": "typst_preamble.typ",
                "latex": None
            },
            "output": {
                "filename": None,  # Auto-generated if None
                "directory": "releases",
                "overwrite_existing": False,
                "backup_existing": True
            },
            "attachments": {
                "front": [],  # List of files to attach at front
                "end": []     # List of files to attach at end
            },
            "cleanup": {
                "intermediate_files": True,
                "temp_files": True,
                "keep_logs": False,
                "backup_directory": "backups"
            },
            "processing": {
                "max_retries": 2,
                "timeout": 300,  # seconds
                "verbose": False
            },
            "metadata": {
                "author": "Unknown",
                "title": "Academic Paper",
                "version": "1.0",
                "date": datetime.now().strftime("%Y-%m-%d"),
                "keywords": [],
                "abstract": None
            }
        }

    def _load_config_file(self, config_file: str) -> None:
        """Load configuration from JSON or YAML file with error handling."""
        config_path = Path(config_file)
        if not config_path.exists():
            logger.warning(f"Config file '{config_file}' not found, using defaults")
            return

        if not config_path.is_file():
            logger.error(f"Config path '{config_file}' is not a file")
            return

        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                if config_path.suffix.lower() in ['.yaml', '.yml']:
                    if not HAS_YAML:
                        raise ImportError("PyYAML not available for YAML config files. Install with: pip install PyYAML")
                    file_config = yaml.safe_load(f)
                else:  # Assume JSON
                    file_config = json.load(f)

            if not isinstance(file_config, dict):
                raise ValueError("Config file must contain a JSON object/dictionary")

            # Deep merge the config
            self._deep_merge(self.config, file_config)
            logger.info(f"Loaded configuration from {config_file}")

        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON in config file '{config_file}': {e}")
            self.errors.append(f"Invalid JSON syntax: {e}")
        except yaml.YAMLError as e:
            logger.error(f"Invalid YAML in config file '{config_file}': {e}")
            self.errors.append(f"Invalid YAML syntax: {e}")
        except Exception as e:
            logger.error(f"Error loading config file '{config_file}': {e}")
            self.errors.append(f"Config file error: {e}")

    def _validate_config(self) -> None:
        """Validate configuration values."""
        # Validate format
        valid_formats = ['typst', 'latex']
        if self.get('format') not in valid_formats:
            self.errors.append(f"Invalid format '{self.get('format')}'. Must be one of: {valid_formats}")

        # Validate output directory
        output_dir = self.get('output.directory')
        if output_dir and not isinstance(output_dir, str):
            self.errors.append("output.directory must be a string")

        # Validate attachments
        for attach_type in ['front', 'end']:
            attachments = self.get(f'attachments.{attach_type}', [])
            if not isinstance(attachments, list):
                self.errors.append(f"attachments.{attach_type} must be a list")
                continue

            for attachment in attachments:
                if not isinstance(attachment, str):
                    self.errors.append(f"All attachments in {attach_type} must be strings (filenames)")
                    break

        # Validate processing options
        max_retries = self.get('processing.max_retries', 2)
        if not isinstance(max_retries, int) or max_retries < 0:
            self.errors.append("processing.max_retries must be a non-negative integer")

        timeout = self.get('processing.timeout', 300)
        if not isinstance(timeout, (int, float)) or timeout <= 0:
            self.errors.append("processing.timeout must be a positive number")

    def _deep_merge(self, base: Dict[str, Any], update: Dict[str, Any]) -> None:
        """Deep merge two dictionaries with type checking."""
        for key, value in update.items():
            if key in base and isinstance(base[key], dict) and isinstance(value, dict):
                self._deep_merge(base[key], value)
            else:
                base[key] = value

    def get(self, key: str, default: Any = None) -> Any:
        """Get configuration value with dot notation support."""
        keys = key.split('.')
        value = self.config

        try:
            for k in keys:
                if isinstance(value, dict) and k in value:
                    value = value[k]
                else:
                    return default
            return value
        except (KeyError, TypeError):
            return default

    def set(self, key: str, value: Any) -> None:
        """Set configuration value with dot notation support."""
        keys = key.split('.')
        config = self.config

        for k in keys[:-1]:
            if k not in config or not isinstance(config[k], dict):
                config[k] = {}
            config = config[k]

        config[keys[-1]] = value

    def is_valid(self) -> bool:
        """Check if configuration is valid."""
        return len(self.errors) == 0

    def get_errors(self) -> List[str]:
        """Get list of configuration errors."""
        return self.errors.copy()

    def save(self, filepath: str) -> bool:
        """Save current configuration to file."""
        try:
            config_path = Path(filepath)
            config_path.parent.mkdir(parents=True, exist_ok=True)

            with open(config_path, 'w', encoding='utf-8') as f:
                if config_path.suffix.lower() in ['.yaml', '.yml']:
                    if HAS_YAML:
                        yaml.dump(self.config, f, default_flow_style=False, sort_keys=False)
                    else:
                        raise ImportError("PyYAML required for YAML output")
                else:
                    json.dump(self.config, f, indent=2, sort_keys=False)

            logger.info(f"Configuration saved to {filepath}")
            return True

        except Exception as e:
            logger.error(f"Failed to save config to {filepath}: {e}")
            return False

class PaperRelease:
    """Main class for handling paper releases with comprehensive error handling."""

    def __init__(self, config: ReleaseConfig):
        self.config = config
        self.temp_files: List[Path] = []
        self.intermediate_files: List[Path] = []
        self.backup_files: List[Tuple[Path, Path]] = []  # (original, backup) pairs
        self.start_time = None

    def release(self, input_file: str, output_file: Optional[str] = None, dry_run: bool = False) -> Optional[Path]:
        """Execute the complete release pipeline."""
        self.start_time = datetime.now()

        try:
            # Validate inputs
            input_path = self._validate_input(input_file)
            output_path = self._prepare_output_path(input_path, output_file)

            # Check for existing output and backup if needed
            if output_path.exists() and not dry_run:
                self._backup_existing_file(output_path)

            if dry_run:
                return self._dry_run(input_path, output_path)

            logger.info("Starting Academic Paper Release Pipeline")
            logger.info(f"Input: {input_file}")
            logger.info(f"Output: {output_path}")
            logger.info(f"Format: {self.config.get('format')}")
            logger.info(f"Config: {len(self.config.get_errors())} validation errors")

            # Step 1: Convert markdown to target format
            target_file = self._convert_paper(input_path)

            # Step 2: Generate PDF with attachments
            final_pdf = self._generate_pdf(target_file, output_path)

            # Step 3: Add metadata if configured
            self._add_metadata(final_pdf)

            # Step 4: Validate final output
            self._validate_output(final_pdf)

            # Step 5: Cleanup
            self._cleanup()

            duration = datetime.now() - self.start_time
            logger.info(f"SUCCESS! Release complete in {duration.total_seconds():.1f}s")
            logger.info(f"Final PDF: {final_pdf} ({final_pdf.stat().st_size} bytes)")

            return final_pdf

        except Exception as e:
            duration = datetime.now() - self.start_time if self.start_time else 0
            logger.error(f"Release failed after {duration.total_seconds():.1f}s: {e}")

            # Attempt cleanup on failure
            try:
                self._cleanup()
            except Exception as cleanup_error:
                logger.error(f"Cleanup also failed: {cleanup_error}")

            raise

    def _validate_input(self, input_file: str) -> Path:
        """Validate input file and return Path object."""
        input_path = Path(input_file)

        if not input_path.exists():
            raise FileNotFoundError(f"Input file not found: {input_file}")

        if not input_path.is_file():
            raise ValueError(f"Input path is not a file: {input_file}")

        if input_path.suffix.lower() != '.md':
            logger.warning(f"Input file '{input_file}' does not have .md extension. Proceeding anyway.")

        # Check if references.md exists
        if not Path('references.md').exists():
            raise FileNotFoundError("references.md not found in current directory")

        return input_path

    def _prepare_output_path(self, input_path: Path, output_file: Optional[str]) -> Path:
        """Prepare and validate output path."""
        if output_file:
            output_path = Path(output_file)
        else:
            base_name = self.config.get('output.filename')
            if not base_name:
                # Auto-generate from input filename
                base_name = input_path.stem.replace('_', '-').replace(' ', '-')

            output_dir = Path(self.config.get('output.directory', 'releases'))
            output_path = output_dir / f"{base_name}.pdf"

        # Ensure output directory exists
        output_path.parent.mkdir(parents=True, exist_ok=True)

        return output_path

    def _backup_existing_file(self, file_path: Path) -> None:
        """Backup existing file if configured."""
        if not self.config.get('output.backup_existing', True):
            return

        backup_dir = Path(self.config.get('cleanup.backup_directory', 'backups'))
        backup_dir.mkdir(parents=True, exist_ok=True)

        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_name = f"{file_path.stem}_{timestamp}{file_path.suffix}"
        backup_path = backup_dir / backup_name

        try:
            import shutil
            shutil.copy2(file_path, backup_path)
            self.backup_files.append((file_path, backup_path))
            logger.info(f"Backed up existing file: {file_path} -> {backup_path}")
        except Exception as e:
            logger.warning(f"Failed to backup {file_path}: {e}")

    def _dry_run(self, input_path: Path, output_path: Path) -> None:
        """Perform a dry run showing what would happen."""
        print("DRY RUN - Preview of Release Pipeline")
        print("=" * 60)
        print(f"Input file: {input_path} ({input_path.stat().st_size} bytes)")
        print(f"Output file: {output_path}")
        print(f"Format: {self.config.get('format')}")
        format_type = self.config.get('format')
        print(f"Preamble: {self.config.get(f'preamble.{format_type}')}")

        # Check attachments
        front_attachments = self.config.get('attachments.front', [])
        end_attachments = self.config.get('attachments.end', [])

        if front_attachments:
            print(f"Front attachments: {len(front_attachments)} files")
            for attachment in front_attachments:
                status = "[OK]" if Path(attachment).exists() else "[MISSING]"
                print(f"  {status} {attachment}")

        if end_attachments:
            print(f"End attachments: {len(end_attachments)} files")
            for attachment in end_attachments:
                status = "[OK]" if Path(attachment).exists() else "[MISSING]"
                print(f"  {status} {attachment}")

        # Check output directory
        if output_path.exists():
            print(f"WARNING: Output file exists: {output_path}")
            if self.config.get('output.backup_existing'):
                print("  -> Will create backup")
            else:
                print("  -> Will overwrite")
        else:
            print(f"OK: Output directory ready: {output_path.parent}")

        # Check cleanup settings
        cleanup = self.config.get('cleanup', {})
        print(f"Cleanup: intermediate={cleanup.get('intermediate_files', True)}, temp={cleanup.get('temp_files', True)}")

        print("\nPipeline Steps:")
        print("1. Extract citations from markdown")
        print("2. Filter references.md to cited works only")
        print("3. Combine paper with filtered references")
        print("4. Convert to target format (Typst/LaTeX)")
        print("5. Generate PDF from formatted document")
        print("6. Attach front/end documents if specified")
        print("7. Merge all PDFs into final document")
        print("8. Cleanup intermediate files")

        print("\nSUCCESS: Dry run complete - no files were modified")
        return None

    def _convert_paper(self, input_path: Path) -> Path:
        """Convert markdown to target format (Typst/LaTeX) with error handling."""
        logger.info("Converting markdown to target format...")

        max_retries = self.config.get('processing.max_retries', 2)

        for attempt in range(max_retries + 1):
            try:
                # Step 1: Extract citations
                logger.info("Extracting citations...")
                citations = extract_citations_from_file(str(input_path))
                logger.info(f"Found {len(citations)} citations")

                if not citations:
                    logger.warning("No citations found in input file")

                # Step 2: Load and filter references
                logger.info("Loading and filtering references...")
                references = load_references()
                logger.info(f"Loaded {len(references)} reference entries")

                filtered_refs_file = input_path.with_stem(f"{input_path.stem}_refs_filtered")
                num_refs, num_missing = generate_filtered_references(citations, references, str(filtered_refs_file))

                if num_missing > 0:
                    logger.warning(f"{num_missing} citations not found in references.md")

                # Step 3: Combine paper and references
                logger.info("Combining paper with filtered references...")
                combined_file = input_path.with_stem(f"{input_path.stem}_combined")
                combine_paper_and_references(str(input_path), str(filtered_refs_file), str(combined_file))

                # Verify combined file was created
                if not combined_file.exists():
                    raise FileNotFoundError(f"Failed to create combined file: {combined_file}")

                # Step 4: Convert to target format
                format_type = self.config.get('format')
                preamble_file = self.config.get(f'preamble.{format_type}')

                logger.info(f"Converting to {format_type} format...")
                target_file = combined_file.with_suffix(f'.{format_type}')

                # Check preamble file if specified
                if preamble_file and not Path(preamble_file).exists():
                    logger.warning(f"Preamble file not found: {preamble_file}")
                    preamble_file = None

                # Use pandoc for conversion with timeout
                timeout = self.config.get('processing.timeout', 300)
                success, error = self._run_with_timeout(
                    lambda: convert_with_pandoc(str(combined_file), str(target_file), format_type, preamble_file),
                    timeout
                )

                if not success:
                    raise RuntimeError(f"Format conversion failed: {error}")

                # Verify target file was created
                if not target_file.exists():
                    raise FileNotFoundError(f"Conversion did not create target file: {target_file}")

                # Track intermediate files
                self.intermediate_files.extend([filtered_refs_file, combined_file])

                logger.info(f"Successfully converted to {format_type}: {target_file}")
                return target_file

            except Exception as e:
                if attempt < max_retries:
                    logger.warning(f"Attempt {attempt + 1} failed: {e}. Retrying...")
                    # Clean up any partial files from this attempt
                    self._cleanup_attempt_files()
                else:
                    logger.error(f"All {max_retries + 1} attempts failed")
                    raise

    def _run_with_timeout(self, func, timeout: float):
        """Run a function with timeout."""
        import threading
        import queue

        result_queue = queue.Queue()

        def wrapper():
            try:
                result = func()
                result_queue.put(('success', result))
            except Exception as e:
                result_queue.put(('error', e))

        thread = threading.Thread(target=wrapper)
        thread.daemon = True
        thread.start()
        thread.join(timeout)

        if thread.is_alive():
            raise TimeoutError(f"Operation timed out after {timeout} seconds")

        if result_queue.empty():
            raise RuntimeError("Operation completed but no result returned")

        status, result = result_queue.get()
        if status == 'error':
            raise result

        return result

    def _generate_pdf(self, target_file: Path, output_path: Path) -> Path:
        """Generate PDF from target file with attachments and error handling."""
        logger.info("Generating PDF with attachments...")

        # Collect all files to merge
        files_to_merge = []
        missing_attachments = []

        # Add front attachments
        front_files = self.config.get('attachments.front', [])
        for front_file in front_files:
            front_path = Path(front_file)
            if front_path.exists():
                files_to_merge.append(front_path)
                logger.info(f"Adding front attachment: {front_file}")
            else:
                missing_attachments.append(f"front: {front_file}")
                logger.warning(f"Front attachment not found: {front_file}")

        # Add main file
        files_to_merge.append(target_file)
        logger.info(f"Main document: {target_file}")

        # Add end attachments
        end_files = self.config.get('attachments.end', [])
        for end_file in end_files:
            end_path = Path(end_file)
            if end_path.exists():
                files_to_merge.append(end_path)
                logger.info(f"Adding end attachment: {end_file}")
            else:
                missing_attachments.append(f"end: {end_file}")
                logger.warning(f"End attachment not found: {end_file}")

        if missing_attachments:
            logger.warning(f"Missing attachments: {', '.join(missing_attachments)}")

        # Convert all to PDFs
        pdf_files = []
        for file_path in files_to_merge:
            try:
                if detect_file_format(file_path) == 'pdf':
                    pdf_files.append(file_path)
                    logger.debug(f"Using existing PDF: {file_path}")
                else:
                    # Convert to PDF
                    logger.info(f"Converting {file_path.name} to PDF...")
                    pdf_file = file_path.with_suffix('.pdf')
                    convert_to_pdf(file_path, pdf_file)
                    pdf_files.append(pdf_file)
                    self.temp_files.append(pdf_file)
                    logger.info(f"Converted to PDF: {pdf_file}")
            except Exception as e:
                logger.error(f"Failed to process {file_path}: {e}")
                raise

        # Merge PDFs
        try:
            if len(pdf_files) == 1:
                # Just copy single file
                import shutil
                shutil.copy2(pdf_files[0], output_path)
                logger.info(f"Copied single PDF to: {output_path}")
            else:
                logger.info(f"Merging {len(pdf_files)} PDF files...")
                merge_pdfs(pdf_files, output_path)
                logger.info(f"Merged PDFs into: {output_path}")

            return output_path

        except Exception as e:
            logger.error(f"PDF merging failed: {e}")
            raise

    def _add_metadata(self, pdf_path: Path) -> None:
        """Add metadata to the final PDF if configured."""
        metadata = self.config.get('metadata', {})
        if not metadata or not any(metadata.values()):
            return

        logger.info("Adding metadata to PDF...")

        # This would require additional PDF manipulation libraries
        # For now, just log what metadata would be added
        metadata_info = []
        if metadata.get('title'):
            metadata_info.append(f"Title: {metadata['title']}")
        if metadata.get('author'):
            metadata_info.append(f"Author: {metadata['author']}")
        if metadata.get('keywords'):
            metadata_info.append(f"Keywords: {', '.join(metadata['keywords'])}")

        if metadata_info:
            logger.info(f"Metadata to add: {'; '.join(metadata_info)}")
            logger.warning("PDF metadata addition not yet implemented - requires additional libraries")

    def _validate_output(self, pdf_path: Path) -> None:
        """Validate the final PDF output."""
        if not pdf_path.exists():
            raise FileNotFoundError(f"Final PDF was not created: {pdf_path}")

        file_size = pdf_path.stat().st_size
        if file_size == 0:
            raise ValueError(f"Final PDF is empty: {pdf_path}")

        min_expected_size = 1000  # 1KB minimum for a valid PDF
        if file_size < min_expected_size:
            logger.warning(f"Final PDF seems very small ({file_size} bytes): {pdf_path}")

        logger.info(f"Validated final PDF: {pdf_path} ({file_size} bytes)")

    def _cleanup_attempt_files(self) -> None:
        """Clean up files from a failed attempt."""
        # Clean up any intermediate files created in this attempt
        current_intermediates = []
        for file_path in self.intermediate_files:
            if file_path.exists():
                try:
                    file_path.unlink()
                    current_intermediates.append(file_path)
                except OSError:
                    pass

        if current_intermediates:
            logger.debug(f"Cleaned up {len(current_intermediates)} intermediate files from failed attempt")

    def _cleanup(self) -> None:
        """Clean up temporary and intermediate files with comprehensive error handling."""
        logger.info("Starting cleanup...")

        cleanup_stats = {'intermediate': 0, 'temp': 0, 'errors': 0}

        # Clean up intermediate files
        if self.config.get('cleanup.intermediate_files', True):
            for file_path in self.intermediate_files:
                try:
                    if file_path.exists():
                        file_path.unlink()
                        cleanup_stats['intermediate'] += 1
                        logger.debug(f"Cleaned up intermediate file: {file_path.name}")
                except OSError as e:
                    logger.warning(f"Failed to clean up intermediate file {file_path}: {e}")
                    cleanup_stats['errors'] += 1

        # Clean up temporary files
        if self.config.get('cleanup.temp_files', True):
            for file_path in self.temp_files:
                try:
                    if file_path.exists():
                        file_path.unlink()
                        cleanup_stats['temp'] += 1
                        logger.debug(f"Cleaned up temp file: {file_path.name}")
                except OSError as e:
                    logger.warning(f"Failed to clean up temp file {file_path}: {e}")
                    cleanup_stats['errors'] += 1

        logger.info(f"Cleanup complete: {cleanup_stats['intermediate']} intermediate, {cleanup_stats['temp']} temp files removed")
        if cleanup_stats['errors'] > 0:
            logger.warning(f"Cleanup had {cleanup_stats['errors']} errors")

        if self.config.get('cleanup.temp_files'):
            for file_path in self.temp_files:
                try:
                    if file_path.exists():
                        file_path.unlink()
                        print(f"Cleaned up temp file: {file_path.name}")
                except OSError:
                    pass

def check_dependencies() -> Dict[str, bool]:
    """Check for required system dependencies."""
    deps = {}

    # Check Python modules
    try:
        import paper_converter
        deps['paper_converter'] = True
    except ImportError:
        deps['paper_converter'] = False

    try:
        import pdf_assembler
        deps['pdf_assembler'] = True
    except ImportError:
        deps['pdf_assembler'] = False

    # Check external tools
    tools = ['pandoc', 'typst', 'pdflatex']
    for tool in tools:
        try:
            result = subprocess.run([tool, '--version'],
                                  capture_output=True, text=True, timeout=5)
            deps[tool] = result.returncode == 0
        except (subprocess.TimeoutExpired, FileNotFoundError, subprocess.SubprocessError):
            deps[tool] = False

    # Check PDF tools
    pdf_tools = ['pdftk', 'pdfunite']
    for tool in pdf_tools:
        try:
            result = subprocess.run([tool, '--help' if tool == 'pdftk' else '--version'],
                                  capture_output=True, timeout=5)
            deps[tool] = result.returncode == 0
        except (subprocess.TimeoutExpired, FileNotFoundError, subprocess.SubprocessError):
            deps[tool] = False

    return deps

def print_dependency_status(deps: Dict[str, bool]) -> None:
    """Print dependency check results."""
    print("Dependency Check Results:")
    print("-" * 40)

    all_good = True

    # Python modules
    print("Python Modules:")
    for module in ['paper_converter', 'pdf_assembler']:
        status = "[OK]" if deps.get(module, False) else "[MISSING]"
        print(f"  {status} {module}")
        if not deps.get(module, False):
            all_good = False

    # External tools
    print("\nExternal Tools:")
    for tool in ['pandoc', 'typst', 'pdflatex']:
        status = "[OK]" if deps.get(tool, False) else "[MISSING]"
        print(f"  {status} {tool}")
        if not deps.get(tool, False):
            all_good = False

    # PDF tools (optional)
    print("\nPDF Tools (optional - improves merging):")
    pdf_tools_found = 0
    for tool in ['pdftk', 'pdfunite']:
        status = "[OK]" if deps.get(tool, False) else "[MISSING]"
        print(f"  {status} {tool}")
        if deps.get(tool, False):
            pdf_tools_found += 1

    if pdf_tools_found == 0:
        print("\nWARNING: No PDF merging tools found. Manual merging may be required.")
        print("   Install pdftk or pdfunite for automatic PDF merging.")

    print(f"\n{'SUCCESS: All dependencies satisfied!' if all_good else 'ERROR: Some dependencies missing'}")

def create_default_config(output_file: str = "release_config.json") -> bool:
    """Create a default configuration file."""
    try:
        config = ReleaseConfig(validate=False)  # Don't validate defaults

        success = config.save(output_file)
        if success:
            print(f"Created default config file: {output_file}")
            print("   Edit this file to customize your release settings.")
        return success

    except Exception as e:
        print(f"ERROR: Failed to create config file: {e}")
        return False

def main():
    """Main entry point with comprehensive error handling."""
    parser = argparse.ArgumentParser(
        prog='release.py',
        description='Academic Paper Release Pipeline v2.0',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
EXAMPLES:
  python release.py paper.md                           # Basic release
  python release.py paper.md --config release.json     # Custom config
  python release.py paper.md --format latex            # LaTeX output
  python release.py paper.md --output final.pdf        # Custom output
  python release.py paper.md --dry-run                 # Preview actions
  python release.py --create-config                    # Create default config
  python release.py --check-deps                       # Check dependencies

CONFIG FILE FORMAT (JSON):
{
  "format": "typst",
  "preamble": {
    "typst": "typst_preamble.typ",
    "latex": null
  },
  "output": {
    "filename": "my_paper",
    "directory": "releases",
    "backup_existing": true
  },
  "attachments": {
    "front": ["cover.pdf"],
    "end": ["appendix.pdf"]
  },
  "cleanup": {
    "intermediate_files": true,
    "temp_files": true
  },
  "processing": {
    "max_retries": 2,
    "timeout": 300
  }
}

For more information, see the documentation in AGENTS.md and CLAUDE.md.
        """
    )

    parser.add_argument('input_file', nargs='?', help='Input markdown file')
    parser.add_argument('--config', '-c', help='Configuration file (JSON/YAML)')
    parser.add_argument('--format', choices=['typst', 'latex'], help='Output format (overrides config)')
    parser.add_argument('--output', '-o', help='Output PDF file (overrides config)')
    parser.add_argument('--dry-run', '-n', action='store_true', help='Preview actions without executing')
    parser.add_argument('--create-config', action='store_true', help='Create default config file and exit')
    parser.add_argument('--check-deps', action='store_true', help='Check system dependencies and exit')
    parser.add_argument('--keep-temp', action='store_true', help='Keep temporary files (overrides config)')
    parser.add_argument('--verbose', '-v', action='store_true', help='Enable verbose logging')
    parser.add_argument('--version', action='version', version=f'Academic Paper Release v{__version__}')

    args = parser.parse_args()

    # Configure logging
    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)

    # Handle special actions
    if args.create_config:
        return 0 if create_default_config() else 1

    if args.check_deps:
        deps = check_dependencies()
        print_dependency_status(deps)
        return 0

    # Validate input file
    if not args.input_file:
        parser.error("Input file is required (or use --create-config/--check-deps)")

    # Check basic dependencies
    deps = check_dependencies()
    critical_deps = ['paper_converter', 'pdf_assembler', 'pandoc']
    missing_critical = [dep for dep in critical_deps if not deps.get(dep, False)]

    if missing_critical:
        print(f"ERROR: Critical dependencies missing: {', '.join(missing_critical)}")
        print("Run 'python release.py --check-deps' for detailed status.")
        return 1

    # Load configuration
    try:
        config = ReleaseConfig(args.config)
    except Exception as e:
        print(f"❌ Configuration error: {e}")
        return 1

    # Check config validity
    if not config.is_valid():
        print("ERROR: Configuration validation errors:")
        for error in config.get_errors():
            print(f"  - {error}")
        return 1

    # Override config with command-line args
    if args.format:
        config.set('format', args.format)
    if args.output:
        config.set('output.filename', Path(args.output).stem)
    if args.keep_temp:
        config.set('cleanup.temp_files', False)

    # Execute release
    try:
        releaser = PaperRelease(config)
        final_pdf = releaser.release(args.input_file, args.output, dry_run=args.dry_run)

        if args.dry_run:
            print("\nSUCCESS: Dry run completed successfully")
        else:
            print(f"\nSUCCESS: Release completed successfully!")
            print(f"Final PDF: {final_pdf}")

        return 0

    except KeyboardInterrupt:
        print("\nWARNING: Release interrupted by user")
        return 130
    except Exception as e:
        print(f"\nERROR: Release failed: {e}")
        logger.exception("Release failed with exception")
        return 1

    if not args.input_file:
        parser.error("Input file is required (or use --create-config)")

    # Load configuration
    config = ReleaseConfig(args.config)

    # Override config with command-line args
    if args.format:
        config.set('format', args.format)
    if args.output:
        config.set('output.filename', Path(args.output).stem)
    if args.keep_temp:
        config.set('cleanup.temp_files', False)

    # Execute release
    releaser = PaperRelease(config)
    final_pdf = releaser.release(args.input_file, args.output)

    return 0

if __name__ == '__main__':
    exit(main())