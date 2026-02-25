Completed a full citation and reference audit for the Synthese submission track (`real-patterns-need-closure`).

Scope and method:

- Audited all citation keys used in both manuscript sources:
  - `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
  - `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex`
- Verified there are 24 unique citation keys and that every key resolves to an entry in:
  - `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE.bib`
- Checked direct quote fidelity against extracted source texts for high-risk quoted passages (Dennett and Lewis).
- Audited `references.md` for presence/completeness of all cited works and corrected missing/misaligned entries.

Substantive fixes made:

1. Quote-fidelity corrections in manuscript prose (both LaTeX files)

- Corrected case-sensitive wording in the Lewis quotation to match source wording:
  - "Moon" (not "moon")
  - "Her Majesty's" (not "her Majesty's")

2. BibTeX metadata completeness/consistency updates

- Updated bibliographic details to improve completeness and align with source editions where applicable.
- Notable updates include:
  - `cover2006`: publisher normalized to Wiley-Interscience.
  - `goodman1955`: updated to 1983 4th edition metadata with original-publication note.
  - `pearl2000`: updated metadata to 2009 2nd edition details while preserving citation key for manuscript stability.
  - Added missing address fields for several cited books (e.g., Haugeland, Kemeny/Snell, Kim volumes, Ladyman/Ross, Lewis, van Inwagen, Woodward 2003).

3. `references.md` corrections for cited-source coverage

- Added missing cited works:
  - Fodor 1974
  - Haugeland 1998
  - Putnam 1967
  - Shapiro 2000
  - Woodward 2015
  - Woodward 2021
- Corrected a malformed/corrupted entry that had wrong author metadata for the cited Gladziejewski article.
- Updated Pearl entry to the 2009 second-edition form consistent with current source usage.
- Reordered Putnam entries so same-author chronology is coherent.

Validation:

- Verified no citation-key drift between mainbody and submission files.
- Verified no missing BibTeX entries for cited keys.
- Rebuilt blinded submission with full cycle:
  - `pdflatex -> bibtex -> pdflatex -> pdflatex`
- Build succeeded (no hard errors).

Residual note:

- The citation key name `pearl2000` now points to 2009 second-edition metadata. This is intentional for key stability; if preferred, we can rename the key to `pearl2009` in a follow-up cleanup pass.
