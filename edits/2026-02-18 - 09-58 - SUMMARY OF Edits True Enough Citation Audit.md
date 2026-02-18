Completed source verification for `sources/True-Enough.txt` and aligned manuscript citation usage with what the source actually supports.

- Verified bibliographic metadata from the source front matter: Catherine Z. Elgin, *True Enough* (MIT Press, 2017), Cambridge, MA, ISBN 9780262036535.
- Verified chapter structure from the source table of contents (including chapter 2 "Distancing from Truth" and chapter 3 "From Knowledge to Understanding").

Substantive citation correction:

- The previous manuscript sentence linked Elgin to a recurring "cheap coding" objection in the real-patterns debate. The source does not directly support that specific historical claim.
- Revised that sentence to a source-faithful claim: Elgin is now cited for the broader pressure, in the idealization literature, on separating descriptive utility from epistemic warrant.
- Added chapter-level pinpointing (`chap.~2`) to reflect where that pressure is developed in *True Enough*.

Files changed:

1. `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
   - Replaced the over-specific "cheap coding" attribution and updated the Elgin citation context.

2. `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex`
   - Applied the same wording and citation update to keep mainbody and blinded submission synchronized.

3. `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE.bib`
   - Converted `elgin2017` from chapter-level `@incollection` metadata to source-accurate book-level `@book` metadata for *True Enough*.
   - Added `address` and `isbn`; removed chapter-specific fields and DOI tied to an earlier chapter citation format.

4. `references.md`
   - Updated the Elgin entry to a book citation in Chicago style, matching source metadata.

Validation:

- Checked that updated Elgin sentence is synchronized between mainbody and submission files.
- Ran full build cycle in submission directory:
  - `pdflatex -> bibtex -> pdflatex -> pdflatex`
- Build completed successfully (no hard errors).
