# Pan paper citation audit fixes

## Scope

Verified every entry in `pan/overdrawing-on-experience.bib` against authoritative metadata (primarily CrossRef via DOI) and checked that the in-text attributions accurately characterize what the cited work argues. Applied corrections to bib metadata mismatches and tightened one in-text attribution that conflated two related Mørch papers. Rebuilt the Springer PDF.

## Why

The paper's argument turns on accurately representing positions in the panpsychism debate (Strawson, Goff, Chalmers, Coleman, Mørch, Roelofs, Lin, Frankish, Shani, Albahari, Mendelovici, Saad, Papineau, Metzinger, Schwitzgebel, etc.). A skeptical philosophy reviewer will spot-check citations. Wrong issue numbers, wrong volume years, or loose attributions are easy to flag and undermine confidence in the rest. The fixes are mechanical accuracy improvements; the argument is unchanged.

## Bib metadata changes

1. **`goff2024`** — `number = {3--4}` corrected to `number = {3}`. CrossRef confirms *JCS* 31(3):56–82 is a single-issue placement, not a double issue.
2. **`morch2024allone`** — `number = {9--10}` corrected to `number = {9}`. CrossRef confirms *JCS* 31(9):88–112.
3. **`morch2018`** — `year = {2018}` corrected to `year = {2020}`. CrossRef shows online-first 2018-10-25, but *Topoi* 39(5) is bound as the 2020 print volume; secondary literature uniformly cites this as Mørch 2020. The cite key was left as `morch2018` to avoid touching every in-text reference; only the rendered year changes.
4. **`windt2015`** — `year = {2016}` corrected to `year = {2015}`. The Open MIND online publication is 2015; the cite key already encoded 2015. Aligning the key and the rendered year removes a small internal inconsistency.
5. **`goff2017bonding`** — `address = {Oxford}` corrected to `address = {New York}`. The Brüntrup/Jaskolla 2017 volume is OUP New York (`bruntrup2017` was already correct). The two entries now agree on the volume's publisher address.

## In-text change

In the literature-survey paragraph (Scope and Bracketing), the gloss

> "Mørch develops a phenomenal powers version of Russellian panpsychism..."

was tightened to

> "Mørch argues that dispositionalism about properties supports a phenomenal-powers panpsychism, and develops the broader phenomenal-powers metaphysics elsewhere..."

with the citation list extended to `\citep{morch2018,morchForthcoming,roelofs2019}`. Reason: the cited 2018 paper is specifically the dispositionalism-to-panpsychism argument; the developed phenomenal-powers metaphysics lives in the forthcoming Rabin volume chapter (already in the bib). The original gloss conflated the two. The new wording attributes the right claim to the right paper.

## Items checked and left alone (verified correct or defensibly unverifiable)

- **Direct-quote and page-specific citations** to `strawson2006` (p. 4, "the fundamental given natural fact") and `goff2017cfr` (pp. 106–132 for the Revelation thesis): plausible, consistent with the structure of both texts, but I could not retrieve the source PDFs to verify the precise page numbers. Flagged for a manual eye but no change made.
- **Routledge Handbook of Panpsychism chapter pages** for Albahari (2019), Goff (2019), Mendelovici (2019): the existing numbers are consistent with the published volume but CrossRef does not carry chapter-level pages for that handbook.
- **Albahari 2009** (*JCS* 16(1):62–84) and **Ramm 2021** (*Mind and Matter* 19(1):75–106): neither has a deposited DOI; existing metadata matches what is commonly cited.
- **`morchForthcoming`**: cannot be verified until publication; flagged as a record to update when the Rabin volume appears.
- **All other entries** in the bib were verified against CrossRef and match exactly (Frankish 2021, Coleman 2014, Chalmers 2015/2017, Gamma & Metzinger 2021, Laukkonen 2023, Metzinger 2020, Saad 2022, Schwitzgebel 2008/2011, Shani 2015/2022, Lin 2025 [Songchi], Lin 2022 [Ying-Tung], Roelofs 2019/2020, Henry & Thompson 2011, Papineau 2002, Thompson 2014, Zahavi 2005, Goff 2017 CFR / bonding / cosmopsychism, Frankish 2021, Bruntrup 2017 volume).

## In-text attribution accuracy

Each `\citep` was checked against what the cited paper actually argues. Other than the Mørch 2018 tightening described above, all attributions accurately characterize the cited work. Notable spot-checks: Goff 2024's hybrid-cosmopsychism concession (subjects strongly emergent, phenomenal properties weakly emergent), Mørch 2024 and Shani 2015/2022 on non-mirror-image cosmopsychic individuation, Lin 2025 on revelation's neutrality between panpsychism and physicalism, Papineau 2002's phenomenal-concept treatment of the gap, Saad 2022 on psychophysical harmony as an independent abductive route — all correctly summarized.

## Build

Rebuilt `latex/springer-sn-template/sn-article-template/overdrawing-on-experience-sn.tex` (which `\input`s `pan/overdrawing-on-experience-mainbody.tex` and reads `pan/overdrawing-on-experience.bib`) via `pdflatex → bibtex → pdflatex → pdflatex`. Output PDF copied to `pan/overdrawing-on-experience-sn.pdf`. No undefined citations or LaTeX errors; only routine `Underfull \vbox` notices from the Springer template.

Note: `pan/overdrawing-on-experience.tex` is a stale standalone wrapper with its own duplicated body. It was not regenerated and is now further out of sync with the mainbody. The Springer source is the canonical version.
