# Summary of Edits: Scope, Objecthood, and Criterion/Test Separation

Paper: `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex` (Synthese track)

## Motivation

An outside reader's questions exposed places where a referee could misread the paper: (1) whether regime, horizon, and intervention class are chosen contexts that closure is then tested against (the "global" selection challenge); (2) whether the paper claims closure is the complete account of objecthood, and how it relates to contextual emergence, process ontology, hylomorphism, bound-state accounts, and artifact theories; (3) where the view stands on composition and object eliminativism; (4) whether environmental dependence of organisms and artifacts counts as the "parasitism" the wedge cases condemn.

## Changes

1. **Scope and Non-Claims (§1.3), two new paragraphs.**
   - Closure is the dynamical component of objecthood, not a complete account. Neighboring accounts are framed as complements: contextual emergence (Bishop and Atmanspacher 2006), process ontology (Dupré and Nicholson 2018; Jiang 2025), structural hylomorphism (Jaworski 2016), binding-based accounts, and functional-historical artifact accounts (Thomasson 2007).
   - The criterion is not an answer to the special composition question. It is compatible with several positions, including French-style structuralism (French 2014). Someone who accepts the transition facts but withholds the word "object" disagrees mainly about the label.

2. **Criterion in Plain Language (§2.1), two new paragraphs.**
   - "Test" and "criterion" are separated. Closure is a fact about the system; the protocol discovers it. Declaring things before scoring protects the evidence and does not make the regime.
   - One substrate can support several closed partitions in overlapping regimes. The accidental-hammer conceptual illustration separates dynamical structure from artifact-kind membership.

3. **Regime Individuation (§2.7), new paragraph answering the global selection worry.** Robustness across the admissible class is constitutive of closure, since the admissible-leakiness supremum quantifies over it. Robustness across nearby regimes, horizons, and modelling choices is evidential. Narrow, tuned regimes are excluded by projectibility and the selection discipline, so no independently privileged task is needed. The published source for the "Global Challenge" (Roca-Martín) could not be verified, so the worry is answered in substance without a citation.

4. **Latent-driver section, new paragraph distinguishing environmental support from parasitism.** Background conditions held fixed by the regime are part of it, not borrowed. Parasitism requires an admissible intervention on the candidate that decouples it from varying off-partition structure its macro-future turns on. This keeps the wedge from turning against ordinary special-science kinds.

5. **Consistency fixes.**
   - Rewrote the "graded verdicts" paragraph in §3.2 so it no longer contradicts the profile/grade/verdict split of §4.8.
   - Removed a duplicated "underdetermination rather than refutation" sentence.
   - Collapsed the paragraph that restated §2.2 into a one-sentence pointer.
   - Fixed a wrong cross-reference (the three claims are in the Introduction, not Scope), pointed the conclusion's commitments reference at §1.2 and §2.10, and fixed two comma errors around citations.
   - Added one sentence to the conclusion's non-claims tying back to the new scope paragraph.

## Deliberately not added

Stronger claims from the correspondence were kept out of the paper because they exceed the guarded three-claims structure:
- closure as what objecthood consists in;
- substrate independence;
- fully closed objects belonging to the modal structure of the universe.

## Bibliography

Added to the `.bib` and `references.md`: bishopatmanspacher2006, dupre2018, french2014 (already in references.md), jaworski2016, thomasson2007.

## Second pass: verification and deslop

A re-check of the first pass found three substantive problems, now fixed:

1. **Circularity in §2.1.** "A regime is significant because the world supports autonomous transition structure there" read as defining regimes by closure. The paragraph now says regimes are picked out by candidate-neutral physical features (timescales, energy scales, control channels; see §2.7), and that indexing specifies which modal claim is made, with the ice analogy as its model.
2. **Environmental-support paragraph covered only fixed background conditions.** It now also treats varying environmental inputs (the swing on the hammer, nutrients on a cell) as exogenous inputs, like the reset line in the model. The criterion that separates support from parasitism is stated exactly: whether the candidate's own macrostate does the predictive work given those inputs. In the proxy, given the drivers, $Z_t$ adds nothing, since $Z_{t+1}$ is fixed by the driver parity. The paragraph is split into three for readability.
3. **Overreach in the complements paragraph.** The claim that every neighboring account "presupposes" closure was false for artifact theories. It is replaced by the weaker, accurate claim that closure adds a check on whether the entity has dynamics of its own.

Clarity additions aimed at the outside reader's questions:
- The composition paragraph now states where substantive disagreement remains (with views denying that macro-level transition structure is real) and where it is only verbal.
- The global-selection paragraph now answers directly whether closure is a "local test". Its verdict is regime-relative, but the regime must be physically identified and hold up under nearby variation.
- Cross-regime robustness is explicitly not part of closure in a single regime (ice across a phase boundary).

Deslop:
- Removed correction-rhythm openers ("It is not.", "It does not make the regime"), motto-style closers ("find them without being able to invent them", "their existence is not up to anyone"), repeated "shares... shares" sentence frames, and signposting ("with one distinction kept in view").
- Fixed a dangling "The objection" that pointed at the wrong paragraph after the insertion.

## Build

Regenerated the blinded submission file with `scripts/build_blinded_submission.py`. Both `-sn.tex` and `-sn-submission.tex` compile (pdflatex → bibtex → pdflatex ×2) with no undefined references or citations.
