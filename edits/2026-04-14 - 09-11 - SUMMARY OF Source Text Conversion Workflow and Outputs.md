## Summary

Converted the previously missing source documents into page-delimited text files under `sources/text-converted/`, and tightened the repo's existing PDF extraction script so it can handle Windows path-length issues and malformed PDFs more reliably.

## Files Converted

- `Asymptotics-and-the-Role-of-Minimal-Models---Oxford-University-Press-Oxford-University-Press-OUP-Test-accounts-University-of-Chicago-Press-ISSN-0007-0882-The-British-Journal-for-the-Philosophy-of-Science-1-53.txt`
- `Batterman-Robert-W.---Philosophical-Implications-of-Kadanoffs-Work-on-the-Renormalization-Group---Jo__90f32b876a.txt`
- `Batterman-Robert-W.---Universality-and-RG-Explanations---Perspectives-on-Science-271-26-47---2019-feb---DOI-10.1162_posc_a_00298.txt`
- `Critical-phenomena-and-breaking-drops_-Infinite-idealizations-in-physics---Elsevier-Science-Elsevier__f89ad9cff5.txt`
- `Explaining-the-Brain-_-Mechanisms-and-the-Mosaic-Unity-of----Carl-F_-Craver----1-edition-July-13-2007----Oxford-University-Press-USA.txt`
- `Ross-Don---Real-Patterns-and-the-Ontological-Foundations-of-Microeconomics---Economics-and-Philosophy-111-113-136---1995-apr---DOI-10.1017_s0266267100003242.txt`
- `The-Devil-in-the-Details_-Asymptotic-Reasoning-in----Robert-W_-Batterman----Oxford-studies-in-the-ph__71a4330419.txt`
- `Why-Equilibrium-Statistical-Mechanics-Works-Universality-and-the-Renormalization-Group---University-__5983aa88d2.txt`
- `PredictiveMindreviewFINALVERSIONJuly2016.txt`

## Script Changes

Updated `scripts/extract_pdf_text.py` to:

- support glob expansion through Python's `glob` module rather than relying on `Path.glob`, which avoids the earlier absolute-path limitation
- shorten very long output stems with a deterministic hash suffix so Windows path limits do not block writes
- use a Windows-safe extended path prefix when opening long source filenames
- fall back from `pypdf` to `fitz` (`PyMuPDF`) when embedded PDF text extraction fails on malformed files

## Rationale

The goal was to use repo-native tooling where possible rather than inventing a separate workflow. `justfile` does not currently expose a source-to-text recipe, but the repo already included `scripts/extract_pdf_text.py`, so the cleanest approach was to improve that script slightly and then reuse it for the missing PDFs.

For the `.doc` source, Word COM automation was available on this machine. I converted the document to a temporary PDF and then passed that PDF through the same page-based extractor so the resulting `.txt` format stayed consistent with the PDF-derived outputs.

## Verification

Spot-checked the opening sections of all new `.txt` files and confirmed page markers are present.

Also checked page-marker counts for the new outputs. The resulting counts were plausible for each document, including the long-form book sources and the review document.

The two fallback-sensitive cases were:

- `The Devil in the Details...pdf`, which required the `fitz` fallback because `pypdf` failed on malformed internal objects
- the `.doc` review file, which required Word-to-PDF conversion before text extraction

## Notes

Some output filenames remain long because they preserve the source naming pattern already common in `sources/text-converted/`. Where the source stem would have exceeded a safe Windows path length, the extractor now truncates and appends a short stable hash.
