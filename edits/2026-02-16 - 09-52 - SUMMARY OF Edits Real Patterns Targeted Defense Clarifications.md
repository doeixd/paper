## Scope of This Pass

This was a small, targeted defense and clarity pass on `real-patterns-as-closure.md`, prompted by reviewer-style concerns in `patterns-review.md`. The goal was to strengthen preemption without changing the paper's core commitments.

## Main Revisions

1. Clarified contribution boundaries in Section 1.1.
   - Added that the paper provides both a metaphysical criterion and an audit protocol.
   - Clarified that domain-specific estimator engineering is downstream methodological work.

2. Clarified the Rosas relation in Section 3.2.
   - Added explicit language that Rosas gives a principled target condition in ideal settings.
   - Clarified that this paper extends that target to non-ideal conditions where exact machine recovery is unavailable.

3. Tightened state-enrichment constraints in Section 3.2.
   - Added a minimality requirement: use the least enriched state that preserves closure performance under fixed horizon and intervention class.
   - This blocks the impression that enrichment is an unconstrained escape hatch.

4. Added an anti-tuning safeguard in Section 3.3.
   - Candidate partitions, admissibility class, horizon, diagnostics, and model classes must be fixed before comparison.
   - Post-hoc changes require restart and disclosure.

5. Strengthened graded verdict reporting in Section 5.2.
   - Made the reporting rule explicit: robust objecthood, qualified objecthood, or indeterminate status.

6. Strengthened objecthood bridge in Section 9.2.
   - Added that, under the paper's structural realist commitments, stable intervention-guiding transition invariance is the relevant mark of macro-entityhood in regime.

7. Strengthened failure condition in Section 10.
   - Added downgrade condition when verdicts are highly sensitive to small, defensible changes in admissibility, horizon, or diagnostics.

## Rationale

These edits aim to improve reviewer resilience on three fronts: circularity/tuning worries, enrichment permissiveness worries, and criterion-versus-application worries. The revisions preserve the paper's central philosophical claim that macro-objecthood is determined by closure structure under fixed constraints, while improving procedural explicitness and readability.
