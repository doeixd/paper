## Summary of edits

- Extended `cleanup-cli.ts` to recognize `.cache/reference-verification`, added `--reference-cache-mode` with prune/preserve/clear semantics, and wired pruning to the same TTL rules (CrossRef 30d, arXiv 90d, etc.) used by `verify-references.ts`. The CLI now skips truncating that directory unless `--reference-cache-mode clear` is set, and it reports/prunes expired entries separately.
- Updated `cleanup-cli.md` and the README to document the new flag and how it works with the reference verifier cache.
- Added a regression test verifying that stale cache entries are pruned while fresh ones remain untouched.

## Rationale

- The reference verifier relies on keeping fresh cache entries and a `.gitkeep`; blindly deleting `.cache/reference-verification` slowed every run and risked removing useful responses. Dedicated handling keeps the workflow fast while still allowing a one-flag nuke when necessary.
- Documentation changes make the option discoverable for collaborators and encode the TTL policy in prose.
- Automated coverage ensures we do not accidentally resume deleting the entire cache when refactoring the CLI.
