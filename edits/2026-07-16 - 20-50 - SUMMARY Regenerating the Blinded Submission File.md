# Summary: Regenerating the Blinded Submission File

## Three defects, only one of which was expected

The task was to resync the stale submission file. It turned out to have two further
problems, either of which would have been worse than staleness.

1. **It did not compile.** The tail of the file read:

   ```
   <U+0008>ibliography{real-patterns-need-closure-SYNTHESE}
   <U+001B>nd{document}
   ```

   `\bibliography` had become a literal backspace character followed by "ibliography",
   and `\end{document}` a literal escape character followed by "nd{document}". Something
   generating the file had interpreted `\b` and `\e` as escape sequences. pdflatex died
   with "Unicode character ^^H (U+0008) ... Fatal error occurred, no output PDF file
   produced." The designated upload file had been broken, silently, for some time.

2. **It was not blinded.** Despite `CLAUDE.md` designating it as the blinded upload and
   requiring the manuscript be double-anonymized, it contained:

   ```
   \author*[1]{\fnm{Patrick} \sur{Glenn}}\email{pwmglenn@outlook.com}
   \affil*[1]{\orgname{Independent Researcher}, \orgaddress{\city{East Providence}, \country{USA}}}
   ```

   Uploading it would have broken anonymity at the first page.

3. **It was eight passes stale**, as known. It still carried the abandoned "screening off
   is necessary but not sufficient" abstract, the "What is missing is a transition
   criterion" framing, the old §2.2 title, and the abandoned "macro-objecthood"
   vocabulary.

## The fix

Rather than hand-edit, added `scripts/build_blinded_submission.py`, which derives the
submission file mechanically from the local build file plus the main body. Drift is what
caused the staleness, so the remedy is to make drift impossible rather than to correct
it once.

The script:

- strips the `% !TeX root` magic comment, meaningless once inlined;
- removes the `\author` and `\affil` blocks to blind the manuscript, warning if neither
  matched;
- inlines the main body in place of the `\input`;
- writes explicit UTF-8 with `newline="\n"`;
- then verifies its own output: `\bibliography`, `\end{document}`, `\maketitle` and
  `\title` present; no `\input` remaining; no occurrence of "Patrick", "Glenn",
  "pwmglenn", "outlook.com", "East Providence", `\author` or `\affil`; and no U+0008 or
  U+001B control characters. Non-zero exit if any check fails.

The blinding and control-character checks exist precisely because those are the two
failures that actually happened here.

**A note on the corruption's cause, since it nearly recurred.** The first version of the
script failed with `re.PatternError: bad escape \s`, because `re.sub` interprets
backslash escapes in its *replacement* string, and the body is full of `\section`,
`\citep` and the like. That is almost certainly how the original file was mangled: a
`\b` in a replacement string became a backspace. The script now passes a lambda instead
of a replacement string, which does no escape interpretation, and there is a comment in
the source saying why.

## Verification

- Blinded submission builds clean through the full `pdflatex -> bibtex -> pdflatex ->
  pdflatex` cycle, exit 0 at every stage, zero undefined references, 48 pages.
- Extracted the text of the built PDF and confirmed it contains **no** occurrence of
  "Patrick", "Glenn", "pwmglenn", or "East Providence".
- Confirmed it carries all eight passes: the retitled §2.2, the identity claim, the
  two-driver countermodel, the binary-star novelty correction, the rigorous
  hidden-feedback case, the Rosas Granger correction, the admissible-leakiness split,
  the Meyer engagement, the §2.12 concession, and the compliant abstract.
- Confirmed the abandoned framing is gone: "necessary but not sufficient", "What is
  missing is a transition", "Why Closure is Not Just", "macro-objecthood", "Objecthood
  claims".
- Page counts are consistent: 48 blinded against 49 unblinded, the difference being the
  removed author block.

## Unblinded PDF

Built from `real-patterns-need-closure-SYNTHESE-sn.tex`, which is the unblinded local
build file (it carries the author, email and affiliation), and copied to:

```
C:\Users\Patrick\Downloads\Operationalizing-Screening-Off-for-Rainforest-Admission-UNBLINDED.pdf
```

49 pages, title page confirmed to show "Patrick Glenn, Independent Researcher, East
Providence, USA" and the contact email. Named explicitly UNBLINDED so it cannot be
confused with the upload file.

## Outstanding

1. **Do not upload the unblinded PDF.** For submission the files are the blinded
   `-sn-submission.tex`, its compiled PDF, and the supporting `.bib`, `.cls` and `.bst`,
   with identifying metadata supplied separately via `title-page.tex`.
2. **`title-page.tex` checked and correct.** It carries the current title
   ("Operationalizing Screening Off for Rainforest Admission"), the author name,
   affiliation, email and ORCID. No action needed; noted here so it is not re-checked
   unnecessarily.
3. The substantive gap is unchanged: no real worked case.
