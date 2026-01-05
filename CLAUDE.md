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
- Dont overuse boldface. Limit it to lists, or pseudo headings aka things like, 1. **Bold pseudo heading: ** prose...
- Dont use em dashes. use other punctuation instead or restructure sentences.
- **Math Formatting**: Always use LaTeX math delimiters (`$...$`) for variables (e.g., `$M(t)$`, `$C(t)$`) to ensure correct rendering by the release script. Avoid mixed formatting like "variable P(t)".
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
*   **Crucially, does this revision make the core argument *more* resilient to criticism, or does it open up new, unnecessary lines of attack?**

1.  **No Pseudo-Quantification:** Do not assign specific numbers, percentages, or calculated indices to historical or hypothetical examples (e.g., "P(t) ≈ 5.7" or "a ~38-fold increase"). Such claims create an illusion of precision while introducing empirical fragility. The argument becomes about the number, not the idea.
2.  **Qualitative over Quantitative Descriptions:** When using examples, describe trends and patterns qualitatively.
    *   **Weak (Vulnerable):** "Complexity doubled from ~40 to ~80 circles."
    *   **Strong (Resilient):** "The system's initial elegance gave way to a dramatic escalation in complexity."
3.  **Frame Examples as "Conceptual Illustrations," Not "Worked Examples" or "Case Studies":** The language used to introduce examples must signal their role as explanatory aids, not empirical evidence. This manages reviewer expectations and keeps the focus on the philosophical framework.
4.  **Abstract Hypothetical Scenarios:** When creating a hypothetical to explain a protocol or concept, keep it abstract and general. Avoid using specific, politically charged, or overly detailed contemporary examples that could introduce confounding variables and distract the reader.
5.  **Subordinate Formalism to Philosophy:** When presenting mathematical models or formal logic (e.g., in an appendix), explicitly state that they are *provisional, illustrative candidates* for future research. The paper's philosophical integrity must remain independent of any specific mathematical formulation.
Primary Goal: The paper's strength is its novel philosophical framework. We must prioritize the clarity, coherence, and logical force of its concepts above all else.
Conceptual Purity over Empirical Vulnerability: Avoid tying the framework's validity to contestable empirical data, specific numbers, or quasi-quantitative claims. An argument from first principles is more resilient than one resting on preliminary or estimated data.
Scientific vs. Logical: We are not writing a scientific paper that proves a hypothesis with data. We are writing a philosophical paper that guides the reader down a logical path. The goal is persuasion through reason, not demonstration through measurement.
Illustrate, Don't "Prove": Examples (historical, hypothetical, etc.) should serve as conceptual illustrations that clarify the meaning of a principle. They are tools for teaching, not data points for proving a claim. Their purpose is to make abstract ideas intuitive.

Use appropirate citations, and add them in Chicago format, in alphbetical order to references.md

Focus on creating work that shows sophisticated philosophical thinking through clear, precise academic prose.

## Editorial Style Guide

See `STYLE_GUIDE.md` for comprehensive editorial guidelines including:
- The "Adversarial Reviewer" heuristic (write for a skeptical peer reviewer)
- Logical flow principles (the "Logical Baton Pass" - no teleporting between points)
- The "No Pseudo-Quantification" rule (avoid assigning specific numbers to examples)
- Qualitative over quantitative descriptions
- Framing examples as "conceptual illustrations" not empirical evidence
- Subordinating formalism to philosophy
- Clause stacking avoidance (break complex sentences into linear steps)
- Resilience over novelty (build a fortress, not a billboard)

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

if you have any questions about the specifics of the philosophy, or what we're trying to communicate, dont be scared to ask me.

never add yourself as an author to the paper, or on a git commit.

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


### Paper Assembly Script (`assemble_paper.ts`)
- **Purpose**: A Bun-powered utility to merge multiple markdown documents into a single manuscript with advanced placement control, reference management, and smart frontmatter handling.
- **Basic Usage**:
  - `bun assemble_paper.ts --main paper.md --out final.md --appendix app1.md`
  - `bun assemble_paper.ts --main paper.md --out final.md --placeholder "<!-- APPENDICES -->"`
  - `bun assemble_paper.ts --main paper.md --out final.md --move-refs-to-end --refs-file refs.md`
- **Command-Line Options**:
  - `--main <path>`: (Required) Path to the primary markdown file.
  - `--out <path>`: (Required) Path for the assembled output file.
  - `--appendix <path>`: (Multiple) Path(s) to appendix files to be inserted.
  - `--strategy <simple|smart>`: Merge strategy (default: `simple`).
    - `simple`: Direct concatenation of files.
    - `smart`: Extracts frontmatter from main, strips it from appendices, and allows metadata injection.
  - `--metadata <path|string>`: JSON/YAML/TOML path or raw JSON string to merge into frontmatter (requires `smart`).
  - `--separator <string>`: Custom separator between sections (default: `\n\n---\n\n`).
  - **Insertion Points**:
    - `--placeholder <string>`: Insert appendices at a specific token (e.g., `<!-- APPENDICES -->`) in the main file.
    - `--insert-before <string>`: Insert appendices before the first occurrence of this string.
    - `--insert-after <string>`: Insert appendices immediately after the line containing this string.
  - **Reference Handling**:
    - `--move-refs-to-end`: Automatically find references in the main file and move them to the end.
    - `--refs-file <path>`: Path to an external references file to append at the very end.
- **Features**:
  - **Smart Ordering**: Automatically handles Body -> Appendices -> References flow.
  - **Flexible Placement**: Supports token-based or header-based insertion.
  - **Frontmatter Management**: Strips redundant frontmatter from appendices and merges metadata.
- **Dependencies**: Requires Bun runtime.

### Reference Verification Script (`verify-references.ts`)
- **Purpose**: Automatically verify and correct academic references in `references.md` using multiple free APIs (CrossRef, OpenLibrary, arXiv) with Claude CLI as research fallback
- **Basic Usage**:
  - `bun run verify-references.ts --dry-run --skip-claude` - Preview changes without modifying files or using Claude
  - `bun run verify-references.ts --skip-claude` - Verify and correct without Claude CLI (faster, free)
  - `bun run verify-references.ts` - Full verification including Claude CLI research fallback
  - `bun run verify-references.ts -i custom-refs.md -o corrected.md` - Custom input/output files
- **Command-Line Options**:
  - `-i, --input <file>` - Input references file (default: ./references.md)
  - `-o, --output <file>` - Output file (default: overwrites input)
  - `-b, --[no-]backup` - Create backup before modifying (default: true)
  - `--backup-dir <dir>` - Backup directory (default: ./backups)
  - `--confidence-threshold <num>` - Min confidence for auto-correction (default: 0.7)
  - `--report-path <file>` - Unverifiable references report path (default: ./unverifiable-references.md)
  - `--dry-run` - Preview changes without modifying files
  - `--skip-claude` - Skip Claude CLI fallback (faster, no API costs)
  - `-v, --verbose` - Verbose logging
  - `-h, --help` - Show help message
- **Verification Sources** (tried in order until success):
  1. **CrossRef API** (DOI verification) - confidence: 0.95, most reliable for journal articles
  2. **arXiv API** (preprint verification) - confidence: 0.90, validates arXiv IDs
  3. **OpenLibrary API** (ISBN verification) - confidence: 0.85, validates book ISBNs
  4. **Web Search** (URL validation) - confidence: 0.70, checks link accessibility
  5. **Claude CLI** (research fallback) - confidence: 0.40-0.50, handles ambiguous cases (costs API credits)
- **Features**:
  - Automatic metadata correction (authors, years, titles) with confidence scoring
  - Smart verification waterfall (tries most reliable sources first)
  - Rate limiting for all APIs (prevents bans/throttling)
  - Timestamped backups before modifications
  - Atomic file writes (temp file → rename) for safety
  - Console progress display with color-coded status (✓ verified, ✎ corrected, ✗ failed, ⊘ skipped)
  - Detailed unverifiable references report with action checklists
  - Fuzzy matching for titles/authors (Levenshtein distance with 5% tolerance)
- **Edge Case Handling**:
  - Trailing punctuation in DOIs, ISBNs, URLs
  - Missing/malformed citations
  - Organizational authors ("Cogitate Consortium")
  - "et al." author formats
  - Multiple ISBNs per reference
  - Network timeouts (10 second limit)
  - Rate limiting violations (auto-retry with exponential backoff)
  - Invalid DOI/ISBN formats
- **Output**:
  - **Backup**: `./backups/references.md.{timestamp}.bak` (if enabled)
  - **Corrected file**: Overwrites input or writes to custom output
  - **Report**: `./unverifiable-references.md` with all failed verifications and manual review checklist
- **Supported Reference Types**: Journal articles (DOI), books (ISBN), arXiv preprints, book chapters, web resources (PhilPapers, SSRN, OSF)
- **Estimated Runtime**: 15-30 minutes for 383 references (due to API rate limiting)
- **Important Notes**:
  - OpenLibrary sometimes returns incorrect publication years (review before accepting)
  - CrossRef may return shorter titles without subtitles (this is normal)
  - Claude CLI adds API costs - use `--skip-claude` to avoid
  - Always run `--dry-run` first to preview changes
- **Dependencies**: Requires Bun runtime (no npm packages needed)
- **Documentation**: See `VERIFY_REFERENCES_README.md` for complete usage guide

### Cleanup Automation CLI (`cleanup-cli.ts`)
- **Purpose**: Opinionated Bun CLI for removing generated artefacts, debug logs, caches, and backups while guarding intentional assets.
- **Profiles & Flags**:
  - `--profile <safe|moderate|aggressive>` plus per-category overrides (`--categories`, `--include-glob`, `--exclude-glob`).
  - `--backup-policy daily=3,weekly=2` retains one backup per bucket; `--git-commit-before` snapshots pre-clean.
  - Cache controls via `--cache-mode <remove|truncate|preserve>`.
  - **Reference verifier cache aware**: `--reference-cache-mode <preserve|prune|clear>` defaults to `prune`, which uses the same TTL rules as `verify-references.ts` (CrossRef ≈30d, arXiv 90d, OpenLibrary 7d, web-search 1d, Claude 7d). `truncate` never nukes `.cache/reference-verification` unless you explicitly pass `--reference-cache-mode clear`.
- **Dry runs & plans**: `--dry-run` and `--plan-output plan.json` preview changes; `--rewrite-history` optionally purges deleted paths via `git filter-repo`.
- **Tests**: Run `bun test Tests/cleanup_cli/cleanup_cli.test.ts` before shipping changes to ensure cache pruning logic and retention rules still hold.

### Walkthrough

Here is an outline of the provided papers, their subject matter, and how they interconnect to form a unified philosophical framework called Emergent Pragmatic Coherentism (EPC). These files are very long and you cant read them all at once, try just reading beginning or searching for relevant terms. Make sure you dont turn the other, supporting papers into eachother, they should have clearish boundaries, and reference eachother where needed, and not over-re-hash what has already been written beyond what is needed.

1. The Foundational Framework
File: final.md (The Architecture of Failure)
This paper establishes the core theory of Emergent Pragmatic Coherentism (EPC). It proposes that knowledge systems are not validated by static correspondence to reality, but by their ability to minimize "Systemic Brittleness"—a measurable cost of misalignment with reality manifested as ad-hoc patches, coercive overhead, and model complexity.
Relation: This is the "hub" document. It introduces the primary diagnostic tools (brittleness metrics, the concept of the Negative Canon (what has failed), and the Apex Network (the objective structure of viable solutions). All other papers expand upon specific dimensions of this central thesis.

2. The Mechanism of Truth
File: from-beliefs-to-truth.md
This paper details the specific evolutionary mechanism by which a tentative hypothesis transforms into a foundational truth. It outlines a "five-stage progression" where a belief migrates from the periphery of a network to its core, eventually becoming a Standing Predicate—a tool used to test other claims. It boldly argues that even Logic itself is not a metaphysical prior, but a Standing Predicate that achieved core status through maximal historical validation.
Relation: It expands on the "functional transformation" concept introduced in final.md. While final.md describes how to measure the health of a system, this paper explains the lifecycle of the specific concepts (predicates) within that system.

3. The Cognitive and Physical Basis
File: Computational-Closure-and-the-Architecture-of-Mind.md
File: notion-appendix.md
These papers provide the naturalistic, information-theoretic grounding for the epistemology. They argue that "Standing Predicates" are linguistically encoded Markov Blankets—statistical boundaries that compress complex environmental data into manageable variables, achieving Computational Closure. The appendix details how vague "notions" crystallize into explicit beliefs through this compression process.
Relation: These documents bridge the gap between thermodynamics and epistemology. They explain why the brittleness metrics in final.md exist: brittleness is fundamentally "information leakage" (prediction error) in a physical system trying to minimize free energy.

4. The Metaphysical Status
File: ontology-and-metaphysics-whats-real.md
This paper addresses the ontological status of the "Apex Network" (the ultimate structure of truth). It argues for Naturalized Structural Realism, positing that the Apex Network is "real" in the same way the number pi is real: it is not a physical object, but a necessary, constraint-determined structure that any viable system must eventually discover.
Relation: This serves as the philosophical defense of the framework against charges of relativism. It clarifies that while final.md focuses on the process of discovery (history/pragmatism), the structure being discovered is objective and mind-independent.

5. The Ethical Application
File: proc_v7.md (A Procedural and Naturalistic Model of Moral Objectivity)
This paper applies the EPC framework specifically to metaethics. It introduces Pragmatic Procedural Realism, arguing that moral truths (like "slavery is wrong") are discovered empirically through the failure of systems that try to violate them. It uses the brittleness metrics to show that immoral systems (like totalitarians or slave states) inevitably collapse due to high "coercive overhead" and information suppression.
Relation: This is a domain-specific application of the general theory found in final.md. It demonstrates that the same "Negative Canon" and "brittleness" diagnostics used for scientific theories can be rigorously applied to moral history to establish objective ethical truths.
