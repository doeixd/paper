## Scope

Final publication-readiness pass on `real-patterns-need-closure-SYNTHESE.md` with emphasis on citation robustness, readability, and release verification.

## Main Revisions

1. Strengthened literature anchoring in the manuscript body.
   - Added targeted citations to Elgin (permissiveness pressure) and Hoel et al. (causal-emergence diagnostics context) in the introduction and objection framing.

2. Improved citation parser compatibility.
   - Replaced `Rosas et al. 2024` in in-text citations with parser-safe `Rosas 2024` form.
   - This resolved the release warning about missing citations in `references.md`.

3. Completed final wording polish from the clarity pass.
   - Kept the anti-echo and pre-emption edits from Sections 2, 4, and 5.
   - Preserved philosophical commitments while reducing local sentence friction.

4. Updated references block in manuscript.
   - Added `Elgin 2017` and `Hoel, Albantakis, and Tononi 2013` entries to match new citations.
   - Replaced non-ASCII page dash in Shalizi reference with ASCII hyphen for consistency.

## Build Verification

Ran release pipeline:

`python scripts/release.py real-patterns-need-closure-SYNTHESE.md --format typst --output releases/real-patterns-need-closure-SYNTHESE.pdf`

Result:

- Release succeeded.
- Citation resolution warning cleared.
- Output generated at `releases/real-patterns-need-closure-SYNTHESE.pdf`.

## Remaining Publication Risks

1. Manuscript is still below the original planning target range (currently around 6.3k words), though argument structure is now publication-facing.
2. Section 5 remains dense; a final objection-cluster compression pass could further improve referee readability.
