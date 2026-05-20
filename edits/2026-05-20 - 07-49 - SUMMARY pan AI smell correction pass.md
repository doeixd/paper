# Summary of edits: pan AI smell correction pass

Date: 2026-05-20 07:49

Files changed:

- `pan/overdrawing-on-experience-mainbody.tex`

## What changed

I reread `pan/AI smells.txt` after the concern that the attractor edits had made the prose worse. That concern was right. Several of the attempted replacements had produced a different kind of generic style: tidy corrective reframes such as "what weakens is," abstract setup phrases such as "the needed discipline is," and over-neat conclusion language.

I restored the better original wording where the attempted edit was merely another AI-shaped attractor. I kept only the narrower improvements that removed unnecessary announcement or restatement:

- Removed the generic setup sentence "This appeal is legitimate, but it must be disciplined."
- Replaced "This constraint matters because..." with a direct continuation of the argument.
- Rephrased the transition into the displayed argument so it refers to the paper's own datum/characterization/metaphysical-inflation structure.
- Removed a repeated conclusion sentence announcing that the argument is a constraint rather than a disproof.
- Removed the broad final sentence about "moving too quickly from phenomenology to fundamental metaphysics," which functioned as a decorative cap rather than a new claim.

## Rationale

The goal was not to make the prose sound less academic or more unusual. The goal was to stop the revision from creating the exact problems flagged in `AI smells.txt`: correction-rhythm phrasing, self-announcing sentences, tidy capping lines, and generic anti-generic prose. The final edits are deliberately modest and leave the paper's defensive qualifications in place.

## Verification

I ran a single `pdflatex` pass through `latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.tex`. The build completed and produced a 21-page PDF. The remaining warnings were underfull box warnings and the existing MiKTeX update notice, not LaTeX errors.
