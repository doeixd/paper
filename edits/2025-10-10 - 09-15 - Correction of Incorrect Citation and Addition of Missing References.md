# 2025-10-10 - 09-15 - Correction of Incorrect Citation and Addition of Missing References

## Summary of Changes

Corrected an incorrect citation hallucination and ensured proper usage of related references in final.md and references.md.

## Specific Edits Made

### 1. Replaced Incorrect Citation in final.md (Line 46)
**Before:**
```
Following Quine's engineering model (Moghaddam 2013), epistemic norms function as hypothetical imperatives—if your goal is sustainable knowledge production, then minimize systemic brittleness.
```

**After:**
```
Following Quine's engineering model (Sinclair 2007), epistemic norms function as hypothetical imperatives—if your goal is sustainable knowledge production, then minimize systemic brittleness.
```

**Rationale:** The original citation to Moghaddam (2013) was identified as a hallucination. The correct reference for discussion of Quine's naturalized epistemology and the third dogma of empiricism is Sinclair (2007).

### 1b. Replaced Incorrect Citation in paper.md (Line 194)
**Before:**
```
Following Quine, we treat normative epistemology as engineering (Moghaddam 2013). Epistemic norms are hypothetical imperatives—conditional recommendations for achieving specified ends.
```

**After:**
```
Following Quine, we treat normative epistemology as engineering (Sinclair 2007). Epistemic norms are hypothetical imperatives—conditional recommendations for achieving specified ends.
```

**Rationale:** Same hallucinated citation corrected in the alternative paper version.

### 2. Added Missing Citation in final.md (Appendix A, Line ~778)
**Before:**
```
Drawing on Baysan's (2025) account of emergent moral non-naturalism, we can understand objective moral properties as conferring noncausal powers.
```

**After:**
```
Drawing on Baysan's (2025) account of emergent moral non-naturalism, we can understand objective moral properties as conferring noncausal powers (Ingthorsson 2013).
```

**Rationale:** The discussion of properties conferring noncausal powers in the normative brittleness section appropriately cites Ingthorsson (2013) "Properties: Qualities, Powers, or Both?" which directly addresses the metaphysical framework being discussed.

### 3. Removed Incorrect Reference from references.md
**Removed:**
```
Moghaddam, Ataollah. 2013. "Quine, Naturalized Epistemology, and the Third Dogma of Empiricism." *Dialectica* 67(2): 153–72. https://doi.org/10.1111/1746-8361.12011.
```

**Rationale:** This reference was a hallucination and has been replaced with the correct Sinclair (2007) reference.

## Verification
- Ran citation_extractor.py to confirm all citations in final.md, paper.md, and proc_v7.md are properly matched to references.md
- Both Sinclair (2007) and Ingthorsson (2013) citations are correctly detected and matched
- No problematic unmatched citations remain
- proc_v7.md was verified to not contain the hallucinated citation

## Impact
- Eliminates hallucinated reference that could undermine scholarly credibility
- Ensures proper attribution to correct sources on Quine's naturalized epistemology
- Provides appropriate philosophical support for the discussion of noncausal powers in moral properties
- Maintains consistency between in-text citations and reference list