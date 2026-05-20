# SUMMARY of Edits: pan_plan3 Voice and Engagement Revision

## Date: 2026-05-20, 07:38
## Target file: `pan/overdrawing-on-experience-mainbody.tex`
## Source plan: `pan/pan_plan3.md`
## Sources behind the plan: `pan/pan_notes3.txt` (the "AI-polished" critique) and `pan/AI smells.txt`
## Research support: `pan/research-notes-for-pan-plan3.md`

## Scope

This pass implements `pan_plan3.md`: a prose, voice, and source-engagement
revision. The argument, conclusions, and defensive structure are unchanged. No
new sections, no new named concepts, no citations dropped. The aim was to make
the paper read as human-authored scholarly work rather than AI-polished prose:
leaner, more progressive, more direct with its opponents.

The build compiles cleanly through the full `pdflatex -> bibtex -> pdflatex ->
pdflatex` cycle. Output: 21-page PDF, no errors, no undefined citations, only
box-typesetting warnings. PDF copied to `pan/overdrawing-on-experience-sn.pdf`.

## What changed, by work item

### Item E — three-way target taxonomy (Section 2)

Added one paragraph after the abductive-concession argument stating the
taxonomy crisply: views that treat first-person experience as directly
supporting hidden ontology; views that argue abductively while still drawing
force from first-person privilege (the central case); and views that make no
first-person claim at all (left untouched, with Saad's psychophysical-harmony
argument named as the clean example). Section 7's opening, which previously
re-introduced this distinction, now refers back to Section 2 instead.

### Item D — explicit core argument (Section 3)

Replaced the prose recap of the datum/characterization/inflation triad with a
displayed five-step argument (acquaintance warrants only what is disclosed;
what is disclosed is ordinary consciousness with phenomenal character; the
hidden posits are not disclosed; so they do not inherit first-person warrant;
so they must be defended abductively). Added a following clarification that
step one concerns warrant, not existence, and leaves every panpsychist posit
metaphysically open. This pre-empts a verificationist misreading.

### Item B — close engagement with sources

- Section 5: rewrote the Revelation paragraph from a generic summary into an
  exact engagement. It now states the strong (Goff) Revelation thesis as the
  claim that introspective acquaintance reveals a phenomenal quality's
  essential nature, then blocks the precise step: even granting revelation of
  the quality's essence, the metaphysical role of the property bearing it is a
  separate question.
- Section 7: sharpened the Goff 2024 paragraph from a gesture into a
  demonstration. It now spells out why conceding strong emergence of subjects
  is the seam: a subject is the bearer of experience, so granting strong
  subject-emergence grants strong emergence for the very thing the
  anti-emergentist motivation was built to deny.
- All engagement uses precise paraphrase, not new verbatim quotation. Page
  references reuse ranges already in the manuscript and bibliography
  (`\citep[106--132]{goff2017cfr}`), verified against
  `research-notes-for-pan-plan3.md`.

### Item A — reduce thesis restatement

- Section 2 (the worst offender) compressed from fifteen paragraphs to twelve:
  merged the two overlapping datum/metaphysics paragraphs, merged the
  combination-literature and Nagel paragraphs, merged the revelation-adjacency
  and Ramm paragraphs, and dropped repeated re-statements of the warrant
  question. All citations preserved.
- Section 7: cut the "Appeals to phenomenal acquaintance face the same limit"
  paragraph, now redundant with the deepened Section 5 Revelation treatment.
- Section 9: merged the doubled opening restatement into one paragraph.

### Item I — compress literature-mapping prose

Section 2's combination-literature and revelation-adjacency surveys tightened
inline (no footnotes, per house style). The novelty-candor paragraph kept but
de-metronomed into a single linked sentence.

### Items F, G, H

- F (Section 8): made the two emergence gaps explicit. The physicalist gap (how
  consciousness arises from the non-conscious) and the panpsychist gap (how
  ordinary unified consciousness arises from the hidden phenomenal base) are now
  distinguished, with the point that placing phenomenality at the base does not
  close the second.
- G (Section 4.1): restructured to lead with the payoff (pure-awareness reports
  support at most attenuated character, not bare metaphysical subjectivity),
  then compressed the memory, temporality, and for-me-ness sub-arguments from
  three paragraphs into one. The public-evidence reframe and the closing
  dilemma are preserved.
- H (Section 8): tightened without expanding; the explananda list and the
  central pressure question are unchanged.

### Items C, K, M — voice

- C: trimmed mannered caution phrases and merged stacked short buffer sentences
  ("That reply is right," "Russellian monism survives this point. A Russellian
  panpsychist may have further arguments," and similar), without dropping any
  genuine modal qualification.
- K: reduced negation/correction-rhythm density where it was cadence rather
  than a real distinction; genuine contrasts (datum vs. metaphysics, warrant
  vs. existence) were kept.
- M: cut announcing and bridge constructions ("Here the panprotopsychist faces
  a dilemma," "One point about ordinary phenomenology is worth emphasizing
  before the harder cases," "This motivation matters because"). Logical
  connective tissue carrying actual inferences was preserved.

### Item L — rhythm

Final read-aloud pass: varied stacked short declaratives, fixed a "kept apart"
echo between Section 1 and Section 8. Mechanical sweep confirmed no em dashes,
no overused colons, no connective-adverb filler, no hype or
performed-sincerity language.

### Item J — title

No change. The current title already matches the reviewer's preferred style.

## Discipline

- No new named or capitalized concepts.
- No footnotes, no em dashes, no boldface outside headings.
- No fabricated quotations; engagement is by precise paraphrase.
- Every existing citation key preserved.
- Every scope qualification and "constraint, not refutation" formulation
  checked after each edit and retained.

## Declined (carried over from pan_plan3.md)

`pan_notes2.txt` items 9 (challenge the Russellian vacancy via OSR) and 10
(demand falsifiable predictions) remain declined; both would un-bracket
Section 2 or push the paper toward verificationism.

## Compilation

Springer wrapper `latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.tex`
compiled cleanly. Full BibTeX cycle rerun (no new keys, but rerun for safety).
Output: 21-page PDF, copied to `pan/`.
