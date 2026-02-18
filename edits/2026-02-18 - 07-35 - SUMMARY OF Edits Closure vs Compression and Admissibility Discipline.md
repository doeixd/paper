## Scope

This revision makes conservative, reviewer-facing clarifications in the Synthese manuscript to sharpen the distinction between closure and compression, and to make admissibility and circularity safeguards more explicit without changing the paper's architecture.

Files edited:

- `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
- `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex`

## Source used

- Read and used the summary in `sources/Software in the Natural World.md` to align language with Rosas-style closure intuition (autonomy from substrate, closure as stronger than predictive sufficiency).

## What changed

1. **Closure vs compression made explicit with a minimal-pair reading (§2 formal illustration area)**

- Added a sentence clarifying that on a fixed sample trajectory, a gerrymandered partition can appear nearly as predictive if it carries repeated within-class bookkeeping.
- Added the contrast condition: under admissible perturbation, the closure-supporting partition retains transition autonomy, while the gerrymandered one does not.

Why this helps:

- It directly addresses the "closure is just prediction" worry by distinguishing fit from autonomy under intervention.

2. **Anti-gerrymandering claim sharpened (§2 machinery-limits discussion)**

- Expanded one sentence to specify the key failure mode: compression can be achieved by codings that effectively preserve hidden micro-identities.

Why this helps:

- It states the core philosophical contrast in one line and ties it to the paper's exclusion logic.

3. **Admissibility two-stage discipline stated explicitly (§2.4 area)**

- Added a compact two-stage formulation:
  - Stage 1: fix admissibility from independent physical constraints and established control practice.
  - Stage 2: evaluate closure only relative to that fixed class.

Why this helps:

- It reduces arbitrariness worries while preserving the paper's existing protocol structure.

4. **Circularity/convergence clarification tightened (§2.4 area)**

- Added one sentence clarifying what "stabilization" means: comparative ordering across independently specified candidate partitions remains stable under modest protocol variation, without presupposing one privileged grain.

Why this helps:

- It strengthens the anti-circularity defense without adding new methodology burdens.

## Validation

- Changes were mirrored in both the mainbody source and the inlined blinded submission source.
- Quick compile check of `real-patterns-need-closure-SYNTHESE-sn-submission.tex` succeeded (29 pages, no LaTeX errors).

## Editorial rationale

- Kept all edits local and non-disruptive.
- Avoided pseudo-quantification and avoided introducing new named machinery.
- Preserved the existing defensive qualifications and downgrade structure while improving logical salience at likely reviewer pressure points.
