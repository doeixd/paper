## Summary of edits

- Added `cleanup-cli.ts`, a Bun-based cleanup utility with configurable profiles, category-aware globbing, backup retention policies, cache strategies, git safeguards, JSON plan export, and optional history rewriting.
- Wrote `cleanup-cli.md` plus a README section explaining usage, presets, and integration guidance.
- Created automated tests under `Tests/cleanup_cli/cleanup_cli.test.ts` covering category detection, backup retention buckets, and cache truncation behavior.
- Documented the work here per workflow requirements.

## Rationale

- A dedicated CLI lets us reuse a single, flag-driven cleanup process instead of ad-hoc scripts, which reduces the odds of deleting important artefacts or missing hidden caches/backups.
- Explicit documentation makes the tool self-serve for collaborators and clarifies the safety defaults (dry-run, git commit snapshots, retention rules).
- Automated tests harden the CLI so future refactors keep respecting retention rules and cache-handling promises before it touches real data.
