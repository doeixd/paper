# Pan paper novelty-visibility pass

## Scope

Three sentence-level changes on `pan/overdrawing-on-experience-mainbody.tex`. The goal was to make the paper's contribution and the multi-pronged argument structure visible without adding roadmaps, signposting, or meta-statements about what the paper is doing.

## Why

After the earlier passes the prose reads well, but two things were under-communicated to a skeptical reviewer. First, the paper's distinctive territory relative to the recent Roelofs / Lin revelation debate was implied but not positioned. Second, the multi-pronged defense of the load-bearing premise (what first-person experience actually discloses) was structurally present but the convergence was never reached. The fix in both cases was to show, not tell.

## Changes

1. **Section 2, Roelofs/Lin paragraph.** Rewrote the "narrower question" sentence. The earlier text said the recent revelation debate "leaves room for a narrower question," which was defensive and gave away the territory. The new text positions the paper along a different axis: the Roelofs / Lin debate is about whether revelation favors panpsychism over physicalism; the present paper is about what first-person acquaintance actually discloses and what part of panpsychism's hidden ontology has to be earned as theory. This positions the contribution by orientation rather than by announcement.

2. **End of Section 4.1.** Added one closing sentence to the Reportability subsection. The pure-awareness conclusion is now noted as something already in view from ordinary phenomenology (Section 4) and from the dilemma about characterless subjectivity (Section 4); the strongest first-person challenge does not unsettle that conclusion. This makes the multi-pronged defense of the load-bearing premise audible through inline cross-reference rather than through a meta-claim like "three routes converge."

3. **Conclusion paragraph 3.** Replaced the closing sentence "Panpsychism must compete with its rivals on the same abductive terms as any other metaphysical hypothesis" with a version that names the positions covered: "Whether the version on offer is austere realistic monism, micropsychism, cosmopsychism, panprotopsychism, or phenomenal-powers grounding, it must compete with its rivals on the same abductive terms as any other metaphysical hypothesis." The position list is doing real work, since the differential-application analysis from Section 7 is one of the paper's contributions; making the positions explicit in the conclusion cashes that work out without an explicit "the constraint applies across the full panpsychist landscape" announcement.

4. **Section 7 opener.** Moved the position list one section earlier so the differential-application work is visible at the start of Section 7 as well as at the end of the conclusion. The section now opens by naming the five positions it treats differentially (austere realistic monism, micropsychism, cosmopsychism, panprotopsychism, phenomenal-powers grounding), so a reviewer scanning section openings sees the scope of the differential analysis. This identifies scope rather than announcing argument structure.

## What was deliberately not done

- No roadmap added to the introduction.
- No "the paper contributes X" sentence added anywhere.
- No "three routes converge" meta-statement added at the end of Section 4.1.
- No reorganization of section order or restructuring of the argument.

## Build

`overdrawing-on-experience-sn.tex` rebuilt via `pdflatex → bibtex → pdflatex → pdflatex`. 17 pages, no undefined citations, no errors. PDF copied to `pan/overdrawing-on-experience-sn.pdf`.
