Summary:

Added plain-text transcriptions for the newly gathered real-patterns sources under `sources/text-converted/`.

What changed:

- Extracted page-marked text files from the newly downloaded PDFs using the repository's existing `scripts/extract_pdf_text.py` workflow.
- Added a text conversion for `Jiang-2025-Biological-object-as-real-patterns-preprint.docx`.
- Included an explicit source note at the top of the Jiang DOCX transcription explaining that stable page numbers are not preserved in the source format, so the transcription does not include page markers.

Files added in `sources/text-converted/`:

- `Franklin-Robertson-2024-Emerging-into-the-rainforest-preprint.txt`
- `Ladyman-Lorenzetti-Effective-Ontic-Structural-Realism-preprint.txt`
- `Rosas-et-al-2024-Software-in-the-natural-world.txt`
- `Andersen-2025-The-density-of-structure-preprint.txt`
- `Jiang-2024-The-metaphysics-of-mechanisms.txt`
- `Jiang-2025-Biological-object-as-real-patterns-preprint.txt`
- `Wallace-2024-Real-patterns-in-physics-and-beyond.txt`
- `Ladyman-2024-Patterns-all-the-way-up.txt`

Why:

- These transcriptions make the new literature searchable inside the repository and keep it aligned with the existing `sources/text-converted/` research workflow.
- Preserving page markers for the PDFs supports accurate quotation and citation checking later in drafting.
- Flagging the DOCX pagination limitation avoids introducing false precision about page references.

Checks performed:

- Verified that all target transcription files were created.
- Spot-checked a PDF transcription to confirm `=== PAGE n ===` markers were present.
- Spot-checked the DOCX transcription to confirm the pagination warning was included.
