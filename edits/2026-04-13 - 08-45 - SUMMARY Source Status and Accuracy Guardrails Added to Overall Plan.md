Summary:

Added a source-status and source-discipline section to `overall.md.txt` so the main rainforest-reframing plan now records which recent interlocutor sources are held locally, where they are stored, which ones have searchable text, what remains missing, and how cautiously each source should be used in ongoing revisions.

What changed:

- Updated `latex/springer-sn-template/sn-article-template/claude-notes/overall.md.txt`.
- Added a new `Source Status for This Revision` section.
- Recorded the local status for:
  - Franklin and Robertson
  - Ladyman and Lorenzetti
  - Rosas et al.
  - Andersen
  - Jiang 2024
  - Jiang 2025
  - Wallace
  - Ladyman's chapter preprint
  - Millhouse
- Noted the main remaining gap:
  - the full edited volume `Dennett's Real Patterns in Science and Nature` is represented bibliographically but does not appear to be stored locally as a full text.
- Added source-use guardrails so later revisions stay accurate about:
  - what Franklin and Robertson's criterion has actually been shown to do
  - how strongly the paper should connect closure to effective OSR
  - the division of labor between Rosas's formal machinery and this paper's philosophical interpretation
  - the difference between direct textual support and our own extrapolation

Why:

- The current revision plan relies on a cluster of recent interlocutors, so source discipline is now part of the paper's argumentative integrity rather than just background housekeeping.
- Without an explicit source-status note, it would be too easy to blur together:
  - locally held text
  - bibliographic metadata only
  - preprint versus final-publication status
  - direct textual support versus philosophical extension
- Adding this to `overall.md.txt` keeps the strategic plan aligned with the actual research base on disk.

Checks performed:

- Cross-checked `sources/`, `sources/text-converted/`, and the Synthese `.bib` file.
- Preserved the known pagination caveat for the Jiang 2025 DOCX conversion.
- Kept the section procedural and accuracy-focused rather than turning it into another argumentative layer.
