# Pan paper paragraph-rhythm pass

## Scope

Three structural moves on `pan/overdrawing-on-experience-mainbody.tex` to break up uniform paragraph lengths. No content was added or removed; the merges and splits redistribute existing text.

## Why

Three sections had paragraph lengths that were suspiciously close to one another, which reads as machine-paced rather than human-paced. The introduction was four paragraphs all in the 99–140 word range. The Reportability subsection was 158/113/117/93/93/77, a smooth descent. The conclusion was 62/63/80/48/57, five near-uniform paragraphs that buried the paper's tagline in the last sentence of the last one. Breaking the uniform rhythm makes the prose feel composed rather than tiled.

## Changes

1. **Introduction p1+p2 merged.** The two opening paragraphs both set up the panpsychist appeal (the epistemic asymmetry, then the resulting metaphysical pull, then Strawson and Goff as careful examples). They were always one move; the paragraph break was working against the argument. Merging produces a 214-word opening that establishes the position to be criticized, followed by a 99-word constraint paragraph and a 140-word thesis paragraph. The introduction now reads long-short-medium rather than four near-identical beats.

2. **Reportability p3 split.** The paragraph on reportable episodes contained two distinct applications of the reportability constraint: Lin on selfless states, and Zahavi (plus Henry and Thompson) on for-me-ness and embodiment. Splitting after the Lin citation gives one paragraph that establishes the general reportability requirement and the selfless-state version of it, then a separate paragraph that extends the same form of pressure to contentless-awareness reports via Zahavi and Henry and Thompson. The subsection rhythm shifts from 158/113/117/93/93/77 to 158/113/65/52/93/93/77, with the two short central paragraphs creating contrast.

3. **Conclusion last sentence split out.** The tagline "First-person experience gives panpsychism a datum, not a metaphysics" was previously the last sentence of a 57-word paragraph. It now stands as its own one-sentence final paragraph (9 words). This is a deliberate authorial move: the paper's controlling claim closes the paper on its own, rather than being trailed off as the end of an explanation.

## What was not done

- No new content was written. All three changes are structural redistributions of existing text.
- Other sections were left alone. The Scope and Bracketing section, Goff/Strawson section, and Explanatory Burden section already have varied paragraph lengths (32 to 169 words in Scope, for example).
- Within-paragraph sentence rhythm was not retouched; the earlier passes handled that.

## Build

`overdrawing-on-experience-sn.tex` rebuilt via `pdflatex → bibtex → pdflatex → pdflatex`. 16 pages, no undefined citations, no errors. PDF copied to `pan/overdrawing-on-experience-sn.pdf`. Helper script `pan/_para_count.py` used to measure paragraph word counts was removed after use.
