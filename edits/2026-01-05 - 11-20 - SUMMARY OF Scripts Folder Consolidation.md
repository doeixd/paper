# Scripts Folder Consolidation Summary

## Summary of Changes
- Relocated all top-level Python and TypeScript tooling (citation extractor, paper converter, pdf assembler, release pipeline, reference organizer, cleanup CLI, assembly utility, verify-references, and associated docs/tests) into a dedicated scripts/ directory to keep the root focused on manuscript files.
- Updated every helper script's built-in usage text, the accompanying READMEs, and the repository-level instructions (CLAUDE.md and README.md) so they reference the new scripts/ paths and reflect the recommended invocation syntax.
- Adjusted the references test harness to call the organizer by absolute path, preventing failures caused by running tests from the repo root after the relocation.

## Rationale
- Centralizing the tooling simplifies discovery, prevents accidental deletion, and makes user instructions internally consistent; aligning docs and usage strings ensures no one calls outdated paths and avoids reviewer confusion during release prep.
- Updating the CLAUDE instructions keeps future assistants from wandering the tree or relying on stale commands, and the edits log preserves traceability for why the re-org happened.
