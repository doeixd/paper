# Summary of Edits: Pan Warrant Transfer Sharpening

## Files changed

- `latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.tex`
- `pan/overdrawing-on-experience-mainbody.tex`

## What changed

I made a targeted dialectical revision to make the paper's target harder to misunderstand.

Specific changes:

- Added an abstract sentence clarifying that the issue is not whether first-person experience alone proves panpsychism, but whether first-person warrant transfers to panpsychism's hidden posits.
- Added an early scope sentence stating that the argument is not aimed at panpsychism as such, but at the transfer from ordinary first-person authority to hidden phenomenal posits.
- Strengthened the "no one serious claims" paragraph by explicitly granting the objection and clarifying that once the argument becomes abductive, its warrant has changed kind.
- Added a Section 7 payoff sentence stating that sophisticated replies are not refuted by the constraint, but redescribed as abductive metaphysical theories whose support must come from explanatory payoff.
- Added a Section 8 clarification that the explanatory burden is not a special penalty on panpsychism, but the ordinary burden any theory bears once its central posits are not directly given.
- Tightened the conclusion so that the first-person route giving way to abduction is the final frame for panpsychism's theoretical burden.

## Rationale

The main referee risk is that the paper could be read as attacking a crude view: that first-person experience alone proves panpsychism. The revision blocks that reading directly. It grants the stronger panpsychist response, then presses the narrower point that abductive defenses of hidden phenomenal ontology cannot retain the special authority of first-person acquaintance. This preserves the paper's modest conclusion while sharpening its strongest contribution.

## Validation

- Ran `git diff --check -- latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.tex pan/overdrawing-on-experience-mainbody.tex`; no whitespace errors were reported.
- Checked the edited sources for em/en dashes; none were found.
- Built the Springer wrapper with `pdflatex -> bibtex -> pdflatex -> pdflatex`; the build completed successfully.
- Checked the final build log for fatal errors, undefined citations, natbib citation warnings, and unresolved reference warnings; none were found.
