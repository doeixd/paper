# Fixed Duplicate References Bug

## Problem Identified
The merge strategy was generating hundreds of duplicate references in the output PDF. The issue was in the `generate_merged_references()` function where `list(references.values())` was used to get all references.

## Root Cause
The `load_references()` function creates multiple dictionary entries for each reference to handle different citation formats:
- Primary author
- Primary author + year
- Full author name
- Full author + year
- "et al." variations

All these keys point to the same reference text, so `references.values()` contained many duplicates.

## Solution
Changed line 292 in `paper_converter.py`:
```python
# Before (buggy):
all_refs = list(references.values())

# After (fixed):
all_refs = list(set(references.values()))
```

This deduplicates the references by converting to a set before creating the list.

## Results
- **Before**: 661 duplicate references generated
- **After**: 99 unique references generated
- File size reduced from 246KB to 205KB
- Processing time improved slightly (0.8s → 0.6s)

## Testing
Verified the fix works correctly:
- Merge strategy now produces correct number of unique references
- Cited references are still properly marked with `<!-- CITED -->` comments
- Missing citations are still included as comments when configured
- No functionality lost, only duplicates removed

The bug fix ensures clean, professional reference lists without redundant entries.