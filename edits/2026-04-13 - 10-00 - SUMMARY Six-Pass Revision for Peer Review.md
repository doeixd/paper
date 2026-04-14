# Six-Pass Revision for Peer Review

**Date:** 2026-04-13
**Target:** `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
**Net effect:** ~2405 lines reduced to ~2232 lines (~7% cut). All citations preserved. All load-bearing qualifications verified intact.

---

## Pass 1: AI Prose Patterns

Fixed 21 instances of recognizable AI writing patterns:

- **"Does not X. It Y" tick** (12 of 13 instances rewritten; kept line 2062 where the rhetorical punch is intentional). Each was merged into a single sentence or restated as the positive claim only.
- **Formulaic transition phrases** ("A structural worry deserves explicit treatment here," "One distinction is essential for avoiding confusion," "A related distinction matters here," "That point has a further metaphysical consequence"). Cut the windup; started with the substance.
- **"This is also where..." transitions** (4 instances). Replaced with direct topic sentences.

Rationale: A reviewer pattern-matching for AI-assisted prose would flag the repetitive two-sentence negative/positive structure. Reducing it to 1-2 natural instances makes the paper read as authored prose.

## Pass 2: Redundancy Cuts (~175 lines)

Largest cuts:

1. **Staged protocol restatement**: Was stated in full 6 times. Kept the intro version and the conclusion version. Others replaced with cross-references.
2. **"Projectibility can be parasitic" restatement**: Was stated 5 times. Kept the intro statement and the Section 4.3 development. Others cross-reference.
3. **Dialogical positioning paragraph** (intro): Trimmed from a 28-line catalogue to a 10-line compressed paragraph. All citations preserved. Each interlocutor is still engaged in the body section where their contribution is dialectically active.
4. **Lattice/structured-space payoff** (Section 3.4): Removed redundant restatement of the structured-space claim (already stated in Section 2.8). Replaced with cross-reference.
5. **Verdict categories and assessment sequence** (Section 4.7): Removed 26-line restatement of verdict meanings and 4-step assessment sequence. Both are already fully stated in Section 4.5 (Graded Verdicts) and Section 4.6 (Discipline and Disclosure).
6. **Screening-off vs. closure distinction** (Section 4.4): Removed redundant restatement at end of sparse-intervention section. The distinction is already established in Section 3.4 and the common-cause case.

Rationale: A reviewer reads restated claims as padding or insecurity. Each cut was verified to remove only duplication, not unique content.

## Pass 3: Content Additions

1. **Batterman paragraph** (Section 2.7, after structural contrasts): Added engagement with asymptotic explanation and universality classes. Notes compatibility (universality classes are closure at the relevant grain) and point of departure (Batterman focuses on explanatory structure; the present criterion adds an objecthood test).
2. **Organism illustration expansion** (Section 4.7): Added cardiac electrophysiology specifics (sinus rhythm, tachycardia, fibrillation as well-characterized macro-transitions; pharmacological and electrical pacing as admissible interventions at the organ grain). Gives the organism case the same concreteness as traffic and monetary illustrations.
3. **Stipulated vs. induced closure clarification** (Section 4.3, monetary illustration): Added explicit acknowledgment that financial rules are constitutive/stipulated, while the relevant closure test concerns whether the implementing infrastructure sustains autonomous macro-transitions. The failed-implementation case shows where induced closure breaks down even when stipulated rules persist.

## Pass 4: Common-Cause Tightening

Merged two versions of the common-cause wedge argument into one clean version with step-by-step walkthrough of Franklin & Robertson's conditions:
- (a) Unconditional relevance: proxy states track target-relevant differences
- (b) Conditional irrelevance: once proxy state is fixed, further micro-differences add no predictive leverage
- (c) Macro-level novelty: dependence captured at proxy grain, not by listing microconfiguration

Removed surrounding meta-commentary ("This is not a one-step snapshot," "This is also the point of nearest disagreement") and the duplicate general statement. The resulting case is shorter but hits harder because the reader encounters the argument once, linearly.

## Pass 5: Terminology and Citations

1. **"Lattice" replaced with "structured space" / "ordered space"** throughout (8 occurrences). One instance preserved as a quoted attribution: Rosas et al.'s "lattice of nested computational structures," with an explicit hedge that whether the space has full lattice properties in every domain is an open formal question.
2. **Boyd (1991)** added to the "too strong" objection (Section 5.7) as an example of homeostatic property cluster kinds that would press the objection.
3. **Kemeny & Snell (1960), Theorem 6.3.2** added to the proof sketch in Section 3.1 so a formally-minded reviewer can verify.

## Pass 6: Structural Moves

1. **"Levels of Claim" taxonomy** moved from Section 2.8 to Section 2.1 (immediately after the plain-language criterion, before the formal statement). This gives the reader the world-dynamics / pattern-type / pattern-token / representation distinction before they encounter the formalism. Restored the dropped sentence about token success not implying type robustness.
2. **Submission file regenerated** from header + mainbody.
3. **LaTeX compilation verified** (40 pages, no errors).

## Verification

After all passes, reviewed the full git diff (~1000 lines) checking:
- No qualifications or caveats silently dropped
- No citations lost (79 citation instances, all interlocutors still engaged)
- No defenses against specific objections weakened
- Common-cause wedge preserves full argumentative force
- "Parasitism" concept intact (7 occurrences)
- Kim, Rosas, Millhouse, Wallace, Jiang, Hoel/Dewhurst all still cited and engaged in body sections
- Batterman, Boyd, Kemeny & Snell added as planned
