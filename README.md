# The Architecture of Failure: How Systemic Brittleness Drives Convergent Coherence to Forge Objective Truth

This repository contains the manuscript for an academic philosophy paper proposing Emergent Pragmatic Coherentism, a framework that grounds epistemic justification in the demonstrated viability of knowledge systems through systemic brittleness metrics.

## Abstract

Coherentist theories of justification face the isolation objection: a belief system could be perfectly coherent yet entirely detached from reality. This paper proposes Emergent Pragmatic Coherentism, grounding coherence in the demonstrated viability of knowledge systems. The framework introduces systemic brittleness as a diagnostic tool, measuring network health through observable costs of applying propositions. Selective pressure from these costs drives knowledge systems toward convergence on an emergent structure—the Apex Network—comprising maximally viable propositions shaped by historical filtering, not pre-existing truth. Justification requires both internal coherence and the proven resilience of the certifying Consensus Network. This naturalistic account redefines objective truth as alignment with the Apex Network, explains pragmatic revision in Quine's web of belief, and supports a falsifiable research program for assessing epistemic health. Preliminary applications to cases like Ptolemaic astronomy and AI winters illustrate the approach, using proxies such as citation patterns and resource metrics.

## Files

- `paper.md`: The main manuscript in Markdown format.
- `references.md`: Bibliography in Chicago style.
- `edits/`: Directory containing summaries of revisions and changes made during editing.
- `sources/`: Supporting documents and PDFs referenced in the paper.
- `AGENTS.md`, `CLAUDE.md`, etc.: Project configuration and notes.

## Reading the Paper

The paper is structured as follows:

1. Introduction: Problem setup and framework overview.
2. Framework for Assessing Systemic Viability: Core concepts like brittleness and Standing Predicates.
3. Drivers of Adaptation: Logic of systemic viability.
4. Convergence and the Emergence of Objective Structures: Theory of truth.
5. The Dynamism of the Web: Quine's web animated.
6. Situating the Framework: Relations to other theories.
7. Defending the Model: Addressing challenges.
8. Conclusion: Implications and future directions.
Appendix A: Normative Brittleness Extension.

For best reading, use a Markdown viewer or convert to PDF.

## Citation

If citing this work, use the following (update with publication details if applicable):

Author. "The Architecture of Failure: How Systemic Brittleness Drives Convergent Coherence to Forge Objective Truth." Unpublished manuscript.

## License

This work is shared for academic purposes. Please cite appropriately.

## Contact

For questions or feedback, refer to the edits directory for revision history or open an issue on the repository.

## Cleanup Automation CLI

The repository now includes `scripts/cleanup-cli.ts`, a Bun-powered utility that removes generated artefacts, caches, debug dumps, and ad-hoc backups with configurable safety tiers.

- **Profiles**: `safe`, `moderate`, and `aggressive` presets cover typical release hygiene levels while remaining overridable with `--categories` or `--include-glob`.
- **Backup retention**: Use `--backup-policy daily=3,weekly=2` to keep one representative backup per time bucket.
- **Cache strategies**: Choose between deleting caches, truncating their contents, or preserving them entirely with `--cache-mode`.
- **Git safety**: Optional `--git-commit-before` (default on) snapshots the repo before cleaning; `--rewrite-history` rewrites commits to purge the deleted files when you explicitly request it.
- **Plans & dry-runs**: Every run starts with a plan summary; pass `--dry-run=false --yes` to apply non-interactively, or `--plan-output plan.json` for auditing.
- **Reference cache aware**: `--reference-cache-mode` defaults to pruning expired `.cache/reference-verification` entries using the same TTL rules as `verify-references.ts`, so you can keep fresh citations but purge stale API responses or clear/preserve explicitly.

Run `bun scripts/cleanup-cli.ts --help` for the full option list, or pair it with a JSON config via `--config cleanup.config.json` to encode project-specific defaults.
