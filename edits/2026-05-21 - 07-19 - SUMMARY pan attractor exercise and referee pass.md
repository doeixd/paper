Summary of edits:

- Reviewed the paper against `pan/AI smells.txt` for signposting, announcement sentences, correction rhythms, negation overuse, repeated phrasing, overly tidy closers, and generic academic transitions.
- Completed the attractor exercise from `AI_ATTRACTOR_EDITING_METHOD.md` in `pan/temp-attractor-exercise-2026-05-21.md`, including target passages, nearby rephrasings, named attractor states, and reviewer-style vulnerability notes.
- Made small manuscript edits in `pan/overdrawing-on-experience-mainbody.tex` based on that exercise:
  - changed a self-evaluating lead-in before the numbered argument;
  - removed an announcing sentence in the pure-awareness objection/reply;
  - rewrote a "The worry is that" construction;
  - recast the combination-priority sentence to avoid formulaic signposting;
  - replaced a "the question is" sentence in the temporal-grain discussion;
  - replaced the tidy final maxim "earned, not inherited" with a plainer publication-style close.
- Preserved the load-bearing reviewer defenses: target precision, quality/role distinction, first-person-motivated scope, pure-awareness private/public distinction, combination-problem bracketing, and the distinction between phenomenal existence and phenomenal structure.

Verification:

- Ran targeted phrase scans for the specific AI-smell patterns flagged in the exercise.
- Ran `git diff --check` on the manuscript and exercise file.
- Rebuilt the Springer PDF with `pdflatex -> bibtex -> pdflatex -> pdflatex`.
- Checked the LaTeX log for undefined citations, undefined references, rerun warnings, and natbib warnings. None were reported.
- Copied the rebuilt PDF to `pan/overdrawing-on-experience-sn.pdf`.
