# Summary: Responding to the Second Review

Six of the review's asks were well-specified enough to act on directly. Two are
structural and are recorded as decisions rather than executed. Taken in order of the
review.

## 1. The model was not a shared-common-cause model (accepted, renamed)

The reviewer is right, and this is a correction rather than a clarification. The
countermodel uses two independent driver components, one per subsystem. Their joint
state is upstream of both the present and the future parity variable, but nothing
synchronizes the subsystems in the ordinary common-cause sense.

Worth recording honestly: this mismatch was noticed during construction and papered
over rather than fixed. The prose was adjusted to redefine "common cause" as the driver
being a common cause of `Z_t` and `Z_{t+1}`, which is true but is not what "a composite
of two subsystems driven by a shared upstream process" says. The reviewer caught the
residue.

Renamed to the **latent-driver proxy** throughout, which the reviewer identifies as the
easiest and best option and which is also the honest one: borrowed autonomy is the
general category, and a shared cause is only one realization of it. Fourteen call sites
updated, plus the section heading. No `\label` depended on the old name. The §3.3.1
opening now says explicitly that what matters "is not that a single cause synchronizes
the subsystems, which is only one way the structure can be realized, but that the driver
process is upstream of both the composite's present state and its future state."

## 2. Admissibility built into the model (accepted, and it improves the argument)

Adopted the reviewer's suggested control variable. The system's specified dynamical
ecology now includes a reset line on `B` carrying a value `C_t`:

```
B_t = C_t    when the reset channel is actuated
      U^2_t  otherwise
```

This is better than the defensive reply it replaces. The intervention is no longer an
informally imagined manipulation defended after the fact; it is an ordinary actuation of
a channel that belongs to the system's specification. The objection that the perturbation
"forces the system off its normally occupied manifold and therefore leaves the regime"
now has a direct answer: the synchronized manifold was never a constraint the dynamics
imposed, but a restriction on the observed *distribution* produced by leaving an
available channel unused.

That sharpens the paper's central point rather than merely defending it. The gap between
observational and admissible evaluation is exactly the gap between which channels are
exercised and which exist.

## 3. Novelty made structural rather than numerical (accepted)

The reviewer is right that a difference in transition parameter is not automatically a
difference in dependency type, and that this is where a sympathetic defender will
concentrate. The novelty item now leads with the structural claim in close to the
reviewer's own words: `Z`'s macrodependency relates parity classes to later parity
classes, and neither its relata nor its transition partition coincide with those of
either component process. The numerical difference (`r != 1-q`) is demoted to a symptom,
with the added observation that "were the parameters to coincide, the macrodependency
would still not be either component's, because it would still be defined over different
relata." That makes the argument independent of the parameter values.

## 4. "So the proxy is admitted to the rainforest" moderated (accepted)

Correct catch, and it matters because the thesis is underdetermination rather than
refutation. Now: "So the stated implementation of the criterion returns a pass. That is
weaker than saying the proxy belongs in the rainforest, and the weaker claim is the one
the argument needs... Whether Franklin and Robertson's broader modal intentions would
exclude it is exactly the question at issue."

## 5. Admissible leakiness formalized (accepted)

Given a definition rather than a gesture, using the reviewer's first suggestion:

```
Lambda_I(Z) = sup over mu in M_I of I_mu(X_t ; Z_{t+1} | Z_t)
```

where `M_I` is the set of distributions over within-class realizations reachable by
interventions in the admissible class. The supremum is doing philosophical work and the
text now says so: taking a supremum rather than an average "is what makes the quantity a
test of the candidate rather than of a sampling policy: a partition does not earn robust
standing by being homogeneous under some convenient weighting of its realizations."

The reviewer's second suggestion is included as an equivalent and more estimable
pairwise form, requiring that admissibly reachable `x, x'` with `g(x) = g(x') = z` induce
the same macro-transition kernel. Noted that in the latent-driver proxy the observational
quantity is exactly zero while both admissible forms are strictly positive.

## 6. Rhetoric cooled (accepted, all five)

All five flagged formulations are gone, verified absent from the built PDF:

- "the decisive case" -> the section is now simply "A Latent-Driver Proxy".
- "a defender who grants the modal reading has thereby granted the criterion" -> replaced
  with the reviewer's own calmer formulation, that the intervention-indexed reading "is
  offered as one principled way of making the intended modal content operationally
  discriminating."
- "a realism criterion without withdrawal conditions is not a criterion at all. It is an
  assertion." -> "is harder to assess, since nothing it rules out is stated in advance."
- "a problem the world itself has largely solved" -> "at least partly settled by the
  regime itself, since which control channels exist is not something the analyst decides.
  That does not make the choice automatic, and it is not claimed to."
- "refusing any ontological standing starts to look like an empty verbal policy" ->
  "withholding ontological standing is a position that owes an account of what further
  condition realism was supposed to require."

## 7. Separating ontic closure from evidential warrant (not done; recorded)

The reviewer is right that the decision rules mix two things, and the proposed
three-layer framework (closure profile, evidential status, commitment verdict) is a
genuine conceptual improvement rather than a presentational one. It is also a
restructure of the verdict apparatus that touches §2.13, §4.2, §4.8, §4.9 and the
conclusion, and it interacts directly with the length decision, since the reviewer also
wants the verdict-and-reporting protocol cut. Doing it before the length question is
settled risks careful work on material that may not survive. Flagged for a decision
rather than guessed at.

## 8. Length (not done; now a two-reviewer signal)

Two independent reviewers now say cut by roughly half, and the second supplies a target
(9,000 to 12,000 words) and a six-section shape. That is a stronger signal than one
reviewer's aesthetic judgement, and it moves my earlier recommendation.

The countervailing facts remain: Synthese prescribes no limit, its rule of thumb is 15 to
30 printed pages, and the manuscript is around 37. The cut list includes material the
first reviewer praised (phlogiston) and material that is load-bearing for the apparatus
(traffic, which three sections depend on). But the second reviewer would cut the
apparatus too, which makes that objection circular rather than decisive.

My assessment is that the reviewer's diagnosis is correct: the manuscript "sometimes
reads as though it is responding to several rounds of imagined referee reports before a
referee has identified which objections actually matter." That is a fair description of
what happened. The honest response is that this is now a decision about what the paper
is, not a cleanup task, and it should be made deliberately rather than by an agent
trimming defenses it judges expendable.

## Checks performed

- Full `pdflatex -> bibtex -> pdflatex -> pdflatex` on both targets. Clean, exit 0, zero
  undefined references. 50 pages unblinded, 49 blinded.
- Verified in the rendered PDF: the reset channel case split, the moderated pass claim,
  the structural novelty argument, the supremum definition, the pairwise kernel form, and
  the latent-driver rename.
- Verified absent from the rendered PDF: "common-cause proxy", "the decisive case",
  "empty verbal policy", "not a criterion at all", "largely solved".
- Blinded submission regenerated from source and rebuilt; Downloads copy of the unblinded
  PDF refreshed.
