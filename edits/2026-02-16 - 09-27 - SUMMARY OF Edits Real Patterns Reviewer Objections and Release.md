## Scope

This edit pass made small, targeted revisions to `real-patterns-as-closure.md` to address two reviewer-facing vulnerabilities while preserving the paper's existing argument architecture and tone.

## What Changed

1. In the admissibility section, I clarified that the anti-circularity reply is hierarchical.
   - Added language that admissibility is fixed upstream of objecthood verdicts.
   - Clarified that intervention classes are themselves implemented control/measurement patterns with stability conditions.
   - Added a procedural ordering: evaluate intervention-class channel stability first, then test closure for candidate macro-partitions.

2. In Objection 9.1, I strengthened the circularity response.
   - Added the stronger reviewer version of the objection (that admissibility may smuggle ontology).
   - Replied that admissibility constraints are discovered in control architecture, not set by analyst preference.

3. In Objection 9.4, I replaced the previous vague bridge with a tighter hybrid formulation.
   - Preserved the paper's broader commitment that formal systems can exhibit objective internal structural closure.
   - Explicitly distinguished stipulated closure (formal domains) from induced closure (spatiotemporal implemented systems).
   - Removed wording that made the section sound under-specified while avoiding a long detour into philosophy of mathematics.

## Why These Changes

The goal was to improve reviewer resilience without changing scope.

- The hierarchical clarification blocks the charge that intervention classes are back-fit to favored ontologies.
- The revised 9.4 keeps continuity with the larger framework while making the local dialectical task precise.
- Together, these edits increase defensibility and preserve conceptual continuity with the rest of the manuscript.

## Release

Ran:

`python scripts/release.py real-patterns-as-closure.md --format typst --output releases/real-patterns-as-closure.pdf`

Result:

- Release succeeded.
- Output: `releases/real-patterns-as-closure.pdf`
- Previous output was backed up automatically in `backups/` by the release pipeline.
