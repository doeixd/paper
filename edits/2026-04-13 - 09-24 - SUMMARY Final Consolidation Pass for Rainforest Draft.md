## Final Consolidation Pass for `real-patterns-need-closure`

### What changed

This pass was a surgical consolidation revision rather than a new expansion. The main prose source revised was `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`, and the blinded submission source was resynchronized afterward.

The main changes were:

- **Concentrated lattice payoff**: the paper now contains one explicit, cumulative payoff block late in Section 3, immediately after the formal/common-cause bridge and before the paper moves fully into approximation. That block now states in one place that:
  - levels are discovered features of system dynamics rather than metaphors,
  - levels relate by nesting rather than elimination,
  - the micro-level is not privileged simply by being smallest.
- **Projectibility wedge clarified**: the introduction now promises the later argument that a pattern can remain projectible and still be parasitic, and the projectibility subsection in Section 4 now states that argument more directly as a sharpening of Ladyman and Ross rather than leaving it buried inside regime-dependence discussion.
- **Introduction compressed**: the three-nearby-positions and contribution-map subsections were tightened so they classify the paper's stance without re-arguing points the body later develops in full.
- **Systematic edge-case passage**: the distributed illustration section now ends with one compact passage explaining what the criterion is expected to include, qualify, and exclude, using examples already in the paper rather than opening a new example bank.
- **Ross monetary link**: the monetary illustration now makes the institutional point more explicit by explaining why closure provides the needed discipline for distinguishing robust from fragile institutional kinds.
- **Platonism breadcrumb restored**: the conclusion now ends with one tightly qualified future-work sentence about possible implications for substrate-independence and more abstract structural objecthood.

### Why these changes were made

The previous draft contained nearly all of the planned ideas, but some of the strongest payoffs were still too distributed to register as decisive first-order claims. The main risk was not missing content but diluted emphasis. A reader could find the lattice claim, the projectibility wedge, and the edge-case implications, but only by assembling them across several sections.

This pass therefore aimed to:

- make the paper's central metaphysical payoff easier to see in one location,
- make the key dialectical move against projectibility-only views easier to locate,
- reduce front-end repetition so the introduction functions more as runway than as a mini-paper,
- show more explicitly what the criterion includes, qualifies, and excludes,
- preserve the paper's current thesis and tone rather than reopening architecture.

### Objections these edits are meant to pre-empt

- **Scattered-payoff objection**: that the lattice claim is present only as a recurring theme rather than as a clear philosophical payoff.
- **Buried-projectibility objection**: that the projectibility-to-parasitism move is inferable but not presented as a distinct dialectical contribution.
- **Over-managed introduction objection**: that the introduction previews and restates too much before the argument begins.
- **Unsystematic edge-cases objection**: that the examples are individually useful but do not clearly tell the reader what sorts of cases the criterion is meant to admit, downgrade, or exclude.
- **Weak institutional-case objection**: that the monetary example works illustratively but does not clearly show why closure matters for institutional ontology.

### What was deliberately not expanded

- I did **not** add a new dedicated subsection for artifacts, bridges, trumpets, or failed posits as a separate taxonomy. That would have risked turning the pass into a new expansion. Instead, the paper now states the inclusion/exclusion logic more directly in one compact paragraph.
- I did **not** add a new Ross citation that was not already present in the paper's bibliography and source support. The institutional clarification is therefore framed as a Ross-inflected extension of the existing Ladyman-and-Ross positioning rather than as a new literature detour.
- I did **not** broaden Jiang or Millhouse. Their role remains sparse and local.
- I did **not** create a new formal or metaphysical section for platonism. The breadcrumb remains one future-looking sentence only.

### Remaining pressure points

- The introduction is tighter than before, but it is still a substantial introduction. It should now feel less repetitive, but if a later pass ever aims at major length reduction, that would need a more aggressive rebalancing than this pass allowed.
- The Ross institutional point is clearer, but it remains intentionally brief because the paper should not become a separate paper on institutional ontology.
- The lattice payoff is now concentrated, but the paper still depends on the reader accepting the philosophical move from closure diagnostics to ontology-reporting verdicts. That remains the intended core claim rather than a defect, but it is still the argumentative hinge.

### Verification

After the revision:

- the blinded submission source was resynchronized from the revised mainbody,
- the Springer wrapper and blinded submission files were rebuilt with the full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle,
- the final output remained free of undefined-citation or broken-reference failures.
