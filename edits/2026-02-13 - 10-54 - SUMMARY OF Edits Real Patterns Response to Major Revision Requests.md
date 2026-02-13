# Summary of Edits

## Scope

Revised `real-patterns-as-closure.md` to address the major reviewer-style concerns about operationalization, criterion strength, gerrymandering edge cases, metric practicality, literature positioning, and scholarly apparatus.

## Major Changes

1. Added `1.1 Related work and contribution` to position the paper against Dennett, computational mechanics, closure diagnostics, and interventionist causation while stating the specific novelty claim.
2. Strengthened operational precision by adding:
   - explicit horizon notation for $Z_{t+1}^{L}$,
   - a formal closure definition relative to horizon $L$ and intervention class $\mathcal{I}$,
   - an explicit Markov-case lemma linking strong lumpability to macro-autonomy.
3. Added a new `3.3 Operational protocol (in principle)` with a five-step recipe:
   - choose variables and measurement channel,
   - specify intervention class,
   - fix horizon,
   - estimate leakiness/proxy,
   - compare partitions under fixed regime constraints.
4. Reframed strong lumpability as an ideal exact benchmark and canonical Markov-case criterion, not a universal all-case requirement.
5. Added a dedicated subsection (`4.4 If a weird partition is closed`) acknowledging that a contrived partition may count as real if it genuinely satisfies closure under the specified regime.
6. Expanded leakiness section with practical proxies beyond direct mutual-information estimation:
   - within-class transition-kernel divergence,
   - cross-validated predictive gain,
   - intervention-response invariance tests.
7. Strengthened high-maintenance diagnosis by defining it as repeated forced refinement of within-class distinctions to sustain prediction.
8. Added a ladder reminder plus stylized concrete tests in hurricanes and organisms sections, specifying candidate macrovariables and what failure would look like.
9. Added a selected references section in-manuscript and corrected entries to align with the repository's bibliographic record.

## Rationale

- These edits convert several conceptual gestures into explicit protocols and criteria.
- The manuscript now pre-empts likely objections about over-strong lumpability claims and contrived but closed partitions.
- The practical-proxy additions improve credibility for reviewers concerned about estimation in finite, high-dimensional systems.

## Style and Standards Checks

- No em dashes used.
- No pseudo-quantified examples introduced.
- Mathematical symbols remain in LaTeX delimiters.
- Tone remains philosophy-forward with formal support kept subordinate to the argument.
