# Summary of Edits: Real Patterns Need Closure (Synthese Submission Prep)

## What changed

1. Updated in-text citations in `real-patterns-need-closure-SYNTHESE.md` from Chicago-like author-year formatting to APA 7 parenthetical formatting.
   - Added author-year commas.
   - Converted page references to APA style (`p.`).
   - Converted parenthetical multi-author connectors from `and` to `&`.
   - Converted 3+ author parentheticals to `et al.` where appropriate.
   - Consolidated adjacent parenthetical citations into single semicolon-separated citations where this improved APA conformity.

2. Converted the embedded reference list in `real-patterns-need-closure-SYNTHESE.md` to APA 7 style.
   - Converted author first names to initials.
   - Put years in parentheses.
   - Standardized sentence case for article/chapter titles.
   - Formatted journals with italicized journal name and volume, issue in parentheses, and page ranges.
   - Formatted books with title in sentence case and publisher only.
   - Removed ISBN fields.
   - Kept DOI/URL links in full form.

3. Expanded abstract to meet Synthese guidance (150-250 words).
   - New abstract word count: 156.
   - Expansion strengthens the anti-gerrymandering and graded-commitment framing without changing thesis content.

4. Added keyword line directly below abstract:
   - `real patterns, closure, macro-objecthood, strong lumpability, coarse-graining, pattern realism`

5. Removed prohibited level-4 heading.
   - Replaced `#### Selection Discipline` with a bold lead-in paragraph in section 4.3.

6. Created separate title page file for double-anonymous submission workflow:
   - `real-patterns-need-closure-SYNTHESE-titlepage.tex`
   - Includes title, author metadata, email, ORCID, and required declarations (Competing Interests, Funding).

7. Set up Springer Nature LaTeX template assets and wrapper files.
   - Downloaded and extracted official Springer Nature template package to `latex/springer-sn-template/`.
   - Added anonymized Springer wrapper manuscript file:
     - `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn.tex`
   - Generated Pandoc-converted LaTeX body files in `latex/` for integration.

## Verification and checks

1. Ran citation extraction tooling:
   - `just citations "real-patterns-need-closure-SYNTHESE.md"`
   - Tool ran successfully, though extractor appears to undercount APA-style citations in this manuscript format.

2. Ran reference verification (dry run):
   - `just verify-refs "references.md" "" "" "true" "true"`
   - Completed successfully in dry-run mode (repository-wide references verification).

3. Manual compliance checks performed:
   - Abstract length in target range.
   - Keywords present (6).
   - No level-4 headings remain.
   - No self-identifying author metadata appears in the anonymized manuscript file.

4. LaTeX compilation attempt:
   - Attempted `pdflatex` compile with Springer template.
   - Blocked by local MiKTeX environment failure (`pdflatex.fmt` missing; format build fails), not by manuscript source errors.
   - Relevant source/template files are prepared for compilation once MiKTeX format generation is repaired.

## Rationale

- The revision prioritizes submission compliance without changing argument content or weakening existing qualifications.
- Citation and reference normalization improve editorial fit and reduce desk-rejection risk for formatting noncompliance.
- Replacing level-4 heading with a lead-in preserves logical flow while satisfying Synthese heading-depth constraints.
- Keeping author metadata on a separate title page supports double-anonymous review requirements.
- Springer wrapper/template setup ensures the paper can move into production-ready LaTeX with minimal additional editorial work once local LaTeX tooling is operational.
