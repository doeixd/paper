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

## Build

Regenerated the blinded submission file with `scripts/build_blinded_submission.py`. Both `-sn.tex` and `-sn-submission.tex` compile (pdflatex → bibtex → pdflatex ×2) with no undefined references or citations.
