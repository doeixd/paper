# Pan paper voice and clarity pass

## Scope

Second editorial pass on `pan/overdrawing-on-experience-mainbody.tex`, following the AI-fingerprint pass. This pass targets clarity hazards (places that could be misread) and a small set of generic-register sentences. The arguments, qualifications, and citations are unchanged. The Springer PDF was rebuilt and is clean.

## Why

The first pass removed the most obvious AI tells (repeated 5/6-item lists, staccato closes, First/Second/Third scaffolding, "X is one thing. Y is another"). With those gone, the prose still had a few specific weak spots: claims phrased in ways that could be misread as stronger than intended, a controlling metaphor ("overdrawing") that did not appear early enough to organize the introduction, and conclusion sentences in the most generic philosophy-paper register. This pass addresses those without adding rhetorical flourishes that would clash with the paper's measured tone.

## Clarity changes

1. **Intro, structural-physics concession.** "Physical science... often appears to describe matter only in structural, relational, and dispositional terms" was rewritten to "is often taken to describe matter in structural, relational, and dispositional terms." Reason: the word "only" lets a skeptical reader treat the paper as conceding the Russellian view from the outset. "Often taken" keeps it as a position attributed to others, which is what the surrounding sentence intends.

2. **Datum / metaphysics tagline.** "first-person experience supplies panpsychism with a datum, and does not by itself supply a metaphysics" was tightened to "supplies panpsychism with a datum, not with the metaphysical conclusion panpsychism wants to draw from it." Reason: "a metaphysics" was ambiguous between "a metaphysical position of any kind" and "the panpsychist's metaphysics specifically." The intended sense is the latter.

3. **Russellian-monism step.** "I bracket the full case for Russellian monism, but I address one step within it" was sharpened to "I take up one step within it: the move from the claim that physics gives only structure and dynamics to the claim that the categorical basis of structure is phenomenal." Reason: the original promised to identify the step but only did so two paragraphs later. The colon gives the reader the answer immediately.

4. **"Biologically situated" experience.** "What we know from within is organized, temporal, biologically situated experience with phenomenal character" was rewritten to "organized, temporal experience with phenomenal character, anchored in a body and a history." Reason: "biologically situated" was an unargued compression. "Anchored in a body and a history" says the same thing in language the paper has already earned.

5. **Vagueness sentence.** "Vagueness, peripherality, and fogginess are phenomenal characters, not routes to characterless subjectivity" was rewritten to "Vagueness and fogginess are themselves phenomenal characters, not routes to a subjectivity without any phenomenal character at all." Reason: "peripherality" is a rare and slightly awkward noun, and "characterless subjectivity" forces the reader to pause. The replacement uses the same vocabulary that the paper uses elsewhere.

6. **Fundamental / microphysical distinction.** "It does not by itself disclose consciousness as belonging to the fundamental level, the microphysical level, or the categorical basis of physical reality" was clarified to "as belonging to the fundamental level as such, to the microphysical level in particular, or to the categorical basis of physical reality." Reason: without the explicit "as such" and "in particular," a careless reader could conflate the two levels. The sentence now signals that the three items are distinct kinds of claim.

7. **Cordoned off.** "Once first-person warrant is cordoned off" was changed to "Once first-person warrant is no longer doing the paying." Reason: "cordoned off" is a crime-scene image that clashes with the financial metaphor (overdrawing, transferable credit, earn its keep, borrow and spend) running through the paper. The replacement keeps the paper inside its controlling image.

## Voice changes

8. **Overdrawing earns its keep early.** In the introduction, the title metaphor previously appeared only as the verb in one sentence. Added one sentence immediately after that verb so the metaphor is unpacked once and only once: "The datum supplied by experience is real but finite, and panpsychism repeatedly draws against it for posits the datum cannot cover." This gives the paper a controlling image that the rest of the prose can lean on without restating.

9. **Conclusion para 1.** Rewrote "Panpsychism survives this argument. The issue is the warrant supplied by first-person experience. First-person experience establishes that consciousness exists..." as "Panpsychism survives this argument; what does not survive is the way panpsychism leans on first-person experience for warrant. First-person experience tells us that there is consciousness, and tells us something about what conscious life is like. That is real evidence, and the paper does not minimize it." Reason: the original opened the conclusion in the most generic register available. The replacement says the same thing with a clearer concession to the reader and a sharper diagnosis.

10. **Conclusion para 2.** "they are not supported by the same first-person evidence that supports the reality of consciousness" was changed to "they are not paid for by the same first-person evidence that pays for the reality of consciousness," which keeps the conclusion inside the paper's financial metaphor.

11. **Conclusion para 2 closer.** "knowing consciousness from within does not by itself settle the metaphysical status of what is known from within" was tightened to "knowing consciousness from within does not by itself settle its metaphysical status." Reason: the "from within / from within" repetition was creating a small hall-of-mirrors effect.

12. **"Flat abductive ground."** Replaced with "must compete with its rivals on the same abductive terms as any other metaphysical hypothesis." Reason: "flat abductive ground" was distinctive but slightly obscure; the replacement is clearer without being more generic, because it carries the substantive claim (panpsychism does not get to play by special rules) more explicitly.

## What was deliberately left alone

- The "I bracket the full case for Russellian monism" qualification, the structure-and-dynamics argument's structure, and the engagement with Strawson, Goff, Mørch, Roelofs, Lin, Shani, and Albahari were not touched. None of the citation attributions changed.
- The conclusion's last paragraph ("Panpsychism overdraws on experience... First-person experience gives panpsychism a datum, not a metaphysics.") was left intact. The tagline lands once at the end and was already varied earlier in the intro (with "supplies... not with the metaphysical conclusion").
- The "phenomenal filling" / "vacancy" image in the structure-and-dynamics section was not amplified. It already does its work in the one place it appears.
- The dilemma frames in the bare-subjectivity and panprotopsychist sections were left as the first pass left them.
- The Reportability subsection's careful list of contentless-awareness phenomena was not pruned further. Those lists are doing real work in the dialectic and shortening them would weaken the engagement with Metzinger, Gamma, Albahari, Lin, Windt, and Schwitzgebel.

## Build

`overdrawing-on-experience-sn.tex` rebuilt via `pdflatex → bibtex → pdflatex → pdflatex`. 16 pages, no undefined citations or errors. PDF copied to `pan/overdrawing-on-experience-sn.pdf`.
