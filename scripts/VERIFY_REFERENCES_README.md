# Reference Verification Script

Automatically verify and correct academic references in `references.md` using multiple free APIs (CrossRef, OpenLibrary, arXiv) with Claude CLI as a research fallback. Execute it from the repository root as `bun run scripts/verify-references.ts ...` so it can find the shared data files.

## Quick Start

```bash
# Preview what would change (recommended first run)
bun run scripts/verify-references.ts --dry-run --skip-claude

# Actually verify and correct references
bun run scripts/verify-references.ts

# Fast verification without Claude CLI fallback
bun run scripts/verify-references.ts --skip-claude
```

## Features

- **Multi-source verification**: CrossRef (DOI), OpenLibrary (ISBN), arXiv, web validation, Claude CLI
- **Automatic correction**: Fixes errors in author names, years, titles with confidence scoring
- **Smart fallback**: Uses verification waterfall - tries most reliable sources first
- **Safe updates**: Creates timestamped backups before modifying files
- **Detailed reporting**: Console progress + unverifiable references report

## How It Works

### Verification Waterfall

The script tries each verifier in order until one succeeds:

1. **CrossRef** (DOI verification) - confidence: 0.95
   - Most reliable for journal articles
   - Validates DOIs and metadata

2. **arXiv** (preprint verification) - confidence: 0.90
   - Validates arXiv IDs
   - Returns correct titles and years

3. **OpenLibrary** (ISBN verification) - confidence: 0.85
   - Validates book ISBNs
   - Returns metadata (note: sometimes has wrong publication years)

4. **Web Search** (URL validation) - confidence: 0.70
   - Checks if URLs are accessible
   - Validates HTTP/HTTPS links

5. **Claude CLI** (intelligent research) - confidence: 0.40-0.80
   - Uses Claude AI with web search and browsing tools
   - Searches academic databases, Google Scholar, and publisher websites
   - Handles complex or ambiguous cases with structured JSON output
   - **Note**: Requires Claude CLI installation with tools enabled, use `--skip-claude` to disable

### Confidence Threshold

- Default threshold: **0.7**
- Only corrections above threshold are auto-applied
- Lower confidence corrections are flagged in reports

## Usage

### Basic Commands

```bash
# Standard verification with all features
bun run scripts/verify-references.ts

# Dry run (preview changes without modifying files)
bun run scripts/verify-references.ts --dry-run

# Skip Claude CLI (faster, no API costs)
bun run scripts/verify-references.ts --skip-claude

# Custom input/output
bun run scripts/verify-references.ts -i custom-refs.md -o corrected-refs.md

# Higher confidence threshold (more conservative)
bun run scripts/verify-references.ts --confidence-threshold 0.85
```

### All Options

```
-i, --input <file>              Input file (default: ./references.md)
-o, --output <file>             Output file (default: overwrites input)
-b, --[no-]backup               Create backup (default: true)
--backup-dir <dir>              Backup directory (default: ./backups)
--confidence-threshold <num>    Min confidence for auto-correction (default: 0.7)
--report-path <file>            Unverifiable refs report (default: ./unverifiable-references.md)
--dry-run                       Preview changes only
--skip-claude                   Skip Claude CLI fallback
-v, --verbose                   Verbose logging
-h, --help                      Show help
```

## Output

### Console Output

```
[1/383] ✓ Acemoglu 2012 (openlibrary)
[2/383] ✎ Anderson 1996 (crossref)
  └─ title: CrossRef has different title
[3/383] ✗ Unknown 2025 (claude-cli)
```

**Status Symbols:**
- ✓ = Verified (metadata matches)
- ✎ = Corrected (found discrepancies, corrections suggested)
- ✗ = Failed (could not verify)
- ⊘ = Skipped (no identifiers to verify)

### Generated Files

1. **Backup** (if enabled): `./backups/references.md.{timestamp}.bak`
2. **Unverifiable report**: `./unverifiable-references.md`
   - Lists all failed verifications
   - Includes original text and reasons
   - Provides manual review checklist

## Supported Reference Types

The script can parse and verify:

- **Journal articles** with DOI
- **Books** with ISBN
- **arXiv preprints**
- **Book chapters**
- **Web resources** (PhilPapers, SSRN, OSF, etc.)
- **Generic preprints**

## API Rate Limits

The script automatically rate-limits API calls:

- CrossRef: 10 requests/second
- OpenLibrary: 2 requests/second
- arXiv: 1 request/3 seconds
- Web validation: 1 request/second
- Claude CLI: 1 request/5 seconds

**Estimated runtime for 383 references:** 15-30 minutes

## Common Issues

### OpenLibrary Year Discrepancies

OpenLibrary sometimes returns incorrect publication years (e.g., 2012 → 2013). These are low-confidence corrections. Review the unverifiable references report before accepting.

### CrossRef Title Differences

CrossRef may return shorter titles (without subtitles). Example:
- Reference: "Statistical learning: From acquiring specific items to forming general rules"
- CrossRef: "Statistical Learning"

This is normal - CrossRef stores the main title separately from subtitles.

### Author Names Showing as "Unknown"

This occurs when the author parsing fails. The verification still works based on other metadata (DOI, ISBN, title). Check the unverifiable references report.

### Claude CLI Usage

Claude CLI provides intelligent research capabilities for references that cannot be verified through standard APIs. It uses Claude AI with built-in web search and browsing tools to:

- Search Google Scholar, academic databases, and publisher websites
- Visit specific URLs to verify reference details
- Cross-reference multiple sources for accuracy
- Return structured JSON results with confidence scores

**Requirements**: Claude CLI must be installed with tools enabled. The script uses `--print --output-format json --json-schema` for structured output validation.

Use `--skip-claude` to disable if you prefer faster execution without AI research.

## Recommended Workflow

1. **First run (preview)**:
   ```bash
   bun run scripts/verify-references.ts --dry-run --skip-claude
   ```
   Reviews what would change without modifying files or using Claude.

2. **Review dry-run output**:
   - Check suggested corrections
   - Review unverifiable references report
   - Decide if you want Claude CLI fallback

3. **Final run**:
   ```bash
   # Without Claude (faster, free)
   bun run scripts/verify-references.ts --skip-claude

   # With Claude (more comprehensive)
   bun run scripts/verify-references.ts
   ```

4. **Review changes**:
   - Check `references.md` for corrections
   - Review `unverifiable-references.md` for manual fixes
   - Backup is in `./backups/` if you need to revert

## Technical Details

### File Structure

The script is a single TypeScript file (`verify-references.ts`) with:
- Reference parser (Chicago-style citations)
- API verifiers (CrossRef, OpenLibrary, arXiv, web, Claude)
- Rate limiters
- Backup manager
- Console and file reporters
- CLI interface

### Correction Logic

Corrections are applied only when:
1. Verification confidence ≥ threshold (default 0.7)
2. Fuzzy matching detects meaningful differences
3. Authority hierarchy: CrossRef > arXiv > OpenLibrary > web > Claude

### Levenshtein Distance

Title and author matching uses Levenshtein distance with 5% tolerance to avoid false positives from minor typos or formatting differences.

## Examples

### Example 1: Successful Verification

```
Input:  Friston, Karl J. 2010. "The Free-Energy Principle: A Unified Brain Theory?"
        *Nature Reviews Neuroscience* 11 (2): 127–138. https://doi.org/10.1038/nrn2787.

Output: [1/1] ✓ Friston 2010 (crossref)
        All references verified successfully!
```

### Example 2: Correction Needed

```
Input:  Some Author. 2020. "Wrong Title." *Journal* 1(1): 1-10. https://doi.org/10.1234/wrong

Output: [1/1] ✎ Author 2020 (crossref)
          └─ title: CrossRef has different title
          └─ year: CrossRef has different year

        POTENTIAL CHANGES
        Line 3:
          title: "Wrong Title" → "Correct Title"
          Reason: CrossRef has different title
          year: "2020" → "2021"
          Reason: CrossRef has different year
```

### Example 3: Unverifiable

```
Input:  Unknown, Author. 2025. "Cannot Find This." *Fake Journal*.

Output: [1/1] ✗ Unknown 2025 (claude-cli)

        Unverifiable references report: ./unverifiable-references.md
        (Manual review required)
```

## Development

### Dependencies

- Bun runtime
- No npm packages required (uses Bun built-ins)

### Testing

```bash
# Test with sample file
bun run scripts/verify-references.ts -i test-refs.md --dry-run

# Test specific features
bun run scripts/verify-references.ts --help
```

## License

Part of the academic paper toolset. Use freely for academic work.

## Support

If you encounter issues:
1. Run with `--dry-run` first to preview
2. Check `unverifiable-references.md` for details
3. Use `--verbose` for debugging output
4. Review backups in `./backups/` to revert changes

For questions about specific references, consult the unverifiable references report which includes reasons for failures and suggested actions.
