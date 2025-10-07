# Enhanced Citation Matching and Reference Strategies

## Summary of Changes

This update significantly improves the citation matching and reference filtering system in the release script, making it highly customizable and robust.

## Key Improvements

### 1. Configurable Reference Strategies
Added three distinct strategies for handling references:

- **filter** (default): Include only references that are actually cited in the paper
- **merge**: Include all references from `references.md`, marking which ones are cited
- **keep**: Preserve the existing references section unchanged

### 2. Enhanced Citation Matching
- **Fuzzy matching**: Approximate matching for citations that don't match exactly
- **Case sensitivity control**: Option to make author matching case-sensitive or not
- **Strict vs flexible matching**: Choose between requiring exact matches or allowing approximations
- **Better "et al." handling**: Improved recognition of "et al." citations
- **Multi-author support**: Better handling of citations with multiple authors

### 3. Configuration Options
Added comprehensive configuration in `release.py`:

```json
{
  "citations": {
    "strategy": "filter",
    "strict_matching": true,
    "case_sensitive": false,
    "fuzzy_matching": true,
    "include_missing": false
  }
}
```

### 4. Command-Line Support
Added `--citation-strategy` option to override config:
- `python release.py paper.md --citation-strategy merge`
- `python release.py paper.md --citation-strategy keep`

### 5. Improved Error Handling
- Better validation of citation configurations
- More informative error messages for missing citations
- Graceful handling of edge cases in citation parsing

### 6. Consistent Header Formatting
Ensured all reference sections use H2 headers (`## References`) consistently across all strategies.

## Technical Details

### Files Modified
- `release.py`: Added citation configuration, validation, and command-line options
- `paper_converter.py`: Enhanced citation matching functions and added strategy implementations

### New Functions Added
- `fuzzy_match_citation()`: Performs approximate citation matching
- `generate_filtered_references_only()`: Filter strategy implementation
- `generate_merged_references()`: Merge strategy implementation
- `generate_keep_references()`: Keep strategy implementation

### Backward Compatibility
All changes are backward compatible. Existing configurations will continue to work with the default "filter" strategy.

## Testing
All strategies tested successfully:
- ✅ Filter strategy: Includes only cited references
- ✅ Merge strategy: Includes all references with cited markings
- ✅ Keep strategy: Preserves existing references section

## Usage Examples

```bash
# Use filter strategy (default)
python release.py paper.md

# Include all references
python release.py paper.md --citation-strategy merge

# Keep existing references
python release.py paper.md --citation-strategy keep

# Dry run to preview
python release.py paper.md --dry-run --citation-strategy merge
```

## Impact
This enhancement provides much more flexibility in how academic papers handle references, allowing authors to choose the most appropriate strategy for their publication needs while maintaining robust citation matching capabilities.