#!/usr/bin/env python3
"""
Enhanced Citation Extractor Script

This script scans markdown files for both parenthetical and in-prose citations,
extracts their context, and looks up corresponding references.

Usage:
    python citation_extractor.py                    # Scan all .md files
    python citation_extractor.py final.md          # Scan specific file
    python citation_extractor.py -o output.txt     # Custom output file
    python citation_extractor.py final.md -o citations.txt
"""

import os
import re
import argparse
from pathlib import Path
from datetime import datetime

def extract_citations_from_file(filepath, verbose=True):
    """Extract both parenthetical and in-prose citations from a file."""
    citations = []

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        if verbose:
            print(f"Error reading {filepath}: {e}")
        return citations

    lines = content.split('\n')

    # Pattern 1: Parenthetical citations like (Author Year) or (Author Year, page)
    parenthetical_pattern = r'\(([A-Za-z][A-Za-z\s,&\-\.]+?)\s+(\d{4})(?:[a-z])?(?:,\s*(?:p\.?\s*)?\d+(?:-\d+)?)?\)'

    # Pattern 2: In-prose citations like "Author (Year)" or "Author et al. (Year)"
    # Matches: Goldman (1979), Quine (1951), Acemoglu and Robinson (2012),
    #          Sevilla et al. (2022)
    in_prose_pattern = r'\b([A-Z][a-z]+(?:\s+(?:and|&)\s+[A-Z][a-z]+)?(?:\s+et\s+al\.?)?)\s+\((\d{4})(?:[a-z])?\)'

    for i, line in enumerate(lines):
        # Find parenthetical citations
        for match in re.finditer(parenthetical_pattern, line):
            citation = match.group(0)
            author = match.group(1).strip()
            year = match.group(2)

            # Extract context
            start_line = max(0, i - 3)
            end_line = min(len(lines), i + 4)
            context = '\n'.join(lines[start_line:end_line]).strip()

            citations.append({
                'citation': citation,
                'author': author,
                'year': year,
                'type': 'parenthetical',
                'context': context,
                'file': filepath.name,
                'line': i + 1
            })

        # Find in-prose citations
        for match in re.finditer(in_prose_pattern, line):
            # Get the full match including author name before parentheses
            full_match = match.group(0)
            author = match.group(1).strip()
            year = match.group(2)

            # Skip if this looks like it's part of a reference list entry
            # (reference entries have author at start of line followed by year)
            if i > 0 and re.match(r'^[A-Z][a-z]+.*\d{4}\.', line):
                continue

            # Extract context
            start_line = max(0, i - 3)
            end_line = min(len(lines), i + 4)
            context = '\n'.join(lines[start_line:end_line]).strip()

            citations.append({
                'citation': full_match,
                'author': author,
                'year': year,
                'type': 'in-prose',
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
        if not block.strip() or block.startswith('#'):
            continue

        lines = block.strip().split('\n')
        if not lines:
            continue

        first_line = lines[0].strip()

        # Match pattern like "Author. Year." or "Author1, Author2. Year."
        match = re.search(r'^(.+?)\s+(\d{4})\.', first_line)
        if match:
            full_author = match.group(1).strip()
            year = match.group(2)

            # Extract primary author (last name before first comma)
            primary_author = full_author.split(',')[0].strip()

            # Handle "Author1, Author2" format
            # Also handle "Author et al." format
            if ',' in full_author:
                parts = full_author.split(',')
                if len(parts) >= 2:
                    # Check if second part is another author (not initials)
                    second_part = parts[1].strip()
                    if ' and ' in second_part or ' & ' in second_part:
                        # "Author1, Author2 and Author3" -> get Author1
                        pass
                    elif not re.match(r'^[A-Z]\.\s*[A-Z]\.?', second_part):
                        # Second author exists
                        second_author = second_part.split()[0] if second_part else ''
                        if second_author:
                            # Store as "Author1 and Author2"
                            key_and = f"{primary_author} and {second_author}"
                            references[key_and] = block.strip()
                            references[f"{key_and} {year}"] = block.strip()

            # Store multiple possible keys
            references[primary_author] = block.strip()
            references[f"{primary_author} {year}"] = block.strip()
            references[full_author] = block.strip()
            references[f"{full_author} {year}"] = block.strip()

            # Handle "et al." citations
            references[f"{primary_author} et al"] = block.strip()
            references[f"{primary_author} et al. {year}"] = block.strip()

    return references

def match_citation_to_reference(author, year, references):
    """Try multiple strategies to match a citation to a reference."""
    # Try exact matches first
    possible_keys = [
        f"{author} {year}",
        author,
        f"{author.replace(' and ', ', ')} {year}",
        f"{author.replace(' & ', ', ')} {year}",
    ]

    # Handle "et al." by stripping it and trying primary author
    if 'et al' in author.lower():
        primary = author.split('et al')[0].strip()
        possible_keys.extend([
            f"{primary} et al. {year}",
            f"{primary} et al {year}",
            f"{primary} {year}",
            primary
        ])

    for key in possible_keys:
        if key in references:
            return references[key]

    return None

def main():
    """Main function to extract citations with command-line argument support."""
    parser = argparse.ArgumentParser(
        description='Extract citations from markdown files and match them to references.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python citation_extractor.py                    # Scan all .md files
  python citation_extractor.py final.md          # Scan specific file
  python citation_extractor.py -o output.txt     # Custom output file
  python citation_extractor.py final.md -o citations.txt
        """
    )

    parser.add_argument('files', nargs='*',
                       help='Specific markdown files to scan (default: all .md files)')
    parser.add_argument('-o', '--output', default='citations_found.txt',
                       help='Output file name (default: citations_found.txt)')
    parser.add_argument('-q', '--quiet', action='store_true',
                       help='Suppress progress messages')
    parser.add_argument('-a', '--append', action='store_true',
                       help='Append to output file instead of overwriting')

    args = parser.parse_args()

    # Determine which files to scan
    current_dir = Path('.')

    if args.files:
        # Scan specific files
        paper_files = [Path(f) for f in args.files if f.endswith('.md')]
        if not paper_files:
            print("Error: No valid .md files specified")
            return
    else:
        # Scan all .md files, excluding references and citations files
        paper_files = []
        for file in current_dir.glob('*.md'):
            if (file.name not in ['references.md'] and
                not file.name.startswith('citations_') and
                not file.is_dir()):
                paper_files.append(file)

    if not args.quiet:
        print(f"Found {len(paper_files)} paper file(s) to scan")
        for f in paper_files:
            print(f"  - {f.name}")

    # Load references
    references = load_references()
    if not args.quiet:
        print(f"\nLoaded {len(references)} reference entries")

    # Extract citations from all files
    all_citations = []
    for file in paper_files:
        if not args.quiet:
            print(f"\nScanning {file.name}...")
        citations = extract_citations_from_file(file, verbose=not args.quiet)
        all_citations.extend(citations)
        if not args.quiet:
            parenthetical = sum(1 for c in citations if c['type'] == 'parenthetical')
            in_prose = sum(1 for c in citations if c['type'] == 'in-prose')
            print(f"  Found {len(citations)} citations ({parenthetical} parenthetical, {in_prose} in-prose)")

    if not args.quiet:
        print(f"\n{'='*60}")
        print(f"Total citations found: {len(all_citations)}")
        total_parenthetical = sum(1 for c in all_citations if c['type'] == 'parenthetical')
        total_in_prose = sum(1 for c in all_citations if c['type'] == 'in-prose')
        print(f"  Parenthetical: {total_parenthetical}")
        print(f"  In-prose: {total_in_prose}")
        print(f"{'='*60}\n")

    # Write results to file
    mode = 'a' if args.append else 'w'

    with open(args.output, mode, encoding='utf-8') as f:
        f.write(f"\n{'='*80}\n")
        f.write(f"Citation Extraction Run - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"Files scanned: {', '.join(pf.name for pf in paper_files)}\n")
        f.write(f"Total citations: {len(all_citations)}\n")
        f.write(f"{'='*80}\n\n")

        # Group citations by file for better organization
        citations_by_file = {}
        for citation in all_citations:
            file_name = citation['file']
            if file_name not in citations_by_file:
                citations_by_file[file_name] = []
            citations_by_file[file_name].append(citation)

        for file_name in sorted(citations_by_file.keys()):
            f.write(f"\n{'#'*80}\n")
            f.write(f"FILE: {file_name}\n")
            f.write(f"{'#'*80}\n\n")

            file_citations = citations_by_file[file_name]

            for i, citation_data in enumerate(file_citations, 1):
                f.write(f"Citation {i} [{citation_data['type'].upper()}]:\n")
                f.write(f"Line: {citation_data['line']}\n")
                f.write(f"Citation: {citation_data['citation']}\n")
                f.write("\nContext:\n")
                f.write(f"{citation_data['context']}\n\n")

                # Look up reference
                ref = match_citation_to_reference(
                    citation_data['author'],
                    citation_data['year'],
                    references
                )

                if ref:
                    f.write("Reference:\n")
                    f.write(f"{ref}\n")
                else:
                    f.write(f"Reference: NOT FOUND for '{citation_data['author']} {citation_data['year']}'\n")

                f.write(f"{'-'*60}\n\n")

    if not args.quiet:
        print(f"Results {'appended to' if args.append else 'written to'} {args.output}")

if __name__ == '__main__':
    main()
