# Summary: Third Review, Technical Precision Pass

The reviewer's closing advice was that "the best next move is not to add further
defenses, but to make the central countermodel and its formal consequence impossible to
misunderstand." This pass does that and nothing else. Five of the eight asks are
addressed; three are scope decisions recorded below.

## 1. Model update order made explicit (ask 2)

The reviewer was right that the timing was ambiguous. The old text said the subsystems
track their components "without lag" and gave `A_t = U^1_t` with a reset-dependent rule
for `B_t`, while the transition probabilities were discussed at `t+1`. Their questions
were fair and unanswerable from the text: does `C_t` fix `B_t` or `B_{t+1}`, when does
repinning occur, is the controlled process Markov on `X_t`?

Rewritten with a simultaneous update in which every variable at `t+1` is fixed by
variables at `t+1` or `t`, using their suggested form:

```
U^i_{t+1} = U^i_t xor N^i_{t+1}
A_{t+1}   = U^1_{t+1}
B_{t+1}   = C_{t+1} if R_{t+1}=1, else U^2_{t+1}
```

with `N^1, N^2` independent Bernoulli(q). Added the answer to their Markov question
directly: the reset line is an exogenous control input rather than a component of `X_t`,
and the controlled process is Markov on `X_t` once `(R_t, C_t)` is fixed.

The rewrite also produced a real gain. Substituting the update rule yields an identity
that was previously buried in the prose. Writing `V_t = U^1_t xor U^2_t` for the driver
parity, with `R_{t+1} = 0`:

```
Z_{t+1} = V_t xor (N^1_{t+1} xor N^2_{t+1}),   so   P(Z_{t+1} = V_t) = r
```

The macro-variable's future is fixed by the *driver* parity, not by its own current
value, and the two coincide exactly when the channel is dormant, since `Z_t = V_t`
whenever `R_t = 0`. That is the entire case in one line, and it makes the intervention
passage follow rather than assert: the future tracks `V_t` while the macrostate tracks
`V_t` only for as long as the channel stays dormant.

Re-verified in exact rational arithmetic under the new notation across `q = 1/20` to
`9/20`: the identity holds, observed realizations of a macrostate are homogeneous at
`r`, the reset-reachable realization sits at `1-r`, and `r != 1-q`.

## 2. Unconditional relevance stated with Franklin and Robertson's indexing (ask 3)

The reviewer caught real sloppiness. The old text gave both driver classes and then
concluded `P(A|LLD) > P(A)` flatly, which is false for half the microstates: driver
agreement raises the probability above 1/2, disagreement lowers it below.

Checked against their text. Their condition ranges over the lower-level descriptions
that subvene a *given* macrostate `B` and influence a macro-fact `A`, which together
"form an equivalence class, a collection of lower-level descriptions that subvene B and
influence macrofact A" (§3.1). So the condition is not a universal claim over all
microstates, and indexing to a fixed `B` dissolves the objection.

Now stated exactly: fix `A` as `Z_{t+1} = 0` and `B` as `Z_t = 0`; the descriptions
subvening `B` in the observed process are exactly those with `V_t = 0`, and each raises
`P(A)` from 1/2 to `r`, since `r - 1/2 = 2(q-1/2)^2 > 0`. Descriptions with `V_t = 1`
lower it to `1-r`, but they subvene `Z_t = 1` and belong to the class for a different
macrostate. The reviewer's objection dissolves once the indexing is explicit, but the
old wording invited it, and the paper claims to satisfy the criterion "in full", so it
had to be exact.

## 3. Weak lumpability qualified (ask 4)

Correct that the term's formulations vary with the initial distribution assumed. Adopted
the reviewer's safer wording almost verbatim, and pinned the strong-lumpability side to
a definition: strong lumpability in Kemeny and Snell's sense requires the coarse-grained
process to be Markov for *every* initial distribution (`kemeny1960`, already in the bib
and previously uncited here). The weaker side is now stated without the contested term:
"the observed process induces a Markov macro-process for its actual initial or
stationary distribution, while the partition fails strong lumpability over the full
microstate space."

## 4. The domain of the supremum defined (ask 5)

Their questions about `M_I` were all unanswerable from the old text. Adopted their
suggested definition: for each macrostate `z`, `R_I(z)` is the microstates with
`g(x) = z` reachable by interventions in `I` while preserving the regime, and
`M_I(z)` is the finite-support distributions over `R_I(z)` induced by randomized
mixtures of admissible interventions. The quantity is now a double supremum over `z` and
over `mu in M_I(z)`, and the conditioning on `Z_t` is dropped, since, as they note, it
is redundant once `mu` is confined to one macroclass.

## 5. Landauer cut (ask 7)

Two paragraphs gone. The reviewer's argument is decisive: closure is objective because
transition kernels and conditional independencies are physical facts, and no claim about
the energetic cost of agents tracking micro-detail is needed for that. The old passage
also invited exactly the questions they list (is the candidate system performing
prediction? would a pattern cease to be real if no organism exploited it?), which the
paper has no need to answer.

Replaced with a short statement of the non-thermodynamic answer, cross-referenced to
§2.12, which already makes the point better: the conditional independencies "exist
whether or not anyone computes them; they are the terrain, not the lens." `landauer1961`
is now uncited and bibtex omits it.

## Not done, and why

**Ontic versus evidential separation (ask 6).** Asked twice now, and right both times.
Their three-object framework (closure profile, evidential grade, commitment verdict) is
a genuine improvement. It restructures §2.13, §4.2, §4.8, §4.9 and the conclusion, and
it interacts with the length decision, since the same reviewer wants the
verdict-reporting protocol cut. Doing it before the scope decision risks careful work on
material that may not survive.

**Length (ask 1) and examples (ask 8).** Three independent reviewers have now said cut.
The signal is no longer arguable. But the cut list includes material the first reviewer
praised (phlogiston), material three sections structurally depend on (traffic), and the
apparatus that carries the circularity defense. This is a decision about what the paper
is. The reviewer's own framing is the right one: there is a focused paper about a false
positive in observational screening off, and a wider programme about disciplined
structural-realist ontology, and the first is ready now.

**Recommended final framing.** Their sharpened leading claim is better than the paper's
current one and should probably be adopted whenever the scope decision is taken:
screening-off tests evaluated on the observed distribution are support-sensitive; they
can certify a macrovariable because off-partition dynamics prevent the process from
visiting heterogeneous realizations of its macrostates; an intervention-indexed closure
test corrects this false positive. That states the defect, the mechanism, the repair, and
the range. It is more exact than "closure operationalizes screening off", which is the
current title's claim.

## Checks

- Countermodel re-verified in exact rational arithmetic under the new notation.
- Both targets build clean through the full bibtex cycle, exit 0, zero undefined
  references, 49 pages unblinded and 48 blinded.
- Verified the rewritten model, including the display equations, renders correctly.
- Submission regenerated from source; Downloads copy refreshed.
- 21,073 words. The precision additions offset the Landauer cut; length is unaddressed
  by design.
