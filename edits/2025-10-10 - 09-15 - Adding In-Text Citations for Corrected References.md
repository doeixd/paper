# 2025-10-10 - 09-15 - Adding In-Text Citations for Corrected References

## Summary of Changes

Added appropriate in-text citations for the corrected references (Krag 2015 and Staffel 2020) that replaced the hallucinated Staffel 2019 entries.

## Specific Edits Made

### 1. Added Krag (2015) Citation in final.md (Line 11)
**Before:**
```
Coherentists have offered responses (Olsson 2005; Kvanvig 2012), but most rely on internalist resources that lack external constraints.
```

**After:**
```
Coherentists have offered responses (Olsson 2005; Kvanvig 2012; Krag 2015), but most rely on internalist resources that lack external constraints.
```

**Rationale:** Krag (2015) "Coherentism and Belief Fixation" directly addresses coherentist theories of justification, making it highly relevant to the discussion of coherentism and the isolation objection.

### 2. Added Staffel (2020) Citation in final.md (Line 632)
**Before:**
```
Following Kelly (2005) on disagreement, when an agent receives a claim, they must condition their belief not only on the first-order evidence but also on the source's reliability.
```

**After:**
```
Following Kelly (2005) on disagreement, when an agent receives a claim, they must condition their belief not only on the first-order evidence but also on the source's reliability (Staffel 2020).
```

**Rationale:** Staffel (2020) "Reasons Fundamentalism and Rational Uncertainty" discusses rational attitudes and uncertainty in reasoning, which aligns with the paper's discussion of rational priors, higher-order evidence, and epistemic risk management.

## Verification
- Ran citation_extractor.py on final.md - all 55 citations properly matched
- Krag (2015) and Staffel (2020) citations are correctly detected and linked to their references
- Content of both papers aligns with their usage in the text
- No unmatched citations remain

## Impact
- Properly integrates the corrected references into the main text
- Krag (2015) strengthens the discussion of coherentist epistemology
- Staffel (2020) supports the discussion of rational attitudes and uncertainty
- Maintains scholarly integrity by citing relevant, verified sources