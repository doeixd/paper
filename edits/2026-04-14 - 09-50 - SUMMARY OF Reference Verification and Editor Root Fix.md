## Summary

Verified that the recent source-use revisions did not introduce real missing citations or broken cross-references in the active Synthese build, and added an editor-root directive to reduce false `undefined reference` warnings when working directly in `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`.

## What I Checked

- Confirmed that the cited keys in the revised manuscript are present in the active bibliography file `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE.bib`.
- Confirmed that the section labels and `\ref` targets used in the revised passages still exist in the manuscript.
- Compiled the active Synthese wrapper `real-patterns-need-closure-SYNTHESE-sn.tex` twice with the preferred local `pdflatex` binary.

## Result

The manuscript compiled successfully. There were no real undefined citations or broken internal references in the wrapper build. The earlier `undefined reference` signals were editor/LSP noise caused by reading `real-patterns-need-closure-SYNTHESE-mainbody.tex` as if it were a standalone LaTeX document even though it is included through the Springer wrapper.

## File Change

Added this directive at the top of `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`:

`% !TeX root = springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn.tex`

This does not affect the compiled manuscript. It is only there so editor tooling can resolve citations and labels through the correct root document.

## Review of the Earlier Wording Changes

I also reviewed the source-use edits against the argument of the paper. The changes do not alter the paper's philosophical position. They narrow attribution, add qualifications where the cited sources required them, and make more explicit where the closure criterion is the paper's own contribution rather than a conclusion already present in neighboring literature.

In particular, the revisions:

- do not weaken the core claim that closure is a stricter admittance criterion than screening off alone
- do not retreat from realism about robust macro-structure
- do not turn the paper into a merely epistemic or instrumentalist proposal
- do reduce reviewer exposure where a citation previously risked being asked to support more than it could bear

Residual compile output was limited to underfull boxes, not reference failures.
