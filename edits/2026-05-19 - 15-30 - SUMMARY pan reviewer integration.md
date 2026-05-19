# Pan paper reviewer-integration pass

## Scope

Six changes to `pan/overdrawing-on-experience-mainbody.tex` and the Section 7 + Conclusion titles, integrating reviewer feedback that distinguished the paper's diagnostic claim (panpsychists lean on first-person rhetoric beyond what it supports) from its prescriptive claim (panpsychism has therefore forfeited a special evidential status). The reviewer's verdict was that the diagnostic claim is the lasting contribution and that the framing currently overshoots in places where the substance is more like a clarification than a takedown. The changes implement the strongest of the suggestions; one was applied earlier (the structure-horn closure for thinning, from suggestion 2 of the prior pass).

## Changes

1. **Section 2 abductive-reframing diagnosis sharpened.** The earlier draft said the abduction "quietly treats the first-person datum as the right kind of thing to fill the gap that physics leaves." The revision names the implicit commitment more precisely: it is a *fittingness assumption*, that experience is the type of categorical filler the structure-and-dynamics argument calls for. That assumption is the metaphysical move being smuggled in. This was the reviewer's request to make the abductive engagement more head-on without expanding it into its own section.

2. **Section 7 title softened.** "Goff, Strawson, and Degrees of Violation" became "Goff, Strawson, and Degrees of Strain." The reviewer correctly noted that "violation" imputes wrongdoing where the substance is often unclarity rather than violation. "Strain" preserves the differential-application framing without the moral charge.

3. **Section 7 opener: typology added.** The previous opener named the positions covered ("austere realistic monism, micropsychism, cosmopsychism, panprotopsychism, and phenomenal-powers grounding") but treated them as a single bucket. The new opener adds three sentences that distinguish the kinds of panpsychist position the argument applies to: those that lean directly on first-person evidence, those that operate abductively but retain the rhetorical glow of first-person privilege, and those that make no first-person warrant claim at all. The third group is explicitly placed outside the argument's scope. This is the reviewer's typology suggestion, integrated through prose rather than through an explicit "I will now distinguish three groups" signpost.

4. **Section 8 Saad concession sharpened.** The earlier draft already conceded Saad in passing ("I grant both points"). The revision turns this concession into an explicit scope statement: Saad-style harmony arguments make no claim on first-person warrant, are outside the present argument's reach, and the introspective warrant constraint is a discipline on how first-person evidence is used, not a universal critique of panpsychism. This reframes the concession as a precision of the argument's target rather than a hedge.

5. **Conclusion title softened.** "The Forfeiture of Special Warrant" became "The Limits of Special Warrant." Same reasoning as the Section 7 title change: "forfeiture" implies wrongdoing; "limits" describes the argument's actual content (the warrant has limits; the panpsychist who exceeds those limits is doing more work than the warrant can carry).

6. **Closing line tightened for precision.** The reviewer noted that "First-person experience gives panpsychism a datum, not a metaphysics" overstates the case, because the existence and phenomenal character of consciousness is already metaphysical content. The revision: "First-person experience gives panpsychism a datum, not a license for the metaphysics built on top of it." This preserves the rhetorical structure and the punch of the original, while correcting the imprecision the reviewer flagged.

## What was deliberately not done

- **Section 8 explanatory-burden challenge not expanded into a longer "what does the hidden base explain?" critique.** The reviewer suggested this could become a major second contribution of the paper. I left it alone because expanding it would shift the paper's center of gravity away from the warrant argument and make its narrower thesis harder to defend on its own terms. The current treatment of dreamless sleep and temporal grain as conceptual illustrations of the constraint is enough.
- **"Overdrawing" preserved as the controlling image.** The reviewer hinted that the financial metaphor implies wrongdoing as much as "forfeiture" does. I disagree on this one: the metaphor describes a specific failure mode (writing checks the account cannot cover), which is exactly the diagnostic claim the reviewer praised. Losing it would lose the paper's rhetorical handle. The section and conclusion titles were the place to lower the temperature; the metaphor itself was not.
- **"Forfeiting" still appears once in the body**, in Section 2: "panpsychism may remain a legitimate metaphysical theory while forfeiting the special authority of first-person evidence." I left this because it is the *substantive* claim being made about a specific abductive move, not a section title doing rhetorical framing. Softening the title while leaving the substantive use in place was the right split.

## Build

`overdrawing-on-experience-sn.tex` rebuilt via `pdflatex → bibtex → pdflatex → pdflatex`. 17 pages, no undefined citations, no errors. PDF copied to `pan/overdrawing-on-experience-sn.pdf`.
