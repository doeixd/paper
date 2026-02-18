# Edit Summary: Response to AI Reviewer Pressure Points
**Date:** 2026-02-17 19:45
**Files changed:** `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`, `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex`, `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE.bib`

---

## Overview

An AI reviewer identified three structural pressure points in the paper. After evaluating each against the paper's existing content and philosophical commitments, three targeted additions were made. The goal was to close genuine gaps without expanding scope, introducing new terminology, or weakening existing qualifications.

---

## Change 1: Regime Individuation and Circularity (§2.4)

**Problem identified:** If regime individuation already presupposes which macro-variables matter, then the evaluation protocol risks circularity — you need regime identification to test closure, but regime identification might presuppose partition outcomes.

**Addition:** Two paragraphs added to §2.4 (Admissibility and Hierarchical Evaluation), after the evaluation order block.

**Rationale for integration:** This is a legitimate circularity worry that hostile reviewers could press. The paper's existing procedural safeguards (fix-before-scoring, disclose-and-restart) partially answer it, but the answer needed to be made explicit. The addition makes a targeted argument:

1. Regime specifications typically draw on *cross-partition-accessible* quantities: clock schedules, energy scales, flow rates, enforcement intensities — physical indicators that competing candidate partitions can both agree on before either is evaluated. This breaks the tight circle the objection alleges.

2. Where entanglement between regime identification and partition choice is genuine (biology, social science), the framework treats this as a source of *evidential weakness* that lowers the verdict ceiling to "qualified" — turning a potential objection into a built-in diagnostic.

3. The process is iterative, not viciously circular: provisional regime characterizations, closure testing, and mutual refinement stabilize at reflective equilibrium (citing Goodman 1955, *Fact, Fiction, and Forecast*, for the general structure of this kind of mutual adjustment). Discipline comes from procedural requirements, not fixed foundations.

**Style/voice check:** No em dashes. No new named terminology introduced (avoided coining "cross-partition accessible" as a formal term; used it descriptively). Appropriate qualifications ("The independence is imperfect in some domains"). Maintains existing downgrade logic.

---

## Change 2: Viability Floor Anchoring (§4.2)

**Problem identified:** The "non-negligible" leakiness threshold is stated without any anchor, and verdict-category boundaries (robust/qualified/indeterminate) are vague without a principled account of why that vagueness is acceptable.

**Addition:** Two paragraphs added to §4.2 (Leakiness as Canonical Target), after the existing viability floor statement.

**Rationale for integration:** The existing text correctly says the viability floor is comparative and domain-relative, but doesn't explain *how* to apply it. The addition:

1. Gives a ratio-based anchor for "non-negligible" without a numeric threshold: leakiness is non-negligible when within-class micro-features yield prediction gains comparable in magnitude to the gains the macro-partition itself provides over a naive baseline. This is qualitative (no specific numbers) but gives the judgment something concrete to be about.

2. Argues that verdict-category vagueness is a *feature*: the underlying property (transition autonomy) is graded, so the verdict structure should be graded too. Uses biological fitness as the comparison point — real and explanatorily significant without a sharp fit/unfit boundary. The primary evidential target is ordering stability (A consistently better than B), not sharp category boundaries.

**Style/voice check:** No pseudo-quantification (no numbers assigned). The ratio framing is qualitative ("comparable in magnitude," "marginal"). No new named concepts introduced. Maintains the paper's commitment to domain-relative threshold-setting while making the judgment more concrete.

---

## Change 3: Multiple Realizability and Closure (§5.3)

**Problem identified:** The paper's claim to novelty over the standard special-sciences autonomy tradition (Putnam, Fodor) is underarticulated. The framework might appear to be a formal restatement of familiar multiple-realizability arguments rather than a genuine advance.

**Addition:** One paragraph added to §5.3 (Autonomy, Pluralism, and Distinctiveness), before the existing "Pluralism version" paragraph.

**Rationale for integration:** This is a genuine gap. The paper already responds to the generic autonomy objection, but doesn't explicitly engage Putnam-Fodor multiple realizability. The addition establishes the logical relationship precisely:

- Multiple realizability is **necessary** for closure: if a partition closes, different microstates within the same macroclass produce the same macro-transitions, which is exactly what multiple realizability means. So closed macro-kinds are multiply realized by construction.
- Multiple realizability is **not sufficient**: a purely extensional claim about shared labels says nothing about dynamical coherence. A disjunctive aggregate can have heterogeneous realizers with utterly divergent transition profiles — multiply realized in the extensional sense while completely failing closure.
- What closure **adds**: the dynamical requirement. Realizers must not only fall under the same label but must go to the same macro-places under the declared constraints.

This positions the framework as formalizing the transition condition that the multiple-realizability tradition always implicitly needed but never specified, following Shapiro (2000) who showed that many alleged multiple-realization cases are either trivial or involve kinds not doing the same functional work.

**Style/voice check:** No grandiose framing. The claim "always needed" is carefully indexed to "the autonomy tradition always needed to separate genuine higher-level kinds from merely disjunctive aggregates" — this is a historical claim about a gap in the literature, not an exaggerated novelty assertion. No em dashes.

---

## Bibliography Additions

Four new entries added to `real-patterns-need-closure-SYNTHESE.bib` in alphabetical order:

- `fodor1974`: Fodor, Jerry A. "Special Sciences (or: The Disunity of Science as a Working Hypothesis)." *Synthese* 28(2): 97–115. [Canonical special-sciences autonomy paper.]
- `goodman1955`: Goodman, Nelson. *Fact, Fiction, and Forecast*. Harvard University Press. [Cited for reflective equilibrium / mutual adjustment of rules and cases.]
- `putnam1967`: Putnam, Hilary. "Psychological Predicates." In *Art, Mind, and Religion*, ed. Capitan and Merrill, 37–48. Pittsburgh: University of Pittsburgh Press. [Original multiple realizability paper.]
- `shapiro2000`: Shapiro, Lawrence A. "Multiple Realizations." *The Journal of Philosophy* 97(12): 635–654. [Skeptical analysis of multiple realizability cases; supports closure as the principled test.]

---

## Suggestions Evaluated but Not Integrated

**More worked illustrations across all three verdict categories:** The reviewer recommended adding thermodynamic (robust), working memory (qualified), and middle-class (indeterminate) illustrations. The existing paper already covers the spectrum via the traffic example (§4.9), monetary systems and organisms (§4.5), and phlogiston (§4.7). Adding full worked examples for all three categories would significantly increase word count for a Synthese submission. The existing illustrations are sufficient to show discriminative work across the range.

**Full restoration of older version examples (hurricanes, flames, failed states):** These were cut from the Synthese version for length. The philosophical point they illustrated is now covered by the ordering stability argument and the viability floor anchoring. Restoring them would re-introduce word count pressure without adding philosophical substance beyond what the current additions achieve.

---

---

## Round 2: Refinements Based on Reviewer Assessment of Round 1

The AI reviewer assessed all three additions positively but identified four further improvements.

**§2.4 — grain-neutrality sentence:** Added one sentence immediately after "anchored in lower-level or cross-cutting physical indicators": "The key principle is that regime specifications should be grain-neutral across competing candidate partitions: a regime can itself be a macro-level description while still not presupposing which finer-grained partition will close within it." This closes the deepest version of the circularity worry: regime individuation can be a macro-level act without presupposing the partition outcome.

**§2.4 — Goodman analogy made explicit:** Revised "reach reflective equilibrium \citep{goodman1955}" to "stabilizes into reflective equilibrium, in the sense Goodman articulated: rules of inference and particular inferential judgments are justified by their mutual coherence rather than by either serving as the unilateral foundation for the other \citep{goodman1955}." Makes the analogy transparent for readers unfamiliar with *Fact, Fiction, and Forecast*.

**§4.2 — two-stage structure:** Added one sentence connecting the viability floor to the comparative ranking protocol: "The two requirements work in sequence: the viability floor is applied first as a minimum gate, excluding candidates regardless of how they compare to rivals, while comparative ranking then assigns verdict categories among candidates that pass it." Addresses the reviewer's observation that the relationship between the floor and the ranking was implicit.

**§4.5 — verdict categories in operation:** Added a paragraph after the organism/monetary/failed-implementation examples that explicitly labels each with its verdict category: monetary system in a well-functioning regime as approaching robust; organisms as qualified within physiological regimes; failed-implementation as downgrade. This closes the "thin on worked illustrations" gap efficiently without restoring the older version's full case studies, giving readers a demonstration that the three categories do real discriminative work on concrete material.

**§5.3 — cross-reference to §4.5 monetary example:** Added two sentences after the Shapiro citation linking the abstract MR argument to the concrete monetary illustration: "coins, ledger entries, and digital balances are heterogeneous realizers, but what earns money macro-object status is not the heterogeneity of realizers but the transition-equivalence of those realizers under admissible financial interventions." Reinforces both the MR argument and the §4.5 illustration.

**Positioning of MR paragraph:** Reviewer noted it could go earlier (§1.1 or §2) but conceded §5.3 is defensible given the paper's primary audience (pattern-realism and metaphysics of science rather than philosophy of mind). Kept in §5.3.

## Build Status

- Full `pdflatex → bibtex → pdflatex` pipeline completed after both rounds.
- Final output: 29 pages, 468,326 bytes (one page added by new content, as expected).
- No undefined citations. No LaTeX errors. Only cosmetic underfull box warnings (pre-existing).
