# Reviewer-Pushback Hardening Pass

Date: 2026-04-22

Target file: `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`

These edits address a set of objections a skeptical Synthese referee is most
likely to raise on the closure paper. The plan was approved with one
modification: skip the §5 compression pass (item H), and keep the
memory-bearing worked example short (item D).

## A. Thesis sharpening

Replaced the diffuse three-sentence framing in §1 with a single anchor
sentence, mirrored in the conclusion opening and in Novelty bullet 1:

> Screening off is necessary but not sufficient; a macro-variable earns
> admission only if it carries its own transition structure under
> admissible intervention.

Why: the same one-liner now does the work in three abstract-level locations,
so a referee skimming the introduction, the novelty list, or the conclusion
sees the same thesis. The pre-edit framing buried the key claim several
sentences in.

## B. Common-cause section restructured to lead with the wedge

§3.4.1 ("The Common-Cause Proxy as the Decisive Test") was reordered so the
case is presented first as a constructive challenge to the
screening-off-plus-novelty package, then resolved by distinguishing the
observational from the modal reading of conditional independence, with the
five-step illustration now serving as confirmation rather than setup. The
prior "concession then recovery" cadence (which read as conceding ground to
F&R before reclaiming it) is replaced by a direct dialectical move:

1. Stage the common-cause case.
2. Show that F&R's package satisfies each component under passive observation.
3. Show that the natural recovery turns on a distinction between two readings
   of conditional independence, only one of which excludes the proxy.
4. Show that closure operationalizes the modal reading and supplies the
   selector that screening-off alone does not.
5. Confirm with the five-step illustration.

Why: this presents closure as the operational discriminator the F&R
framework lacks, rather than as a clarification appended to it. The
philosophical contribution becomes harder to dismiss as merely conceptual.

## C. Rosas Theorem 1 cited explicitly; observational/interventional
distinction tightened

Added an explicit citation to Rosas et al.'s Theorem 1 in §3.4 ("How the
Formal Machinery is Used Here"), and reframed the surrounding paragraph so
it is clear that the equivalence their theorem establishes is between two
readings of *observational* structure under their stated assumptions, not
between observational and interventional structure. The paragraph now states
that our criterion is downstream of their result rather than in tension with
it, and identifies the kinds of cases (relevant upstream structure outside
the modeled state space; admissible interventions targeting the candidate
partition while leaving such structure intact) where the two diagnostics can
diverge.

Why: a Rosas-literate referee was the most likely source of a "you've
misread our theorem" objection. The new framing makes our additional
requirement (admissible-intervention stability) visibly compatible with their
formal result rather than appearing to contest it.

## E. Structured-space metaphysical payoff softened to a programmatic register

Three locations were touched (§1 closing, §2.13 closing, §6 conclusion). In
each case the language was shifted from a strong metaphysical assertion
("the rainforest is best understood as the structured space of
computationally closed coarse-grainings") to a programmatic reading ("can
then be read as", "naturally read as", "the most natural reading on this
view"). The §2.13 paragraph also explicitly notes that the strength of the
formal properties of that space (full lattice structure, completeness across
regimes) remains a domain-conditional question to be settled as the closure
discipline matures.

Why: the original formulation outran the operational apparatus the paper
actually delivers. Softening to a programmatic register protects the paper
from a reviewer sympathetic to the project who would still want the
metaphysical claim cashed out before accepting it.

## F. Conceptual-illustration framing on the §4.5 cases

Added one sentence to the opening of §4.5 ("One Distributed Illustration")
clarifying that the cases are conceptual illustrations of how the verdict
categories operate, not worked empirical analyses of money or physiology.
The §4.10 organ illustration is already framed under "Conceptual Contrast",
so no change there.

Why: the monetary and organ examples are load-bearing philosophically but
were vulnerable to the "under-analyzed relative to importance" objection.
The added framing aligns the cases explicitly with the
illustration-not-evidence rule from the style guide.

## G. Admissibility stress-test on a hard case

In §2.6 ("Regime Individuation and Circularity"), expanded the existing
mention of psychiatric categories into a brief stress-test paragraph showing
how the criterion handles major depressive disorder under three independently
motivated regime characterizations (symptom-cluster, neurobiological,
social-functional). The criterion's verdict is qualified standing at best,
with explicit downgrade for any commitment that depends on the upstream
regime choice. The paragraph closes with the point that this refusal to
launder a contested kind into robust standing is the discipline working as
intended.

Why: reviewers will press on whether admissibility decisions can be made
non-question-beggingly in genuinely hard cases. The traffic and organ
illustrations are clean; this stress-tests admissibility against a case
where the framework's verdict is principled refusal rather than confident
admission.

## D. Short worked example of memory-bearing dynamics (kept brief)

In §5.5 ("The Markov Template is Too Restrictive"), replaced the abstract
"Concrete cases make this less abstract" paragraph with a brief but
substantive worked example using adaptive immunity. The example shows a
memoryless state failing closure (primary and secondary responses follow
different transition profiles), a minimally enriched state (current state
plus prior-exposure category) closing informatively at the target grain,
and the institutional analogue carrying through with the same structure.

Why: the most likely technical objection is that the enriched-state
extension either trivializes or becomes unavailable. The worked example
exhibits the middle case the framework needs.

## Skipped: H (compression pass on §5)

Per user instruction, the §5 objections section was not compressed. Items D
and G were inserted without freeing offsetting space, so net length increased
slightly. If a length budget becomes binding during submission prep, H
remains the natural target.

## Files touched

- `latex/real-patterns-need-closure-SYNTHESE-mainbody.tex`

No bibliography, template, or auxiliary files needed changes (the
`\citep[Thm.~1]{rosas2024}` form uses an existing `.bib` entry).

## What this pass does not do

It does not extend the operational apparatus into a methods specification, it
does not alter the criterion itself, and it does not change the paper's
overall scope. The pass is purely defensive: it tightens the logical
exposure surface against the specific objections enumerated in the reviewer
notes.
