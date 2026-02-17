Converted the authoritative Synthese LaTeX manuscript to BibTeX-managed references.

Files changed:
- `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
- `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE.bib` (new)
- `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex` (regenerated)
- `latex/springer-sn-template/sn-article-template/sn-basic.bst` (copied locally so BibTeX resolves style in this directory)

What was changed:
1) Replaced hardcoded reference prose block in mainbody with BibTeX hooks:
   - kept `\section{References}` heading
   - added `\nocite{...}` for all current works to preserve the full bibliography without rewriting all in-text parentheticals
   - added `\bibliography{real-patterns-need-closure-SYNTHESE}`

2) Created a dedicated `.bib` database containing all previously listed references, including DOI fields where available.

3) Rebuilt the inlined single-file submission TeX so it reflects the BibTeX transition.

Build verification:
- Ran full BibTeX workflow successfully for wrapper and inlined submission:
  - `pdflatex -> bibtex -> pdflatex -> pdflatex`
- Verified `.bbl` is produced and contains the expected entries.

Important note:
- In-text citations are still mostly manual parenthetical prose (e.g., `(Dennett, 1991)`), not `\citep`/`\citet` commands.
- This conversion moves reference management to BibTeX and removes manual bibliography maintenance, while preserving existing prose and avoiding high-risk global citation rewrites.
