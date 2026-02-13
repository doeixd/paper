# Summary of Edits

## Scope

Applied a focused style-guide pass to `real-patterns-as-closure.md` targeting remaining clause stacking, jargon density, and procedural readability issues in Sections 3 and 5.

## What Changed

1. Split dense Section 3.2 diagnostics paragraph into shorter linear steps to improve baton-pass flow.
2. Added plain-language restatement for leakiness in Section 5.2 immediately after the formal quantity $I(X_t; Z_{t+1} \mid Z_t)$.
3. Clarified role separation in Section 5.3 (table = setup, algorithm = procedure, prose = interpretation).
4. Reduced duplication between Sections 5.5 and 5.6 by keeping qualification claims in 5.5 and moving detailed failure-mode listing to 5.6.
5. Reformatted failure modes in Section 5.6 into a numbered list and added nonstationarity explicitly there for scanability and completeness.

## Rationale

- Improves accessibility for non-technical readers without removing detail.
- Preserves full methodological depth while making inferential structure easier to follow.

## Style and Standards

- No em dashes introduced.
- No pseudo-quantification introduced.
- Mathematical notation remains in LaTeX delimiters.
