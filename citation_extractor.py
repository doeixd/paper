#!/usr/bin/env python3
"""
Citation Extractor Script

This script scans all markdown files in the current directory (excluding references.md and edits/ directory)
for in-text citations, extracts their context, and looks up the corresponding references.
Results are appended to citations_found.txt
"""

import os
import re
from pathlib import Path

def extract_citations_from_file(filepath):
    """Extract citations from a single file and return them with context."""
    citations = []

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return citations

    # Pattern for citations like (Author Year) or (Author Year, page)
    citation_pattern = r'\(([A-Za-z][A-Za-z\s,&\-]+)\s+(\d{4})(?:,\s*\d+)?\)'

    # Split content into lines for context extraction
    lines = content.split('\n')

    for i, line in enumerate(lines):
        matches = re.finditer(citation_pattern, line)
        for match in matches:
            citation = match.group(0)
            author_year = f"({match.group(1)} {match.group(2)})"

            # Extract context (3 lines before and after)
            start_line = max(0, i - 3)
            end_line = min(len(lines), i + 4)
            context_lines = lines[start_line:end_line]
            context = '\n'.join(context_lines).strip()

            citations.append({
                'citation': citation,
                'author_year': author_year,
                'context': context,
                'file': filepath.name,
                'line': i + 1
            })

    return citations

def load_references():
    """Load references from references.md into a dictionary."""
    references = {}

    try:
        with open('references.md', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading references.md: {e}")
        return references

    # Split into individual references
    ref_blocks = re.split(r'\n\n(?=[A-Z])', content)

    for block in ref_blocks:
        if not block.strip():
            continue

        # Extract author and year from the first line
        lines = block.strip().split('\n')
        if not lines:
            continue

        first_line = lines[0].strip()
        # Match pattern like "Author. Year." or "Author1, Author2. Year."
        # Look for the pattern: author stuff, then year, then dot
        match = re.search(r'(.+?)\s+(\d{4})\.', first_line)
        if match:
            full_author = match.group(1).strip()
            year = match.group(2)

            # Extract just the primary author name (before comma if present)
            primary_author = full_author.split(',')[0].strip()

            # Store multiple possible keys to handle different citation formats
            references[f"({primary_author} {year})"] = block.strip()
            references[f"({full_author} {year})"] = block.strip()
            # Also store without parentheses for easier matching
            references[f"{primary_author} {year}"] = block.strip()
            references[f"{full_author} {year}"] = block.strip()


    return references

def main():
    """Main function to extract citations from all paper files."""
    # Get all .md files in current directory, excluding references.md and edits/
    current_dir = Path('.')
    paper_files = []

    for file in current_dir.glob('*.md'):
        if file.name not in ['references.md'] and not file.name.startswith('citations_'):
            paper_files.append(file)

    print(f"Found {len(paper_files)} paper files to scan")

    # Load references
    references = load_references()
    print(f"Loaded {len(references)} references")

    # Extract citations from all files
    all_citations = []
    for file in paper_files:
        print(f"Scanning {file.name}...")
        citations = extract_citations_from_file(file)
        all_citations.extend(citations)
        print(f"  Found {len(citations)} citations")

    print(f"\nTotal citations found: {len(all_citations)}")

    # Write results to file
    output_file = 'citations_found.txt'

    with open(output_file, 'a', encoding='utf-8') as f:
        f.write(f"\n{'='*80}\n")
        f.write(f"Citation Extraction Run - {len(all_citations)} citations found\n")
        f.write(f"{'='*80}\n\n")

        for i, citation_data in enumerate(all_citations, 1):
            f.write(f"Citation {i}:\n")
            f.write(f"File: {citation_data['file']}\n")
            f.write(f"Line: {citation_data['line']}\n")
            f.write(f"Citation: {citation_data['citation']}\n")
            f.write("Context:\n")
            f.write(f"{citation_data['context']}\n")

            # Look up reference
            ref_key = citation_data['author_year']
            if ref_key in references:
                f.write("Reference:\n")
                f.write(f"{references[ref_key]}\n")
            else:
                f.write("Reference: NOT FOUND\n")

            f.write(f"{'-'*60}\n\n")

    print(f"Results appended to {output_file}")

if __name__ == '__main__':
    main()