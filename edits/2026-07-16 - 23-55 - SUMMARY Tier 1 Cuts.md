# Summary: Tier 1 Cuts

Removed 4,113 words across 13 sections. 21,709 to 17,598 words; 50 pages to 40. The
pre-cut state is tagged `pre-tier1-cut` and restorable with
`git checkout pre-tier1-cut -- latex/`.

## Why these thirteen

All four reviews converge on them, nothing outside them referenced them, and none
touches the core argument. The arithmetic that motivated the tier: the material all four
reviewers call indispensable comes to roughly 11,900 words, which is already the 10,000
to 12,000 target. So the cut is not a compression exercise. It is a question of which
of the remaining ~9,800 words go, and in what order.

**Seven objection subsections (2,579 words).** Causal Exclusion/Kim (588), Autonomy and
Pluralism (784), Markov Template (284), Formal Closure Collapses (126), Predictive
Success and Failure (210), Horizon-Relativity (316), Criterion Too Conservative (271).
Two remain, which are the two the reviews say to keep: Instrumentalism and Admissibility,
and Closure Is Too Strong. The third they name, that closure merely renames screening
off properly understood, is already answered in §2.2, where the concession is made
directly rather than resisted.

**Six other sections (1,534 words).** One Distributed / monetary (506), Conceptual
Contrast (282, already gutted and made redundant by the countermodel), Structural
Contrasts (274), Pattern Reality Versus Macro-Objecthood (187), If an Unusual Partition
Closes (159), Canonical Criterion Statement (126).

## The careful part

Cutting sections is where the previous illustration cut went wrong: it orphaned three
passages, and the build reported nothing because the labels still resolved. So the
dependency audit ran first, not after.

It found one real problem. `one-distributed-illustration` had two incoming references.
One was inside Autonomy and Pluralism, which was itself being cut, so it died with its
host. The other was live and load-bearing: §1.3's scope restriction pointed at the
monetary case to illustrate why induced closure can fail while stipulated rules persist.
That sentence is part of the induced/stipulated defense, so it was made self-contained
rather than dropped: "a currency can fail closure while its legal-tender rules persist
unchanged: what degrades is the induced infrastructure of enforcement and settlement".

Two further orphans were caught by scanning prose rather than references, since neither
used `\ref`:

- §4.6 opened "The monetary illustration is a useful case", a callback to a section no
  longer present. The paragraph is self-contained and does real work on sparse
  intervention access, so it now introduces itself: "Payment systems are a useful case,
  since direct intervention on them is rare and mostly not ours to perform."
- The objections preamble announced three standing commitments "throughout the replies
  below" for nine replies, and promised a sweep that no longer exists. Rewritten for two
  replies, with a pointer to §2.2 for the third objection, and with the causal-exclusion
  pressure now met inside the first standing commitment ("by target-indexing rather than
  by multiplying causes") rather than by a 588-word subsection.

The §1 roadmap needed no change: Sections 2, 3, 4, 5 and 6 all still exist and still do
what it says.

## Citations dropped

Fifteen bib entries are now uncited, ten of them newly: `ainsworth2009`, `andersen2025`,
`batterman2002`, `fodor1974`, `kim1998`, `kim2005`, `putnam1967`, `ross1995`,
`shapiro2000`, `woodward2003`. bibtex omits them, so nothing breaks.

This is a real consequence and worth stating plainly rather than burying. The paper no
longer cites Kim, Fodor, Putnam, or Ross 1995. Each was cited *because* the cut sections
existed: Kim only in the exclusion reply, Fodor and Putnam only in the
multiple-realizability discussion, Ross 1995 only in the monetary case. Citing them
without engaging them would be decoration, which the repository's own guidance rules out.
Woodward survives through `woodward2015` and `woodward2021`; the rainforest survives
through `ladyman2007`, which is Ladyman and Ross.

The one I would reconsider is `andersen2025`, a 2025 *Synthese* paper whose three uses
were all in cut sections. Reviewer 1 praised the currency of the 2024 to 2026
engagement, and this thins it slightly. Franklin and Robertson (2024), Rosas et al.
(2024), Ladyman and Lorenzetti (2024), Ladyman (2026), Jiang (2024, 2025), Wallace
(2024) and Meyer (2026) all remain, so the engagement is still current. Re-placing
Andersen would mean finding her a job in a kept section, which is adding, and the reviews
say stop adding.

## Verification

- Dependency audit before cutting; reference audit after. No dangling `\ref` targets, no
  cited keys missing from the bib, no cited works missing from `references.md`.
- Prose scan for orphaned mentions of cut material: monetary, Kim, exclusion, multiple
  realizability, near-tie, time-of-day, immunity, Andersen. All clear after the two
  fixes above.
- Confirmed the core survives in the rendered PDF: §2.2, the identity claim, the
  latent-driver countermodel with its reset channel and `V_t` identity, the structural
  novelty argument and its ambiguity reply, the hidden-feedback case, Kemeny and Snell
  on strong lumpability, the leakiness split with the kernel definition and equivalence
  lemma, Meyer, the conditional conclusion, and phlogiston.
- Both targets build clean through the full bibtex cycle. 40 pages unblinded, 39
  blinded, zero undefined references. Downloads copy refreshed.

## Where this leaves the plan

17,598 words. Tier 2 (the structured-space programme, ~620 words in "Closure,
Underdetermination, and Commitment") and Tier 4 (trims to Regime Individuation and
Primacy of Physics, ~800) remain straightforward.

Tier 3, the verdict and reporting apparatus (~2,400 words across Verdict Rule,
Procedural Safeguards, Failure Conditions, Regime Dependence, Sparse Intervention,
Stable-versus-Entailed, Admissibility Disputes), should still wait for the
ontic/evidential split. That split has now been requested three times, it restructures
exactly this material, and doing it first should absorb most of the compression rather
than requiring the same sections to be rewritten twice.

Keeping phlogiston, in Stable-versus-Entailed, against reviewers 3 and 4 and with
reviewer 1, who said it "lands well". It is the paper's only illustration of a
downgrade, which is the discipline the whole verdict apparatus exists to enforce.
