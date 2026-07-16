# Summary: Correcting the Rosas Causal-Closure Characterization (§3, "How the Formal Machinery is Used Here")

## What prompted this

`random/sol-convo.md` (a close, charitable review of the 47-page draft the
reviewers saw) flagged that the paper's characterization of Rosas et al.'s causal
closure as "Granger-style" was load-bearing but unverified against their text. The
review warned this was the claim "a knowledgeable referee catches fastest."

Verification against `sources/Software in the natural world.pdf` (33pp, full text
extracted) confirmed the concern was warranted, but not in the way expected. The
claim survives. Its supporting detail was wrong in two specific ways.

## What was wrong

1. **Misattributed definition.** The draft said causal closure is the condition that
   "a macro-variable is causally closed when its own past screens off micro-level
   pasts from its own future." That is Rosas et al.'s Definition 4 (*information*
   closure), not causal closure. Their Definition 3 defines causal closure as
   equivalence between the coarse-grainings induced by a process's epsilon-machine
   and its upsilon-machine. Because their Theorem 1 proves the two equivalent, the
   gloss was not false, but it stated the theorem's conclusion as though it were the
   definition. Rosas is a plausible referee for this paper; this is exactly the sort
   of error that damages credibility out of proportion to its size.

2. **Dropped conditional.** The draft asserted flatly that causal closure "is a
   Granger-style condition defined over the observed process." Rosas et al. actually
   say it provides counterfactual guarantees *if the system is fully observed*, and
   "otherwise ought to be understood in the Granger sense." Stated unconditionally,
   the paper contradicted them precisely where it should have been agreeing with
   them.

3. **Citation pin.** `Sec. III.B` was cited for a definitional claim, but Definitions
   3 and 4 appear in their Appendix; Section III is where the notions are introduced
   in prose and where the Granger caveat appears. Pins now match the claims they
   support: `Def. 3`, `Def. 4`, and `Sec. III` for the caveat.

## What changed

Rewrote the Rosas passage in `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`
(§3, "How the Formal Machinery is Used Here"). The revision:

- States Definitions 3 and 4 accurately, with correct pins, and notes that both are
  defined over the observed process. This is what actually supports the paper's
  point, and it supports it better than the misattributed gloss did.
- Quotes the full-observation proviso directly rather than paraphrasing it away.
- Adds the substantive move the verification made available: the divergence between
  observational and interventional closure "is not a counterexample to their result.
  It is the region their own full-observation proviso exempts." Off-partition
  structure is unobserved structure, so the Granger reading is the operative one, and
  the counterfactual guarantee lapses exactly where parasitism becomes possible.

## Why this is a stronger position

The common-cause proxy and Rosas et al.'s full-observation caveat are the same
point seen from two directions. The proxy works *because* the shared driver is
off-partition, which just is the "not fully observed" case they exempt. The paper is
therefore not catching Rosas et al. in an error; it is drawing the ontological
consequence of a limitation they conceded and treated as a modelling footnote.

This also explains the otherwise puzzling fact that Rosas et al. speak
interventionist informally ("causally closed levels can be efficiently controlled
from just macroscopic interventions"; such a process "causes itself") while their
formalism remains observational throughout, with no `do()` operator anywhere. The gap
between interventionist motivation and what the statistics licenses is the paper's
opening. That is a more resilient claim than "their criterion is observational and
mine adds intervention," because it does not require Rosas et al. to have been
careless, and it aligns with the same diagnosis the paper makes of Franklin and
Robertson's screening off.

Per the defensibility principles in `CLAUDE.md`: the correction adds precision
without weakening the claim, and it removes an unguarded overreach (the dropped
conditional) that a hostile reader could have used to discredit the surrounding
argument.

## Checks performed

- Extracted and read the relevant portions of Rosas et al. directly; confirmed
  Definitions 1-7, Theorem 1, and the Granger caveat verbatim.
- Built `real-patterns-need-closure-SYNTHESE-sn.tex` with the MiKTeX pdflatex path
  specified in `CLAUDE.md`. Clean compile, exit 0, 47 pages (unchanged).
- Verified the corrected passage renders correctly in the output PDF, including the
  inline math for the conditional mutual information.

## Outstanding issues found but not addressed

1. **The blinded submission file is stale.** `real-patterns-need-closure-SYNTHESE-sn-submission.tex`
   (2,251 lines) is a significantly out-of-date inlined snapshot of the main body
   (2,570 lines). It lacks the Granger passage entirely and still uses the abandoned
   "macro-objecthood" / "Objecthood claims" terminology that the main body has since
   replaced with "robust macro-level commitment." `CLAUDE.md` designates this file as
   the one to upload for blinded submission, so it must be resynced from the main
   body before any submission. The reviewed PDF was built from the main body via
   `-sn.tex`, so reviewers did not see the stale text, but the divergence is a live
   submission hazard.

2. **The §4 leakiness tension remains.** §4.2 still calls the observational CMI
   `I(X_t; Z_{t+1} | Z_t)` the "canonical quantity" for leakiness. That is the exact
   observational reading the paper's central argument says is insufficient. This
   correction sharpens rather than resolves the tension, since the Rosas passage now
   states more explicitly that observational diagnostics do not license counterfactual
   conclusions absent full observation. Planned as a later pass (demote to screening
   diagnostic; the criterion remains the interventional test).

3. **The common-cause proxy is still verbal.** §3.3.1 has no formal countermodel.
   Under the reframing under consideration, the proof obligation is to exhibit a case
   that passes the observational test and fails the modal one; prose will not
   discharge that.
