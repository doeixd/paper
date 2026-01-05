# Citation Extractor Script

Enhanced Python script to extract and verify citations in academic papers. Run commands from the repository root so every invocation prefixes the path with `scripts/`.

## Features

- **Dual Citation Detection**:
  - Parenthetical citations: `(Author 2020)`, `(Author et al. 2020, p. 45)`
  - In-prose citations: `Goldman (1979)`, `Acemoglu and Robinson (2012)`

- **Reference Matching**: Automatically looks up citations in `references.md`

- **Context Extraction**: Shows 3 lines before and after each citation

- **Flexible Output**: Command-line options for file filtering and custom output

- **Organized Results**: Groups citations by file with clear formatting

- **🆕 Reference File Generation**: Automatically generates a filtered `references.md` file containing ONLY the references cited in your paper (perfect for submission-ready reference lists)

## Usage

### Basic Usage

```bash
# Scan all .md files in directory
python scripts/citation_extractor.py

# Scan specific file
python scripts/citation_extractor.py final.md

# Custom output file
python scripts/citation_extractor.py -o my_citations.txt

# Scan specific file with custom output
python scripts/citation_extractor.py final.md -o final_cites.txt
```

### Command-Line Options

```bash
python scripts/citation_extractor.py [files...] [options]

Arguments:
  files                   Specific .md files to scan (optional)

Options:
  -o, --output FILE       Output file name (default: citations_found.txt)
  -r, --generate-references FILE   Generate filtered references.md with only cited refs
  -a, --append            Append to output instead of overwriting
  -q, --quiet             Suppress progress messages
  -h, --help              Show help message
```

### Examples

```bash
# Check only the main paper
python scripts/citation_extractor.py final.md -o final_check.txt

# 🆕 Generate submission-ready references file
python scripts/citation_extractor.py final.md -r final_references.md

# 🆕 Generate references quietly (no console output)
python scripts/citation_extractor.py final.md -r final_refs.md -q

# Scan multiple files
python scripts/citation_extractor.py final.md paper.md -o combined.txt

# Append results to existing file
python scripts/citation_extractor.py final.md -a

# Silent mode (no console output)
python scripts/citation_extractor.py -q
```

### Reference File Generation (New Feature!)

The `-r` or `--generate-references` option creates a new references file containing ONLY the citations actually used in your paper:

```bash
python scripts/citation_extractor.py final.md -r final_references.md
```

**What it does:**
1. Scans your paper for all citations
2. Looks up each citation in your master `references.md`
3. Generates a new file with only the cited references
4. Sorts them alphabetically
5. Adds metadata comments (source file, date, count)
6. Lists any missing references as comments

**Use cases:**
- Creating submission-ready reference lists (no unused refs!)
- Splitting papers and keeping references separate
- Verifying all citations have corresponding references
- Cleaning up after merging/editing

**Example output:**
```markdown
# References

<!-- Generated from: final.md -->
<!-- Date: 2025-10-07 08:07:55 -->
<!-- Total references: 32 -->

Acemoglu, Daron, and James A. Robinson. 2012. *Why Nations Fail...

[... 32 references used in final.md ...]

<!-- MISSING REFERENCES (Not found in references.md) -->
<!-- Please add these to references.md: -->
<!-- Author (2020) -->
```

## Output Format

The script generates a detailed report showing:

1. **Header**: Timestamp, files scanned, citation counts
2. **For each file**:
   - Citation type (PARENTHETICAL or IN-PROSE)
   - Line number
   - Full citation text
   - Context (surrounding text)
   - Matched reference from references.md
   - "NOT FOUND" warning if no match

Example output:
```
Citation 1 [IN-PROSE]:
Line: 142
Citation: Goldman (1979)

Context:
Following naturalized epistemology (Goldman 1979; Kitcher 1993),
this framework shifts from private psychological states to public,
functional structures.

Reference:
Goldman, Alvin I. 1979. "What Is Justified Belief?" In *Justification
and Knowledge: New Studies in Epistemology*, edited by George S. Pappas,
1–23. Dordrecht: D. Reidel. https://doi.org/10.1007/978-94-009-9493-5_1.
------------------------------------------------------------
```

## Citation Patterns Detected

### Parenthetical Citations
- `(Author 2020)`
- `(Author and Author2 2020)`
- `(Author et al. 2020)`
- `(Author 2020, 45)` - with page numbers
- `(Author 2020, p. 45-67)` - with page ranges
- `(Author 2020a)` - with letter suffixes

### In-Prose Citations
- `Goldman (1979)` - single author
- `Acemoglu and Robinson (2012)` - two authors
- `Sevilla et al. (2022)` - three or more authors
- `Author & Author2 (2020)` - ampersand format

## Reference Matching

The script uses intelligent matching to handle:
- Primary author vs. full author names
- "et al." citations
- "and" vs. "&" variations
- Multiple citation formats for the same source

## Requirements

- Python 3.6+
- Standard library only (no external dependencies)
- `references.md` file in the same directory

## Notes

- The script excludes `references.md` and files starting with `citations_` from scanning
- Reference list entries are automatically skipped when detecting in-prose citations
- Multiple citation formats are tried when matching to references.md
- Context extraction provides 3 lines before and after each citation

## Troubleshooting

**"Reference: NOT FOUND"** warnings indicate:
- Citation doesn't match any entry in references.md
- Author name format mismatch
- Year mismatch
- Missing reference entry

To fix:
1. Check spelling of author name in citation
2. Verify year matches references.md
3. Add missing reference to references.md
4. Check for "et al." formatting issues
