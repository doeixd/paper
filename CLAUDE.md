We are writing an ACADEMPIC PHILOSOPHY PAPER.

Not a hard science paper. and not a manifesto or blog post. 

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
</system_propt>

<system_prompt>
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


Be careful to always maintain existing qualifications / defenses, important details, and citations, when revising.

## Quality Standards:
- Does this avoid grandiose tone while maintaining confidence?
- Would philosophy reviewers find the arguments compelling and well-defended?
- Is every claim as strong as the evidence allows without overreach?
- Does the writing demonstrate mastery while remaining accessible?

Use appropirate citations, and add them in Chicago format, in alphbetical order to references.md

Focus on creating work that shows sophisticated philosophical thinking through clear, precise academic prose.


After every large edit. write a summary of the changes, and explanation behind it. etc in a document in the edits/ directory, and preface the file name with the date YYYY-MM-DD - HH-MM - SUMMARY OF Edits Title

the paper is in paper.md

Use good judgement when integrating specific suggestions. make sure they align with our preferences, and make sense in the paper.


ALWAYS FIRST CREATE A DETAILED PLAN / TODO LIST

DONT REPEAT YOURSELF. CHECK FOR KEYWORDS / SECTIONS TO MAKE SURE

WE DONT HAVE TO BE SCIENTIFIC, JUST LOGICAL, HOLD THE reader's hand down the logical path, these are our assumptions, then if this, then this

DONT BE SCARED OF NUANCE AND FALIBILITY

BE HUMBLE, CAVEAT, Use plain language where possible


git commit with detailed summary / rational, etc after you've complelted everything. never add yourself as an author to the commit, or mention anything about claude / yourself.

if you have sub-agents. dont be scared of using them

## Available Tools and Scripts

### Enhanced Citation Extraction Script (`citation_extractor.py`)
- **Purpose**: Automatically scans markdown files for both parenthetical and in-prose citations, extracts context, matches to full references, and can generate filtered reference lists
- **Basic Usage**:
  - `python citation_extractor.py` - Scans all .md files
  - `python citation_extractor.py final.md` - Scans specific file
  - `python citation_extractor.py final.md -o my_output.txt` - Custom output file
  - `python citation_extractor.py final.md -r final_references.md` - Generate filtered references file
- **Command-Line Options**:
  - `-o, --output FILE` - Custom output filename (default: citations_found.txt)
  - `-r, --generate-references FILE` - **🆕 Generate a references.md file with ONLY cited references**
  - `-a, --append` - Append to existing file instead of overwriting
  - `-q, --quiet` - Suppress progress messages
  - `-h, --help` - Show usage help
- **Citation Detection**: Finds TWO types of citations:
  - **Parenthetical**: `(Author 2020)`, `(Author et al. 2020, p. 45)`
  - **In-prose**: `Goldman (1979)`, `Acemoglu and Robinson (2012)`, `Sevilla et al. (2022)`
- **Output**: Writes to specified file with structured formatting including:
  - Citation type (PARENTHETICAL or IN-PROSE)
  - File location and line number
  - Full citation text
  - Contextual text (3 lines before and after)
  - Complete reference entry from `references.md`
  - "NOT FOUND" warning if reference missing
  - Results grouped by file for organization
- **🆕 Reference File Generation**: The `-r` flag creates a filtered references file containing ONLY citations used in the specified paper:
  - Extracts all citations from your paper
  - Looks up each in master `references.md`
  - Generates new file with only used references
  - Sorts alphabetically
  - Adds metadata (source, date, count)
  - Lists missing citations as comments
  - **Use cases**: Submission-ready reference lists, splitting papers, verifying completeness, cleaning up after edits
- **Reference Matching**: Intelligent matching handles:
  - Primary author vs. full author names
  - "et al." citations (strips and matches primary author)
  - "and" vs. "&" variations
  - Multiple citation formats for same source
- **Coverage**: Processes specified files or all `.md` files (excluding `references.md` and files starting with `citations_`)
- **Use Case**: Comprehensive audit of all scholarly citations for verification, consistency checking, ensuring all citations have corresponding references, and generating submission-ready reference lists
- **Documentation**: See `CITATION_EXTRACTOR_README.md` for complete usage guide and examples

### Paper Converter Script (`paper_converter.py`)
- **Purpose**: Converts markdown academic papers to LaTeX or Typst format with automatically filtered references
- **Basic Usage**:
  - `python paper_converter.py paper.md` - Convert to LaTeX (default)
  - `python paper_converter.py paper.md --format typst` - Convert to Typst
  - `python paper_converter.py paper.md --preamble preamble.tex` - Use custom LaTeX preamble
  - `python paper_converter.py paper.md --output final.tex` - Custom output filename
  - `python paper_converter.py paper.md --keep-temp` - Preserve temporary files for debugging
- **Command-Line Options**:
  - `--format {latex,typst}` - Output format (default: latex)
  - `--preamble FILE` - Custom preamble file for LaTeX (ignored for Typst)
  - `--output FILE` - Custom output filename (auto-generated if not specified)
  - `--keep-temp` - Keep temporary files (filtered refs, combined markdown)
  - `-h, --help` - Show usage help
- **Automated Workflow**:
  1. **Citation Extraction**: Finds all citations in markdown (parenthetical and in-prose)
  2. **Reference Filtering**: Creates filtered reference list with only cited works
  3. **Document Assembly**: Removes existing references section, appends filtered references
  4. **Format Conversion**: Uses pandoc to convert to LaTeX or Typst
- **Citation Detection**: Handles complex citation patterns:
  - **Parenthetical**: `(Author 2020)`, `(Author et al. 2020, p. 45)`
  - **In-prose**: `Goldman (1979)`, `Acemoglu and Robinson (2012)`
- **Reference Processing**: Generates clean, submission-ready reference lists:
  - Filters master `references.md` to include only cited works
  - Sorts alphabetically by primary author
  - Adds metadata (generation date, source file, reference count)
  - Flags missing citations as comments
- **Output Formats**:
  - **LaTeX (.tex)**: Standard LaTeX with optional custom preamble support
  - **Typst (.typ)**: Modern Typst markup for advanced typesetting
- **Use Cases**: Journal submission preparation, format conversion, reference list cleanup, ensuring citation completeness
- **Dependencies**: Requires pandoc for document conversion

### PDF Assembler Script (`pdf_assembler.py`)
- **Purpose**: Generates PDFs from Typst/LaTeX files and allows attaching additional documents to the front or end of the main document
- **Basic Usage**:
  - `python pdf_assembler.py main.typ` - Convert single file to PDF
  - `python pdf_assembler.py main.typ --front cover.pdf` - Add cover page
  - `python pdf_assembler.py main.typ --end appendix.pdf` - Add appendix
  - `python pdf_assembler.py main.tex --output final.pdf` - Custom output name
  - `python pdf_assembler.py main.typ --front title.pdf --end refs.pdf --output complete.pdf` - Multiple attachments
- **Command-Line Options**:
  - `--front FILES` - Files to attach to the front (space-separated list)
  - `--end FILES` - Files to attach to the end (space-separated list)
  - `--output FILE` - Output PDF filename (default: based on main file)
  - `--keep-temp` - Keep temporary PDF files for debugging
  - `-h, --help` - Show usage help
- **Supported Formats**: Automatic detection and conversion of:
  - **Typst (.typ)**: Uses `typst compile` command
  - **LaTeX (.tex)**: Uses `pdflatex` with multiple passes for references
  - **PDF (.pdf)**: Used directly without conversion
- **PDF Assembly Process**:
  1. Convert all input files to PDF format
  2. Merge PDFs in specified order (front → main → end)
  3. Clean up temporary files (unless `--keep-temp` specified)
- **PDF Merging Tools**: Tries tools in order of preference:
  - **pypdf**: Pure Python library (fastest, if installed)
  - **pdfunite**: Command-line tool from poppler-utils
  - **pdftk**: PDF Toolkit (widely available)
  - **Manual**: Provides instructions if no tools available
- **Error Handling**: Comprehensive error reporting for compilation and merging failures
- **Use Cases**: Academic paper submission, adding title pages, appendices, combining multiple documents, final publication PDF creation
- **Dependencies**: Requires `typst` and/or `pdflatex` for compilation, plus PDF merging tools

### Release Script (`release.py`)
- **Purpose**: Complete academic paper release pipeline that converts markdown to publication-ready PDFs with full customization
- **Basic Usage**:
  - `python release.py paper.md` - Basic release with defaults
  - `python release.py paper.md --config release.json` - Custom config
  - `python release.py paper.md --format latex` - LaTeX output
  - `python release.py paper.md --output final.pdf` - Custom output
  - `python release.py --create-config` - Create default config file
- **Command-Line Options**:
  - `--config FILE` - Configuration file (JSON/YAML)
  - `--format {typst,latex}` - Output format (overrides config)
  - `--output FILE` - Output PDF filename (overrides config)
  - `--keep-temp` - Keep temporary files (overrides config)
  - `--create-config` - Generate default config file and exit
- **Configuration File Support**: JSON or YAML files for complete pipeline customization:
  ```json
  {
    "format": "typst",
    "preamble": {
      "typst": "typst_preamble.typ",
      "latex": null
    },
    "output": {
      "filename": "my_paper",
      "directory": "releases"
    },
    "attachments": {
      "front": ["cover.pdf"],
      "end": ["appendix.pdf"]
    },
    "cleanup": {
      "intermediate_files": true,
      "temp_files": true
    },
    "metadata": {
      "author": "Your Name",
      "title": "Paper Title",
      "version": "1.0"
    }
  }
  ```
- **Automated Pipeline**:
  1. **Citation Extraction**: Finds all citations in markdown
  2. **Reference Filtering**: Creates filtered reference list with only cited works
  3. **Document Assembly**: Combines paper with filtered references
  4. **Format Conversion**: Converts to Typst/LaTeX with proper preamble
  5. **PDF Compilation**: Generates PDF from target format
  6. **Attachment Processing**: Adds front/end documents if specified
  7. **Final Assembly**: Merges all PDFs into publication-ready document
  8. **Cleanup**: Removes intermediate files (configurable)
- **Format Support**: Automatic detection and conversion of:
  - **Markdown (.md)**: Input format with citations
  - **Typst (.typ)**: Modern typesetting with custom preamble
  - **LaTeX (.tex)**: Traditional academic typesetting
  - **PDF (.pdf)**: Direct inclusion for covers/appendices
- **Error Handling**: Graceful failure with cleanup and detailed error messages
- **Use Cases**: One-command academic publishing, consistent formatting across papers, automated journal submission preparation, version control integration
- **Dependencies**: Requires `pandoc`, `typst` and/or `pdflatex`, plus PDF merging tools (pdfunite/pdftk/pypdf)