Cleanup Summary
===============

- Removed transient directories (`__pycache__`, `.cache`, `Tests`) that only stored interpreter caches or throwaway harness output.
- Deleted build/test byproducts (logs, `_combined` Typst/TeX files, `.aux` artifacts, temporary HTML) to keep version control focused on source content.
- Cleared all citation/debug/verification text files (checks, temporary filtered references, citation dumps, tmp/test variants) plus redundant reference/test backups to avoid confusing stale diagnostics with live sources.
- Left deliberate code (e.g., `test_references_organizer.py`, `random/test_release.py`) untouched because those scripts are part of the tooling rather than disposable results.
