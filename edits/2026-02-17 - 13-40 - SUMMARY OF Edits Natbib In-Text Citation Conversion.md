Completed second-stage BibTeX migration by converting manual author-year parenthetical citations in the authoritative LaTeX manuscript into natbib citation commands.

Scope:
- `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
- `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex` (regenerated)

What changed:
1) Replaced manual parenthetical citations with `\citep` calls, including page-qualified forms where needed.
   - Examples:
     - `(Dennett, 1991, p. 34)` -> `\citep[p. 34]{dennett1991}`
     - `(Lewis, 1986, p. 213)` -> `\citep[p. 213]{lewis1986}`
     - `(Woodward, 2003; Pearl, 2000)` -> `\citep{woodward2003,pearl2000}`
     - `(Kim, 1998, 2005)` -> `\citep{kim1998,kim2005}`

2) Removed the temporary full-list `\nocite{...}` line because all bibliography items are now genuinely cited in text.

3) Verified citation-key coverage:
   - 19 cited keys in body
   - 19 entries in `real-patterns-need-closure-SYNTHESE.bib`
   - no uncited bib entries and no missing keys.

Build verification:
- Wrapper and inlined submission both compiled successfully with full BibTeX chain:
  - `pdflatex -> bibtex -> pdflatex -> pdflatex`
- No undefined-citation warnings remained after the final passes.

Rationale:
- This completes the BibTeX migration end-to-end: references are BibTeX-managed and in-text citations are now machine-linked, reducing manual drift risk while preserving existing prose and argument structure.
