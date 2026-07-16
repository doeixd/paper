# Summary: Resolving the Leakiness Tension by Indexing It to a Distribution (Phase 3)

## The problem

The review's fourth objection was that the paper's canonical leakiness measure,
`I(X_t; Z_{t+1} | Z_t)`, is a purely observational quantity, and so "instantiates
exactly the weak reading of screening off that the paper's central argument says is
insufficient." The prediction was that "a referee will poke this."

The two preceding passes made the objection worse rather than better. The reframe
committed the paper to closure being the modal reading of screening off, which makes a
canonical observational diagnostic anomalous rather than merely awkward. The
countermodel then turned the anomaly into an outright refutation: in the common-cause
proxy, screening off holds strictly, so `I(X_t; Z_{t+1} | Z_t)` is *exactly zero*
under the observed joint, while the candidate fails transition autonomy. The paper's
headline diagnostic returned perfect closure for the paper's headline example of
failed closure.

That is not a presentational blemish. A measure that certifies a candidate the
criterion must reject cannot be the criterion's target quantity.

## The diagnosis

The measure was not wrong, it was underspecified, and the underspecification is the
same one the paper diagnoses everywhere else. A conditional mutual information is
defined relative to a joint distribution. The notation `I(X_t; Z_{t+1} | Z_t)` does not
say which distribution over within-class realizations is intended. Read against the
observed joint it is an observational quantity; read against a distribution in which
`X_t` is set by intervention it is a modal one. The paper had been asserting the modal
reading of screening off while quietly computing the observational reading of leakiness.

So the repair is not to replace the measure or to bolt intervention-response on as a
separate leg. It is to apply the paper's own central distinction to its own diagnostic.

## What changed

**§4.2 rewritten** (title changed from "Leakiness as Canonical Target" to "Leakiness
and the Distribution It Is Indexed To"; the `\label` was kept, since §5 references it).
The section now:

1. States the measure, then states why it is incomplete as stated, using the
   countermodel as the demonstration rather than as an aside.
2. Splits it into two quantities with different evidential roles:
   - **Observational leakiness**, evaluated under the observed joint. A screening
     diagnostic: cheap, needs no interventional access, and *convicts* immediately when
     non-negligible, since micro-detail that improves macro-prediction within the
     observed process is heterogeneity the partition failed to absorb. It cannot
     *acquit*: zero shows only that the visited realizations are homogeneous, which is
     consistent with borrowed autonomy.
   - **Admissible leakiness**, evaluated under the distribution in which `X_t` is set
     by an admissible intervention ranging over reachable realizations. This is the
     criterion's quantity, and it vanishes for every admissible intervention
     distribution just in case transition closure holds as stated in §2.3.
3. Explains why the distinction has gone unremarked: the two coincide whenever the
   observed process visits the reachable realizations with appreciable weight, which is
   the normal case. They separate exactly in parasitism cases, where the observed
   support is confined to a homogeneous subset of a heterogeneous class.
4. Ties the exact benchmark in. Strong lumpability is the limiting case in which
   admissible leakiness vanishes for *every* distribution supported on a macroclass;
   weak lumpability is what observational leakiness can certify. The proxy is weakly
   but not strongly lumpable, and the two quantities separate on it for that reason.
5. Notes the asymmetry is the one already recorded in §2.10 (predictive adequacy can
   persist where interventional stability fails), and closes by refusing to overclaim:
   observational leakiness "remains the first thing to compute and the cheapest way to
   eliminate candidates. The claim is only that it screens rather than settles."

**Downstream consistency fixes.**

- "Leakiness is the default target quantity" became "Admissible leakiness is the target
  quantity, and observational leakiness is its most accessible screen," with a note
  that the proxy diagnostics inherit the same indexing.
- The anti-instrumentalist reply in §5.2 claimed that "leakiness measures ontic
  deficiency, not merely our ignorance." Unqualified, that is now false for the
  observational quantity. The reply now concedes that the "only predictive error"
  objection "has real force against the observational quantity, which is why that
  quantity screens rather than settles," and restricts the ontic-deficiency claim to
  admissible leakiness. This is a case where the split strengthens the reply by giving
  it something honest to concede.
- Checked the two other leakiness passages (§2.9 and §2.13). Both refer generically to
  "leakiness-centered diagnostics" and remain accurate under the split; no change.

## Why this improves the paper rather than patching it

Three things are now unified that were previously three separate moves. The wedge case,
the exact benchmark, and the non-ideal diagnostics all turn on one distinction: whether
a quantity ranges over the realizations a process visits or the realizations an
admissible intervention can reach. Screening off, strong versus weak lumpability, and
observational versus admissible leakiness are the same contrast at three levels of
description. The paper previously argued the first, asserted the second, and
contradicted itself on the third.

It also removes the referee's line of attack entirely. The objection was that the
canonical diagnostic instantiates the weak reading. The paper now says so first, says
why, shows the case where it fails, and states what replaces it.

## Checks performed

- Full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle. Clean, exit 0, zero
  undefined references. 50 pages, unchanged.
- Verified the rewritten section renders correctly, including the inline conditional
  mutual information and the cross-reference to the countermodel.

## Outstanding

1. **Length.** 50 pages, and the review's "cut it in half" recommendation remains
   untouched. This is now the largest unaddressed item. The objections section still
   has ten subsections, and several were written to defend framings the paper no longer
   holds. §5.1 ("Screening Off Already Suffices") in particular is now largely absorbed
   by §2.2, which concedes and presses the same point.
2. **The blinded submission file is still stale** and now lacks four passes of work: the
   Rosas correction, the reframe, the countermodel, and this split. It must be resynced
   from the main body before submission.
3. **Title.** Deferred pending Phase 2, which is now done. "Operationalizing Screening
   Off for Rainforest Admission" is defensible now that the countermodel earns the
   operational claim, but the question was flagged for a decision and has not been
   taken.
