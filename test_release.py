#!/usr/bin/env python3
"""
Unit tests for the release script.
"""

import unittest
import tempfile
import json
from pathlib import Path
from unittest.mock import patch, MagicMock

from release import ReleaseConfig, PaperRelease

class TestReleaseConfig(unittest.TestCase):
    """Test the ReleaseConfig class."""

    def test_default_config(self):
        """Test loading default configuration."""
        config = ReleaseConfig()
        self.assertEqual(config.get('format'), 'typst')
        self.assertEqual(config.get('preamble.typst'), 'typst_preamble.typ')
        self.assertEqual(config.get('cleanup.intermediate_files'), True)

    def test_config_file_loading(self):
        """Test loading configuration from JSON file."""
        config_data = {
            "format": "latex",
            "output": {
                "filename": "test_paper"
            }
        }

        with tempfile.NamedTemporaryFile(mode='w', suffix='.json', delete=False) as f:
            json.dump(config_data, f)
            config_file = f.name

        try:
            config = ReleaseConfig(config_file)
            self.assertEqual(config.get('format'), 'latex')
            self.assertEqual(config.get('output.filename'), 'test_paper')
            # Should still have default values for unset options
            self.assertEqual(config.get('cleanup.intermediate_files'), True)
        finally:
            Path(config_file).unlink()

    def test_yaml_config_loading(self):
        """Test loading configuration from YAML file."""
        if not hasattr(__import__('release'), 'HAS_YAML') or not __import__('release').HAS_YAML:
            self.skipTest("PyYAML not available")

        config_data = {
            "format": "latex",
            "output": {
                "filename": "yaml_test"
            }
        }

        with tempfile.NamedTemporaryFile(mode='w', suffix='.yaml', delete=False) as f:
            import yaml
            yaml.dump(config_data, f)
            config_file = f.name

        try:
            config = ReleaseConfig(config_file)
            self.assertEqual(config.get('format'), 'latex')
            self.assertEqual(config.get('output.filename'), 'yaml_test')
        finally:
            Path(config_file).unlink()

    def test_config_override(self):
        """Test configuration overrides."""
        config = ReleaseConfig()
        config.set('format', 'latex')
        config.set('output.filename', 'custom_name')

        self.assertEqual(config.get('format'), 'latex')
        self.assertEqual(config.get('output.filename'), 'custom_name')

class TestPaperRelease(unittest.TestCase):
    """Test the PaperRelease class."""

    def setUp(self):
        """Set up test fixtures."""
        self.config = ReleaseConfig()
        self.releaser = PaperRelease(self.config)

    @patch('release.extract_citations_from_file')
    @patch('release.load_references')
    @patch('release.generate_filtered_references')
    @patch('release.combine_paper_and_references')
    @patch('release.convert_with_pandoc')
    def test_convert_paper_success(self, mock_convert, mock_combine, mock_generate, mock_load, mock_extract):
        """Test successful paper conversion."""
        # Setup mocks
        mock_extract.return_value = [{'author': 'Test', 'year': '2023'}]
        mock_load.return_value = {'Test 2023': 'Test ref'}
        mock_generate.return_value = (1, 0)
        mock_convert.return_value = (True, "")

        # Create temporary input file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.md', delete=False) as f:
            f.write("# Test Paper\n\nSome content.")
            input_file = Path(f.name)

        try:
            result = self.releaser._convert_paper(input_file)
            self.assertTrue(result.exists())
            self.assertTrue(result.suffix in ['.typ', '.tex'])
        finally:
            input_file.unlink()
            if result.exists():
                result.unlink()

    @patch('release.detect_file_format')
    @patch('release.convert_to_pdf')
    @patch('release.merge_pdfs')
    def test_generate_pdf_with_attachments(self, mock_merge, mock_convert, mock_detect):
        """Test PDF generation with attachments."""
        # Setup mocks
        mock_detect.return_value = 'typst'
        mock_convert.return_value = Path('temp.pdf')

        # Create temporary files
        with tempfile.NamedTemporaryFile(suffix='.typ', delete=False) as f:
            target_file = Path(f.name)

        with tempfile.NamedTemporaryFile(suffix='.pdf', delete=False) as f:
            front_file = Path(f.name)

        try:
            # Configure attachments
            self.config.set('attachments.front', [str(front_file)])

            result = self.releaser._generate_pdf(target_file, 'output.pdf')

            # Verify merge was called with correct files
            mock_merge.assert_called_once()
            args = mock_merge.call_args[0]
            self.assertEqual(len(args[0]), 2)  # front + main

        finally:
            target_file.unlink()
            front_file.unlink()

if __name__ == '__main__':
    unittest.main()