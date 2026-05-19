from __future__ import annotations

import argparse
import glob
import hashlib
import os
from pathlib import Path
import re
import sys


def windows_safe_path(path: Path) -> str:
    resolved = path.resolve(strict=False)
    text = str(resolved)
    if os.name == "nt" and not text.startswith("\\\\?\\"):
        return "\\\\?\\" + text
    return text


def load_reader():
    try:
        from pypdf import PdfReader  # type: ignore

        return PdfReader
    except ImportError:
        try:
            from PyPDF2 import PdfReader  # type: ignore

            return PdfReader
        except ImportError as exc:
            raise SystemExit(
                "Could not import `pypdf` or `PyPDF2`. Install one of them first."
            ) from exc


def load_fitz():
    try:
        import fitz  # type: ignore

        return fitz
    except ImportError as exc:
        raise SystemExit(
            "Could not import `fitz` (PyMuPDF) for fallback extraction."
        ) from exc


def slugify(name: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9._ -]+", "", name).strip()
    cleaned = re.sub(r"\s+", "-", cleaned)
    return cleaned or "output"


def extract_text(pdf_path: Path) -> str:
    try:
        PdfReader = load_reader()
        reader = PdfReader(windows_safe_path(pdf_path))
        pages: list[str] = []

        for idx, page in enumerate(reader.pages, start=1):
            text = page.extract_text() or ""
            pages.append(f"\n=== PAGE {idx} ===\n\n{text.strip()}\n")

        return "\n".join(pages).strip() + "\n"
    except Exception:
        fitz = load_fitz()
        doc = fitz.open(windows_safe_path(pdf_path))
        pages = []
        for idx, page in enumerate(doc, start=1):
            text = page.get_text("text") or ""
            pages.append(f"\n=== PAGE {idx} ===\n\n{text.strip()}\n")
        return "\n".join(pages).strip() + "\n"


def resolve_targets(inputs: list[str]) -> list[Path]:
    targets: list[Path] = []

    for raw in inputs:
        path = Path(raw)
        if path.is_dir():
            targets.extend(sorted(path.rglob("*.pdf")))
        elif path.exists():
            targets.append(path)
        else:
            matches = [Path(match) for match in glob.glob(raw, recursive=True)]
            if not matches:
                raise FileNotFoundError(f"No PDF found for input: {raw}")
            for match in matches:
                if match.is_dir():
                    targets.extend(sorted(match.rglob("*.pdf")))
                else:
                    targets.append(match)

    deduped: list[Path] = []
    seen: set[Path] = set()
    for target in targets:
        resolved = target.resolve()
        if resolved not in seen and target.suffix.lower() == ".pdf":
            seen.add(resolved)
            deduped.append(target)
    return deduped


def build_output_path(pdf_path: Path, output_dir: Path) -> Path:
    stem = slugify(pdf_path.stem)
    if len(stem) > 120:
        digest = hashlib.sha1(
            str(pdf_path).encode("utf-8", errors="ignore")
        ).hexdigest()[:10]
        stem = f"{stem[:100]}__{digest}"
    return output_dir / f"{stem}.txt"


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Extract text from one or more PDF files."
    )
    parser.add_argument(
        "inputs",
        nargs="+",
        help="PDF files, directories, or glob patterns.",
    )
    parser.add_argument(
        "-o",
        "--output-dir",
        default="sources/text-converted",
        help="Directory for extracted text files.",
    )
    parser.add_argument(
        "--stdout",
        action="store_true",
        help="Print extracted text to stdout instead of writing files.",
    )
    args = parser.parse_args()

    targets = resolve_targets(args.inputs)
    if not targets:
        raise SystemExit("No PDF files found.")

    output_dir = Path(args.output_dir)
    if not args.stdout:
        output_dir.mkdir(parents=True, exist_ok=True)

    for pdf_path in targets:
        text = extract_text(pdf_path)
        if args.stdout:
            sys.stdout.write(f"\n===== {pdf_path} =====\n\n")
            sys.stdout.write(text)
        else:
            out_path = build_output_path(pdf_path, output_dir)
            out_path.write_text(text, encoding="utf-8")
            print(f"Wrote {out_path}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
