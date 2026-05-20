# pan_plan3.md — Writing, Voice, and Source-Engagement Revision

## Date: 2026-05-20
## Target file: `pan/overdrawing-on-experience-mainbody.tex` (the live prose source)
## Build wrapper: `latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.tex`
## Primary sources for this plan: `pan/pan_notes3.txt` and `pan/AI smells.txt`
## Research support: [`pan/research-notes-for-pan-plan3.md`](research-notes-for-pan-plan3.md)

---

## 1. Purpose and scope

The paper's *content* is in good shape. Two prior passes (see
`edits/2026-05-19 - 16-30` and `edits/2026-05-19 - 17-45`) integrated the
substantive items from `pan_notes2.txt` and the peer-review dossier. The
abstraction objection, the smoking-gun quotes, the reportability reframe,
the panprotopsychism sharpening, the boundedness/valence additions, and the
relocated-hard-problem corollary are all in place. Items 9 and 10 of
`pan_notes2.txt` (challenge the Russellian vacancy via OSR; demand falsifiable
predictions) were declined for good reasons and stay declined.

What has **not** been addressed is the critique in `pan_notes3.txt`: the paper
reads as "AI-polished." The thesis is strong but the prose restates it too
often, summarizes debates instead of doing close work with specific passages,
and over-buffers with mannered caution phrases. This plan addresses that
critique. It is a *prose and engagement* revision, not a content revision. The
argument does not change. The aim is to make the paper read as
human-authored scholarly work: leaner, more progressive, more direct with its
opponents.

`pan/AI smells.txt` supplies a concrete checklist of machine-writing tells. It
overlaps with the `pan_notes3.txt` critique but adds specific, gradeable
patterns: negation and correction-rhythm structures, uniform sentence and
paragraph rhythm, structural signposting, bridge sentences, and decorative
closers. Items K, L, and M below address the patterns not already covered by
Items A through C, and Section 9 maps every line of the checklist to the item
that handles it.

This is a copy-editing and close-engagement pass. No new sections, no new
named concepts, no change to the paper's conclusions or its defensive
structure.

The close-engagement work in Item B now has a supporting research note:
[`pan/research-notes-for-pan-plan3.md`](research-notes-for-pan-plan3.md). It
collects exact bibliographic details, verified source links, short quote
candidates, citation cautions, and paragraph-level integration guidance for
Goff 2017, Roelofs 2020, Goff 2024, and Strawson 2006. Treat that document as
the source-control checklist for any new quotation or page-specific claim
introduced during implementation.

---

## 2. Constraints that bound every edit in this plan

These are house-style and defensibility limits. Every edit below must respect
them; where an edit risks violating one, the defensive note says so.

1. **Do not strip genuine qualifications.** The single most common failure mode
   in revision (per `CLAUDE.md` and `STYLE_GUIDE.md`) is that "tightening"
   silently drops a caveat, a scope limit, or a regime-index, and converts a
   conditional claim into an unconditional one. Qualifications such as "one
   prominent motivation," "in its first-person-motivated forms," "may still be
   defended as theory," and the datum/characterization/inflation triad are
   **load-bearing precision**, not buffering. They stay. What this plan cuts is
   *mannered rhythm-filler*, not *substantive hedging*. The test: if removing a
   phrase changes what a hostile reviewer could pin on the paper, keep it; if it
   only changes the cadence, it is a candidate for cutting.
2. **No footnotes.** `pan_notes3.txt` suggestion 9 ("move literature review to
   footnotes") is rejected on house style. Compress the survey prose inline
   instead.
3. **No new named or capitalized concepts.** "introspective warrant constraint"
   stays lowercase and is the only quasi-label. Do not coin replacements.
4. **No em dashes. No boldface** except section headings and the existing quote
   environment.
5. **Do not fabricate quotations.** Any new verbatim quote must be verified
   against the source text and carry a page reference already supported by
   `overdrawing-on-experience.bib`. Where exact wording cannot be verified, use
   precise close paraphrase with a page cite instead. This is non-negotiable:
   the `pan_notes3.txt` reviewer explicitly flags citation accuracy as a
   submission risk.
6. **Preserve every existing citation.** Engagement edits deepen the treatment
   of sources already cited; they do not drop keys.
7. **Preserve logical connective tissue.** `CLAUDE.md` requires the paper to
   "hold the reader's hand down the logical path" and `STYLE_GUIDE.md` requires
   the "Logical Baton Pass" between points. Cutting AI-style signposting (Item
   M) must not remove the sentences that carry an actual inference. The
   distinction is sharp: hand-hold the *argument* ("if this, then this"); do not
   narrate the *essay's structure* ("this section argues," "the question is").
   The former stays; the latter goes.

---

## 3. Work items

Ordered by priority. Items A, B, and C are the core of what the user asked for
(writing, voice, engagement). Items D through J are supporting.

---

### Item A — Reduce thesis restatement (the repetition problem)

**Problem.** `pan_notes3.txt` items 1 and "Most important revision": the core
claim ("first-person experience warrants ordinary consciousness, not hidden
phenomenal ontology") is restated in slightly varied wording across the
abstract, Section 1, Section 2, Section 3, Section 5, Section 7, Section 8, and
Section 9. The reader feels the same point being re-pressed rather than
developed.

**Distinction that governs this item.** There are two kinds of recurrence in
the paper, and only one is a defect:

- *Load-bearing application* — each later section applies the constraint to a
  **new** case (revelation, combination, phenomenal powers, panprotopsychism,
  phenomenal bonding, cosmopsychism, structure/dynamics, explanatory burden).
  This is the paper's argumentative spine and **must be kept**. The prior edit
  summaries are right that this is not bloat.
- *Verbatim thesis restatement* — sentences that re-announce the general
  conclusion ("those posits must be defended as theory," "this cannot inherit
  the authority of acquaintance," "panpsychism overdraws") in the same words,
  without applying it to anything new. This is the defect. Cut or compress it.

**Evidence (line numbers in `overdrawing-on-experience-mainbody.tex`).**

- Section 2 is the worst offender. It runs ~15 paragraphs. Lines 19 and 21
  restate the datum/metaphysics split twice in close succession. Lines 23 and 25
  overlap. Lines 17, 19, 21, 23, 25, 27, 29 all circle the same distinction.
- Section 5: lines 105 and 119 each re-announce the general conclusion around
  application paragraphs that are themselves fine.
- Section 7: lines 155 and 157 both make the "acquaintance reaches only the
  experience one is acquainted with" point; line 159 re-announces "abductive
  metaphysical theory."
- Section 9: lines 191, 195, 199 each restate the thesis. A conclusion may
  restate, but three times is one or two too many.

**Fix.**

1. The canonical statement of the constraint lives in Section 3 (the quote
   environment, lines 51–53). Treat that as the one official formulation.
2. In Sections 5, 7, 8, 9, keep every paragraph that *applies* the constraint to
   a named case. Cut or fold the sentences that only *re-announce* it. A section
   should end by having advanced the argument, not by repeating the headline.
3. Section 2 should lose roughly a quarter of its length by merging the
   overlapping datum/metaphysics paragraphs (19+21, 23+25) into single tighter
   paragraphs. The two-questions point (line 21) and the abductive concession
   (lines 25–29) are load-bearing and stay; what merges is the connective
   re-statement around them.
4. Do not touch the application structure of Sections 5 and 7. The sequence of
   distinct cases is the cure for the "same point repeated" feeling, not a
   symptom of it.

**Length effect.** This item produces most of the net reduction. Target for the
whole plan: 8–12 percent shorter overall, concentrated here. Do **not** chase
the reviewer's "15–25 percent" figure if it means cutting application
paragraphs; the floor is set by item 2 of the constraints in Section 2 of this
plan.

**Defensive note.** When merging Section 2 paragraphs, re-read the result
against the originals to confirm no scope word was lost: "one prominent
motivation," "narrower," "as far as it goes," the bracketing of the full
Russellian case, and the Stoljar/Alter/Pereboom "I leave the larger case in
place" must all survive.

---

### Item B — Close engagement with key opponents (the source-engagement problem)

**Problem.** `pan_notes3.txt` item 3: the paper cites heavily but often
summarizes at high altitude ("X argues, Y develops, Z replies"). It is stronger
when it pauses over an exact move and shows precisely where the constraint
blocks it. Right now it does this well for Strawson and only gestures for the
others.

**Principle.** Do not try to close-engage everyone; that re-inflates the paper.
Pick the load-bearing moments and slow down there; compress everything else
(see Item I). The reviewer's actual ask is "here is the exact move; here is
where my constraint blocks it" — that is *argumentative* engagement, achievable
with precise paraphrase of an opponent's reasoning steps, not necessarily with
new verbatim quotation.

**Targets, in priority order.**

1. **Goff's Revelation thesis** (currently cited `\citep[106--132]{goff2017cfr}`
   at lines 31, 107, 143). This is the highest-value target because revelation
   is the strongest principle by which acquaintance could reach beyond ordinary
   experience. Deepen the Section 5 revelation paragraph (lines 107) and the
   Section 7 Goff paragraph (line 143): state precisely what the strong
   Revelation thesis claims — that introspective acquaintance with a phenomenal
   quality acquaints us with its essential nature — and then show the exact
   step the constraint blocks: even granting that revelation discloses the
   essence of the *quality*, it does not disclose the *metaphysical role* of the
   property instantiating it. The paper already says this; the job is to make
   the move Goff-specific and exact rather than generic.
2. **Roelofs's moderate revelation** (cited at lines 37, 107). State exactly
   what the medium-strength thesis concedes: that not every constitutive fact
   about consciousness appears transparently in introspection. Then show the
   constraint still runs — Roelofs's concession is precisely the room the paper
   needs, so the engagement should present him as an ally on the epistemics
   whose own moderation supports the warrant limit.
3. **Goff 2024 on strongly emergent subjects** (cited at lines 9, 149, 193).
   Currently paraphrased as "subjects strongly emergent, phenomenal properties
   weakly emergent." Make the engagement do work: state exactly what Goff
   concedes (strong emergence at the level of subjects) and exactly why that
   concession is the seam — it is the point where the original anti-emergentist
   motivation was supposed to bite hardest. This is already gestured at; sharpen
   it from gesture to demonstration.
4. **Strawson** ("the fundamental given natural fact," `\citep[4]{strawson2006}`,
   lines 31, 139). Already well handled. Leave it; do not add more.

**Fix.** For targets 1–3, revise the existing paragraphs in place. Net effect is
roughly word-neutral: the close engagement replaces summary sentences rather
than adding to them. If a verifiable short verbatim phrase from Goff's
Revelation discussion can be confirmed against the source, it may be added with
its page cite; if not, use exact paraphrase. Do not invent a quote to match the
Strawson quote's rhetorical weight.

**Defensive note.** Keep the existing charitable prefaces ("These are careful
philosophers, and neither should be read as making a crude inference,"
line 31). Close engagement must not tip into the "weaponize / kill shot"
register the prior passes deliberately avoided. The point is precision, not
aggression.

---

### Item C — Reduce the density of mannered caution phrases

**Problem.** `pan_notes3.txt` item 6: the paper over-buffers. Short sentences
like "This may be possible," "That route is legitimate as far as it goes,"
"These are serious options," "The point is narrower," "Russellian monism
survives this point," "The analogy is useful, but limited" recur often enough
to create a mechanical, over-cautious rhythm.

**Distinction that governs this item.** The defect is *density and cadence*, not
the existence of these sentences. Many of them are perfectly good topic
sentences or genuine concessions. The fix is not a blanket deletion.

**Evidence.** Runs of consecutive short buffer sentences appear at lines 15
("These are serious options, and I leave the larger case in place"), 19 ("That
route is legitimate as far as it goes. Its reach is limited."), 25 ("That reply
is right."), 75 ("The analogy is useful, but limited."), 131 ("Russellian
monism survives this point."), 147 ("The present point is narrower."), 165
("This burden is not a penalty imposed on panpsychism alone.").

**Fix.**

1. Scan for places where two or three short buffer sentences sit consecutively.
   Merge or vary them: fold the concession into the sentence that does the
   work, or convert one into a subordinate clause, so the paragraph has one
   buffering beat instead of three.
2. Where a buffer sentence carries a real concession (e.g., "Russellian monism
   survives this point" — a genuine scope limit), keep the concession but
   attach it to the substantive sentence rather than letting it stand alone as
   a mannered beat.
3. Replace the softest formulations with firmer ones where the evidence allows.
   `pan_notes3.txt` gives the model: "Panpsychism remains a live metaphysical
   option, but one of its most powerful motivations becomes less direct than it
   first appears" can become a more direct claim that its first-person
   motivation does not reach the ontology panpsychism needs.

**Defensive note.** This is the highest-risk item for silently dropping a
qualification. "This may be possible," applied to micro-experience or cosmic
subjectivity, is often a *real* modal concession that keeps the paper a
constraint rather than a disproof. Do not delete those; vary their phrasing or
relocate them. Re-read each changed paragraph against the original and confirm
the paper still concludes "constraint, not refutation" everywhere it did
before.

---

### Item D — Make the core argument explicit in Section 3

**Problem.** `pan_notes3.txt` item 2: the argumentative structure emerges
gradually. A reader cannot point to the spine. The paper would feel less like
repeated pressure and more like a controlled argument if the inference were
stated once, explicitly, early.

**Fix.** At the end of Section 3, after the constraint quote and its
explanatory paragraphs (around line 59), state the argument's spine compactly.
The inference is:

1. First-person acquaintance warrants only what experience actually discloses.
2. Experience discloses ordinary consciousness with phenomenal character.
3. It does not disclose micro-experience, proto-experience, proto-phenomenal
   categorical bases, cosmic subjectivity, or phenomenal-bonding relations.
4. Therefore those posits do not inherit first-person warrant.
5. If defended, they must be defended as theory, on abductive terms.

**Open decision for the user.** Two ways to present this:

- *Option D1 — displayed numbered argument.* Set the five steps as a numbered
  list. This is standard analytic-philosophy practice and is **not** the same
  as the banned "First... Second... Third..." prose signposting tic; a formally
  displayed argument is a structural device, not a rhetorical one. Clearest for
  the reviewer who asked for it.
- *Option D2 — one compact prose paragraph.* State the same five steps as a
  single tight paragraph. Stays maximally within the paper's existing texture
  and the "no enumerations" discipline, at some cost to the at-a-glance clarity
  the reviewer wanted.

Recommendation: **D1**. The reviewer specifically asked for formalization, a
displayed argument genuinely helps, and the house rule against enumerations
targets prose tics, not laid-out arguments. But this is a judgment call worth
confirming before implementation.

**Defensive note.** The displayed argument must match the paper's actual claims
exactly. Step 1 must not read as verificationism ("only directly experienced
things exist") — it is about *warrant*, not *existence*. Step 5 must keep
"abductive terms," not "empirical terms." Cross-check the wording against
Section 3 lines 49–55 so the displayed version and the prose version cannot be
played against each other by a reviewer.

---

### Item E — Sharpen the three-way target taxonomy and state it early

**Problem.** `pan_notes3.txt` item 4: the paper sometimes looks like it attacks
a weak panpsychism, then later concedes sophisticated panpsychists do not make
that mistake. This blurs the target. The three-way distinction the paper needs
already exists but is buried mid-Section 7 (line 137) and stated loosely.

**The three targets.**

- *Strong target* — views on which first-person experience is treated as
  directly supporting hidden phenomenal ontology.
- *Moderate target* — views that officially argue abductively but continue to
  draw dialectical and rhetorical force from first-person privilege (the
  paper's central case).
- *Non-target* — views that make no first-person warrant claim and rest
  entirely on theoretical virtues (Saad's psychophysical-harmony argument is
  the clean example, already named at line 177).

**Fix.** State this taxonomy crisply once, early — best home is Section 2
(Scope and Bracketing), which is where targets are fixed. Then have Section 7
*refer back* to it rather than re-introducing it at line 137. This also feeds
Item A: Section 7's line 137 paragraph gets shorter because the taxonomy is
already on the table.

**Defensive note.** Keep the existing concession that the constraint targets "a
pattern of warrant, not individual writers" (line 153) and that views making no
first-person claim are "outside the target" (line 177). The taxonomy makes the
criticism harder to dismiss precisely because the non-target category is
explicit and honest. Do not let the sharpened version sound like a blanket
charge.

---

### Item F — Clarify the two emergence gaps

**Problem.** `pan_notes3.txt` item 7: the paper says the emergence gap
"reappears" between the hidden base and ordinary consciousness, but does not
clearly distinguish two different gaps:

- *Physicalist gap* — how consciousness arises from the non-conscious.
- *Panpsychist gap* — how ordinary unified consciousness arises from hidden
  phenomenal or proto-phenomenal bases.

These are not identical, and the paper should say so explicitly. The point is
not that the two gaps are the same, but that the second one prevents
panpsychism from claiming victory merely by placing phenomenality at the base.

**Fix.** Make one crisp statement of the distinction. Best home: Section 8
(Explanatory Burden), around lines 169–171, where the relocation of the
difficulty is already discussed. The conclusion (line 193) then *echoes* it in
one sentence rather than re-arguing it. Do not state the distinction in three
places; that would re-create the Item A problem.

This connects to `pan_notes2.txt` item 5 (already partly integrated as the
relocated-hard-problem corollary). The work here is to make the *two gaps*
explicit so the corollary lands as a precise claim rather than an atmosphere.

**Defensive note.** Do not overclaim that the panpsychist gap "is" the hard
problem renamed. The defensible claim is the one the paper already makes:
panpsychism *relocates* the difficulty and does not get to count the
first-person datum as having closed it in advance. Keep "relocates," not
"is identical to."

---

### Item G — Tighten Section 4.1 for a sharper payoff

**Problem.** `pan_notes3.txt` item 8: the pure-awareness subsection is
interesting but long, and spends much of its length on whether meditation
reports are accurate. The argument only needs to show that even the strongest
first-person cases do not deliver characterless metaphysical subjectivity.

**Fix.**

1. Lead Section 4.1 with its payoff: reports of pure or contentless awareness,
   at most, support attenuated phenomenal character; they do not support bare
   metaphysical subjectivity as a datum.
2. Keep the reportability argument — the paper deliberately kept it (against
   `pan_notes2.txt` item 2) and rescoped it to *public evidential use*. That
   decision stands. But compress it: the Windt temporal point, the Lin selfless
   point, and the Schwitzgebel reliability point can each be made more briefly.
3. Keep the central dilemma at the end (line 99) as the decisive close.

**Defensive note.** Do not drop the reframing that the constraint concerns the
*public use* of these states as evidence, not the private episodes (lines
87–89). That reframing is what forestalls the category-mistake reading the
prior pass installed deliberately. Compress around it; do not cut it. The
phenomenological prong (presence/for-me-ness, line 83) lives in Section 4
proper and should stay where it is.

---

### Item H — Concretize and tighten Section 8

**Problem.** `pan_notes3.txt` item 5 calls Section 8 one of the paper's
strongest parts and asks for it to be made more concrete. It is already fairly
concrete (lines 167–169 list unity, contents, temporal grain,
sleep/anesthesia, the conscious/unconscious split, valence). So this item is
mostly *tightening*, not expansion.

**Fix.** Keep the explananda list and the central pressure question ("if
organization explains all of this, what explanatory work is left for the hidden
phenomenal base?", lines 169). Tighten the surrounding prose and remove any
thesis re-announcement caught under Item A. Do not add a new explanandum or a
new sub-argument; Section 8 does not need more weight, only less padding.

**Defensive note.** Preserve the explicit disclaimer that this is "no complete
emergentist theory of consciousness" and does not claim to solve the hard
problem (line 171). That disclaimer is what keeps Section 8 from opening a new
line of attack.

---

### Item I — Compress literature-mapping prose (no footnotes)

**Problem.** `pan_notes3.txt` item 9 flags the "X argues, Y develops, Z replies"
density, especially in Section 2 and the cosmopsychism variants in Section 7.
Its proposed fix (footnotes) is rejected on house style.

**Fix.** Compress inline. Section 2's mapping paragraphs (lines 33, 37, 39, 41)
can be tightened: the four-name combination-literature sentence (line 33) and
the Lin/Roelofs revelation-papers paragraph (line 37) can each lose connective
filler. The Ramm paragraph (line 39) can fold into the surrounding discussion.
In Section 7, the cosmopsychism-variants sentence (line 147, Shani / Albahari /
Mørch) can be compressed without losing the citations.

**Defensive note.** This is *compression*, not *deletion*. Every citation key
stays. The novelty-candor paragraph (line 41) — which honestly states what the
paper inherits and what is its own contribution — is load-bearing for the
reviewer's "what is new here" question and must survive, tightened but intact.
The Shani citation in particular must stay: it is what stops a reviewer from
charging that the paper assumes cosmopsychism is a simple mirror of
micropsychism.

---

### Item J — Title and subtitle (minor)

**Problem.** `pan_notes3.txt` item 10 suggests title alternatives.

**Assessment.** The current title — "Overdrawing on Experience: Panpsychism and
the Limits of First-Person Warrant" — already matches the reviewer's preferred
style and is clear and accurate. **Recommend no change.** Logged here only so
the item is explicitly dispositioned. If the user wants a change, the cleanest
alternative the reviewer offered is "Overdrawing on Experience: Why
Acquaintance Does Not Warrant Hidden Phenomenal Ontology," but this is not
recommended; the current subtitle is less committal and reads better.

---

### Item K — Reduce negation and correction-rhythm structures

**Problem.** `AI smells.txt` lines 58–62 single this out as a major tell:
"not just X, but Y," "isn't merely X," "no longer X, but Y," "less about X
than Y," and the subtler "what looks like X is really Y." The smell is the
*correction rhythm* — prose that keeps denying one idea to reveal the "real"
one, which makes ordinary claims sound fake-profound and turns every sentence
into a miniature reframe.

**Scale.** A grep for negation and contrast patterns returns 43 occurrences in
the manuscript. That is high, and the construction is one of the paper's
default sentence shapes.

**Distinction that governs this item.** This is a philosophy paper, and
contrastive structure often draws a *genuine conceptual distinction* that is
the whole point of a sentence: datum versus metaphysics, warrant versus
existence, what is given versus what is posited, constitution versus
acquaintance. Those contrasts are the argument. They stay. The defect is
threefold, and only the defect is targeted: (a) *density* — several
correction-rhythm sentences in a row; (b) *cadence use* — the structure
deployed for rhetorical lift rather than to mark a distinction; (c) *shape
repetition* — the same "not A, it is B" mold reused until the reader hears the
mold.

**Fix.**

1. Do not eliminate the construction. Reduce its frequency and vary its form.
   Where a contrast marks a real distinction, keep one clean instance and state
   it plainly.
2. Where the negation is doing only cadence work, convert it to a direct
   positive claim. "It is no longer reporting what is given; it is offering a
   theory" can often become a single positive sentence.
3. Break up runs: if two or three consecutive sentences all use the correction
   shape, rewrite all but one.

**Defensive note.** The highest risk here is gutting the paper's precision. The
datum/metaphysics distinction and the warrant/existence distinction are
load-bearing and appear as contrasts because they *are* contrasts. Target the
rhythm and the repeated mold, never the distinction.

---

### Item L — Break the metronome (sentence and paragraph rhythm)

**Problem.** `AI smells.txt` lines 22–27: reusing the same sentence shape,
sentences and paragraphs of suspiciously uniform length, the metronome effect
of medium sentence after medium sentence, and stacking short factual sentences
with no lived rhythm. `pan_notes3.txt` names the same thing as the
"AI-polished" feel.

**Evidence.** Section 3 line 45 stacks four short declaratives in a row
("Consciousness is not known... I do not posit... I undergo it. Conscious
experience is given..."). Section 2's paragraphs run to a fairly uniform
length. The paper leans hard on the short declarative sentence.

**Fix.** A read-aloud pass, done last, after all other edits. Vary sentence
length deliberately: let some sentences carry a subordinate clause and run
long, let others stay short for emphasis. Vary paragraph length: a short
two-sentence paragraph among longer ones is good, not a defect. The aim is
natural cadence, not uniformity.

**Defensive note.** Do not manufacture artificial variety, and do not combine
short sentences into clause-stacked monsters; `STYLE_GUIDE.md` bans clause
stacking, and the linear "if this, then this" readability of each sentence must
survive. Vary length while keeping every sentence individually clean.

---

### Item M — Cut announcing, signposting, bridge sentences, and decorative closers

**Problem.** `AI smells.txt` lines 4–18, 28, 47, 54: announcing what a
paragraph is about to do, explaining the frame before giving the claim, bridge
sentences whose only job is to move to the next section, "the question is / the
answer is" preambles, motto-making, cute closers, fake-deep capping lines, and
polished transitions that add no thought.

**The critical distinction — read this before touching anything.** `CLAUDE.md`
requires the paper to "hold the reader's hand down the logical path" and
`STYLE_GUIDE.md` requires the "Logical Baton Pass" between points. That is not
in tension with this item, but the line between them must be drawn exactly:

- *Logical connective tissue — keep.* Sentences that carry an actual inference
  ("Once organization does the combining work, the micro-experiences must still
  make a distinctive contribution"). This is hand-holding the *argument*, and
  the paper is required to do it.
- *Meta-navigation — cut.* Sentences that narrate the *essay's structure*
  rather than advance the argument: "this section argues," "Here the
  panprotopsychist faces a dilemma," "The point is clearest if," "the question
  is." These tell the reader where they are standing instead of moving them.

The test for every candidate sentence: does it advance the argument, or only
tell the reader what the text is doing? Cut only the latter.

**Evidence.** Announcing constructions appear at line 115 ("Here the
panprotopsychist faces a dilemma") and in "The point is clearest" and
"illustrates the same pattern" framings. Several paragraphs close on a
summarizing or motto-like line rather than on their last substantive point. A
prior pass already removed the "transferable credit" motto; this item continues
that work. Connective adverbs ("however," "moreover") are light in the
manuscript — a quick grep confirms only a handful — so they are a minor part of
the sweep.

**Fix.**

1. Delete pure announce and bridge sentences; let the paragraph open on its
   claim.
2. Where a paragraph ends on a decorative capping line, either cut the line and
   let the paragraph end on its last substantive sentence, or replace it with a
   substantive point.
3. Keep every sentence that carries an inference, even one that begins with a
   connective.

**Defensive note.** This is the second-highest-risk item after Item K. Removing
the wrong sentence breaks the baton pass `CLAUDE.md` mandates. When in doubt,
keep the sentence and re-test it once the surrounding cuts are done: a
connective that looked redundant may be the only bridge left.

---

## 4. Explicitly declined or already-settled

- **`pan_notes2.txt` items 1–8** — already integrated (see
  `edits/2026-05-19 - 16-30`). No action.
- **`pan_notes2.txt` item 9** (challenge the Russellian vacancy via Ontic
  Structural Realism) — stays declined. The paper's strategy is to *grant* the
  vacancy and still block the inference (Section 6, line 131). Challenging the
  vacancy would commit the paper to a contested position in philosophy of
  physics and un-bracket Section 2.
- **`pan_notes2.txt` item 10** (demand falsifiable predictions / predictive
  cost) — stays declined. Demanding novel empirical predictions of a
  metaphysical theory is itself a contestable verificationist move, and the
  paper deliberately avoids sounding verificationist. This is a philosophy
  paper, not a science paper.
- **`pan_notes3.txt` item 9's footnote proposal** — declined on house style;
  replaced by inline compression (Item I).
- **`pan_notes2.txt` item 2's "drop reportability" proposal** — declined; the
  paper keeps reportability, rescoped to public evidential use. Item G
  compresses it rather than removing it.
- **`plan-targeted-improvements.md`** — superseded. Its edits were absorbed by
  the later passes; the "indispensable datum" point is in the manuscript at
  line 5. No separate action needed.

---

## 5. Sequencing

Do the items in an order that prevents rework:

1. **Item E** (target taxonomy) and **Item D** (explicit argument) first. These
   set fixed reference points that later cuts can lean on.
2. **Item A** (repetition), **Item I** (lit compression), and **Item M**
   (announcing, signposting, bridges, closers) next. The biggest structural
   cuts, concentrated in Section 2. Doing these after D and E means the cut
   sections can simply refer back instead of restating.
3. **Item B** (close engagement) next. Roughly word-neutral; revises Sections 5
   and 7 paragraphs in place.
4. **Items F, G, H** — targeted tightening of Sections 8, 4.1, and 8.
5. **Item C** (caution-phrase density) and **Item K** (negation rhythm) as the
   voice pass over the whole manuscript once the structure is settled.
6. **Item L** (sentence and paragraph rhythm) last, as a read-aloud pass after
   every other edit, since rhythm can only be judged on the final text.
7. **Item J** — no action unless the user requests it.

---

## 6. Length target

Net 8–12 percent shorter. Reductions come from Items A, C, I, and M; small
additions from Items D, E, F. Items K and L are roughly word-neutral — they
vary and rebalance prose rather than cut it. The current build is 20 pages;
expect 18–19 after the pass. Do not pursue a larger cut at the cost of
application paragraphs in Sections 5 and 7.

---

## 7. Risks

- **Dropping a qualification while tightening.** The dominant risk. Mitigation:
  after each item, diff the changed paragraphs against the original and confirm
  every scope word, modal concession, and "constraint not refutation"
  formulation survives.
- **Close engagement drifting into the "weaponize" register.** Mitigation: keep
  the charitable prefaces; the goal is precision, not aggression.
- **A fabricated or mis-paged quote.** Mitigation: verify any new verbatim quote
  against the source; otherwise paraphrase. Re-check every page reference
  touched.
- **The displayed argument (Item D) contradicting the prose.** Mitigation:
  cross-check the five steps against Section 3's prose wording.
- **Stripping logical baton-passing while cutting signposting (Item M).**
  Mitigation: apply the test in constraint 7 — keep any sentence that carries an
  inference, cut only pure navigation.
- **Gutting genuine conceptual contrasts while reducing negation rhythm
  (Item K).** Mitigation: target density and repeated shape, not the
  distinctions themselves; the datum/metaphysics, warrant/existence, and
  given/posited contrasts are the argument and stay.
- **Over-sanding the voice.** `AI smells.txt` warns that the cure can become a
  smell: prose homogenized into neutral corporate cadence. Mitigation: the
  target voice is the author's own (simple, clear, detailed, plain); if a cut
  makes a passage blander, it is the wrong cut.

---

## 8. Aftermath checklist

1. Re-read the whole paper for flow once all items are done; confirm the
   argument now reads as progressive (constraint stated once, then three
   increasingly hard cases) rather than repetitive.
2. Write a timestamped summary in `edits/` (`YYYY-MM-DD - HH-MM - SUMMARY ...`).
3. Rebuild via the Springer wrapper:
   `latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.tex`,
   using the project-standard `pdflatex.exe` path. Run the full
   `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle only if a citation key
   changed; otherwise a single `pdflatex` is enough. Copy the PDF to `pan/`.
4. Confirm the build is clean (underfull-box warnings are acceptable; errors
   are not).
5. Commit with a detailed rationale. Do not add Claude as an author.

### Housekeeping note (optional, not required by this plan)

`pan/overdrawing-on-experience.tex` is a stale standalone wrapper containing an
outdated inline copy of the body. It is not used by the build (the SN wrapper
`\input`s `overdrawing-on-experience-mainbody.tex`). Consider deleting it to
prevent future confusion, but only with the user's explicit go-ahead.

---

## 9. AI-smells coverage map

Every line of `pan/AI smells.txt` maps to an item above or to the mechanical
sweep below. Nothing in the checklist is left unaddressed.

| `AI smells.txt` lines | Pattern | Handled by |
|---|---|---|
| 3, 32, 53 | Summarizing instead of arguing; abstract nouns over examples; staying abstract too long | Item B |
| 4–15, 28, 30, 54 | Announcing, framing before claiming, bridge sentences, handrails, "the question is" | Item M |
| 16–20, 47 | Motto-making, cute and fake-deep closers, slogans, aphorisms, decorative capping | Item M |
| 21, 62 | Repeating the same phrase; restatement | Item A |
| 22–27, 48, 49 | Same sentence shape, uniform length, metronome, over-tidy resolution | Item L |
| 33, 34, 36, 37, 38, 39, 56 | Hedging, lost point of view, consensus-middle language, keynote and textbook voice | Item C |
| 40, 58–61 | "not just X, but Y" and all correction-rhythm structures | Item K |
| 29, 41, 42 | "moreover/furthermore/however," overused colons, em dashes | Mechanical sweep |
| 31, 35, 43–46 | "as the landscape evolves" openers, vague attribution, bold-label bullets, hype and brochure words, performed sincerity | Mechanical sweep |
| 50–52 | Sanding off the author's voice, heat, and recurring mannerisms | Counter-check |

**Mechanical sweep.** A short grep pass over the manuscript: confirm zero em
dashes (house style already bans them); check that colons are not overused as a
reveal device; replace any "moreover/furthermore" that adds no thought; confirm
no "some critics argue" style vague attribution survives (the paper is heavily
cited, so this should be near-zero already); confirm no hype words ("unlock,"
"leverage," "robust," "seamless"), brochure language, or performed-sincerity
phrases ("honestly," "genuinely," "it is important to note"). For a philosophy
paper most of these will already be absent; the sweep is a short confirmation,
not a rewrite. Fold it into the Item C / Item K voice pass.

**Counter-check (lines 50–52).** `AI smells.txt` also warns against the
opposite failure: sanding off the author's voice, heat, and recurring
mannerisms until the prose is uniformly neutral. The cure for AI smell can
itself become an AI smell. The target voice is the author's own, described in
`CLAUDE.md`: simple, clear, detailed, plain. Every edit in this plan must move
the paper toward that voice, not toward generic academic prose. If a cut makes
a passage blander, it is the wrong cut.
