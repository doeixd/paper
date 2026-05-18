# Summary of Panpsychism Springer Template Setup

## Changes made

- Added a Springer `sn-jnl` wrapper for the panpsychism paper at `latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.tex`.
- Split the paper body into `pan/overdrawing-on-experience-mainbody.tex` so the Springer wrapper can use `\input{...}` while the original standalone draft remains intact.
- Kept author and affiliation metadata out of the Springer wrapper so the draft remains suitable for a blinded review workflow.
- Compiled the Springer version through the standard LaTeX and BibTeX sequence.

## Rationale

The previous standalone LaTeX file remains useful for quick local reading and layout experiments, but the Springer template gives the draft a more realistic submission shape. Separating the prose body from the wrapper also keeps the philosophical argument easier to revise while allowing the document class, abstract, keywords, and bibliography handling to follow the target journal format.

The change does not alter the argument itself. It changes the publication container and build path, while preserving the existing prose, citations, and argumentative qualifications.

## Verification

- Built `overdrawing-on-experience-sn.tex` with `pdflatex -> bibtex -> pdflatex -> pdflatex`.
- The resulting PDF was generated at `latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.pdf`.
- The final log did not report unresolved citations or fatal errors.
