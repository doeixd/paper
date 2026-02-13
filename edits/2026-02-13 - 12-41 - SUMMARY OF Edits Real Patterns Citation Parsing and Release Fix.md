# Summary of Edits

## Scope

Fixed citation-parsing behavior that caused some cited sources (including Rosas and Shalizi/Crutchfield) to be omitted from filtered references in the release output.

## What Changed

1. Normalized grouped parenthetical citations in `real-patterns-as-closure.md` into parser-friendly single-parenthetical forms.
2. Standardized several citations to first-author-year form where needed for reliable extraction (`Rosas 2024`, `Shalizi 2001`, `Hoel 2013`).
3. Re-ran citation extraction and confirmed increased citation detection count.
4. Rebuilt release PDF and verified filtered references now include the previously missing entries.

## Outcome

- Citation extractor count increased from 11 to 21 citations.
- Release pipeline generated 9 filtered references (up from 6).
- Final PDF refreshed at `releases/real-patterns-as-closure.pdf` with updated reference list.
