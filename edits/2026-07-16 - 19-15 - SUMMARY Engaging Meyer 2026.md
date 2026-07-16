# Summary: Engaging Meyer 2026, and Declining Atkinson and Peijnenburg

## What was reviewed

Three files in `sources/` were untracked, marking them as recent additions:

- `sources/FRAEIT-2.pdf` — Franklin and Robertson, already identified and documented in
  `sources/FRANKLIN-ROBERTSON-VERSIONS-README.md`.
- `sources/s11229-021-03165-w.pdf` — Atkinson and Peijnenburg, "Screening off
  generalized: Reichenbach's legacy," *Synthese* 199:8335–8354 (2021).
- `sources/s11229-026-05634-6.pdf` — Meyer, "Dependence, novelty, autonomy and the
  emergence of spacetime," *Synthese* 207:261 (2026).

Neither of the latter two was cited anywhere in the bibliography.

## Atkinson and Peijnenburg: declined

The title is a near-perfect match for this paper's subject and the content is not. Their
question is the **transitivity** of probabilistic causality and support, running through
Reichenbach, Eells and Sober (1983), Shogenji (2003), Suppes (1986) and Roche (2012),
and ending in a generalized screening-off condition that is still sufficient for
transitivity and can be "made as weak as one wishes." Their paper contains zero
occurrences of "intervention," "causal Markov," "macro," "coarse," or "emergence." It
shares a phrase with this paper, not a problem.

Citing it would be decorative, and `CLAUDE.md` is explicit that citations should be
appropriate rather than ornamental. Declined deliberately, and recorded here so the
decision is not silently revisited.

One observation from it is worth keeping in mind without citing: the screening-off
tradition's own development has run toward *weaker probabilistic* conditions and never
toward modal ones. That corroborates the paper's diagnosis, but Franklin and
Robertson's text establishes the same point directly and better.

## Meyer 2026: engaged, in two places

Meyer is the most useful item in the folder, and it cuts both ways.

**Why it helps.** It is a *Synthese* paper (this paper's target venue), accepted May
2026, that engages Franklin 46 times and Robertson 25. It surveys three approaches to
emergence and declares the Franklin and Robertson conditional-probability approach the
winner: "unlike the other views, this third option fulfils all the desiderata and is
the most generally applicable of the options discussed here." And it uses "conditional
probability" 26 times, "autonomy" 45 and "novelty" 67, while containing no `do()`
operator and only four passing mentions of intervention.

Most usefully, Meyer does not merely apply the package, he generalizes it and states
the target claim outright, defining dependence as unconditional relevance and
**autonomy as conditional irrelevance**, `P(E2|E1&B) ≈ P(E2|E1)` (p. 19). That is the
observational reading serving as the *definition* of autonomy, which is exactly the
identification this paper argues underdetermines what it is meant to secure. The
paper's thesis therefore stops being an observation about one 2024 article and becomes
a live problem in an active programme.

**Why it threatens.** Meyer does not overlook interventionism, he considers it and
sets it aside with reasons. His desiderata include avoiding spatiotemporal
presuppositions and preserving metaphysical neutrality, and he notes that
interventionism is contested as a metaphysics of causation and that in quantum gravity
it may presuppose a partial ordering of events the physics denies. So he has a
principled case that the observational reading is a feature: it travels where
intervention-indexing cannot. That is sharper than the sparse-intervention worry the
paper already answers in §4.6, which concedes only that interventions can be "sparse,
ethically constrained, or expensive." Meyer's point is that they may be unavailable in
principle.

**Changes made.**

1. **§1.1, novelty point 1.** Added Meyer as evidence that the observational reading is
   "not a peculiarity of one paper," quoting his definitions with the page pin. This is
   the strongest available answer to a referee who suspects the paper is attacking a
   stationary target.
2. **§1.2, the causation worry.** Added a direct reply to Meyer's principled objection,
   framed as a concession rather than a rebuttal, since the objection is a good one.
   Where no admissible intervention class can be specified, the criterion returns
   *indeterminate* rather than robust, which is the downgrade discipline working as
   designed rather than failing. The scope claimed is induced closure in systems with a
   control ecology (§1.3), and within that scope the observational reading is not
   neutral between autonomous and parasitic candidates. The two projects answer
   different questions: his asks what travels into domains where intervention talk may
   not apply, this one asks what settles admission where it does. "The cost of the
   neutral reading is that it cannot discriminate exactly where discrimination is
   possible."
3. **Neighbouring traditions list** in §1.1 and the **conclusion's literature roll-up**
   now include `meyer2026`.
4. **Bibliography**: added `meyer2026` to the `.bib`, and the Chicago-format entry to
   `references.md` in its alphabetical slot between Mendelovici and Moghaddam.

The reply was placed in §1.2 rather than in the objections section deliberately. It
belongs where the paper explains why intervention is a diagnostic probe rather than a
metaphysical primitive, since Meyer's worry is precisely that the probe carries
metaphysical baggage. Putting it there also avoids adding a tenth objection subsection
to a section already flagged as over-long.

## Checks performed

- Both new PDFs extracted and read, with ligatures normalized (the same "ﬀ"/"ﬁ" trap
  documented in the Franklin and Robertson README).
- Meyer's definitions located on printed page 19 of 31 (§5) and pinned accordingly.
  Page pins are safe here, unlike Franklin and Robertson, because this is the published
  version of record and Springer numbers it "Page X of 31" under article 261.
- Full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle. bibtex clean, exit 0 at every
  stage, zero undefined references, 48 pages.
- Confirmed `meyer2026` resolves in the generated `.bbl` and that all six in-text
  mentions plus the bibliography entry render correctly.

## Outstanding

Unchanged. The stale blinded submission file is still the highest-value remaining task;
it now lacks seven passes of work, including this one.
