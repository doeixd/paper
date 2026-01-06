Summary:
- Hardened `scripts/verify-references.ts` so auto-correction only runs when both the target fragment and replacement text are known.
- Added runtime logging to surface skipped corrections when data is incomplete.

Reasoning:
- The fatal error stemmed from corrections lacking an `original` field. Optional typing and guards prevent undefined values from reaching `escapeRegex`.
- Helper logic now falls back to parsed fields and declines replacements that would otherwise guess at missing text, keeping changes conservative per the STYLE_GUIDE's resilience priority.

Validation:
- Script execution not re-run in this read-only session. Recommend `bun run scripts/verify-references.ts --dry-run --verbose` to confirm graceful handling of partial corrections.
