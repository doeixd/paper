# Justfile Integration and Documentation Refresh

## Summary of Changes
- Added a project-wide justfile that wraps every script under scripts/ with well-documented recipes (citations, conversions, releases, reference hygiene, cleanup, appendix transformation, etc.).
- Each recipe mirrors the old CLAUDE.md usage tables, adds toggles for the most common flags, and centralizes defaults so automation invocations remain consistent across contributors.
- Replaced the verbose "Available Tools and Scripts" section in CLAUDE.md with a concise pointer to the new just interface.

## Rationale
- The justfile removes guesswork when invoking tooling, keeps command syntax in one place, and gives us flexible defaults for day-to-day actions like just release-final or just verify-refs dry_run=true.
- Consolidating documentation avoids drift between CLAUDE.md and the actual scripts; future readers only need just help for authoritative guidance.
