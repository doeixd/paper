# Cleanup CLI

`cleanup-cli.ts` is a Bun/TypeScript command-line program that consolidates all of the ad-hoc cleanups we regularly apply before sharing drafts or running release tooling. Run it from the repository root using `bun scripts/cleanup-cli.ts ...` so the CLI can locate project paths correctly.

## Quick start

```sh
bun scripts/cleanup-cli.ts --profile safe          # inspect default plan (dry-run)
bun scripts/cleanup-cli.ts --profile moderate --yes --dry-run=false
bun scripts/cleanup-cli.ts --categories temp,generated --include-glob "drafts/**/*.bak"
```

### Profiles

| Profile    | Targets                                            | Backup Policy               | Cache Mode |
|------------|----------------------------------------------------|-----------------------------|------------|
| `safe`     | temp, generated, cache                             | daily=5, weekly=3, monthly=2| truncate   |
| `moderate` | safe + debug + test                                | daily=3, weekly=2, monthly=2| remove     |
| `aggressive` | all categories (including backups)               | daily=1, weekly=1, monthly=1, yearly=1 | remove |

You can still override any field via CLI flags or a JSON config file.

### Backup retention

Use `--backup-policy` to keep one representative per time bucket:

```
--backup-policy daily=3,weekly=2,monthly=1
```

The policy inspects file modification timestamps, keeps the newest file in each requested bucket, and deletes the rest. Set a period to `0` to disable that bucket.

### Cache handling

`--cache-mode remove|truncate|preserve`

- `remove` deletes cache directories outright.
- `truncate` empties the directory but leaves the folder intact (default for the safe profile).
- `preserve` skips cache entries entirely.

### Reference verification cache

The `verify-references.ts` script keeps a structured cache under `.cache/reference-verification`. Instead of blindly deleting it with the rest of `.cache`, the CLI exposes `--reference-cache-mode <preserve|prune|clear>` (default: `prune`):

- `prune` replicates `verify-references`’ TTL policy (CrossRef ≈ 30 days, arXiv 90, OpenLibrary 7, web-search 1, Claude 7) and deletes only expired/corrupted cache JSON files while leaving fresh entries and the `.gitkeep`.
- `clear` removes the entire directory regardless of TTL.
- `preserve` leaves the directory untouched even when other caches are truncated.

When `--cache-mode truncate` is used, the CLI still protects `.cache/reference-verification` unless you explicitly set `--reference-cache-mode clear`.

### Git safeguards

| Flag | Purpose |
|------|---------|
| `--git-commit-before` | Creates a commit with the current tree so it is easy to roll back. On by default. |
| `--git-commit-message "<msg>"` | Customize the snapshot commit message. |
| `--rewrite-history` | After deletion, rewrites git history (prefers `git filter-repo`, falls back to `git filter-branch`). Use with caution. |

### Planning, dry runs, and audit logs

- Every run prints a plan summary with counts and byte sizes.
- `--dry-run` (default in safe/moderate) avoids deleting anything.
- `--plan-output plan.json` writes a serialized plan for record keeping.
- `--yes` skips the confirmation prompt for automated workflows.

### Configuration file

You can store a configuration in JSON:

```jsonc
{
  "root": ".",
  "profile": "moderate",
  "categories": ["temp", "generated", "cache", "debug"],
  "includeGlobs": ["notes/**/*scratch.md"],
  "backupPolicy": { "daily": 2, "weekly": 2 },
  "cacheMode": "remove",
  "gitCommitBefore": true
}
```

Reference it with `--config cleanup.config.json` and override anything on the command line when needed.

### Testing

Tests live in `Tests/cleanup_cli/cleanup_cli.test.ts` and can be executed via:

```
bun test Tests/cleanup_cli/cleanup_cli.test.ts
```

They exercise category detection, backup retention, and cache truncation so future changes remain safe.
