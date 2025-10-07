#!/usr/bin/env python3
"""
Academic Paper Release Script

This script provides a complete pipeline for converting academic papers
from markdown to publication-ready PDFs with customizable formatting,
attachments, and cleanup.

Usage:
    python release.py paper.md                    # Basic release with defaults
    python release.py paper.md --config release.json  # Custom config
    python release.py paper.md --format typst    # Specify format
    python release.py paper.md --output final.pdf # Custom output
"""

import os
import re
import json
import argparse
import subprocess
import tempfile
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional, Any

# Try to import yaml, fallback gracefully
try:
    import yaml
    HAS_YAML = True
except ImportError:
    HAS_YAML = False

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
except ImportError as e:
    print(f"Error importing paper_converter: {e}")
    print("Make sure paper_converter.py is in the same directory")
    exit(1)

try:
    from pdf_assembler import (
        detect_file_format,
        convert_to_pdf,
        merge_pdfs
    )
except ImportError as e:
    print(f"Error importing pdf_assembler: {e}")
    print("Make sure pdf_assembler.py is in the same directory")
    exit(1)

class ReleaseConfig:
    """Configuration class for release settings."""

    def __init__(self, config_file: Optional[str] = None):
        self.config = self._load_defaults()

        if config_file:
            self._load_config_file(config_file)

    def _load_defaults(self) -> Dict[str, Any]:
        """Load default configuration."""
        return {
            "format": "typst",  # typst or latex
            "preamble": {
                "typst": "typst_preamble.typ",
                "latex": None
            },
            "output": {
                "filename": None,  # Auto-generated if None
                "directory": "releases"
            },
            "attachments": {
                "front": [],  # List of files to attach at front
                "end": []     # List of files to attach at end
            },
            "cleanup": {
                "intermediate_files": True,
                "temp_files": True,
                "keep_logs": False
            },
            "metadata": {
                "author": "Unknown",
                "title": "Academic Paper",
                "version": "1.0",
                "date": datetime.now().strftime("%Y-%m-%d")
            }
        }

    def _load_config_file(self, config_file: str) -> None:
        """Load configuration from JSON or YAML file."""
        config_path = Path(config_file)
        if not config_path.exists():
            print(f"Warning: Config file '{config_file}' not found, using defaults")
            return

        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                if config_path.suffix.lower() in ['.yaml', '.yml']:
                    if not HAS_YAML:
                        raise ImportError("PyYAML not available for YAML config files")
                    file_config = yaml.safe_load(f)
                else:  # Assume JSON
                    file_config = json.load(f)

            # Deep merge the config
            self._deep_merge(self.config, file_config)
            print(f"Loaded configuration from {config_file}")

        except Exception as e:
            print(f"Error loading config file '{config_file}': {e}")
            print("Using default configuration")

    def _deep_merge(self, base: Dict[str, Any], update: Dict[str, Any]) -> None:
        """Deep merge two dictionaries."""
        for key, value in update.items():
            if key in base and isinstance(base[key], dict) and isinstance(value, dict):
                self._deep_merge(base[key], value)
            else:
                base[key] = value

    def get(self, key: str, default: Any = None) -> Any:
        """Get configuration value with dot notation support."""
        keys = key.split('.')
        value = self.config

        for k in keys:
            if isinstance(value, dict) and k in value:
                value = value[k]
            else:
                return default

        return value

    def set(self, key: str, value: Any) -> None:
        """Set configuration value with dot notation support."""
        keys = key.split('.')
        config = self.config

        for k in keys[:-1]:
            if k not in config:
                config[k] = {}
            config = config[k]

        config[keys[-1]] = value

class PaperRelease:
    """Main class for handling paper releases."""

    def __init__(self, config: ReleaseConfig):
        self.config = config
        self.temp_files: List[Path] = []
        self.intermediate_files: List[Path] = []

    def release(self, input_file: str, output_file: Optional[str] = None) -> Path:
        """Execute the complete release pipeline."""
        input_path = Path(input_file)
        if not input_path.exists():
            raise FileNotFoundError(f"Input file not found: {input_file}")

        print("Starting Academic Paper Release Pipeline")
        print(f"Input: {input_file}")
        print(f"Format: {self.config.get('format')}")
        print("-" * 50)

        try:
            # Step 1: Convert markdown to target format
            target_file = self._convert_paper(input_path)

            # Step 2: Generate PDF with attachments
            final_pdf = self._generate_pdf(target_file, output_file)

            # Step 3: Cleanup
            self._cleanup()

            print(f"\nSUCCESS! Release complete! Final PDF: {final_pdf}")
            return final_pdf

        except Exception as e:
            print(f"\nERROR: Release failed: {e}")
            # Still try to cleanup on failure
            self._cleanup()
            raise

    def _convert_paper(self, input_path: Path) -> Path:
        """Convert markdown to target format (Typst/LaTeX)."""
        print("\nConverting markdown to target format...")

        # Extract citations
        citations = extract_citations_from_file(input_path)
        print(f"Found {len(citations)} citations")

        # Load and filter references
        references = load_references()
        filtered_refs_file = input_path.with_stem(f"{input_path.stem}_refs_filtered")
        num_refs, num_missing = generate_filtered_references(citations, references, str(filtered_refs_file))

        if num_missing > 0:
            print(f"Warning: {num_missing} citations not found in references.md")

        # Combine paper and references
        combined_file = input_path.with_stem(f"{input_path.stem}_combined")
        combine_paper_and_references(str(input_path), str(filtered_refs_file), str(combined_file))

        # Convert to target format
        format_type = self.config.get('format')
        preamble_file = self.config.get(f'preamble.{format_type}')

        target_file = combined_file.with_suffix(f'.{format_type}')

        # Use pandoc for conversion
        success, error = convert_with_pandoc(str(combined_file), str(target_file), format_type, preamble_file)
        if not success:
            raise RuntimeError(f"Conversion failed: {error}")

        # Track intermediate files
        self.intermediate_files.extend([filtered_refs_file, combined_file])

        print(f"[OK] Converted to {format_type}: {target_file}")
        return target_file

    def _generate_pdf(self, target_file: Path, output_file: Optional[str] = None) -> Path:
        """Generate PDF from target file with attachments."""
        print("\nGenerating PDF with attachments...")

        # Determine output filename
        if output_file:
            pdf_path = Path(output_file)
        else:
            base_name = self.config.get('output.filename')
            if not base_name:
                base_name = target_file.stem.replace('_combined', '')
            pdf_path = Path(self.config.get('output.directory')) / f"{base_name}.pdf"

        # Ensure output directory exists
        pdf_path.parent.mkdir(parents=True, exist_ok=True)

        # Collect all files to merge
        files_to_merge = []

        # Add front attachments
        front_files = self.config.get('attachments.front', [])
        for front_file in front_files:
            front_path = Path(front_file)
            if front_path.exists():
                files_to_merge.append(front_path)
                print(f"Adding front attachment: {front_file}")
            else:
                print(f"Warning: Front attachment not found: {front_file}")

        # Add main file
        files_to_merge.append(target_file)

        # Add end attachments
        end_files = self.config.get('attachments.end', [])
        for end_file in end_files:
            end_path = Path(end_file)
            if end_path.exists():
                files_to_merge.append(end_path)
                print(f"Adding end attachment: {end_file}")
            else:
                print(f"Warning: End attachment not found: {end_file}")

        # Convert all to PDFs and merge
        pdf_files = []
        for file_path in files_to_merge:
            if detect_file_format(file_path) == 'pdf':
                pdf_files.append(file_path)
            else:
                # Convert to PDF
                pdf_file = file_path.with_suffix('.pdf')
                convert_to_pdf(file_path, pdf_file)
                pdf_files.append(pdf_file)
                self.temp_files.append(pdf_file)

        # Merge PDFs
        if len(pdf_files) == 1:
            # Just copy single file
            import shutil
            shutil.copy2(pdf_files[0], pdf_path)
        else:
            merge_pdfs(pdf_files, pdf_path)

        print(f"[OK] PDF generated: {pdf_path}")
        return pdf_path

    def _cleanup(self) -> None:
        """Clean up temporary and intermediate files."""
        if self.config.get('cleanup.intermediate_files'):
            for file_path in self.intermediate_files:
                try:
                    if file_path.exists():
                        file_path.unlink()
                        print(f"Cleaned up intermediate file: {file_path.name}")
                except OSError:
                    pass

        if self.config.get('cleanup.temp_files'):
            for file_path in self.temp_files:
                try:
                    if file_path.exists():
                        file_path.unlink()
                        print(f"Cleaned up temp file: {file_path.name}")
                except OSError:
                    pass

def create_default_config(output_file: str = "release_config.json") -> None:
    """Create a default configuration file."""
    config = ReleaseConfig()

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(config.config, f, indent=2)

    print(f"Created default config file: {output_file}")

def main():
    parser = argparse.ArgumentParser(
        description='Release academic papers to publication-ready PDFs.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python release.py paper.md                           # Basic release
  python release.py paper.md --config my_config.json   # Custom config
  python release.py paper.md --format latex            # LaTeX output
  python release.py paper.md --output final.pdf        # Custom output
  python release.py --create-config                    # Create default config

Config file format (JSON):
{
  "format": "typst",
  "preamble": {
    "typst": "typst_preamble.typ",
    "latex": null
  },
  "output": {
    "filename": "my_paper",
    "directory": "releases"
  },
  "attachments": {
    "front": ["cover.pdf"],
    "end": ["appendix.pdf"]
  },
  "cleanup": {
    "intermediate_files": true,
    "temp_files": true
  }
}
        """
    )

    parser.add_argument('input_file', nargs='?', help='Input markdown file')
    parser.add_argument('--config', '-c', help='Configuration file (JSON/YAML)')
    parser.add_argument('--format', choices=['typst', 'latex'], help='Output format (overrides config)')
    parser.add_argument('--output', '-o', help='Output PDF file (overrides config)')
    parser.add_argument('--create-config', action='store_true', help='Create default config file and exit')
    parser.add_argument('--keep-temp', action='store_true', help='Keep temporary files')

    args = parser.parse_args()

    if args.create_config:
        create_default_config()
        return 0

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