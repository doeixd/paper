# 2026-02-20 - Minor Revisions for Resubmission

## Rationale

Targeted edits addressing the most convergent peer-review concerns without structural reorganization. The goal is to close specific gaps reviewers flagged while preserving the paper's existing defensive architecture.

## Changes Made

### 1. Expanded the confound divergence case in §3.3

**What:** Added a concrete instance (shared-upstream-oscillator scenario) to the abstract confound example in "What the Formal Machinery Alone Does Not Provide." The new passage walks through how a composite variable achieves observational predictive sufficiency via a common cause, then collapses under admissible intervention when one subsystem is perturbed independently.

**Why:** Both reviews identified this as the single most important gap. The novelty relative to Rosas et al. and computational mechanics hinges on intervention-indexed divergence, and the existing two-sentence abstract statement was too easy for formal readers to skim past. The expanded version makes the logical divergence concrete without introducing a full numerical toy model (which would shift the paper's genre from criterion to methods).

### 2. Echoed the divergence in §1.1 novelty positioning

**What:** Added a sentence in the Rosas positioning paragraph flagging that the present criterion can diverge from purely observational closure diagnostics, with a forward reference to §3.3.

**Why:** The review's central complaint was that the novelty claim is "undersold and underargued." Moving the divergence signal earlier ensures reviewers encounter it in the introduction rather than only in §3.3.

### 3. Added variable-to-object bridge in §2.1

**What:** Added a short paragraph after the plain-language criterion clarifying how partition autonomy warrants objecthood claims under the paper's structural realist commitments.

**Why:** Both reviews independently flagged the gap between evaluating partitions (the formal machinery) and claiming macro-objecthood (the philosophical conclusion). The answer was already in §2.9 but never stated as an explicit bridge principle. The new paragraph makes the bridge visible without adding new argumentation.

### 4. Expanded ETMG acronym on first use

**What:** Changed "ETMG program" to "Every Thing Must Go (ETMG) program" in §1.2.

**Why:** Flagged in review as inaccessible to non-specialists.

### 5. Fixed inconsistent section symbol rendering

**What:** Replaced bare UTF-8 `§` characters with LaTeX `\S` commands throughout. Changed hardcoded `§4.5` to `\S\ref{one-distributed-illustration}` for proper cross-referencing.

**Why:** Review noted a `ğ2.7` rendering artifact in the compiled PDF, likely caused by bare Unicode section symbols that the font doesn't support. Standardizing to `\S` ensures consistent rendering across all LaTeX installations.

### 6. Varied "macro-level what-follows" phrasing

**What:** Kept the phrase in its two definitional uses (abstract and thesis statement) but varied three other instances to "onward macro-transitions," "its macro-future," and "onward macro-behavior."

**Why:** Review noted the phrase is effective on first use but becomes grating through repetition. Variation reduces the pattern while preserving the technical term in its definitional contexts.

## Files Modified

- `latex/springer-sn-template/sn-article-template/real-patterns-need-closure-SYNTHESE-sn-submission.tex` (primary submission file)
- `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex` (mainbody source, synced)

## What Was Not Changed

- No structural reorganization or section reordering
- No length reduction (the repetition is load-bearing disambiguation for a multi-audience paper)
- No addition of a numerical toy model (would shift genre)
- No expansion of the Landauer argument (would open a new front)
- No addition of institutional ontology literature (scope creep)
- No softening of the procedural admissibility order (would undermine the circularity defense)
