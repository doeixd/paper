We are writing an ACADEMPIC PHILOSOPHY PAPER.

Not a hard science paper. and not a manifesto or blog post. 

ALWAYS FIRST CREATE A DETAILED PLAN / TODO LIST

Things to remember:
My writing style is simple, but clear & detailed.
Make writing authoritative without being overconfident, and complex without being unnecessarily dense.
Use clear, measured, academic tone.
Don't use unnecessary jargon.
Pre-empt any misunderstandings or objections.
Don't have a grandiose tone, maintain humility, but confidence.
Try and keep concise writing, without redundant or wordy phrases, while still maintaining maximum detail and clarity.
Includes appropriate qualifications while still making strong claims.
Be philosophically precise.
Anticipate reviewer criticism, and address it.
Whenever suggesting specific edits. Give the location, what to delete (if needed) and then the full copy/pasteable section. For easy revision.
Dont introduce unneeded named concepts, if it can be avoided.
Use appropriate citations.

You are helping write a HIGH-QUALITY ACADEMIC PHILOSOPHY PAPER for peer review publication. This is not a hard science paper, manifesto, or blog post.

## Writing Style Guidelines:
- **Personal Style**: Simple, clear, and detailed writing that maintains maximum precision
- **Tone**: Authoritative without being overconfident; complex without being unnecessarily dense
- **Academic Voice**: Clear, measured academic tone with appropriate humility but confidence
- **Language**: Avoid unnecessary jargon while maintaining philosophical precision
- **Concision**: Keep writing concise without redundant or wordy phrases, while preserving maximum detail and clarity
- Dont overuse boldface.
- Dont use em dashes.
- no footnotes, just explain in writing

## Content Standards:
- **Anticipatory**: Pre-empt any misunderstandings or objections before they arise
- **Balanced**: Include appropriate qualifications while still making strong claims
- **Rigorous**: Be philosophically precise in all conceptual distinctions
- **Defensive**: Anticipate reviewer criticism and address it proactively
- **Minimal Terminology**: Don't introduce unneeded named concepts if it can be avoided
- **Scholarly**: Use appropriate citations to support claims
maintain quialifications

Be careful to always maintain existing qualifications / defenses, important details, and citations, when revising.

## Quality Standards:
- Does this avoid grandiose tone while maintaining confidence?
- Would philosophy reviewers find the arguments compelling and well-defended?
- Is every claim as strong as the evidence allows without overreach?
- Does the writing demonstrate mastery while remaining accessible?


Use appropirate citations, and add them in Chicago format, in alphbetical order to references.md

Focus on creating work that shows sophisticated philosophical thinking through clear, precise academic prose.

After every large edit. write a summary of the changes, and explanation behind it. etc in a document in the edits/ directory, and preface the file name with the date YYYY-MM-DD - HH-MM - SUMMARY OF Edits Title. make sure to include any deleted information in full detail, so it can be referenced later.


the paper is in paper.md

Use good judgement when integrating specific suggestions. make sure they align with our preferences, and make sense in the paper.

your edits might fail. make sure they succeed if you arent sure.

DONT REPEAT YOURSELF. CHECK FOR KEYWORDS / SECTIONS TO MAKE SURE

BE HUMBLE, CAVEAT, Use plain language where possible, DONT BE SCARED OF NUANCE AND FALIBILITY

WE DONT HAVE TO BE SCIENTIFIC, JUST LOGICAL, HOLD THE reader's hand down the logical path, start with assumptions then, if this, then this, and so on.

git commit with detaild summary / rational, etc after everything. never add yourself as an author to the commit, or mention anything about claude / yourself.


if you have sub-agents. dont be scared of using them

## Available Tools and Scripts

### Citation Extraction Script (`citation_extractor.py`)
- **Purpose**: Automatically scans all markdown files for in-text citations, extracts context, and matches to full references
- **Usage**: Run `python citation_extractor.py` from the paper directory
- **Output**: Appends results to `citations_found.txt` with structured formatting including:
  - File location and line number for each citation
  - Full citation text
  - Contextual text (3 lines before and after)
  - Complete reference entry from `references.md`
- **Coverage**: Processes all `.md` files in the directory (excluding `references.md` and files starting with `citations_`)
- **Citation Pattern**: Detects `(Author Year)` and `(Author Year, page)` formats
- **Reference Matching**: Robust matching handles various author name formats and citation styles
- **Use Case**: Comprehensive audit of all scholarly citations across paper versions for verification and consistency checking

### Paper Converter Script (`paper_converter.py`)
- **Purpose**: Converts markdown academic papers to LaTeX or Typst format with automatically filtered references
- **Usage**:
  - `python paper_converter.py paper.md` - Convert to LaTeX
  - `python paper_converter.py paper.md --format typst` - Convert to Typst
  - `python paper_converter.py paper.md --preamble preamble.tex` - Use custom LaTeX preamble
  - `python paper_converter.py paper.md --output final.tex` - Custom output filename
  - `python paper_converter.py paper.md --keep-temp` - Preserve temporary files for debugging
- **Workflow**:
  1. Extracts all citations from input markdown file
  2. Filters `references.md` to include only cited works
  3. Removes existing references section from paper
  4. Combines paper with filtered references
  5. Converts to LaTeX or Typst using pandoc
- **Citation Support**: Handles both parenthetical `(Author Year)` and in-prose `Author (Year)` citations, including "et al." formats
- **Output Formats**:
  - **LaTeX**: Standard `.tex` files with optional custom preamble support
  - **Typst**: Modern `.typ` files for Typst typesetting system
- **Reference Processing**: Generates submission-ready reference lists containing only works actually cited
- **Use Case**: Final paper preparation for journal submission, converting between typesetting systems, ensuring reference completeness

### PDF Assembler Script (`pdf_assembler.py`)
- **Purpose**: Generates PDFs from Typst/LaTeX files and allows attaching additional documents to the front or end of the main document
- **Usage**:
  - `python pdf_assembler.py main.typ` - Convert single file to PDF
  - `python pdf_assembler.py main.typ --front cover.pdf` - Add cover page
  - `python pdf_assembler.py main.typ --end appendix.pdf` - Add appendix
  - `python pdf_assembler.py main.tex --output final.pdf` - Custom output name
  - `python pdf_assembler.py main.typ --front title.pdf --end refs.pdf --output complete.pdf` - Multiple attachments
- **Supported Input Formats**:
  - **Typst (.typ)**: Compiled using `typst compile`
  - **LaTeX (.tex)**: Compiled using `pdflatex`
  - **PDF (.pdf)**: Used directly (no conversion needed)
- **Document Assembly**: Automatically converts all input files to PDF and merges them in the specified order
- **PDF Merging**: Uses available tools in order of preference:
  - `pypdf` (Python library, if available)
  - `pdfunite` (poppler-utils)
  - `pdftk` (PDF Toolkit)
  - Manual instructions if no tools available
- **Automatic Format Detection**: Detects file types by extension and content analysis
- **Temporary File Management**: Automatically cleans up intermediate PDFs unless `--keep-temp` is specified
- **Use Cases**: Journal submission preparation, adding cover pages/appendices, combining multiple documents, final PDF assembly for publication

### Release Script (`release.py`)
- **Purpose**: Complete academic paper release pipeline that converts markdown to publication-ready PDFs with full customization
- **Usage**:
  - `python release.py paper.md` - Basic release with defaults
  - `python release.py paper.md --config release.json` - Custom config
  - `python release.py paper.md --format latex` - LaTeX output
  - `python release.py paper.md --output final.pdf` - Custom output
  - `python release.py --create-config` - Create default config file
- **Complete Pipeline**:
  1. **Citation Processing**: Extracts citations and filters references
  2. **Format Conversion**: Converts markdown to Typst/LaTeX with references
  3. **PDF Generation**: Compiles to PDF with optional attachments
  4. **Cleanup**: Removes intermediate files (configurable)
- **Configuration Support**: JSON/YAML config files for complete customization:
  - Output format (typst/latex)
  - Preamble files
  - Front/end attachments
  - Output directory and filename
  - Cleanup options
  - Metadata (author, title, version)
- **Command-Line Options**:
  - `--config FILE` - Configuration file (JSON/YAML)
  - `--format {typst,latex}` - Output format
  - `--output FILE` - Output PDF filename
  - `--keep-temp` - Keep temporary files
  - `--create-config` - Generate default config file
- **Integrated Workflow**: Combines `paper_converter.py` and `pdf_assembler.py` functionality
- **Error Handling**: Comprehensive error reporting and cleanup on failure
- **Use Cases**: One-command academic paper publication, journal submissions, consistent formatting, automated release process