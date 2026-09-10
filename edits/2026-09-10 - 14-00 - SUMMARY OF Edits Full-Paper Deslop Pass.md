# Summary of Edits: Full-Paper Deslop Pass

Paper: `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex` (Synthese track)

## Goal

Remove "AI smell" from the whole paper, following `pan/AI smells.txt` and `STYLE_GUIDE.md`, without changing the argument or dropping any qualification, citation, or guard against misreading.

## Method

1. Backed up the main body and split it into six chunks at section boundaries.
2. Revised each chunk in parallel against the smell list. Each revision came with a change log naming the qualifications in every changed passage.
3. Mechanically checked that citation keys and pinpoints, labels, refs, headings, math, and enumerate item counts are identical to the original.
4. Reassembled the chunks and had an independent adversarial audit compare the original against the revision, looking specifically for dropped hedges, strength changes, lost guards, changed terms of art, and bad chunk joins.
5. Applied the audit's fixes, read the result, rebuilt, and regenerated the blinded submission file.

## What changed (style)

- **Correction rhythm reduced.** "Not X but Y" and "is not X. It is Y." reveals were cut throughout. Contrasts that guard against a specific reviewer misreading were kept, each stated once and plainly: instrumentalism, Woodwardian causal primitivism, circularity, observer-relativity, "screening off already does this", the Rosas et al. full-observation proviso.
- **Motto and aphorism closers removed.** Examples: "the discipline working as intended, not evasion", "Observer power changes convenience, not closure facts", "terrain, not the lens", "not a panacea", "the prediction miss is itself the structural fact". The substantive point was kept or folded into the preceding argument.
- **Signposting and announcement cut.** Examples: "Three quick clarifications forestall...", "The reply has a structural and a procedural part", "Put differently", "Read this way" (except where it carries an interpretive conditional), "The point matters especially", "The ontological consequence is direct".
- **Repeated stock phrases varied or cut:** "the discipline working as intended", "declared before scoring", "robust macro-level commitment/standing", "earns its keep".
- **Duplicates removed.** A second copy of "ideal limit of the criterion rather than the criterion itself" and a triple denial in the causation subsection.
- **Long paragraphs split** where they carried two arguments, for example the structural and procedural replies on regime circularity.

## Audit fixes (qualifications restored)

- **HIGH:**
  - "too weak a basis for *robust* realist claims" (restored "robust" so qualified standing is not ruled out).
  - Ladyman and Lorenzetti paragraph: restored "not whether it belongs to a single final inventory of being". The draft wording had presupposed such an inventory.
  - Primacy of Physics: restored the "Read this way" conditional in place of a new, stronger "internal to rainforest realism" claim.
- **MED:**
  - Restored the anti-Woodwardian guard ("not a retreat to fundamental causal ontology").
  - Restored "not to compete with" effective realism.
  - Restored the Meyer reply as a full concession, including "not a failure of the criterion".
  - Restored the unqualified "the admissible class is not arbitrary".
  - Restored "Parasitism" as a technical term, not a metaphor.
  - Restored Dewhurst's credit for identifying the gap.
  - Restored the term of art "explanatory admissibility".
- **LOW:**
  - Restored the "which is why" inferential link, and "not silence" for qualified verdicts.
  - Restored "declared" constraints where it carries the declare-before-scoring discipline.
  - Fixed a garden-path sentence in the formal-machinery section, a dangling opener in the conclusion, and an ambiguous "three contributions" in the introduction.

## Checks

- No em dashes, no stray control characters.
- Both `-sn.tex` and `-sn-submission.tex` compile (pdflatex, bibtex, pdflatex twice) with no undefined references or citations.
- The paper went from 2470 to about 2420 lines. The reduction is repetition and signposting; no argument was removed.
