# Summary of Citation Extraction Script Creation

## Date and Time
2025-10-06 - 12-00

## Overview
Created a Python script (`citation_extractor.py`) to automatically scan all markdown files in the paper directory for in-text citations, extract their context, and look up the corresponding full references from `references.md`.

## Changes Made

### Script Functionality
- **File Scanning**: Scans all `.md` files in the current directory (excluding `references.md` and files starting with `citations_`)
- **Citation Detection**: Uses regex pattern to find citations in the format `(Author Year)` or `(Author Year, page)`
- **Context Extraction**: Extracts 3 lines before and after each citation for context
- **Reference Lookup**: Matches citations to full references in `references.md` using multiple key formats to handle variations
- **Output**: Appends results to `citations_found.txt` with structured formatting

### Technical Details
- **Citation Pattern**: `r'\(([A-Za-z][A-Za-z\s,&\-]+)\s+(\d{4})(?:,\s*\d+)?\)'`
- **Reference Parsing**: Uses `r'(.+?)\s+(\d{4})\.'` to extract author and year from reference entries
- **Key Matching**: Stores multiple variations of author-year keys to handle different citation formats
- **Total Citations Found**: 228 citations across 25 paper files
- **References Loaded**: 252 reference entries (with multiple key variations)

### Files Processed
- **Paper Files Scanned**: 25 markdown files containing various versions of the paper
- **Citations Extracted**: 228 total in-text citations
- **References Matched**: Successfully matches citations to full Chicago-style references

### Output Format
Each citation entry includes:
- File location and line number
- Full citation text
- Contextual text (surrounding lines)
- Complete reference entry from references.md

## Rationale
This script provides a comprehensive audit of all citations used throughout the various paper versions, ensuring:
- All in-text citations have corresponding references
- Citations are properly formatted
- Context helps verify appropriate usage
- Systematic tracking of scholarly references

## Next Steps
The script can be run periodically to verify citation integrity as the paper evolves, and the output file serves as a complete citation index for the manuscript.