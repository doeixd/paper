# Summary of Edits: Objecthood Scope and Deslop for the PhilPapers Closure Paper

Paper: "Real Patterns Need Closure: Transition Autonomy as a Dynamical Criterion for Macro-Objecthood". This is the PhilPapers version on `master`: `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`, built with the named wrapper `-sn.tex`.
Branch: `revision/objecthood-email` (from `master`). This is kept separate from `revision/rainforest-reframing`, which uses the same file path for the Synthese paper "Operationalizing Screening Off for Rainforest Admission". The two versions of this file must not be merged.

## Motivation

An outside reader (email correspondence) raised questions this paper is especially exposed to, because it claims that closure is sufficient for macro-objecthood and disciplines composition claims:
1. Is closure a local test applied after contexts are chosen, and what answers the global context-selection challenge?
2. Is closure meant as the complete account of objecthood? How does it relate to contextual emergence, process ontology, hylomorphism, bound-state accounts, and functional-historical artifact theories?
3. Where does the view stand on composition, nihilism, and structuralist object elimination?
4. Do artifacts and organisms, which depend on their environment, fail closure?

The author chose to keep the sufficiency thesis and state exactly what it covers (not soften it to "a component"), and to recast rather than drop the composition paragraph.

## Phase 1: content

1. **§2.1, new paragraph.** Separates the criterion (a fact about the system) from the test (how it is found). Regimes are picked out by candidate-neutral physical features (timescales, energy scales, control channels). Fixing the regime before scoring protects the evidence and does not make the facts. The ice analogy shows that indexing specifies the modal claim.
2. **§2.3, circularity fix.** "A regime is a region of dynamical possibility carved out by the transitions themselves" invited a circularity objection. It now says regimes are marked out by physical features that can be identified before any partition is scored.
3. **§2.4 Regime Individuation, new passage on global selection.** Robustness across the admissible class is part of what closure is. Robustness across nearby regimes, horizons, and modelling choices is evidence that the regime is genuine. Narrow tuned regimes fail projectibility and the evaluation order, so no privileged task is needed.
4. **§1.2 Scope, new paragraph.** "Sufficient for macro-objecthood" covers whether an autonomous macro-level unit exists. It does not cover kind, origin, function, naming, or identity over time. Contextual emergence (Bishop and Atmanspacher 2006), process ontology (Dupré and Nicholson 2018), structural hylomorphism (Jaworski 2016), binding accounts, and artifact theories (Thomasson 2007) are presented as complements.
5. **§2.5 composition paragraph, recast.** Objecthood consists in a pattern carrying its own transition structure; constituents realize it. Composition claims are disciplined by the same condition. The view is compatible with structuralist object elimination (French 2014). Disagreement is substantive with views denying that macro-level transition structure is real, and verbal with views that only withhold the word "object".
6. **§5 pluralism reply, extended.** Several closed coarse-grainings can exist on one substrate in overlapping regimes. The accidental-hammer conceptual illustration separates dynamical structure from artifact-kind membership.
7. **§3.4, after the common-cause case.** Environmental dependence is not parasitism. Regime-fixed background and varying inputs (a swing on a hammer, nutrients to a cell) leave the candidate's own macrostate doing the predictive work. The oscillator-driven composite's state only mirrors the driver.
8. **Conclusion.** One sentence stating the objecthood scope, with a pointer to §1.2.
9. **Abstract** (in `-sn.tex` and `-sn-full.tex`). Deslopped: removed "macro-level what-follows" and the "realist but disciplined" slogan. Added one sentence each on criterion versus test and on objecthood scope.

## Phase 2: de-AI pass

- Split the main body into six chunks and revised them in parallel against `pan/AI smells.txt`. Each revision came with a change log naming the qualifications in every changed passage.
- **Mechanical check.** Citations, labels, refs, section commands, list items, inline and display math, environments, and brace balance are identical to the pre-deslop text (the only difference is the one new conclusion ref).
- **Independent adversarial audit.** Found 4 HIGH, 9 MED, and 8 LOW issues. Restored:
  - the strong-lumpability benchmark wording ("not a condition every macro-object must meet exactly");
  - "rather than either full robust status or wholesale elimination";
  - "defensible" in the admissibility downgrade rule;
  - the original scope of the staged-filtering sentence;
  - "not a human invention";
  - "not to invent it";
  - the paper's own voice on what is missing;
  - "genuine interventional closure" in the common-cause case;
  - "formal closure" (not "strong lumpability") as the mathematical property;
  - the multiple-realizability inference;
  - "a robust verdict" (evidential, not "robust objecthood") in the triangulation rule;
  - the falsifiability sentence;
  - "not a concession" in the causal-exclusion reply;
  - "fixed, declared" regime;
  - several grammar fixes.
- **Full read-through.** Also removed the remaining "what-follows" phrasing in the body.

## Deliberately not changed (flag for author)

The leakiness section's thermodynamic justification ("Evolution and physical self-organization therefore robustly select against leaky boundaries") is original content and was left as is. It is the kind of empirical-sounding claim a reviewer may press. The Synthese version replaced it with a kernel-level objectivity argument.

## Build

`-sn.tex` compiles (pdflatex, bibtex, pdflatex twice) to 36 pages with no undefined references or BibTeX warnings. `-sn-full.tex` has no `\bibliography` line and cannot produce references; use `-sn.tex` for the named build.
