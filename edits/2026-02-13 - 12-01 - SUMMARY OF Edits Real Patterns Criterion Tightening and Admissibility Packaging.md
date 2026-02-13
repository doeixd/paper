# Summary of Edits

## Scope

Applied a focused tightening pass to `real-patterns-as-closure.md` in response to final reviewer concerns about criterion disjunction risk, admissibility packaging, and guardrail visibility.

## Major Revisions

1. Added a short abstract-level commitment sentence stating the hierarchy explicitly: interventional closure as ontological standard, predictive closure as evidential proxy.
2. Added `Definition (graded closure)` near the criterion statement:
   - leakiness is now explicit canonical distance-from-closure quantity,
   - kernel divergence and predictive regret are framed as estimators/proxies,
   - disagreement is treated as model-revision signal.
3. Added an intervention admissibility checklist in Section 3.1 (epistemic, dynamical, explanatory) and framed it as continuous with experimental-design constraints.
4. Added `Definition (macro-transition profile)` directly before strong lumpability for local readability.
5. Elevated weird-partition guardrails into an explicit `Robustness and minimality principle`.
6. Added explicit statement that tolerance is comparative across candidate partitions under fixed constraints, not an unconstrained absolute threshold.

## Rationale

- These edits close the remaining permissiveness vulnerability at the metric layer.
- They make the intervention-class constraints appear as methodological necessities rather than promissory gestures.
- They reduce likely reviewer concern that disjunctive closures are admitted without practical guardrails.

## Style and Standards

- No em dashes introduced.
- No pseudo-quantification introduced.
- Mathematical notation preserved in LaTeX delimiters.
