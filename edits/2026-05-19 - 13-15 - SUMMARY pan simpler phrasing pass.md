# Pan paper simpler-phrasing pass

## Scope

Third editorial pass on `pan/overdrawing-on-experience-mainbody.tex`. Targets sentences that compress multiple moves into one heavy clause, and two paragraphs that needed a plain-language anchor before their technical statement. No argument, qualification, or citation was changed.

## Why

After the first pass (AI fingerprints) and the second pass (clarity hazards and voice), the remaining weakness was overwriting: places where the prose was technically correct but asked the reader to absorb two or three moves at once. Plain language as an anchor, then a precise unpacking, is easier to read than a single dense clause that fuses both.

## Changes

1. **Section 2, warrant problem.** "The warrant problem remains, because the abduction often depends on treating the first-person datum as the right kind of thing to fill the categorical vacancy left by structural physics. That is already a metaphysical interpretation of the datum." — broken into three plain sentences. The "quietly treats" diagnosis is now its own sentence, and the "metaphysical claim, not something the datum delivers on its own" clarification is its own sentence.

2. **Section 2 close.** "Its micro-, proto-, or cosmic phenomenal posits must then be assessed by the explanatory work they perform and by the costs they introduce." → "Its micro-, proto-, and cosmic-phenomenal posits then have to be judged by what they explain and what they cost."

3. **Reportability subsection opener.** Added one anchor sentence before the Metzinger lit review: "The strongest challenge here comes from meditators who report pure or contentless awareness. They describe moments of consciousness without any object, self, or thought, which is exactly the kind of bare subjectivity the previous section denied was given in experience." Reason: the original opener jumped straight into Metzinger. A reader not already inside the meditation literature could not see what the challenge was. The anchor makes the challenge audible before the citations.

4. **Reportability, cessations sentence.** Rewrote the recursive "they are known to the philosophical discussion through reports concerning episodes in which ordinary consciousness, perception, or temporal experience is said to be absent" as "what reaches the philosophical discussion is always a report of an episode in which ordinary consciousness was said to be absent."

5. **Reportability, Lin selfless.** The long "Lin's discussion of totally selfless states provides an instructive analogue: if a state is supposed to be wholly selfless, it is difficult to see how an autobiographical memory of that very state can straightforwardly establish what it was like while selfless" was broken into two simpler sentences.

6. **Reportability, Zahavi / Henry & Thompson.** The comma-tangled "Zahavi, and Henry and Thompson in direct engagement with Albahari, likewise argue that..." was re-attributed: Zahavi gets the main claim; Henry and Thompson get "press a similar point in direct engagement with Albahari." Same citations, smoother sentence.

7. **Reportability, retrospective-report closer.** The long sentence with the punchline buried at the end was split into two. The punchline ("The ordinary conditions for accurate retrospective report are exactly what the report says were suspended") now stands on its own.

8. **Section 5, combination-problem anchor.** Added one anchor sentence before the technical formulation: "Panpsychism's biggest internal puzzle is the combination problem: how do many small minds add up to one large mind?" Reason: a reader who is not already inside the debate now sees what the problem actually is before encountering the technical phrasing.

9. **Section 8, owes-an-account.** Nominalized "contributes explanatory value beyond occupying the place where brute emergence would otherwise appear" rewritten with a working verb: "does, beyond standing in the place where brute emergence would otherwise stand."

10. **Section 8, marks-dissatisfaction.** "marks dissatisfaction with brute emergence without yet explaining the organized consciousness that motivated the posit in the first place" → "only records the discomfort with brute emergence, without yet explaining the organized consciousness that motivated the discomfort."

11. **Section 8, temporal grain.** "every physical event in the nervous system becoming conscious as such" → "every event in the nervous system surfacing as experience." Lower nominalization count; same claim.

## What was deliberately left alone

- The conclusion paragraphs (already worked over in pass two; their financial vocabulary and tagline are where they should be).
- The dilemma frames in the bare-subjectivity, panprotopsychist, and pure-awareness sections.
- The lit-review paragraph that introduces the Bruntrup volume, Chalmers, Coleman, Mørch, Roelofs, etc. It is dense because it has work to do.
- The structure-and-dynamics section. It is already plain.

## Build

`overdrawing-on-experience-sn.tex` rebuilt via `pdflatex → bibtex → pdflatex → pdflatex`. 16 pages, no undefined citations, no errors. PDF copied to `pan/overdrawing-on-experience-sn.pdf`.
