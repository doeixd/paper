# Summary: Reframing Closure as the Modal Reading of Screening Off (Phase 1)

## The problem

The draft argued for its thesis in the "two ingredients" form: screening off is
necessary but not sufficient, closure is the missing further condition. That framing
is strategically weaker than the argument it rests on, and it invites the one
objection the paper is least able to answer.

A referee sympathetic to Franklin and Robertson reads "screening off is insufficient,
here is my extra condition" and replies: screening off, correctly understood, was
always modal; you have not added a condition, you have spelled out what we meant. The
draft anticipated this (the objection had its own subsection, §5.1) but could only
answer it defensively, because it had conceded the framing that invites it. §2.2 was
titled "Why Closure is Not Just 'Screening Off Properly Understood'" and spent the
section resisting an identification that the paper's own machinery supports.

The stronger position is to accept the identification and press it. On the modal
reading, screening off and transition autonomy are not two properties but one. What
Franklin and Robertson's stated test leaves underdetermined is which reading it
secures. Closure is the test that recovers the modal content. This turns the most
dangerous objection into the paper's thesis: a defender of screening off who grants
the modal reading has granted the criterion rather than refuted it.

## What changed

Four locations, revised as one pass because they are mutually load-bearing. Splitting
them would leave the paper arguing against itself between sections.

1. **Abstract** (`real-patterns-need-closure-SYNTHESE-sn.tex`). Replaced "This paper
   argues that screening off is necessary but not sufficient... What is missing is a
   transition criterion" with the two-readings framing and the identity claim:
   "screening off and transition autonomy are not two conditions but one." The closing
   sentence now reads the contribution as "a correction to how an existing filter is
   read and applied rather than a rival to it." Both parasitism cases are now
   signalled in the abstract, since they are what makes the distinction non-verbal.

2. **§1, dialectical structure.** "Closure adds one further step" became "the
   criterion developed here specifies which reading of that filter earns admission and
   provides the test that discriminates it." The aim is now "to sharpen rainforest
   realism from inside its own commitments rather than to displace them."

3. **§1.1, novelty claim, point 1.** Retitled from "Operationalizing screening off's
   modal content" to "Recovering screening off's modal content" and rewritten to state
   the identity directly: the contribution "is not a second condition layered on top of
   screening off but a correction to how screening off is read." Franklin and
   Robertson's criterion is now explicitly "retained in full."

   Point 2 gained a clause tying the Rosas positioning to the same diagnosis: those
   diagnostics "are defined over the observed process, and their authors are explicit
   that the counterfactual reading requires the underlying system to be fully
   observed," which is why they secure the observational reading on their own. This
   clause is safe to assert only because of the verification done in the prior pass
   (see `2026-07-16 - 14-20 - SUMMARY Rosas Causal Closure Correction`); it is pinned
   to Sec. III, where the caveat actually appears.

4. **§2.2.** Retitled "Which Reading of Screening Off Closure Secures." The opening now
   concedes the rejoinder rather than resisting it: "The concession is worth making
   directly rather than resisting. Closure is not a rival to screening off, and the
   argument does not require that Franklin and Robertson overlooked causation or meant
   something weaker than they said." The closing paragraph is new and carries the
   reframe: the readings are one property described twice, the criterion is not thereby
   idle because "a reading that no stated test discriminates cannot adjudicate
   admission," and the contribution "is the test and the discipline that goes with it,
   not the discovery of a new property."

   The `\label` was left unchanged (`why-closure-is-not-screening-off`) because two
   other sections reference it. The label name is now slightly stale relative to the
   title, but renaming it risks silent broken references for no reader-visible gain.

## What did not need changing

Checked and found already consistent, which is itself evidence the reframe is the
paper's natural position rather than an imposition on it:

- §1's thesis paragraph already said screening off "admits two readings of conditional
  independence, observational and modal, that existing admittance tests do not
  discriminate." Only the framing layered above it was inconsistent.
- §2.2's body already carried the weak/strong reading distinction and already said
  closure "does not replace the screening-off filter so much as pick out the modal
  reading explicitly."
- §5.1 ("Screening Off Already Suffices") already concedes "the objection is correct
  that their criterion has the conceptual resources for the modal reading."
- The cross-reference at §3.3.1 already describes §2.2 in reading-selection terms.

The draft had the parts and drew the weaker conclusion. This pass draws the stronger
one and removes the framing that contradicted it.

## Consistency with the Rosas positioning

The reframe and the verified Rosas caveat now tell one story rather than two
complaints. Franklin and Robertson have an admittance criterion whose stated test
fixes only the observational reading; Rosas et al. have formal diagnostics with an
interventionist motivation and an observational formalism, and concede that
counterfactual guarantees lapse absent full observation. In both cases the pattern is
the same: a modal notion operationalized by observational means. The paper's
contribution is the same in both cases: the test that recovers the modal content, plus
the discipline for withdrawing commitment when it fails.

## Checks performed

- Full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle using the MiKTeX path in
  `CLAUDE.md`. Clean compile, exit 0 at every stage.
- Zero undefined references or citations.
- 48 pages, up from 47. The reframe is close to length-neutral; the added page comes
  from the expanded abstract and the new §2.2 closing paragraph.
- Verified in the rendered PDF that the new abstract, the new §2.2 title, and the new
  §2.2 closing paragraph appear correctly, and that all four pieces of the old
  "two ingredients" framing are gone from the output.

## Consequences and outstanding work

1. **The title now fits better than before.** "Operationalizing Screening Off for
   Rainforest Admission" was flagged in review as overpromising ("the 'operational'
   claim in the title is doing more work than the text delivers"). Under the reframe,
   operationalizing screening off is precisely and only what the paper claims to do, so
   the title is now an accurate description of the thesis rather than an overreach.
   The remaining exposure is not the framing but the evidence: the word is earned only
   if the common-cause proxy is a real countermodel. Retitling is deferred until after
   that is settled.

2. **The §4 leakiness tension is now sharper, not resolved.** §4.2 still calls the
   observational CMI `I(X_t; Z_{t+1} | Z_t)` the "canonical quantity" for leakiness.
   With the paper now committed to closure being the modal reading, a canonical
   observational diagnostic is more anomalous than it was. Planned fix: demote it to a
   screening diagnostic that cheaply flags candidates, while the criterion remains the
   interventional test.

3. **The blinded submission file remains stale** and now diverges further, since it
   lacks both this reframe and the Rosas correction. It must be resynced from the main
   body before submission.
