"""Regenerate the blinded, inlined Synthese submission source.

The submission file must be a single self-contained .tex with no \\input, and
must be double-anonymized. Deriving it mechanically from the local build file
(-sn.tex) plus the main body guarantees the two cannot drift apart, which is
what previously left the upload file eight passes stale.

Writes with explicit UTF-8 and no shell escape interpretation, which is what
corrupted the previous version: its \\bibliography and \\end{document} had been
mangled into a literal backspace (U+0008) and escape (U+001B) character, so the
file did not compile at all.

Usage:  python scripts/build_blinded_submission.py
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE_DIR = ROOT / "latex" / "springer-sn-template" / "sn-article-template"
SN = TEMPLATE_DIR / "real-patterns-need-closure-SYNTHESE-sn.tex"
MAINBODY = ROOT / "latex" / "real-patterns-need-closure-SYNTHESE-mainbody.tex"
OUT = TEMPLATE_DIR / "real-patterns-need-closure-SYNTHESE-sn-submission.tex"

BANNER = (
    "%% GENERATED FILE -- do not edit by hand.\n"
    "%% Regenerate with: python scripts/build_blinded_submission.py\n"
    "%% Source: real-patterns-need-closure-SYNTHESE-sn.tex + "
    "../../real-patterns-need-closure-SYNTHESE-mainbody.tex\n"
    "%% Identifying metadata is deliberately omitted here; it lives in title-page.tex.\n"
)


def main() -> int:
    sn = SN.read_text(encoding="utf-8")
    body = MAINBODY.read_text(encoding="utf-8")

    # Drop the TeX-root magic comment; it is meaningless once inlined.
    body = re.sub(r"^%\s*!TeX root.*?\n", "", body, count=1)

    # Blind: remove the author and affiliation blocks entirely.
    before = sn
    sn = re.sub(r"^\\author\*?\[.*?\n", "", sn, flags=re.MULTILINE)
    sn = re.sub(r"^\\affil\*?\[.*?\n", "", sn, flags=re.MULTILINE)
    if sn == before:
        print("WARNING: no author/affil lines matched; check blinding by hand.")

    # Inline the body in place of the \input.
    #
    # NB: use a lambda, never a plain replacement string. re.sub interprets
    # backslash escapes in the replacement, and the body is full of them.
    # That is exactly how the previous submission file acquired a literal
    # backspace where "\bibliography" should have been.
    if "\\input{" not in sn:
        print("ERROR: no \\input found in -sn.tex; nothing to inline.")
        return 1
    sn = re.sub(
        r"^\\input\{[^}]*\}\s*$",
        lambda _m: body.rstrip("\n"),
        sn,
        count=1,
        flags=re.MULTILINE,
    )

    # Collapse the blank-line run left where the author block was.
    sn = re.sub(r"\n{3,}", lambda _m: "\n\n", sn)

    OUT.write_text(BANNER + sn, encoding="utf-8", newline="\n")

    text = OUT.read_text(encoding="utf-8")
    problems = []
    for name, needle in [
        ("bibliography", "\\bibliography{real-patterns-need-closure-SYNTHESE}"),
        ("end{document}", "\\end{document}"),
        ("maketitle", "\\maketitle"),
        ("title", "\\title["),
    ]:
        if needle not in text:
            problems.append(f"missing {name}")
    for leaked in ["Patrick", "Glenn", "pwmglenn", "outlook.com", "East Providence", "\\author", "\\affil"]:
        if leaked in text:
            problems.append(f"BLINDING LEAK: {leaked!r}")
    if "\\input{" in text:
        problems.append("still contains \\input")
    for ch, label in [("\x08", "backspace U+0008"), ("\x1b", "escape U+001B")]:
        if ch in text:
            problems.append(f"control character present: {label}")

    print(f"wrote {OUT.relative_to(ROOT)}  ({len(text.splitlines())} lines)")
    if problems:
        print("PROBLEMS:")
        for p in problems:
            print("  -", p)
        return 1
    print("checks passed: inlined, blinded, no control characters")
    return 0


if __name__ == "__main__":
    sys.exit(main())
