# Summary of edits: pan plan5 structural revision

Implemented the structural pass described in `pan/pan_plan5.md` for the panpsychism paper.

## Main changes

- Reorganized the manuscript from the older nine-section shape into the seven-section spine:
  Introduction, The Datum, The Constraint, The Abstraction Problem, The Russellian Vacancy, The Burden Shift, and Conclusion.
- Dissolved the former "Scope and Bracketing" section into the introduction, the datum section, the constraint section, the Russellian section, and the burden section.
- Folded the former warrant-transfer and named-author sections into the new Section 3, with separate subsections for the constraint, the hidden-posits argument, and applications to Strawson, Goff, M{\o}rch, Roelofs, Saad, and cosmopsychist views.
- Retitled and reordered the pure-awareness material so the dilemma leads and reportability plays a secondary role.
- Compressed literature adjacency into short footnotes while keeping defensive qualifications and objection-handling in the body.
- Reduced the body from about 8,900 words to about 6,800 words, mostly by cutting repeated restatements and moving repeated literature mapping into notes.

## Preservation checks

- Preserved all 42 citation keys from the previous manuscript.
- Preserved the verified quote anchors from Strawson, Goff, M{\o}rch, Gamma and Metzinger, and Roelofs.
- Kept the warrant-not-existence qualification, the constraint-not-refutation caveat, the Saad outside-the-target contrast, the M{\o}rch partial-case treatment, the category-error concession, the no-illusionism disclaimer, and the "earned, not inherited" conclusion payoff.
- Updated the old section reference in the category-error paragraph so it now points to Section 1.
- Varied "hidden phenomenal ontology" so it appears only once, with "hidden phenomenal posits," "hidden phenomenal base," and "theoretical phenomenal base" used where more natural.

## Build

- Ran the Springer LaTeX build with `pdflatex -> bibtex -> pdflatex -> pdflatex`.
- Build succeeded with no undefined citations or broken section destinations.
- Remaining messages were ordinary underfull/overfull layout notices and the local MiKTeX update warning.
- Copied the rebuilt PDF to `pan/overdrawing-on-experience-sn.pdf`.
