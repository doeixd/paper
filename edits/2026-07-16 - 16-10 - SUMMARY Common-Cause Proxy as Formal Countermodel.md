# Summary: Making the Common-Cause Proxy a Formal Countermodel (Phase 2)

## Why this was the priority

The reframe in the previous pass committed the paper to the thesis that screening off
and transition autonomy are one modal property, and that Franklin and Robertson's
stated test fixes only its observational shadow. That raised the proof obligation.
When closure was billed as an *additional* condition, a merely verbal wedge case was
survivable. Once the thesis is that the two readings *come apart*, the paper must
exhibit a candidate that demonstrably satisfies their conditions and demonstrably
fails closure. The review put it plainly: if the case "remains only verbal, reviewers
may say that the original criterion was always intended modally."

## The discovery that changed the design

`sources/FRAEIT-2.pdf` is Franklin and Robertson's paper. It has been in the repo all
along. `FRAEIT-2` is its PhilPapers identifier, and earlier searches missed it because
the PDF renders "off" with the "ﬀ" ligature, so no search for "screening off" ever
matched it. It should have been found by DOI.

Reading it produced one confirmation and one serious problem.

**Confirmed.** Their conditions are stated purely probabilistically, with no
intervention operator:

- Unconditional relevance: `P(A|LLD) > P(A)`
- Conditional irrelevance (strict version): `P(A|B & LLD) = P(A|B) = x`

This is exactly the observational reading. They gesture at interventionism (they cite
Woodward 2021, describe conditional irrelevance as "akin to the causal Markov
condition in a multi-level setting," and note that "the interventionist framework
generalises to a multilevel framework"), but the stated test is unindexed conditional
probability. The paper's central claim about their test is now verified rather than
assumed.

They also hand the paper its gap. They relax the strict condition to accommodate
"deviant microstates," members of the equivalence class that the microdynamics do not
carry to the target, and treat these as degrading screening off from exact to
*approximate*. That treatment is distribution-relative: deviant microstates count
against screening off in proportion to being instantiated. A deviant microstate with
zero observational weight but non-zero admissible reachability is invisible to the
condition. That is precisely the wedge, stated in their own vocabulary.

**The problem.** The draft misstated their novelty condition. It said the proxy "has
macro-level novelty because the dependence is captured at the proxy grain rather than
by listing the underlying microconfiguration." That is not their condition. Theirs is
that novelty requires *distinct* macrodependencies, and their own illustration is a
binary star system, which screens off the individual stellar trajectories yet is
denied admission because its dependencies "are just the same nomic dependencies that
describe the trajectories of the two individual stars." Their stated mark of novelty
is cross-classification: macro divisions cutting across micro divisions.

On the correct condition, the paper's canonical wedge case did not work. A macro
variable aggregating two subsystems slaved to a single shared oscillator is, in the
observed support, a relabeling of that oscillator. Its law is the oscillator's law.
Franklin and Robertson exclude it on novelty without ever needing closure, for exactly
the reason they exclude the binary star. The wedge would have died on their existing
criterion.

This is a general obstacle, not an artifact of one construction. If the macro
variable's stability is borrowed from a single driver and screening off is *exact*,
then within the observed support the macrostate must determine the driver state, so
the macro variable is a bijective recoding of the driver and its macrodependency is
the driver's dependency relabeled. Exact screening off plus single-driver borrowing
entails failure of novelty.

## The escape, and the countermodel

Exact screening off does not require the macrostate to *determine* the micro-state. It
requires the observationally *visited* realizations of each macrostate to be
homogeneous in their onward macro-profile. That leaves room for a candidate that is
multiply realized, cross-classifies its drivers, carries a law of genuinely different
form, and still conceals deviant realizations reachable only by intervention.

Two drivers and an agreement variable do exactly this. Let `U1` and `U2` be
independent symmetric two-state Markov chains flipping with probability `q`, for
`0 < q < 1/2`. Let `A` and `B` be subsystems tracking their respective drivers without
lag. The micro-state is `X = (U1, U2, A, B)`; the candidate macro-variable is the
agreement `Z = A XOR B`. Write `r = q^2 + (1-q)^2`.

- **Unconditional relevance** holds: `P(Z'=0|X)` is `r` when the drivers agree and
  `1-r` when they disagree, while the stationary `P(Z'=0)` is `1/2`, and
  `r - 1/2 = 2(q-1/2)^2 > 0`.
- **Conditional irrelevance holds strictly, not approximately.** When `Z=0` the
  observed process visits only `(0,0)` and `(1,1)`, both yielding `r`; when `Z=1` it
  visits only `(0,1)` and `(1,0)`, both yielding `1-r`. So
  `P(Z'|Z,X) = P(Z'|Z)` exactly.
- **Novelty holds.** `Z` is a symmetric chain with persistence `r`, while each driver
  has persistence `1-q`, and `r - (1-q) = q(2q-1) != 0` for `q < 1/2`. The macro law
  is not the driver's law relabeled. And `Z` cross-classifies, lumping `(0,0)` with
  `(1,1)`, cutting across either driver's partition. This is their own mark of
  novelty, and the case is not the binary star.
- **Closure fails.** Intervene on `B` alone, leaving both drivers intact, to reach a
  realization of `Z=0` in which the drivers disagree. That realization yields
  `P(Z'=0) = 1-r`, against `r` for every observed realization of `Z=0`.

The intervention is minimal in the three ways the paper's admissibility apparatus
requires: it targets the candidate partition rather than the common cause, it is
regime-preserving (laws untouched, subsystems resynchronize the next step, so the
perturbation is a one-step transient), and it is independently admissible (setting a
subsystem's state is physically available wherever the subsystems are separately
manipulable).

All arithmetic was verified in exact rational arithmetic across `q = 1/20` through
`9/20`, confirming that screening off is exact, closure fails, and novelty holds
throughout the range, together with the three identities `r + d = 1`,
`r - 1/2 = 2(q-1/2)^2`, and `r - (1-q) = q(2q-1)`.

## The philosophical payoff

The diagnosis is now exact rather than suggestive. The proxy's clean macro-law holds
only because, in the observed process, `Z = 0` guarantees that the drivers agree. The
macro-variable never tracks that fact; it borrows it. Screening off quantifies over the
realizations the process happens to visit, and on those there is no heterogeneity to
detect. Transition closure quantifies over the realizations an admissible intervention
can reach, and there the heterogeneity is immediate.

This also connects the wedge to the paper's own exact benchmark, which previously sat
in a separate section doing separate work. The partition is weakly lumpable, since the
observed macro-process is genuinely Markov, but not strongly lumpable, since strong
lumpability demands equal onward macro-transitions for every microstate in a class
rather than only for those the observed distribution happens to weight. The
countermodel is therefore not an add-on; it is the reason strong lumpability is the
right benchmark.

## What changed

1. **§3.3.1**: replaced the incorrect novelty gloss with their actual conditions,
   quoted and correctly attributed, including the binary-star exclusion. Added the
   explicit statement that the simplest proxy fails novelty and that what follows is
   "the simplest one that survives their whole package." Added the countermodel, the
   admissibility discussion, and the strong/weak lumpability diagnosis. Framed the
   model explicitly as establishing possibility rather than frequency, per the
   repository rule that examples illustrate rather than prove: "Nothing here claims
   that such candidates are common in the special sciences."
2. **§3.3.1 opening and §1 preview**: the "shared upstream oscillator" description
   named the version that fails novelty. Both now describe the driver as a shared
   upstream *process* and state the actual common-cause structure, which is that the
   driver is a common cause of the proxy's present and future, so the apparent
   macro self-dependence is confounded. The five-step template was adjusted to match.
3. **Citation pins**: changed `p.~1`, `p.~3`, and my own new pins to section
   references (`\S1`, `\S3`, `\S3.1`, `\S3.2`). The copy we hold is the PhilSci/PhilPapers
   preprint ("Forthcoming in the European Journal for Philosophy of Science"), whose
   pagination will not match the published version cited in the bib (vol. 14, art. 61).
   Page pins taken from the preprint would have been wrong in the published article.
   Section numbers are stable across both. Both existing quotes were verified verbatim
   against the text.

## Checks performed

- Countermodel verified numerically in exact rational arithmetic across the parameter
  range, including homogeneity of observed realizations, heterogeneity of the
  intervention-reachable realization, and the novelty inequality.
- Full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle. Clean, exit 0, zero
  undefined references. 50 pages, up from 48.
- Verified the model renders correctly in the output PDF, including the XOR, the
  superscripted driver indices, and the inline probability expressions.

## Outstanding

1. **The audit surfaced one error in nine F&R citations.** The remaining eight check
   out: the introduction's gloss of novelty as "a dependency profile that is not
   type-identical to the realizing micro-dependencies" is accurate, the "admittance
   criteria for the rainforest" quote is verbatim, the trout-turkey framing is theirs,
   and §5.1's concession that "their criterion has the conceptual resources for the
   modal reading" is fair. The one error was the §3.3.1 novelty gloss, which was also
   the one doing load-bearing work in the wedge case.
2. **The §4 leakiness tension is now the most exposed remaining problem.** §4.2 still
   calls the observational CMI the "canonical quantity" for leakiness, and the paper
   now argues at length that observational quantities cannot settle admission. The
   countermodel makes this sharper still: in the model, the observational CMI is
   exactly zero while closure fails.
3. **The blinded submission file remains stale** and now lacks the Rosas correction,
   the reframe, and the countermodel.
4. **Length.** 50 pages. The review's "cut it in half" advice has not been addressed
   and now has more text to work against, though the countermodel is the one addition
   that buys its space.
