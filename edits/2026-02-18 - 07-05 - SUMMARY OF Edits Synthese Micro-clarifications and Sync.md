## Scope

This pass implemented targeted, low-risk refinements in the Synthese LaTeX sources for `real-patterns-need-closure`, aimed at strengthening reviewer-facing resilience without changing the paper's architecture or adding new empirical commitments.

Files edited:

- `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
- `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex`

## What Changed

1. **Regime-circularity non-convergence handling (§2.4)**

- Added a sentence specifying what happens if reflective-equilibrium iteration fails to stabilize across nearby defensible starting specifications.
- New handling: treat verdict as **indeterminate for that regime** rather than forcing a robust conclusion.

Why this helps:

- It closes a meta-level underdetermination vulnerability and makes the framework's downgrade discipline explicit in hard cases.

2. **Predictive vs interventional asymmetry clarification (§2.8 area)**

- Added concise language that predictive sufficiency can indicate compression, but interventional stability identifies difference-makers by testing whether macro-transition structure survives admissible manipulation.

Why this helps:

- It makes the interventionist commitment explicit as ontologically load-bearing, rather than leaving the asymmetry implicit in citations alone.

3. **Viability-floor anchor governance (§4.2)**

- Added one sentence stating that baseline model class and gain metric must be fixed upstream with regime/admissibility choices, and that post hoc changes trigger restart and disclosure.

Why this helps:

- It prevents discretionary baseline shifts and aligns this subsection with the paper's broader anti-backfitting protocol.

4. **Cross-file synchronization and prose consistency**

- Mirrored all above edits in both primary prose (`mainbody`) and inlined blinded submission source (`sn-submission`).
- Harmonized one sentence-level phrasing difference in §5 to keep both sources aligned.

Why this helps:

- Reduces submission risk from drift between source-of-truth and upload source.

## Build and Validation

- Ran full Synthese build pipeline in `latex/springer-sn-template/sn-article-template`:
  - `pdflatex -interaction=nonstopmode -halt-on-error real-patterns-need-closure-SYNTHESE-sn.tex`
  - `bibtex real-patterns-need-closure-SYNTHESE-sn`
  - `pdflatex` (twice)
- Result: successful build, 29-page PDF output, no fatal errors.

## Editorial Rationale

This pass prioritized defensibility over novelty:

- No pseudo-quantification introduced.
- No new jargon burdens added.
- Existing qualifications and downgrade logic were preserved and made more explicit where reviewers are most likely to press.
- Changes are intentionally local, to avoid opening new argumentative fronts late in submission prep.
