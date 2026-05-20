# Pan Final Publication Polish

## Files changed

- `pan/overdrawing-on-experience-mainbody.tex`
- `pan/overdrawing-on-experience-sn.pdf`
- `pan/temp-attractor-pan-plan5-2026-05-20.md`

## Summary

This pass made small, targeted publication edits to the panpsychism paper after the attractor exercise and subsequent review for AI-style prose habits.

The main changes were:

- Reduced signposting and announcement language, especially phrases that sounded like the paper was announcing its own argumentative move.
- Reduced avoidable negation where the same point could be expressed positively as a boundary of warrant, a change in evidential status, or a theoretical burden.
- Preserved load-bearing negative claims where the argument requires them, especially in the numbered warrant argument, the pure-awareness dilemma, and the distinction between first-person acquaintance and theoretical metaphysical posits.
- Smoothed several contrastive formulations so the prose reads less like a repeated "not X but Y" pattern.
- Kept the central concessions intact: panpsychism remains a live metaphysical option, independent abductive arguments may succeed, pure-awareness reports deserve serious treatment, and the paper does not attempt to solve the hard problem.
- Preserved the specific target passages involving Strawson, Goff, Ramm, Roelofs, Mørch, Russellian monism, pure awareness, dreamless sleep, temporal grain, and phenomenal-concept strategies.

## Rationale

The goal was to make the paper more publication-ready without changing the argument's scope. The paper's strength depends on a precise distinction between what first-person experience warrants directly and what panpsychism must defend as theory. The revision therefore avoided removing caveats or defenses merely to make the prose smoother. Where negation remains, it usually marks a real philosophical limit rather than a stylistic tic.

## Validation

- Ran a final scan for signposting, announcement phrases, repeated negation patterns, and common AI-smell constructions.
- Ran `git diff --check` on the main LaTeX source.
- Built the paper with `pdflatex -> bibtex -> pdflatex -> pdflatex`.
- Scanned the LaTeX log for undefined citations and references.
- Copied the fresh PDF to `pan/overdrawing-on-experience-sn.pdf`.

The build completed successfully. The remaining LaTeX warnings are ordinary underfull/overfull box warnings and the local MiKTeX update notice.
