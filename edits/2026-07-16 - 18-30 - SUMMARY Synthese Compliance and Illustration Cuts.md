# Summary: Synthese Compliance Fixes and Illustration Cuts

## The finding that reframed this pass

Before cutting further on the strength of a reviewer's aesthetic judgement ("cut it in
half"), I checked `synthese_guidelines.txt`, which is in the repository and had not
been consulted in any of this work. It says:

> "Although Synthese does not prescribe a word or page limit, as a rule of thumb,
> papers are typically between 15 and 30 printed journal pages in length."

So there is no limit to violate. The relevant comparison is printed journal pages, not
the 48-page manuscript PDF. Using the published Franklin and Robertson article as the
calibration (13,374 words across 25 printed pages, about 535 words per page), this
paper at ~20,000 words is roughly 37 printed pages: over the rule-of-thumb range, but
nothing like the crisis "cut it in half" implies. The review's length complaint is a
reviewer's judgement about proportion between payload and ceremony, not a requirement.

The same file, however, contains two **hard** requirements the manuscript was violating.

## Compliance violations found and fixed

1. **Abstract: 320 words against a required 150 to 250.** I introduced this violation
   myself in the reframe pass, when I rewrote the abstract to carry the new thesis and
   did not check it against the guidelines. It is now exactly 250. The rewrite preserves
   every element of the reframe: the two readings, their coincidence and divergence, the
   identity claim ("screening off and transition autonomy are not two conditions but
   one"), the countermodel's existence, the criterion, the exact benchmark, the
   leakiness indexing from the last pass, and the "correction not a rival" framing. What
   went was compression, not content: the hidden-feedback case is no longer previewed in
   the abstract (it is in §3.3.2), and the interventions-as-probes caveat is stated more
   briefly, since §1.2 develops it properly.
2. **Keywords: 7 against a required 4 to 6.** Pre-existing. Dropped "coarse-graining",
   which is the most redundant of the seven given that "strong lumpability" and
   "closure" both remain.

These matter more than word count. A word count over a rule of thumb invites a
reviewer's comment; a malformed abstract or keyword list is the kind of thing that
bounces at desk check before anyone reads the argument.

## Illustration cuts

The review's fifth objection is that the illustrations are "stipulated, not
demonstrated," that every verdict is "the intuitively pre-ordained one," and that when
a criterion always ratifies prior intuitions in its toy cases "we learn nothing about
what it does in hard cases." This is the one block where cutting *answers* a review
objection rather than trading a defense away for brevity, which is why it went first.

1. **§4.7 "Conceptual Contrast: Near-Tie Prediction, Different Ontology Verdicts",
   746 words to about 200.** Removed the traffic illustration (lane-segment versus
   time-of-day partitions), its five-item disclosure list, and the organs-versus-slices
   illustration. Kept the abstract structural claim, and re-anchored the section on the
   countermodel, which is now the rigorous instance of exactly what this section was
   using toy cases to suggest. The new text makes a sharper point than the old one: the
   proxy is not merely *close* to a transition-autonomous partition on observational
   fit, it is *identical* to one, since it satisfies strict conditional irrelevance, so
   no observational diagnostic separates them at all. "A near-tie in prediction is the
   general case; identity in prediction with divergence in closure is the limiting one."
2. **§4.4 "One Distributed Illustration", 704 words to about 450.** Removed the
   organism sub-illustration and the recapitulation of verdicts across three cases.
   Preserved, deliberately: the conceptual point that macro does not mean large or
   spatially contiguous; the induced-versus-stipulated closure clarification, which is a
   defense tied to the scope restriction in §1.3 and would have been lost by deleting
   the section wholesale; the monetary case and its failure case; and the engagement
   with Ross (`ross1995`), who is the source of rainforest realism and whose
   institutional-kinds point the paper extends. The verdict recap was folded into a
   single compact paragraph that keeps the qualified-standing point about organisms
   without the separate illustration.

## Result and honest accounting

21,107 words to 20,051, across this pass and the previous redundancy pass. 48 pages,
down from 50. Clean build, zero undefined references, `ross1995` still cited.

That is roughly a 5% cut. Reaching the top of Synthese's rule-of-thumb range (~30
printed pages) needs about 5,000 words; reaching the middle needs closer to 10,000.
Those cuts are not available without removing defenses, and the remaining blocks are:

- **Objections and replies, ~3,900 words** across nine subsections. Each is a real
  objection with a real reply. The review's reception note criticizes "exhaustive
  bullet-pointed objection handling," so there is a case for consolidating to four or
  five, but every consolidation drops a defense against a named criticism.
- **Admissibility and regime apparatus, ~2,400 words.** This is where the answers to
  the circularity charge live, and the review already calls those defenses "procedural,
  not decisive." Thinning them makes the weakest part of the paper weaker.

My recommendation is to stop cutting here and let the paper run long. Synthese does not
prohibit it, the argument now earns its length in a way it did not before (the
countermodel is new and load-bearing, and the leakiness split resolved a real
contradiction), and the two remaining blocks trade resilience for a page count no rule
requires. If a referee asks for cuts, the objections section is the block to negotiate
over, and doing it in response to a specific request is better than pre-emptively
guessing which defenses they will not miss.

## Checks performed

- `synthese_guidelines.txt` checked for length, abstract, and keyword requirements.
- Abstract verified at exactly 250 words; keywords at 6.
- Full `pdflatex -> bibtex -> pdflatex -> pdflatex` cycle. Clean, exit 0, zero
  undefined references, 48 pages.
- Confirmed `ross1995` survives the §4.4 cut, so no citation was silently dropped.

## Outstanding

1. **Length**: over the rule of thumb at ~37 printed pages, by choice and with reasons
   recorded above. Not a compliance issue.
2. **The blinded submission file remains stale**, now lacking six passes of work. This
   is now the highest-value remaining task, since it is the file that gets uploaded and
   it currently argues a thesis the paper has abandoned.
3. **Title**: recommend keeping "Operationalizing Screening Off for Rainforest
   Admission", now earned by the countermodel.
