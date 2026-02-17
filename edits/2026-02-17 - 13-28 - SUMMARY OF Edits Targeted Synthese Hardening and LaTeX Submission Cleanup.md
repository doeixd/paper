Implemented a targeted hardening pass on the authoritative LaTeX manuscript `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex` and submission wrapper workflow.

What changed:

1) Submission-readiness LaTeX fixes
- Added `\backmatter` before end matter.
- Added `\section*{Acknowledgements}` with blind-review-safe placeholder text.
- Added `\section*{Declarations}` with:
  - competing interests statement,
  - data availability statement.
- Removed Pandoc list artifacts from the main body:
  - all `\def\labelenumi{...}` overrides,
  - all `\tightlist` lines.

Rationale:
- Aligns the manuscript with Springer/Synthese expectations while keeping anonymous-review compliance.
- Removes formatting noise that could distract reviewers or produce non-template spacing behavior.

2) Targeted content integration from MD without expansion drift
- Added a concise composition-framing paragraph in Section 2 (citing van Inwagen) to connect closure claims to the Special Composition Question without turning the paper into a full mereology project.
- Strengthened the distributed illustration with a compact organism-regime paragraph, preserving the paper's constrained realism framing.
- Strengthened the memory-bearing systems reply with concrete examples (immune exposure history; institutional path dependence) while preserving the criterion's non-Markov generality.
- Added a short eliminativism-distancing clarification in the conclusion to prevent common misclassification by reviewers.
- Tightened the Ando-Simon sentence for readability and linear argumentative flow.

Rationale:
- Integrated only high-value MD material that closes predictable reviewer attack lines (composition challenge, abstraction charge, Markov-overrestriction concern, eliminativist misread) while avoiding manuscript bloat.
- Kept additions scoped and criterion-indexed to avoid reopening permissiveness or overclaim vulnerabilities.

3) Reference updates tied to new content
- Added `van Inwagen, P. (1990). Material beings.` to references.
- Reordered entries to preserve alphabetical flow (S -> van Inwagen -> W).

4) Wrapper/submission workflow
- Kept wrapper build file intact for local workflow.
- Generated a single-file submission variant with inlined body:
  - `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex`

Build verification:
- Successfully compiled wrapper manuscript (`real-patterns-need-closure-SYNTHESE-sn.tex`).
- Successfully compiled single-file submission manuscript (`real-patterns-need-closure-SYNTHESE-sn-submission.tex`).
- No fatal LaTeX errors; only non-fatal underfull box warnings.

Quality check against project standards:
- Preserved qualified-claim posture and downgrade discipline.
- Avoided pseudo-quantification and avoided introducing unnecessary new named concepts.
- Kept prose in measured academic tone and maintained criterion-first argumentative flow.
