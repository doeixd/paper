# PowerShell Script Consolidation

## Summary of Changes
- Moved 	ransform-paper.ps1 into scripts/ so every automation entry point now lives under a single tooling directory.
- Added parameter support (-InputFile, -DryRun), path validation, and success messaging to the transformer so it can run against arbitrary markdown files without editing the script body.
- Documented the new workflow in CLAUDE.md so future contributors know how to invoke the transformer safely from the repo root.
- Tested the transformer on a disposable copy of Computational-Closure-and-the-Architecture-of-Mind.md to confirm the rewritten headers and numbering logic still work after the move.

## Rationale
- Consolidating the PowerShell tooling prevents future drift between languages and keeps CLAUDE instructions authoritative.
- Parameterizing the script enables non-destructive dry runs, makes targeted testing possible, and removes the need for hard-coded absolute paths in user workflows.
