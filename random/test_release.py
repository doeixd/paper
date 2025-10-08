#!/usr/bin/env python3
"""
Unit tests for the release script v2.0.
"""

import unittest
import tempfile
import json
import sys
from pathlib import Path
from unittest.mock import patch, MagicMock, mock_open

# Add the current directory to Python path for imports
sys.path.insert(0, '.')

try:
    from release import ReleaseConfig, PaperRelease, check_dependencies, create_default_config
except ImportError as e:
    print(f"Failed to import release module: {e}")
    print("Make sure release.py is in the same directory")
    sys.exit(1)

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

    def test_input_validation(self):
        """Test input file validation."""
        # Test with non-existent file
        with self.assertRaises(FileNotFoundError):
            self.releaser._validate_input("nonexistent.md")

        # Test with valid file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.md', delete=False) as f:
            f.write("# Test Paper\n\nSome content.")
            input_file = f.name

        try:
            result = self.releaser._validate_input(input_file)
            self.assertEqual(result, Path(input_file))
        finally:
            Path(input_file).unlink()

    def test_output_path_generation(self):
        """Test output path generation."""
        input_path = Path("test.md")

        # Test with default settings
        output_path = self.releaser._prepare_output_path(input_path, None)
        self.assertTrue(output_path.name.endswith('.pdf'))
        self.assertTrue('releases' in str(output_path))

        # Test with custom output
        custom_output = self.releaser._prepare_output_path(input_path, "custom.pdf")
        self.assertEqual(custom_output.name, "custom.pdf")

if __name__ == '__main__':
    unittest.main()