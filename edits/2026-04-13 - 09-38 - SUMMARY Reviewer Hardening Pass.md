## What changed

This pass concentrated changes in the review's three highest-risk areas and kept the rest narrow.

1. **Franklin-Robertson wedge**
   The common-cause proxy discussion in late Section 3 and the `Beyond Screening Off` reply were rewritten so the paper no longer relies mainly on intuitive `borrowed screening off` language. The manuscript now reconstructs the pressure case in Franklin and Robertson's own terms:
   - unconditional relevance,
   - conditional irrelevance relative to the target explanandum,
   - macro-level novelty at the proxy grain.

   It then states more explicitly what closure adds: not another observational filter, but the further question whether the candidate partition preserves its own transition structure under direct admissible perturbation.

   I also added a formal anchoring sentence for `parasitic` and one sentence distinguishing the paper's partition-level intervention test from standard Woodwardian variable-level causal testing.

2. **Admissibility circularity**
   Section 2 now distinguishes regime individuation from admissibility individuation. The new passage explains that explanatory admissibility is fixed by available control channels and implementation structure, not by whichever intervention class happens to favor a preferred partition.

   I also made `non-trivial counterfactual reach` explicit:
   - existing domain control channels,
   - cross-site/operator replicability,
   - no one-off or partition-protective tuning.

   The traffic example now does direct work on this point by contrasting admissible operator controls with inadmissible vehicle-level rewriting.

3. **Predictive versus interventional closure in sparse-intervention domains**
   The predictive/interventional discussion now says more clearly that:
   - predictive closure is evidential,
   - interventional closure remains the ontological target,
   - indirect evidence can still come from natural experiments, policy shifts, quasi-experimental contrasts, and exogenous disruption.

   The paper now says plainly that robust verdicts should be rare where intervention-relevant evidence is genuinely thin. I also used the monetary case to show how indirect intervention evidence can distinguish robust from qualified commitment.

4. **Short supporting hardening moves**
   - strengthened the composition discussion so closure is presented as a sufficient condition for composition in regime in the relevant ontological sense;
   - added one practical paragraph explaining what `robust`, `qualified`, and `indeterminate` change in philosophical practice;
   - strengthened the conservatism reply by addressing the early-science case directly and explaining why the right verdict is often `qualified` rather than elimination;
   - added one short introductory sentence promising the later claim that projectibility can be genuine yet still parasitic;
   - added one narrow Ross citation to the monetary/institutional discussion and documented its textual basis in a separate source-review note.

## Why these changes were made

The review identified places where a careful referee could still press the core novelty claim rather than merely ask for clarification. The revisions were designed to close those openings without broadening the paper's ambition or changing its overall architecture.

The main objective was to make the paper harder to deflect on the claim that closure does work beyond screening off, beyond observational success, and beyond loose interventionist rhetoric.

## Objections these edits are meant to pre-empt

- "The common-cause proxy was never a real screening-off case."
- "Admissibility is just regime circularity in another form."
- "In sparse-intervention domains the criterion collapses back into observational permissiveness."
- "`Parasitic` is vivid rhetoric but not a formally grounded distinction."
- "The verdicts classify cases but do not change anything in practice."
- "The composition discussion is too hedged to count as a positive answer."
- "The conservatism reply misses early-stage good macro-kinds."

## Remaining pressure points

1. The Franklin-Robertson wedge is now materially harder to dismiss, but it is still the most rhetorically delicate part of the paper. Future passes should continue checking that the tone stays constructive and cumulative rather than adversarial.

2. The move from formal closure structure to ontology-reporting verdicts remains defensible, but it is still where a skeptical reviewer can press hardest if they want a more austere reading of the formalism.

3. The introduction is now slightly stronger in guidance but not shorter. This pass prioritized hardening over compression. A future pass could still trim some front-end restatement if space or pacing becomes a priority again.

4. The new Ross use is deliberately narrow. It should remain that way. The paper does not need a broader institutional-ontology detour.

## Verification

- Synced the blinded submission source from the revised main body.
- Rebuilt both the Springer wrapper and blinded submission source with full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycles.
- Final log scan showed no remaining undefined citations or label warnings in the ending build logs.
