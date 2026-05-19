# Mainbody Cozy-Shell Revision Pass

**Date:** 2026-04-17
**File modified:** `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
**Backup:** `latex/real-patterns-need-closure-SYNTHESE-mainbody.bak63`
**Build verified:** Synthese Springer template compiles without errors (41 pages, no undefined references).

## Motivation

A reviewer-style critique of the current mainbody identified three kinds of problem:

1. Several places where v3 hedging silently weakened defensible claims v2 had secured.
2. Two structural weaknesses a Synthese referee is likely to press (regime-individuation circularity, and the announced-but-underdeveloped "structured space" payoff).
3. Roughly a page of redundant procedural boilerplate around the discipline rule.

This pass addresses all three while preserving the paper's philosophical commitments, graded-verdict architecture, and the moves the critique explicitly said not to touch (§1.1 intervention-vs-structural-realism handling, Franklin-Robertson repositioning, the §5.7 reply about special-science kinds falling into "qualified," and the Andersen density-of-structure use).

## Changes, by priority

### Priority 1 — restorations and structural fixes

1. **Multiple-realizability necessity claim restored (§5.4, `autonomy-pluralism-and-distinctiveness`).** The v3 formulation "That makes multiple realizability a natural consequence of closure in the relevant cases, but not a sufficient test for it" silently gave back a defensible necessity claim. Rewritten so the entailment is explicit: if a partition closes, distinct microstates within the same macroclass by construction produce identical macro-transitions, so multiple realizability is *necessary* for closed macro-kinds, though not sufficient. Shapiro citation and gerrymandered-kinds framing preserved.

2. **Structured-space payoff developed (§2.13, `closure-underdetermination-and-objecthood-discipline`).** The claim that the rainforest becomes "the structured space of computationally closed coarse-grainings" was announced more confidently than it was developed. Added three paragraphs committing on: (a) the space is indexed per regime, with cross-regime nesting and overlap relations among those spaces; (b) closed partitions scored under different admissibility classes form parallel sub-structures, with cross-admissibility stability as the robustness signal; (c) the ordering relation is a feature of the dynamics under declared constraints, not a representational choice. The Rosas-et-al. lattice hedge was kept.

3. **Discipline-rule redundancy consolidated.** The "fix constraints before scoring; post hoc revisions trigger restart" rule was stated at least five times. Made the enumeration at §4.3 `procedural-safeguards-in-non-ideal-cases` the single canonical statement, expanded it to include baseline model class and gain metric, and added an explicit disclosure/restart item. Replaced duplicate statements at the end of §2.5 (admissibility evaluation order), §2.6 (regime-individuation iteration), and §4.2 (viability-floor anchor) with brief references (`\S\ref{procedural-safeguards-in-non-ideal-cases}`). Deleted the "Selection discipline" bolded paragraph at the end of §4.3, whose content was now subsumed. Added one sentence at the head of §4.10 `reporting-and-evidential-discipline` clarifying the relation: the canonical selection discipline fixes *what is held constant*; reporting fixes *what is disclosed*.

### Priority 2 — argumentative strengthening

4. **Causal-degeneracy sentence sharpened (§5.3, `causal-exclusion-still-defeats-macro-claims`).** Moved the punchline to the front so the paragraph opens with the crisp formulation: "Tracking every electron introduces non-difference-making noise into the causal model; the macro-boundary strips out this degeneracy and concentrates causal power at the level where difference-making actually occurs." Surrounding material on supervenience, fat-handedness, and Kim target-indexing preserved.

5. **Regime-individuation response strengthened (§2.6, `regime-individuation-and-circularity`).** Two additions: (a) entanglement cases (psychiatric categories, species concepts) are now framed as *where the criterion earns its keep* rather than as a failure mode — downgrade-to-qualified is the correct evidential result, and the criterion is doing its intended work when it registers this. (b) Added a paragraph on the worry that "regime dissolution" is itself partition-relative: regime dissolution is characterized by cross-cutting physical indicators (energy scales, phase boundaries, control-response failure, separation-of-timescales breakdown) that do not presuppose the winning partition. The ice-crystal analogy from §4.4 is cross-referenced rather than duplicated.

6. **Franklin-Robertson wedge developed (§3.3, `what-the-formal-machinery-alone-does-not-provide`).** Added a half-paragraph pre-empting the most likely FR reply: that their screening-off condition, properly understood, already excludes common-cause proxies. The counter: their condition as stated is ambiguous between a passive-observational and an intervention-robust reading; closure does not replace their criterion but disambiguates it in favor of the intervention-robust reading and makes the residual transition-autonomy question explicit. The respectful framing of their program is preserved.

7. **Principled induced/stipulated distinction added (§1.3, `scope-and-non-claims`).** Added a short paragraph stating the principled version: induced closure asks whether transition autonomy is sustained by physical and organizational structure independent of whether anyone stipulates it; stipulated closure asks only whether a consequence-relation holds within a rule-system; institutional kinds are hybrid, and the criterion tests whether the induced component sustains the stipulated one. This makes the restriction principled rather than ad hoc, and connects forward to the monetary failed-implementation case in §4.5.

8. **Viability-floor discussion tightened (§4.2, `leakiness-as-canonical-target`).** Cut the extended comparative-anchor exposition. The anchor is now stated in one sentence: within-class micro-features yield prediction gains comparable in magnitude to the gains the macro-partition itself provides over baseline. The upstream-fixing point cross-references the canonical discipline statement rather than restating it.

9. **Early quotable scope statement added (Introduction).** One compact formulation inserted in the introduction: "closure asks whether a candidate macro-variable carries its own transition structure under admissible perturbation, or whether its apparent autonomy is borrowed from hidden micro-identity or upstream cause." The conclusion already contains a close echo of this formulation, so no matching change was needed there.

### Priority 3 — prose-level

10. **Lemma demoted to observation (§3, `exact-benchmark-strong-lumpability`).** The `\textbf{Lemma.}` and `\emph{Proof sketch}.` framing was removing value, since the "proof sketch" essentially restated the definition of strong lumpability. Collapsed to a single observation paragraph while keeping the summation formula.

11. **"this paper" occurrences reduced from 16 to 2.** Edited each in context; most became "the criterion here," "the present account," or just dropped. The two remaining occurrences (the terminology-scoping "Throughout this paper, *gerrymandered* means…" and the contextual "This paper is concerned exclusively with induced closure…" in §1.3) earn their space and were left.

12. **Section-ending transition sentence cut.** The paper is mostly clean of LLM-style bridges; one clear instance was at the end of §3 ("which motivates the graded extension below"). Rewritten to state the point without the signpost. Other section endings were audited and left alone; most end on argumentative beats already.

## What was deliberately not changed

Per the critique's "what not to change" list:

- §1.1 `intervention-structure-and-the-causation-worry` — the handling of the intervention-vs-structural-realism tension.
- The Franklin-Robertson repositioning (introduction and §5.1).
- The graded-verdict architecture (robust / qualified / indeterminate) and §5.7's reply about special-science kinds falling into "qualified."
- The Andersen density-of-structure use to defuse pluralism.

## Net effect

Line count grew by 59 lines (from 2238 to 2297), but page count held at 41. New substantive content (structured-space payoff, FR wedge, regime-dissolution paragraph, principled induced/stipulated, quotable scope sentence) roughly offsets the discipline-rule cuts and the viability-floor tightening. The net effect is sharpen-and-restore rather than cut-and-shorten: the paper loses redundancy and gains argumentative density where it was previously hedged or underdeveloped.

## Follow-on pass: Rosas-integration edits

After the cozy-shell pass, a second round of five smaller suggestions targeted the paper's relationship to Rosas et al. (2024) specifically — the goal being to mark clearly where Rosas's formal architecture ends and this paper's philosophical criterion begins. All five were applied in the same revision pass.

13. **Interventional closure distinguished from Rosas's Granger-sense causal closure (§3.3, `what-the-formal-machinery-alone-does-not-provide`).** The "intervention indexing" paragraph was expanded to note explicitly that Rosas et al.'s "causal closure" is a Granger-style screening-off condition defined on the observed process (citing their Sec. III.B), and that the present criterion treats such screening-off results as evidential for closure but adds an independent admissibility-indexed intervention-robustness test. The common-cause wedge is flagged as the case where the two criteria diverge.

14. **Strong lumpability connected to Rosas Theorem 3 / Proposition 4 (§3, `exact-benchmark-strong-lumpability`).** Added a sentence at the end of the computational-mechanics paragraph citing Rosas et al., Thm. 3 and Prop. 4 (pp. 27–28), noting that the present account reads their formal result as the ideal limit of the criterion rather than as the criterion itself. This makes clear the paper is grounded in the current formal literature and frees the philosophical work to focus on ontological interpretation.

15. **Franklin-Robertson wedge sharpened for formal-vs-modal ambiguity (§3.3).** The "A likely reply..." paragraph was rewritten to frame the ambiguity explicitly as a formal-vs-modal reading of conditional independence: the formal reading is about the joint distribution generated by actual dynamics (which the common-cause proxy satisfies); the modal reading demands that the same conditional independence hold under admissible interventions (which the proxy fails). Closure is presented as picking out the modal reading and supplying the admissibility-indexed test.

16. **Lattice-membership-vs-objecthood clarification added (§2.13, `closure-underdetermination-and-objecthood-discipline`).** Added a sentence stating that mere membership in the structured space is necessary but not sufficient for macro-objecthood: what earns a robust verdict is the partition's standing once admissibility variation and intervention-robustness checks are applied. This pre-empts the metaphysician's natural question about whether every node in the formal lattice is a real object.

17. **Traffic example mechanism fleshed out (§4.9, `one-distributed-illustration`).** The verdict bullet in the traffic enumeration was extended with a physical mechanism: a ramp-metering change alters entry rates and reshapes bottleneck formation and headway distributions; lane-segment density and flow remain defined the same way and adjust to the new boundary conditions, whereas the ID-cluster partition's calibration scatters across different segments and times, so cluster labels no longer track coherent macro-trajectories. This makes the philosophical point about within-class repair patterns concrete rather than merely asserted.

## Follow-on pass: vocabulary and de-AI-ification

A third round of suggestions targeted (a) small vocabulary precision improvements, (b) the recurrent "It is not X. It is Y." sentence tic, (c) throat-clearing meta-announcements, and (d) residual staged-protocol redundancy in the conclusion. All were applied in one pass.

18. **Observational vs. interventional distribution vocabulary (§3.3).** The Franklin-Robertson reply was rephrased so the passive-observational/intervention-robust distinction is explicitly expressed in terms of "observational joint distribution" vs. "interventional distribution," which is the canonical vocabulary of causal modelling.

19. **Partial-ordering language in §2.13.** The caveat about whether the structured space has full lattice properties now uses "partial ordering" explicitly, making clear what remains when full lattice structure is relaxed.

20. **Exogeneity clarification in §2.4.** One sentence added to the "nature intervenes on itself" paragraph stating that environmental perturbations are exogenous to the candidate partition even when internal to the larger system, so the test retains the exogeneity that standard interventionist accounts require without depending on human agency.

21. **Phlogiston tied to high-maintenance vocabulary (§4.7).** The phlogiston discussion now explicitly labels the case as a high-maintenance partition with a cross-reference to the minimal-formal-illustration section, tying the historical case back to the formal vocabulary of §3.1.

22. **"It is not X. It is Y." patterns merged.** Several flagged instances rewritten as single sentences: §1.3 scope restriction (now "The scope here is accordingly restricted..."), §2.11 heuristic-vs-criterion pairing, §2.12 Newman-style triviality reply, §3.3 philosophical-claim vs. theorem framing, §4.2 leakiness-is-not-an-imposition sentence, §5.2 concession-to-arbitrariness reply, and the conclusion's "intentionally middle-range" sentence. Several others (e.g., the cell-membrane sentence in §2.4) were left alone after review because they carry genuine contrastive force rather than formulaic padding.

23. **Throat-clearing meta-announcements cut.** "One immediate tension should be stated early" (§1.2), "A preliminary distinction is needed" (§1.3), "The answer is to separate three questions that are often conflated" (§2.13), and the "A four-level distinction helps prevent..." and "Four failure patterns are especially relevant" formulations replaced with direct statements that let the list or main clause do the work.

24. **Conclusion staged-protocol restatement tightened.** The opening paragraph of the conclusion no longer re-litigates the compression / screening-off / closure sequence with full citations; it cross-references the introduction's cumulative admittance protocol and summarises only what closure adds at the final step.

25. **Franklin-Robertson "conditional irrelevance" vocabulary.** The §1 introduction of Franklin and Robertson now uses their own "conditionally irrelevant (screening off)" phrasing explicitly, so the later §3.3 common-cause dissection uses the same precise vocabulary from the start.

26. **Wimsatt "pseudorobust" label.** The §4.3 procedural-safeguards sentence citing Wimsatt (1981) now uses his label "pseudorobust" explicitly when noting that multiple diagnostics reduce the risk of artefactual verdicts, tying the safeguard directly to Wimsatt's warning about pseudorobustness.

## Verification

- `pdflatex → bibtex → pdflatex → pdflatex` in `latex/springer-sn-template/sn-article-template` completes without errors.
- No undefined references in the log.
- All new cross-references resolve (`\S\ref{procedural-safeguards-in-non-ideal-cases}`, `\S\ref{regime-dependence-and-projectibility}`, `\S\ref{one-distributed-illustration}`, `\S\ref{failure-conditions-and-downgrade-rules}`, `\S\ref{minimal-formal-illustration}`, `\S\ref{introduction-closure-and-the-admittance-problem}`).
- No citations added or removed; `references.md` untouched.
- Final build: 42 pages.
