Ran a full post-migration re-audit of citations, bibliography data, and build integrity for the Synthese LaTeX manuscript.

Scope:
- `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
- `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE.bib`
- wrapper and inlined submission builds in `latex/springer-sn-template/sn-article-template/`

What was verified:
1) Citation-key integrity
- Checked all in-text `\citep` commands against BibTeX keys.
- Result: 19 cited keys and 19 `.bib` entries; no missing keys and no uncited entries.

2) Manual-citation residue check
- Searched for legacy manual `(Author, Year)` parenthetical patterns in body text.
- Result: none remain.

3) High-risk page-specific cites
- Confirmed page-qualified citations remain explicit and correctly encoded in natbib form:
  - `\citep[p. 34]{dennett1991}`
  - `\citep[pp. 32--33]{dennett1991}`
  - `\citep[p. 213]{lewis1986}`

4) DOI metadata cross-checks
- Programmatically queried Crossref for all DOI-bearing BibTeX entries and compared key fields (year/title/journal/pages) for discrepancies.
- Findings:
  - Most entries match cleanly.
  - Known publication-date nuance remains:
    - `cover2006`: DOI metadata reports 2005 online metadata date while the cited 2nd edition is 2006.
    - `woodward2015`: DOI metadata reports 2014 online-first while the issue year is 2015.
  - Page field differences for some DOI records reflect Crossref first-page-only metadata for certain journals, not manuscript citation error.

5) Build integrity
- Rebuilt wrapper and inlined submission via full BibTeX chain:
  - `pdflatex -> bibtex -> pdflatex -> pdflatex`
- Result: successful builds; no undefined-citation warnings after final passes.

Tooling note:
- `betterbib` is installed but failed to execute in this environment due a runtime/license-layer incompatibility (`find_valid_license() got an unexpected keyword argument 'cache_control'`).
- Because of this, verification proceeded with direct Crossref API checks and compile validation.

Cleanup:
- Removed temporary sync-check bibliography copy used during attempted betterbib run.

Overall outcome:
- Citation system is now fully natbib/BibTeX-linked.
- Bibliography coverage and key integrity are complete.
- No unresolved citation-link or build-blocking reference issues remain.
