# Summary: Fixing the Novelty Inconsistency in §3.3.2, and the §2.12 Overreach

## The defect

The previous pass corrected Franklin and Robertson's novelty condition in §3.3.1,
establishing that novelty requires *distinct macrodependencies* marked by
cross-classification, and that a dependence merely being statable at the macro grain is
not enough, since that is the reading their binary star already excludes.

It left the identical error two pages later. §3.3.2 asserted of the hidden-feedback
case: "novelty is present: the hidden relaxation is fast enough that its effects
register as instantaneous properties of the macro-state rather than as a separable
dynamical layer." That is exactly the gloss §3.3.1 had just refuted. The paper was
running two incompatible novelty standards inside one section, and the second was the
discredited one.

The knock-on effect was worse than the local inconsistency. The paper leans repeatedly
on "two structurally different wedges," and the conclusion cites both. But one had
become a verified countermodel and the other remained a story resting on a criterion
the paper itself rejects. Whether hidden-feedback parasitism survived the real novelty
condition was simply unknown, and the single-driver proxy's failure of that condition
gave live reason to doubt it.

## The fix

Rather than patch the wording, the case now gets the same rigor as the first, which
turned out to be cheap because the skeleton transfers.

Retain the two subsystems and the candidate `Z = A xor B`, and replace the external
drivers with two fast hidden variables `H1` and `H2` that relax toward the subsystems
they track. The micro-state is `(A, B, H1, H2)`; each subsystem's next value is its
hidden variable's current value flipped with probability `q`, after which the hidden
variables re-equilibrate. Because relaxation is fast relative to observation, the
observed process never leaves the equilibrated manifold `H1 = A`, `H2 = B`.

The verdicts follow for the same reasons as before:

- **Novelty**: on the manifold each subsystem is an independent symmetric walk with
  persistence `1-q`, so `Z` is a symmetric chain with persistence `r = q^2 + (1-q)^2`,
  which differs from `1-q` and cross-classifies the subsystem states. Satisfied on
  Franklin and Robertson's actual condition.
- **Strict conditional irrelevance**: each macrostate is realized in the observed
  process only by equilibrated configurations, which are homogeneous in onward profile.
- **Closure fails**: an admissible perturbation acting faster than the relaxation sets a
  subsystem while its hidden variable is still stale, reaching a realization of the same
  macrostate in which the hidden variables disagree, whose onward profile is `1-r`
  rather than `r`.
- **Admissibility**: same three respects as the first case. Physically available
  channel, dynamics untouched, re-equilibration within a step so the regime is preserved
  and the deviation is a transient.

Verified in exact rational arithmetic across `q = 1/20` to `9/20`: observed realizations
homogeneous, deviant reachable realization at `1-r`, and `r != 1-q` throughout.

## An honest adjustment to what the two cases show

The follow-on paragraph claimed the two cases are "structurally different." Now that
they share a formal skeleton, that claim needed to be made precise rather than left to
overclaim. The revised text says they differ in the *source* of the borrowed stability
rather than in the shape of the failure: exogenous and persistent in one, endogenous and
fast in the other.

The shared skeleton is then presented as the substance of the claim rather than an
embarrassment. What generates the gap in both is one structural fact, that the observed
process visits only a homogeneous subset of a heterogeneous macroclass, and the two
sources show the fact does not depend on where the off-partition structure sits. This is
also what the second case was always for: not a second bespoke counterexample but
evidence for a general category of borrowed autonomy.

## §2.12 overreach

The section is careful to make the ontological step conditional on the paper's stated
commitments, then undercut itself with: "The demand for a further metaphysical
foundation beyond stable dynamical autonomy under admissible intervention mistakes a
philosophical habit for a substantive requirement." That is assertion, not argument, and
it is the sentence a hostile reader would quote as evidence that the paper does
metaphysics by fiat, which is precisely the review's second objection.

Replaced with an explicit concession: the claim is a consequence of the stated
commitments rather than an independent argument against those who reject them; a
grounding theorist who wants a further foundation "is not making a mistake by the lights
of their own view," but declining the methodological path at the outset, so the
disagreement is about the path rather than about closure. Readers who decline it still
inherit the anti-gerrymandering result, which does not depend on the ontological
reading.

This costs nothing the paper was entitled to and removes an unguarded claim, which is
the trade `CLAUDE.md` asks for: qualifications are load-bearing precision, and a
conditional stated honestly is harder to attack than a conditional dressed as a verdict.

## Checks performed

- Hidden-feedback countermodel verified in exact rational arithmetic across the
  parameter range.
- Confirmed the refuted gloss ("register as instantaneous properties") no longer appears
  anywhere in the manuscript.
- Confirmed both parasitism cases now invoke the same novelty standard, each referring
  to the binary-star exclusion and to cross-classification.
- Full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle. Clean, exit 0, zero undefined
  references, 49 pages. 20,604 words.
- Verified both rewritten passages render correctly, including the superscripted hidden
  variables and the XOR.

## Outstanding

1. **No real worked case.** The criterion has still never been applied to an actual
   system with actual intervention evidence. Both parasitism cases are now rigorous, and
   both are idealized. The review's "replace one toy example with one real worked case"
   remains the single most valuable unaddressed item, and it is the difference between a
   worthwhile refinement and an important paper.
2. **Admissibility carries the verdict.** The countermodels sharpen this rather than
   settling it: the whole difference between the proxy failing and a hurricane passing
   is which interventions are admissible. The three constraints handle both cases
   correctly, so the criterion is not vacuous, but in a stipulated model the author
   declares admissibility, whereas in a real dispute that is what is being argued about.
3. **The stale blinded submission file**, now lacking eight passes.
