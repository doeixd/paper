# Franklin and Robertson, "Emerging into the Rainforest" — which copy to use

The repository holds five copies of this paper in three different versions. Use the
published one. This note exists because the version differences are easy to miss and
the wrong copy is the one that was indexed.

## Use this

- **`sources/s13194-024-00622-4.pdf`** — the version of record. *European Journal for
  Philosophy of Science* (2024) 14:61, 25 numbered pages. This is what the bib entry
  `franklinrobertson2024` cites.
- **`sources/text-converted/s13194-024-00622-4.txt`** — extracted text of the above,
  produced with `python scripts/extract_pdf_text.py`.

## Do not cite from these

- `sources/FRAEIT-2.pdf` (36pp) — PhilPapers copy of the "Forthcoming in EJPS"
  preprint. `FRAEIT-2` is the PhilPapers identifier, not an author or title string.
- `sources/Emerging into the rainforest Emergence and special science ontology.pdf`
  (36pp) — same preprint.
- `sources/Franklin, Alexander; Robertson, Katie - ... DOI 10.1007_s13194-024-00622.pdf`
  (36pp) — same preprint despite the published-looking filename.
- `sources/Franklin-Robertson-2024-Emerging-into-the-rainforest-preprint.pdf` (32pp) —
  an **older, November 2021** draft.
- `sources/text-converted/Franklin-Robertson-2024-Emerging-into-the-rainforest-preprint.txt`
  — extracted text of that 2021 draft. Until 2026-07-16 this was the *only* converted
  text of the paper in the repository, so any keyword search over `text-converted/`
  silently returned the oldest draft rather than the published article.

## Two traps worth knowing about

1. **Ligatures.** All copies render "off" as "oﬀ" and "classification" as
   "classiﬁcation" with Unicode ligatures. A search for `screening off` or
   `cross-classification` returns **zero hits** against the raw extracted text. This is
   why the paper was repeatedly reported as absent from `sources/`. Normalize
   ligatures (`ﬀ`→`ff`, `ﬁ`→`fi`, `ﬂ`→`fl`) and de-hyphenate line breaks before
   searching.
2. **Pagination.** The published article is paginated "Page X of 25" under article
   number 61, so page pins do not behave like ordinary journal pages, and preprint page
   numbers do not correspond to published ones at all. Cite by **section** (`\S3.1`,
   `\S3.2`), which is stable across every version here and was verified against the
   published text.

## Content check across versions

The published text and the "forthcoming" preprint agree on everything our argument
uses. The November 2021 draft agrees substantively but words some claims differently
(for example it lacks the exact sentence "Distinct macrodependencies are required for
novelty," though it makes the same point via the binary-star case).

Verified verbatim in the published version:

- Unconditional relevance: `P(A|LLD) > P(A)` (§3.1)
- Conditional irrelevance (strict version): `P(A|B & LLD) = P(A|B) = x` (§3.1)
- "the admittance criteria for the rainforest" (§1)
- "Distinct macrodependencies are required for novelty" (§3.2)
- Binary star: its dependencies "are just the same nomic dependencies that describe the
  trajectories of the two individual stars" (§3.2)
- "deviant microstates" and the relaxation of strict screening off to approximate (§3.1)
- Cross-classification as the mark of novelty: "Distinct macrodependencies at different
  levels leads to cross-classification" (§3.2)
- The interventionism gesture: "The interventionist framework generalises to a
  multilevel framework (Eva & Stern, 2020)" (§3.1)

The last item matters for our positioning. They gesture at interventionism and cite
Woodward, but their *stated* conditions are unindexed conditional probabilities. That
gap is the paper's opening, and it is a feature of the published text, not an artifact
of a draft.
