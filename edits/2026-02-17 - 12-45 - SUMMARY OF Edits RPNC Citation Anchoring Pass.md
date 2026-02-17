# Citation Anchoring Pass — RPNC Synthese Manuscript

**Date:** 2026-02-17
**File modified:** `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`, `references.md`

## Rationale

External review identified four places where the paper makes claims tied to well-known literatures but lacks the canonical primary citation. These are the kind of gaps that trigger "missing literature" reviewer comments. Each fix is low-effort (one citation, at most one added sentence) and high-impact for reviewer confidence.

## Changes Made

### 1. Kemeny & Snell at strong lumpability (Section 3, line ~611)

The strong lumpability condition was introduced with a lemma and proof sketch but no source citation. Added "(Kemeny & Snell, 1976)" after the first formal statement. This is the standard reference for lumpability in finite Markov chains.

### 2. Simon & Ando at approximate closure motivation (Section 4.1, line ~761)

The passage on approximate closure moved directly from "exact closure is unusual" to the philosophical extension without acknowledging the mathematical tradition on approximate aggregation. Added one sentence: "The mathematical study of approximate aggregation has a long history, particularly in the analysis of nearly decomposable systems (Simon & Ando, 1961). The present extension is philosophical rather than technical: it uses graded closure to support graded ontological verdicts, not to improve estimation." This pre-empts a reviewer noting the omission of the nearly-decomposable-systems literature while making clear that our project is philosophical, not technical.

### 3. Ainsworth at Newman-style triviality (Section 2.9, line ~485)

The text referenced "Newman-style triviality pressure in structural realism" with no citation. Added "(Ainsworth, 2009)" as the standard survey of Newman's objection.

### 4. Cover & Thomas at leakiness/CMI quantity (Section 4.2, line ~779)

The conditional mutual information $I(X_t; Z_{t+1} \mid Z_t)$ was called a "canonical quantity" without citing a standard information-theory source. Added "(Cover & Thomas, 2006)."

## References Added

All four new entries added to:
- The LaTeX references section (alphabetical order, APA format)
- `references.md` (alphabetical order, Chicago format)

1. Ainsworth, P. M. (2009). Newman's objection. *BJPS* 60(1), 135–171.
2. Cover, T. M., & Thomas, J. A. (2006). *Elements of Information Theory* (2nd ed.). Wiley.
3. Kemeny, J. G., & Snell, J. L. (1976). *Finite Markov Chains* (2nd ed.). Springer.
4. Simon, H. A., & Ando, A. (1961). Aggregation of variables in dynamic systems. *Econometrica* 29(2), 111–138.

## What was NOT changed

- No substantive prose was altered beyond the one added sentence in Section 4.1.
- No existing qualifications, caveats, or citations were removed.
- The markdown source (`real-patterns-as-closure.md`) was not modified because the LaTeX file is the primary Synthese submission document and the passages differ between the two versions.
