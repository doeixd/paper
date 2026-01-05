set shell := ["powershell", "-NoProfile", "-Command"]

project_root := justfile_directory()
python := "python"
bun := "bun"
ps_exec := "powershell -NoProfile -ExecutionPolicy Bypass"

default:
	@just --list

# Print an opinionated overview of the most common automation flows.
help:
	Write-Host ""
	Write-Host "Emergent Pragmatic Coherentism — Script Runner"
	Write-Host "================================================"
	Write-Host "Use 'just --list' to see every recipe or call a command directly, e.g.:"
	Write-Host "  just citations files='final.md paper.md'"
	Write-Host "  just release paper.md format=typst output='releases/final.pdf'"
	Write-Host "  just verify-refs dry_run=true skip_claude=true"
	Write-Host ""
	Write-Host "All recipes execute from the repository root and mirror the behaviors"
	Write-Host "previously documented in CLAUDE.md."

# ---------------------------------------------------------------------------
# Citation utilities
# ---------------------------------------------------------------------------

# Extract citations from all markdown files or the subset supplied via `files`.
# Optional arguments:
#   files      Space-separated markdown files (default scans every *.md).
#   output     Target output file for the report (default: citations_found.txt).
#   refs_file  When set, writes a filtered references list to this path (-r flag).
#   quiet      true/false toggles console chatter.
#   append     true/false toggles whether to append to the output file.
citations files='' output='' refs_file='' quiet='false' append='false':
	$args = @()
	$files = "{{files}}"
	if ($files.Trim().Length -gt 0) {
	$args += $files.Split(' ', [System.StringSplitOptions]::RemoveEmptyEntries)
	}
	if ("{{output}}") {
	$args += "-o"
	$args += "{{output}}"
	}
	if ("{{refs_file}}") {
	$args += "-r"
	$args += "{{refs_file}}"
	}
	if ("{{quiet}}" -eq "true") { $args += "-q" }
	if ("{{append}}" -eq "true") { $args += "-a" }
	& {{python}} scripts/citation_extractor.py @args

# ---------------------------------------------------------------------------
# Reference maintenance
# ---------------------------------------------------------------------------

# Alphabetize and deduplicate references. Parameters:
#   file     Target markdown file (default references.md).
#   dry_run  When true, shows changes without writing.
#   backup   When true, keep a timestamped backup before writing.
organize-refs file='references.md' dry_run='false' backup='true':
	$args = @("--file", "{{file}}")
	if ("{{dry_run}}" -eq "true") { $args += "--dry-run" }
	if ("{{backup}}" -eq "true") { $args += "--backup" }
	& {{python}} scripts/references_organizer.py @args

# Verify references using CrossRef/OpenLibrary/arXiv (matches previous docs).
# Arguments:
#   file           Source references file (default references.md).
#   output         Optional output file (default overwrites input).
#   report         Custom unverifiable report path.
#   dry_run        true/false preview mode.
#   skip_claude    true/false skip Claude CLI fallback.
#   no_cache       true/false to bypass cache.
#   clear_cache    true/false to delete cache and exit.
#   backup         true/false to keep backups.
#   confidence     Optional float (string) for threshold (e.g., "0.8").
verify-refs file='references.md' output='' report='' dry_run='false' skip_claude='false' no_cache='false' clear_cache='false' backup='true' confidence='':
	$args = @("--input", "{{file}}")
	if ("{{output}}") { $args += @("--output", "{{output}}") }
	if ("{{report}}") { $args += @("--report-path", "{{report}}") }
	if ("{{dry_run}}" -eq "true") { $args += "--dry-run" }
	if ("{{skip_claude}}" -eq "true") { $args += "--skip-claude" }
	if ("{{no_cache}}" -eq "true") { $args += "--no-cache" }
	if ("{{clear_cache}}" -eq "true") { $args += "--clear-cache" }
	if ("{{backup}}" -eq "false") { $args += "--no-backup" }
	if ("{{confidence}}") { $args += @("--confidence-threshold", "{{confidence}}") }
	& {{bun}} run scripts/verify-references.ts @args

# ---------------------------------------------------------------------------
# Conversion and release pipeline
# ---------------------------------------------------------------------------

# Convert a markdown paper using `paper_converter.py`.
# Arguments:
#   file       (required) Markdown file to convert.
#   format     latex|typst (default latex).
#   strategy   filter|merge|keep reference strategy (default filter).
#   output     Optional explicit output file.
#   preamble   Optional LaTeX preamble path.
#   strict     true/false toggles strict citation matching.
#   include_missing true/false to echo missing citations.
#   keep_temp  true/false to retain intermediate files.
convert file format='latex' strategy='filter' output='' preamble='' strict='true' include_missing='false' keep_temp='false':
	$args = @("{{file}}", "--format", "{{format}}", "--strategy", "{{strategy}}")
	if ("{{output}}") { $args += @("--output", "{{output}}") }
	if ("{{preamble}}") { $args += @("--preamble", "{{preamble}}") }
	if ("{{strict}}" -eq "true") { $args += "--strict-matching" }
	else { $args += "--no-strict-matching" }
	if ("{{include_missing}}" -eq "true") { $args += "--include-missing" }
	if ("{{keep_temp}}" -eq "true") { $args += "--keep-temp" }
	& {{python}} scripts/paper_converter.py @args

# Assemble multiple markdown files using the Bun-powered tool.
# Required arguments: main, out.
# Optional:
#   appendices   Space-separated list of appendix files.
#   strategy     simple|smart (default simple).
#   metadata     Path or JSON blob merged when using smart strategy.
#   placeholder  Inject appendices at placeholder marker.
#   insert_before / insert_after  Alternative placement hooks.
#   refs_file    External references file to append.
#   move_refs    true/false move refs from main to end.
#   separator    Custom separator (default: \n\n---\n\n).
assemble main out appendices='' strategy='simple' metadata='' placeholder='' insert_before='' insert_after='' refs_file='' move_refs='false' separator='\n\n---\n\n':
	$args = @("--main", "{{main}}", "--out", "{{out}}", "--strategy", "{{strategy}}", "--separator", "{{separator}}")
	if ("{{appendices}}") {
	"{{appendices}}".Split(' ', [System.StringSplitOptions]::RemoveEmptyEntries) | ForEach-Object { $args += @("--appendix", $_) }
	}
	if ("{{metadata}}") { $args += @("--metadata", "{{metadata}}") }
	if ("{{placeholder}}") { $args += @("--placeholder", "{{placeholder}}") }
	if ("{{insert_before}}") { $args += @("--insert-before", "{{insert_before}}") }
	if ("{{insert_after}}") { $args += @("--insert-after", "{{insert_after}}") }
	if ("{{refs_file}}") { $args += @("--refs-file", "{{refs_file}}") }
	if ("{{move_refs}}" -eq "true") { $args += "--move-refs-to-end" }
	& {{bun}} scripts/assemble_paper.ts @args

# Wrapper around `pdf_assembler.py`. Creates PDFs from Typst/LaTeX and optionally
# attaches front/back material. Arguments:
#   main     (required) Main document path (.typ/.tex/.pdf).
#   output   Optional final PDF file.
#   front    Comma-separated list of files prepended to the PDF.
#   end      Comma-separated list of files appended to the PDF.
#   keep_temp true/false to preserve intermediates.
pdf-assemble main output='' front='' end='' keep_temp='false':
	$args = @("{{main}}")
	if ("{{front}}") {
	"{{front}}".Split(',', [System.StringSplitOptions]::RemoveEmptyEntries) | ForEach-Object { $args += @("--front", $_.Trim()) }
	}
	if ("{{end}}") {
	"{{end}}".Split(',', [System.StringSplitOptions]::RemoveEmptyEntries) | ForEach-Object { $args += @("--end", $_.Trim()) }
	}
	if ("{{output}}") { $args += @("--output", "{{output}}") }
	if ("{{keep_temp}}" -eq "true") { $args += "--keep-temp" }
	& {{python}} scripts/pdf_assembler.py @args

# Full release pipeline with pandoc + Typst/LaTeX conversion.
# Arguments:
#   file        (required) Markdown manuscript.
#   format      typst|latex (overrides config).
#   config      Optional JSON/YAML config.
#   output      Target PDF path.
#   strategy    filter|merge|keep citation strategy.
#   dry_run     true/false preview.
#   verbose     true/false verbose logging.
#   keep_temp   true/false to keep intermediates.
release file format='' config='' output='' strategy='' dry_run='false' verbose='false' keep_temp='false':
	$args = @()
	if ("{{file}}") { $args += "{{file}}" }
	if ("{{config}}") { $args += @("--config", "{{config}}") }
	if ("{{format}}") { $args += @("--format", "{{format}}") }
	if ("{{output}}") { $args += @("--output", "{{output}}") }
	if ("{{strategy}}") { $args += @("--citation-strategy", "{{strategy}}") }
	if ("{{dry_run}}" -eq "true") { $args += "--dry-run" }
	if ("{{verbose}}" -eq "true") { $args += "--verbose" }
	if ("{{keep_temp}}" -eq "true") { $args += "--keep-temp" }
	& {{python}} scripts/release.py @args

# Convenience target for releasing the main paper via Typst into releases/final.pdf.
release-final file='paper.md':
	just release "{{file}}" format=typst output="releases/final.pdf"

# ---------------------------------------------------------------------------
# Cleanup & project hygiene
# ---------------------------------------------------------------------------

# Opinionated cleanup (mirrors cleanup-cli docs).
# Arguments:
#   profile          safe|moderate|aggressive (default safe).
#   dry_run          true/false (default true).
#   categories       Optional comma list overriding profile.
#   include_glob     Additional glob(s) (space separated) to include.
#   exclude_glob     Globs to exclude.
#   reference_mode   preserve|prune|clear for reference cache.
#   yes              true/false to skip confirmation.
#   plan             Optional plan output file.
#   rewrite          true/false to enable history rewrite.
#   root             Optional target root (defaults to repo).
#   config           Optional JSON config file.
cleanup profile='safe' dry_run='true' categories='' include_glob='' exclude_glob='' reference_mode='prune' yes='false' plan='' rewrite='false' root='' config='':
	$args = @("--profile", "{{profile}}", "--reference-cache-mode", "{{reference_mode}}")
	if ("{{dry_run}}" -eq "true") { $args += "--dry-run" } else { $args += "--no-dry-run" }
	if ("{{categories}}") { $args += @("--categories", "{{categories}}") }
	if ("{{include_glob}}") { $args += @("--include-glob", "{{include_glob}}") }
	if ("{{exclude_glob}}") { $args += @("--exclude-glob", "{{exclude_glob}}") }
	if ("{{yes}}" -eq "true") { $args += "--yes" }
	if ("{{plan}}") { $args += @("--plan-output", "{{plan}}") }
	if ("{{rewrite}}" -eq "true") { $args += "--rewrite-history" }
	if ("{{root}}") { $args += @("--root", "{{root}}") }
	if ("{{config}}") { $args += @("--config", "{{config}}") }
	& {{bun}} scripts/cleanup-cli.ts @args

# ---------------------------------------------------------------------------
# Domain-specific helpers
# ---------------------------------------------------------------------------

# Transform the computational-closure appendix into a standalone paper.
# Arguments:
#   input   Optional explicit markdown file (defaults to canonical appendix).
#   dry_run true/false preview mode.
transform-appendix input='' dry_run='false':
	$args = @()
	if ("{{input}}") { $args += @("-InputFile", "{{input}}") }
	if ("{{dry_run}}" -eq "true") { $args += "-DryRun" }
	& {{ps_exec}} -File "{{project_root}}\scripts\transform-paper.ps1" @args
