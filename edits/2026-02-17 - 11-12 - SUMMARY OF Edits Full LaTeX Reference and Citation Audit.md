Performed a full consistency and accuracy audit for the LaTeX manuscript references and in-text citations in `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`.

What was checked:
- Exhaustive sweep of in-text author-year citations against the reference list.
- Verification that every cited work has a corresponding reference entry.
- Verification that listed references used in argument sections are actually cited in text.
- DOI metadata validation for journal/chapter articles where DOIs are present.
- Page-specific in-text citation spot checks against source files in `sources/`.
- Chapter page-range validation for Elgin (2017) using full-book source PDF.

Evidence base used:
- Local sources: `sources/True Enough.pdf`, `sources/Elgin-2017-kntoun.pdf`, `sources/Dennett_RealPatterns.pdf`, `sources/Lewis-David-(1986)-On-the-Plurality-of-Worlds.pdf`.
- Extracted text files for verification: `sources/True-Enough.txt`, `sources/Elgin-2017-kntoun.txt`.
- Online metadata endpoints: Crossref DOI records and DOI resolver outputs.

Key findings:
- Elgin chapter range in *True Enough* is confirmed as pp. 33--62 (chapter 4 starts at p. 63).
- Page-specific in-text citations checked (Dennett and Lewis) are consistent with local source text.
- DOI-linked entries checked in the reference list match title/author/year/journal details.
- No additional citation-reference mismatches were found in the LaTeX manuscript body.

Edits made in this pass:
- No new reference/citation content edits were required after the full audit.

Build check:
- Ran Springer-template `pdflatex` sanity compile successfully (no fatal errors; underfull vbox warnings only).

Rationale:
- Prioritized defensibility and reviewer resilience by confirming bibliographic correctness and citation traceability from claim to source.
- Kept the bibliography stable where entries were already accurate to avoid introducing avoidable style drift.
