# SUMMARY of Edits: pan_plan4 Close Textual Engagement

## Date: 2026-05-20, 11-10
## Target file: `pan/overdrawing-on-experience-mainbody.tex`
## Also edited: `pan/overdrawing-on-experience.bib`
## Source plan: `pan/pan_plan4.md`
## Source of the plan: `pan/pan_notes4.txt` (reviewer round plus a quote bank)

## Scope

This pass implements `pan_plan4.md`: a defensibility pass. Plan3 was a voice and
structure revision; plan4 answers a reviewer round that asked for close textual
reading rather than critique of a general dialectical pattern, plus four
targeted answers to named objections. The argument, conclusions, scope, and
modest posture are unchanged. No new sections, no new named concepts.

The build compiles cleanly through the full `pdflatex -> bibtex -> pdflatex ->
pdflatex` cycle. Output: 22-page PDF, no errors, no undefined citations. PDF
copied to `pan/overdrawing-on-experience-sn.pdf`.

## Quote verification (done before any editing)

Every quote used was checked against primary sources before editing, per the
instruction to verify before acting. Verified and used:

- Strawson, "Realistic Monism," p. 4: "experience is itself the fundamental
  given natural fact"; experience as "the obligatory starting point for any
  remotely realistic" theory of what there is. Checked against the article PDF.
- Roelofs, "Consciousness, Revelation, and Confusion," p. 87 ("inferring
  absence of structure from the failure of structure to be manifest") and p. 89
  ("unable to tell introspectively just how composite they might really be").
  Checked against the article PDF.
- Mørch, "Does Dispositionalism Entail Panpsychism?": "the only categorical
  properties we know are phenomenal properties." Checked against the abstract.
- Gamma and Metzinger, MPE-92M: "often described as a contentless form of
  experience"; multi-factor phenomenal profile. Checked against the article.
- Goff: phenomenal concepts "reveal the complete nature of the conscious states
  they refer to." Corroborated by multiple sources and by Roelofs's citation of
  Goff 2017, p. 110.

Dropped, could not be verified: a Chalmers "direct familiarity" quote and a long
Goff "epistemic starting point" passage from the notes. The Chalmers quote was
not used and no Chalmers entry was added; the Goff simplicity argument is given
as accurate exegesis, not a verbatim block.

Bibliography error found and fixed: `roelofs2020revelation` was listed as pages
63--96; the article is Dialectica 74(1): 61--93.

## What changed, by work item

### A -- distinguish the paper from Lin 2025 (Section 2)

The "two recent papers" paragraph now states the difference explicitly. Lin's
argument is comparative (revelation gives panpsychism no advantage over
physicalism); this paper's claim is not comparative (the first-person datum
cannot transfer its warrant to hidden phenomenal ontology at all). Two added
sentences.

### B -- positive upshot earlier (Section 1)

One plain sentence in Section 1: the evidential force of the first-person datum
is genuine; the question is how far that force reaches. No slogan, no repeated
catchphrase. Section 9 already echoes the substance.

### C -- Goff (Sections 5 and 7)

Section 5: the Revelation thesis is now stated in Goff's own term, that
phenomenal concepts "reveal the complete nature of the conscious states they
refer to," replacing a looser paraphrase. The stronger formulation strengthens
the paper's "even granting it" move.

Section 7: Goff's simplicity argument is now named and described accurately as
exegesis (the move from the consciousness-involving nature of brain matter to
the parsimony claim about matter in general), with the point that parsimony
orders theoretical hypotheses and does not carry the first-person standing of
the brain case outward.

### D -- Strawson close reading (Section 7)

The Strawson paragraph now reads the inference rather than only naming it, using
two verified p. 4 quotes: experience as "the fundamental given natural fact" and
"the obligatory starting point for any remotely realistic" theory of what there
is. The licensing step (from the certainty of the datum to a constraint on
fundamental theory) is made explicit.

### E -- Roelofs close reading (Section 7)

The constitutive-panpsychist paragraph now engages Roelofs directly. He concedes
we are "unable to tell introspectively just how composite" our experience "might
really be" (p. 89), which is the manifest-level limit the constraint relies on.
His warning against "inferring absence of structure from the failure of
structure to be manifest" (p. 87) is acknowledged and answered: the constraint
draws no such inference, since its conclusion is about warrant, not existence.
The duplicate Roelofs sentences previously in the "other sophisticated
responses" paragraph were merged here.

### F -- concrete meditation engagement (Section 4.1)

The Gamma and Metzinger citation is now concrete: their MPE survey of what is
"often described as a contentless form of experience" still resolves those
reports into a multi-factor phenomenal profile (felt time, silence, peace,
wakeful presence). This grounds the section's dilemma in the actual literature.

### G -- clarify Mørch's status (Section 5)

Mørch is now identified as a partial case. Her argument is explicitly
theoretical, and to that extent not the paper's target, but it is motivated by
the knowledge claim that "the only categorical properties we know are phenomenal
properties," which still trades on first-person epistemic standing.

### H -- sharpen the combination response (Section 8)

The combination passage now poses the explicit contrastive question: what does
the base's being phenomenal explain that a non-phenomenal categorical base,
equally available to ground physical structure, could not?

### I -- answer the category-error reply (Section 8)

A new paragraph answers the objection that the two emergence gaps are not on a
par because non-experience-to-experience is a category error while
micro-to-macro experience is not. The response is careful, not an overclaim: if
the distinction holds it is established by a bracketed anti-emergentist argument,
not by acquaintance, so it relocates the defense to theoretical ground rather
than restoring first-person warrant; and the combination problem keeps the
second gap substantive.

### J -- sharpen the Section 6 "only model" response

Section 6 now answers the reply that consciousness is the only available concept
of intrinsic nature and so a theoretical necessity. Being our only model is a
fact about the reach of our concepts, not a credential for its truth; the
appropriate response to a vacancy we cannot characterize is to leave it
uncharacterized. No Chalmers quote (unverified) and no new citation.

### K -- bibliography

`roelofs2020revelation` page range corrected to 61--93. No new entries.

### Length and discipline

The pass paired additions with cuts (deleted a redundant Section 2 recap
paragraph; merged duplicate Roelofs material in Section 7). It still grew by
roughly one page, from 21 to 22, since the close readings and the new
objection-and-reply genuinely earn the space. A dedicated anti-AI-smell pass was
applied to all new prose: no quote lead-ins, no "this matters because"
constructions, no setup-and-payoff rhythm around quotes, and the paper's modest
posture preserved (quotes pin targets fairly, no prosecutorial tone).

## Discipline

- No new named or capitalized concepts.
- No footnotes, no em dashes, no boldface outside headings.
- No fabricated quotations; every quote verified against the primary source.
- Every existing citation key preserved; one bibliography page-number fix.
- Scope qualifications and "constraint, not refutation" formulations checked
  after each edit and retained. The category-error response and the Mørch
  clarification were written as careful partial concessions, not overclaims.

## Note

This commit also carries the three plan3 follow-up polish edits applied in a
prior session (Section 3 "matters because" removal, Section 3 "step"
disambiguation, Section 6 "phenomenal filling" framing); the Section 6 one was
folded into the Item J edit.

## Post-plan4 reviewer round (same commit)

After the plan4 pass, a further reviewer round raised four targeted points.
Each was handled as a small, local edit, with no change to the argument,
scope, or conclusions.

### Point 1 -- the "So What?" problem (Section 7)

A reviewer worried that the constraint reads as a critique of rhetoric rather
than of logic: if a panpsychist simply concedes the argument is abductive, the
constraint appears to have nothing to say. The Section 7 paragraph on the
pattern of warrant was revised to make the logical stake explicit. When a
panpsychist treats the inference as fully abductive, the constraint records
that fact rather than objecting to it; this is not a complaint about
presentation. The comparative case for panpsychism, its claim to take
consciousness more seriously than physicalism can, depends on the first-person
datum still carrying weight the abduction has disowned. The point is that the
advertised advantage lapses, not that the panpsychist phrased something badly.

### Point 2 -- the analogy to mass (Section 4)

The reviewer found the mass analogy too compressed to carry its weight. The
paragraph was expanded to set out the fork directly: the panpsychist may say
the residue is simply what-it-is-likeness, but naming the residue does not
escape the dilemma. Either it is some determinate way an experience is given,
and so has phenomenal character, or it is no way of being given at all, and so
nothing has been isolated. Mass escapes this fork because its identity never
rested on a felt mode of givenness; it is individuated by its theoretical
role, and abstraction preserves that role. For phenomenality the determinate
modes of givenness do the individuating work, so abstraction removes exactly
what individuates.

### Point 3 -- dissertation feel and overused refrains (style)

The reviewer noted that several phrases had become refrains, naming "hidden
phenomenal ontology," "the datum is real but finite," and "does not inherit
first-person warrant." Refrain occurrences were thinned, and a "finite/finite"
echo introduced by the earlier Section 1 edit was removed. No argument content
was cut; only repeated phrasings were varied or deleted.

### Point 4 -- Goff's parsimony (Section 7)

The earlier Section 7 wording risked accusing Goff of claiming acquaintance
with electrons, a move he does not make. It was rewritten so the target is the
abduction's starting-point premise, not its conclusion. The simplicity
argument is conceded to be a legitimate abduction that claims no acquaintance
with electrons; the pressure falls on its premise, that the intrinsic
categorical nature of brain matter is consciousness-involving. That premise is
a metaphysical reading of acquaintance, not a deliverance of it, so the
abduction does not begin from a first-personally secured base.

### Anti-AI-smell pass

A dedicated pass removed four machine-sounding constructions introduced during
revision: a "the question is" framing in Section 1, a three-negation
correction-rhythm cluster plus a stray "however" in Section 6, a single-sentence
"not X but Y" pivot in Section 7, and an announcing "The consequence is
substantive" in Section 9.

### Conclusion sharpening (Section 9)

The final paragraph was made more pointed. The closing now states that
panpsychism can still be defended, but not as the view whose metaphysical base
is already given in experience; that base is hidden, theoretical, and
abductive; and panpsychism's advantage over rival theories must therefore be
earned, not inherited. The vocabulary ("earned") matches the Section 2
formulation ("earned as theory"), so the conclusion crystallizes existing
terms rather than introducing new ones.
