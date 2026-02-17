This pass focused on citation/reference accuracy and APA consistency in the LaTeX submission file (`latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`), with special attention to page-range formatting and bibliographic completeness.

What I changed:

1. Standardized page ranges to LaTeX en dashes (`--`) in the reference list.
   - Updated:
     - Dennett (1991): `27--51`
     - Elgin (2017 chapter pages): `35--53`
     - Hoel et al. (2013): `19790--19795`
     - Shalizi & Crutchfield (2001): `817--879`
     - Woodward (2015): `3577--3599`

2. Increased APA completeness for major books where titles were too compressed.
   - Haugeland (1998): added subtitle (`Having thought: Essays in the metaphysics of mind`).
   - Pearl (2000): added subtitle (`Causality: Models, reasoning, and inference`).
   - Woodward (2003): added subtitle (`Making things happen: A theory of causal explanation`).

3. Normalized arXiv entry wording for APA-like style.
   - Rosas et al. (2024): changed journal label to `arXiv preprint` and added explicit arXiv identifier in entry body.

4. Preserved all existing in-text citations and argumentative claims while tightening reference formatting.
   - No conceptual claims were weakened or expanded.
   - Existing page-specific in-text citations were retained.

Verification and rationale:

- Built the Springer wrapper successfully with pdflatex after edits:
  - `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn.tex`
- This confirms citation/reference section integrity after the formatting and metadata updates.
- The revisions were limited to bibliographic precision and style alignment, reducing avoidable reviewer friction without introducing new conceptual commitments.
