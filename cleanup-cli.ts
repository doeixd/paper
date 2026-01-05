#!/usr/bin/env bun
/**
 * Repository cleanup CLI.
 *
 * Provides flexible presets, backup-retention controls, cache strategies,
 * and optional git automation (pre-clean commits and history rewriting).
 */

import { readdir, lstat, rm, unlink, writeFile, readFile as fsReadFile } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parseArgs } from "node:util";

type CategoryName = "temp" | "generated" | "debug" | "test" | "cache" | "backup";
type CacheMode = "remove" | "truncate" | "preserve";
type ReferenceCacheMode = "preserve" | "prune" | "clear";
type BackupPeriod = "hourly" | "daily" | "weekly" | "monthly" | "yearly";

interface CategoryDefinition {
  globs: string[];
  description: string;
}

interface ProfileDefinition {
  description: string;
  categories: CategoryName[];
  backupPolicy?: BackupPolicy;
  cacheMode?: CacheMode;
  dryRun?: boolean;
}

interface BackupPolicy {
  hourly?: number;
  daily?: number;
  weekly?: number;
  monthly?: number;
  yearly?: number;
}

interface CleanupConfig {
  root: string;
  categories: CategoryName[];
  includeGlobs: string[];
  excludeGlobs: string[];
  dryRun: boolean;
  prompt: boolean;
  gitCommitBefore: boolean;
  gitCommitMessage: string;
  rewriteHistory: boolean;
  backupPolicy: BackupPolicy;
  cacheMode: CacheMode;
  referenceCacheMode: ReferenceCacheMode;
  extraDeleteGlobs: string[];
  planOutput?: string;
}

interface Candidate {
  relativePath: string;
  absolutePath: string;
  category: CategoryName | "extra";
  isDirectory: boolean;
  size: number;
  mtimeMs: number;
}

interface CleanupPlan {
  deletions: Candidate[];
  truncated: Candidate[];
  keptByBackupPolicy: Candidate[];
  referenceCache?: {
    mode: ReferenceCacheMode;
    relativePath: string;
  };
  summary: {
    totalBytes: number;
    deletedCount: number;
    truncatedCount: number;
    keptCount: number;
  };
}

const CATEGORY_DEFINITIONS: Record<CategoryName, CategoryDefinition> = {
  temp: {
    description: "Scratch files and directories created ad-hoc (tmp, temp, swap files).",
    globs: ["**/*.tmp", "**/*.swp", "**/*~", "**/tmp/**", "**/tmp*/*", "**/temp/**"],
  },
  generated: {
    description: "Build outputs, conversion artefacts, logs, and export bundles.",
    globs: [
      "**/*_combined.*",
      "**/*.log",
      "**/*.aux",
      "**/*.out",
      "**/*.toc",
      "**/*.pdf.bak",
      "**/*.synctex.gz",
      "**/*.chk",
    ],
  },
  debug: {
    description: "Debug traces and diagnostic dumps.",
    globs: ["**/*debug*.*", "**/*trace*.*", "**/*.stack", "**/*.core", "**/*.assert"],
  },
  test: {
    description: "Ad-hoc test artefacts and captured fixtures.",
    globs: ["**/test_*.*", "**/*_test.*", "**/Tests/**", "**/tests/output/**"],
  },
  cache: {
    description: "Interpreter caches, package artefacts, node_modules lock caches.",
    globs: [
      ".cache",
      ".cache/**",
      "**/.cache",
      "**/.cache/**",
      "__pycache__",
      "__pycache__/**",
      "**/__pycache__",
      "**/__pycache__/**",
      "**/.bun/**",
      "**/.pytest_cache/**",
      "**/.mypy_cache/**",
    ],
  },
  backup: {
    description: "Backup directories and timestamped snapshot files.",
    globs: ["**/*.bak", "**/*.backup*", "**/backups/**", "**/*backup*.md", "**/*.sav"],
  },
};

const PROFILE_DEFINITIONS: Record<string, ProfileDefinition> = {
  safe: {
    description: "Removes obvious scratch files & caches, preserves backups (dry-run by default).",
    categories: ["temp", "generated", "cache"],
    backupPolicy: { daily: 5, weekly: 3, monthly: 2 },
    cacheMode: "truncate",
    dryRun: true,
  },
  moderate: {
    description: "Adds debug/test artefacts, prunes backups with coarse retention.",
    categories: ["temp", "generated", "cache", "debug", "test"],
    backupPolicy: { daily: 3, weekly: 2, monthly: 2 },
    cacheMode: "remove",
    dryRun: true,
  },
  aggressive: {
    description: "Targets every category including backups, intended for release prep.",
    categories: ["temp", "generated", "cache", "debug", "test", "backup"],
    backupPolicy: { daily: 1, weekly: 1, monthly: 1, yearly: 1 },
    cacheMode: "remove",
    dryRun: false,
  },
};

const HELP_TEXT = `Emergent Pragmatic Coherentism — Repository Cleanup CLI

Usage:
  bun cleanup-cli.ts [options]

Key options:
  --profile <safe|moderate|aggressive>   Selects a predefined cleanup profile.
  --categories <list>                    Comma-separated categories to include.
  --include-glob <pattern>               Additional glob(s) to delete (repeatable).
  --exclude-glob <pattern>               Globs that must be ignored (repeatable).
  --backup-policy <rule>                 e.g. daily=3,weekly=2,monthly=1.
  --cache-mode <remove|truncate|preserve>Controls cache handling.
  --reference-cache-mode <preserve|prune|clear>
                                         Special handling for .cache/reference-verification (default: prune).
  --dry-run / --no-dry-run               Plan-only vs destructive mode.
  --yes                                  Skip confirmation prompt.
  --git-commit-before / --no-git-commit-before  Snapshot the repo before deleting.
  --git-commit-message <text>            Custom pre-clean commit message.
  --rewrite-history                      Rewrite git history to drop deleted files.
  --plan-output <path>                   Write detailed plan JSON for auditing.
  --root <path>                          Target root (defaults to cwd).
  --config <file>                        JSON config with the same fields.
  --list-categories                      Prints supported categories.
  --list-profiles                        Prints profile descriptions.
  --help                                 Displays this message.
`;

type ReferenceCacheSource = "crossref" | "arxiv" | "openlibrary" | "web-search" | "claude-cli" | "unknown";

const REFERENCE_CACHE_POSIX = ".cache/reference-verification";
const REFERENCE_CACHE_TTL_MAP: Record<ReferenceCacheSource, number> = {
  crossref: 30 * 24 * 60 * 60 * 1000,
  arxiv: 90 * 24 * 60 * 60 * 1000,
  "openlibrary": 7 * 24 * 60 * 60 * 1000,
  "web-search": 24 * 60 * 60 * 1000,
  "claude-cli": 7 * 24 * 60 * 60 * 1000,
  unknown: 24 * 60 * 60 * 1000,
};
const REFERENCE_CACHE_DEFAULT_MODE: ReferenceCacheMode = "prune";

const DEFAULT_CONFIG: CleanupConfig = {
  root: process.cwd(),
  categories: PROFILE_DEFINITIONS.safe.categories,
  includeGlobs: [],
  excludeGlobs: ["**/.git/**", "**/node_modules/**"],
  dryRun: PROFILE_DEFINITIONS.safe.dryRun ?? true,
  prompt: true,
  gitCommitBefore: true,
  gitCommitMessage: "chore: snapshot before cleanup",
  rewriteHistory: false,
  backupPolicy: PROFILE_DEFINITIONS.safe.backupPolicy ?? {},
  cacheMode: PROFILE_DEFINITIONS.safe.cacheMode ?? "truncate",
  referenceCacheMode: REFERENCE_CACHE_DEFAULT_MODE,
  extraDeleteGlobs: [],
  planOutput: undefined,
};

function parseBackupPolicy(input?: string): BackupPolicy | undefined {
  if (!input) {
    return undefined;
  }
  const policy: BackupPolicy = {};
  for (const token of input.split(",")) {
    const trimmed = token.trim();
    if (!trimmed) continue;
    const [period, rawCount] = trimmed.split("=");
    const count = Number(rawCount);
    if (!period || Number.isNaN(count) || count < 0) {
      throw new Error(`Invalid backup policy token "${trimmed}". Use e.g. daily=3`);
    }
    if (!["hourly", "daily", "weekly", "monthly", "yearly"].includes(period)) {
      throw new Error(`Unsupported backup period "${period}"`);
    }
    (policy as any)[period] = count;
  }
  return policy;
}

function mergeConfig(base: CleanupConfig, overlay: Partial<CleanupConfig>): CleanupConfig {
  return {
    root: overlay.root ?? base.root,
    categories: overlay.categories ?? base.categories,
    includeGlobs: overlay.includeGlobs ?? base.includeGlobs,
    excludeGlobs: overlay.excludeGlobs ?? base.excludeGlobs,
    dryRun: overlay.dryRun ?? base.dryRun,
    prompt: overlay.prompt ?? base.prompt,
    gitCommitBefore: overlay.gitCommitBefore ?? base.gitCommitBefore,
    gitCommitMessage: overlay.gitCommitMessage ?? base.gitCommitMessage,
    rewriteHistory: overlay.rewriteHistory ?? base.rewriteHistory,
      backupPolicy: overlay.backupPolicy ?? base.backupPolicy,
      cacheMode: overlay.cacheMode ?? base.cacheMode,
      referenceCacheMode: overlay.referenceCacheMode ?? base.referenceCacheMode,
      extraDeleteGlobs: overlay.extraDeleteGlobs ?? base.extraDeleteGlobs,
      planOutput: overlay.planOutput ?? base.planOutput,
    };
}

async function readConfigFile(filePath: string): Promise<Partial<CleanupConfig>> {
  const text = await fsReadFile(path.resolve(filePath), "utf-8");
  return JSON.parse(text) as Partial<CleanupConfig>;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, index);
  return `${value.toFixed(1)} ${units[index]}`;
}

function bucketKey(date: Date, period: BackupPeriod): string {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const week = getWeekNumber(date);
  switch (period) {
    case "hourly":
      return `${year}-H${month}-${day}-${hour}`;
    case "daily":
      return `${year}-D${month}-${day}`;
    case "weekly":
      return `${year}-W${week}`;
    case "monthly":
      return `${year}-M${month}`;
    case "yearly":
      return `${year}`;
    default:
      return `${year}-${month}-${day}`;
  }
}

function getWeekNumber(date: Date): number {
  const temp = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = temp.getUTCDay() || 7;
  temp.setUTCDate(temp.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((temp.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return weekNo;
}

function parseCategories(input?: string): CategoryName[] | undefined {
  if (!input) return undefined;
  const tokens = input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean) as CategoryName[];
  for (const token of tokens) {
    if (!CATEGORY_DEFINITIONS[token]) {
      throw new Error(`Unknown category "${token}". Use --list-categories for options.`);
    }
  }
  return tokens;
}

function parseReferenceCacheMode(input?: string): ReferenceCacheMode | undefined {
  if (!input) return undefined;
  const normalized = input.toLowerCase();
  if (normalized === "preserve" || normalized === "prune" || normalized === "clear") {
    return normalized as ReferenceCacheMode;
  }
  throw new Error(`Unknown reference cache mode "${input}". Use preserve, prune, or clear.`);
}

function loadProfile(name?: string): ProfileDefinition | undefined {
  if (!name) return undefined;
  const definition = PROFILE_DEFINITIONS[name];
  if (!definition) {
    throw new Error(`Unknown profile "${name}". Use --list-profiles to inspect presets.`);
  }
  return definition;
}

function compileGlobs(patterns: string[]): Bun.Glob[] {
  return patterns.map((pattern) => new Bun.Glob(pattern, { nocase: false }));
}

function globMatches(globs: Bun.Glob[], relativePath: string): boolean {
  return globs.some((glob) => glob.match(relativePath));
}

function normalizeRelativePath(rel: string): string {
  return rel.replace(/\\/g, "/");
}

function isReferenceCachePath(relative: string): boolean {
  const normalized = normalizeRelativePath(relative);
  return normalized === REFERENCE_CACHE_POSIX || normalized.startsWith(`${REFERENCE_CACHE_POSIX}/`);
}

async function collectCandidates(config: CleanupConfig): Promise<Candidate[]> {
  const matches = new Map<string, Candidate>();
  const excludeGlobs = compileGlobs(config.excludeGlobs);
  const cacheRootNames = new Set([".cache", "__pycache__", ".pytest_cache", ".mypy_cache", ".bun"]);

  const register = async (relativePath: string, category: Candidate["category"]) => {
    if (!relativePath || relativePath === "." || relativePath.startsWith(".git")) {
      return;
    }
    if (globMatches(excludeGlobs, relativePath)) return;
    const absolutePath = path.join(config.root, relativePath);
    if (matches.has(absolutePath)) return;
    let stats;
    try {
      stats = await lstat(absolutePath);
    } catch {
      return;
    }
    matches.set(absolutePath, {
      relativePath,
      absolutePath,
      category,
      isDirectory: stats.isDirectory(),
      size: stats.size,
      mtimeMs: stats.mtimeMs,
    });
  };

  const gatherForPatterns = async (patterns: string[], category: Candidate["category"]) => {
    for (const pattern of patterns) {
      const glob = new Bun.Glob(pattern, { dot: true, nocase: false });
      for await (const match of glob.scan({ cwd: config.root, onlyFiles: false })) {
        await register(match, category);
      }
    }
  };

  for (const category of config.categories) {
    const definition = CATEGORY_DEFINITIONS[category];
    if (!definition) continue;
    await gatherForPatterns(definition.globs, category);
  }
  if (config.extraDeleteGlobs.length > 0) {
    await gatherForPatterns(config.extraDeleteGlobs, "extra");
  }
  if (config.includeGlobs.length > 0) {
    await gatherForPatterns(config.includeGlobs, "extra");
  }

  if (config.categories.includes("cache")) {
    const additionalRoots = new Set<string>();
    for (const candidate of matches.values()) {
      if (candidate.category !== "cache") continue;
      const normalized = candidate.relativePath.replace(/\\/g, "/");
      const parts = normalized.split("/");
      const rootIndex = parts.findIndex((part) => cacheRootNames.has(part));
      if (rootIndex >= 0) {
        const rootRelative = parts.slice(0, rootIndex + 1).join(path.sep);
        const absoluteRoot = path.join(config.root, rootRelative);
        if (!matches.has(absoluteRoot)) {
          additionalRoots.add(rootRelative);
        }
      }
    }
    const discovered = await findNamedDirectories(config.root, cacheRootNames);
    for (const rel of discovered) {
      additionalRoots.add(rel);
    }
    const referenceCacheAbsolute = path.join(config.root, ...REFERENCE_CACHE_POSIX.split("/"));
    try {
      const stats = await lstat(referenceCacheAbsolute);
      if (stats.isDirectory()) {
        const rel = path.relative(config.root, referenceCacheAbsolute) || ".";
        additionalRoots.add(rel);
      }
    } catch {
      // ignore missing reference cache
    }
    for (const rel of additionalRoots) {
      await register(rel, "cache");
    }
  }

  return Array.from(matches.values());
}

async function findNamedDirectories(root: string, names: Set<string>): Promise<string[]> {
  const queue: string[] = [""];
  const found: string[] = [];
  while (queue.length > 0) {
    const relative = queue.pop()!;
    const absolute = path.join(root, relative);
    let entries;
    try {
      entries = await readdir(absolute, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const entryRelative = relative ? path.join(relative, entry.name) : entry.name;
      if (names.has(entry.name)) {
        found.push(entryRelative);
      }
      queue.push(entryRelative);
    }
  }
  return found;
}

function applyBackupRetention(candidates: Candidate[], policy: BackupPolicy): { keep: Set<string>; delete: Candidate[]; kept: Candidate[] } {
  const backupCandidates = candidates.filter((candidate) => candidate.category === "backup");
  if (backupCandidates.length === 0) {
    return { keep: new Set(), delete: backupCandidates, kept: [] };
  }
  const sorted = backupCandidates.sort((a, b) => b.mtimeMs - a.mtimeMs);
  const keepSet = new Set<string>();
  const keptCandidates: Candidate[] = [];
  const periods: BackupPeriod[] = ["hourly", "daily", "weekly", "monthly", "yearly"];
  const bucketUsage: Record<BackupPeriod, Set<string>> = {
    hourly: new Set(),
    daily: new Set(),
    weekly: new Set(),
    monthly: new Set(),
    yearly: new Set(),
  };

  for (const period of periods) {
    const limit = policy[period];
    if (!limit || limit <= 0) continue;
    let bucketCount = 0;
    for (const candidate of sorted) {
      if (keepSet.has(candidate.absolutePath)) continue;
      const key = bucketKey(new Date(candidate.mtimeMs), period);
      const alreadyUsed = bucketUsage[period].has(key);
      if (alreadyUsed) continue;
      bucketUsage[period].add(key);
      keepSet.add(candidate.absolutePath);
      keptCandidates.push(candidate);
      bucketCount += 1;
      if (bucketCount >= limit) break;
    }
  }

  return { keep: keepSet, delete: backupCandidates, kept: keptCandidates };
}

async function executePlan(plan: CleanupPlan, config: CleanupConfig): Promise<void> {
  const needsReferenceAction = plan.referenceCache?.mode === "prune";
  if (plan.deletions.length === 0 && plan.truncated.length === 0 && !needsReferenceAction) return;
  for (const candidate of plan.deletions) {
    if (candidate.isDirectory) {
      await rm(candidate.absolutePath, { recursive: true, force: true });
    } else {
      await unlink(candidate.absolutePath).catch(async () => {
        await rm(candidate.absolutePath, { force: true });
      });
    }
  }

  for (const candidate of plan.truncated) {
    if (!candidate.isDirectory) {
      continue;
    }
    const entries = await readdir(candidate.absolutePath);
    await Promise.all(
      entries.map(async (entry) => {
        const target = path.join(candidate.absolutePath, entry);
        const relative = normalizeRelativePath(path.relative(config.root, target));
        if (config.referenceCacheMode !== "clear" && isReferenceCachePath(relative)) {
          return;
        }
        await rm(target, { recursive: true, force: true }).catch(() => Promise.resolve());
      }),
    );
  }

  if (plan.referenceCache && config.referenceCacheMode === "prune") {
    const absoluteCachePath = path.join(config.root, ...normalizeRelativePath(plan.referenceCache.relativePath).split("/"));
    const result = await pruneReferenceCache(absoluteCachePath);
    if (result.inspected > 0 || result.removed > 0) {
      console.log(
        `Pruned reference cache: inspected ${result.inspected} entries, removed ${result.removed} expired files.`,
      );
    } else {
      console.log("Reference cache already clean.");
    }
  } else if (plan.referenceCache && config.referenceCacheMode === "preserve") {
    console.log("Reference cache preserved (no action taken).");
  }
}

function summarizeCandidates(candidates: Candidate[]): { bytes: number; count: number } {
  return candidates.reduce(
    (acc, candidate) => {
      acc.bytes += candidate.size;
      acc.count += 1;
      return acc;
    },
    { bytes: 0, count: 0 },
  );
}

function ensureGitRepo(root: string): void {
  const result = spawnSync("git", ["rev-parse", "--is-inside-work-tree"], { cwd: root, encoding: "utf-8" });
  if (result.status !== 0) {
    throw new Error("The cleanup CLI must run inside a git repository.");
  }
}

function runGit(args: string[], root: string, displayErrors = true): void {
  const result = spawnSync("git", args, { cwd: root, stdio: displayErrors ? "inherit" : "ignore" });
  if (result.status !== 0) {
    throw new Error(`git ${args.join(" ")} failed.`);
  }
}

function createPreCleanupCommit(config: CleanupConfig): void {
  ensureGitRepo(config.root);
  const status = spawnSync("git", ["status", "--porcelain"], { cwd: config.root, encoding: "utf-8" });
  if (status.status !== 0) {
    throw new Error("Unable to read git status.");
  }
  if (!status.stdout.trim()) {
    console.log("No changes to snapshot before cleanup.");
    return;
  }
  runGit(["add", "-A"], config.root);
  const commit = spawnSync("git", ["commit", "-m", config.gitCommitMessage], { cwd: config.root, stdio: "inherit" });
  if (commit.status !== 0) {
    throw new Error("Unable to create the pre-cleanup commit.");
  }
  console.log("Created pre-cleanup commit.");
}

function rewriteGitHistory(targets: string[], root: string): void {
  if (targets.length === 0) return;
  console.warn("Rewriting git history. This operation is destructive; create backups first.");
  const filterRepo = spawnSync("git", ["filter-repo", "--version"], { cwd: root, stdio: "ignore" });
  if (filterRepo.status === 0) {
    const args = ["filter-repo", ...targets.flatMap((target) => ["--path", target]), "--invert-paths"];
    runGit(args, root);
    return;
  }
  const indexFilter = `git rm -r --cached --ignore-unmatch ${targets.map((t) => `"${t.replace(/"/g, '\\"')}"`).join(" ")}`;
  runGit(
    [
      "filter-branch",
      "--force",
      "--index-filter",
      indexFilter,
      "--prune-empty",
      "--tag-name-filter",
      "cat",
      "--",
      "--all",
    ],
    root,
  );
}

function renderPlan(plan: CleanupPlan): void {
  console.log("");
  console.log("Cleanup Plan");
  console.log("============");
  console.log(`Files/directories to delete : ${plan.summary.deletedCount} (${formatBytes(plan.summary.totalBytes)})`);
  console.log(`Directories to truncate     : ${plan.summary.truncatedCount}`);
  console.log(`Backups kept (by policy)    : ${plan.summary.keptCount}`);
  if (plan.referenceCache) {
    console.log(`Reference cache handling    : ${plan.referenceCache.mode}`);
  }
}

async function buildPlan(config: CleanupConfig): Promise<CleanupPlan> {
  const candidates = await collectCandidates(config);
  const backupRetention = applyBackupRetention(candidates, config.backupPolicy);
  const keepSet = backupRetention.keep;
  const kept = backupRetention.kept;

  const deletions: Candidate[] = [];
  const truncated: Candidate[] = [];
  let referenceCachePlan: CleanupPlan["referenceCache"];

  for (const candidate of candidates) {
    const isReferenceCache = candidate.category === "cache" && isReferenceCachePath(candidate.relativePath);
    if (isReferenceCache) {
      if (config.referenceCacheMode === "clear") {
        deletions.push(candidate);
        continue;
      }
      referenceCachePlan = referenceCachePlan ?? {
        mode: config.referenceCacheMode,
        relativePath: REFERENCE_CACHE_POSIX,
      };
      continue;
    }

    if (candidate.category === "backup" && keepSet.has(candidate.absolutePath)) {
      continue;
    }
    if (candidate.category === "cache" && config.cacheMode === "preserve") {
      continue;
    }
    if (candidate.category === "cache" && config.cacheMode === "truncate" && candidate.isDirectory) {
      truncated.push(candidate);
      continue;
    }
    deletions.push(candidate);
  }

  const summary = summarizeCandidates(deletions);
  const plan: CleanupPlan = {
    deletions,
    truncated,
    keptByBackupPolicy: kept,
    summary: {
      totalBytes: summary.bytes,
      deletedCount: summary.count,
      truncatedCount: truncated.length,
      keptCount: kept.length,
    },
    referenceCache: referenceCachePlan,
  };
  return plan;
}

async function pruneReferenceCache(cacheRoot: string): Promise<{ removed: number; inspected: number }> {
  let removed = 0;
  let inspected = 0;
  try {
    await lstat(cacheRoot);
  } catch {
    return { removed, inspected };
  }
  const walk = async (dir: string): Promise<void> => {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.name === ".gitkeep") continue;
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(entryPath);
        try {
          const remaining = (await readdir(entryPath)).filter((child) => child !== ".gitkeep");
          if (remaining.length === 0) {
            await rm(entryPath, { recursive: true, force: true });
          }
        } catch {
          // ignore
        }
        continue;
      }
      if (!entry.name.endsWith(".json")) continue;
      inspected++;
      let shouldRemove = false;
      try {
        const cacheEntry = await Bun.file(entryPath).json();
        const timestamp = typeof cacheEntry.timestamp === "number" ? cacheEntry.timestamp : 0;
        const sourceKey = typeof cacheEntry.source === "string" ? cacheEntry.source : "unknown";
        const source = (REFERENCE_CACHE_TTL_MAP[sourceKey as ReferenceCacheSource]
          ? sourceKey
          : "unknown") as ReferenceCacheSource;
        const ttl = REFERENCE_CACHE_TTL_MAP[source] ?? REFERENCE_CACHE_TTL_MAP.unknown;
        if (!timestamp || Date.now() - timestamp > ttl) {
          shouldRemove = true;
        }
      } catch {
        shouldRemove = true;
      }
      if (shouldRemove) {
        await unlink(entryPath).catch(() => {});
        removed++;
      }
    }
  };
  await walk(cacheRoot);
  return { removed, inspected };
}

function writePlanToFile(plan: CleanupPlan, planPath: string): void {
  const payload = JSON.stringify(
    {
      summary: plan.summary,
      deletions: plan.deletions.map((c) => ({
        path: c.relativePath,
        category: c.category,
        size: c.size,
        modified: new Date(c.mtimeMs).toISOString(),
      })),
      truncated: plan.truncated.map((c) => c.relativePath),
      keptByPolicy: plan.keptByBackupPolicy.map((c) => c.relativePath),
      referenceCache: plan.referenceCache ?? null,
    },
    null,
    2,
  );
  writeFile(planPath, payload, { encoding: "utf-8" });
  console.log(`Wrote cleanup plan to ${planPath}`);
}

function printList<T extends string>(label: string, entries: Record<T, { description: string }>): void {
  console.log(`${label}:`);
  for (const [name, info] of Object.entries(entries)) {
    console.log(`  - ${name}: ${info.description}`);
  }
}

async function promptUser(question: string): Promise<boolean> {
  process.stdout.write(`${question} [y/N]: `);
  return await new Promise((resolve) => {
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    process.stdin.once("data", (data) => {
      process.stdin.pause();
      const normalized = data.trim().toLowerCase();
      resolve(normalized === "y" || normalized === "yes");
    });
  });
}

async function main() {
  const {
    values,
  } = parseArgs({
    allowPositionals: true,
    args: process.argv.slice(2),
    options: {
      profile: { type: "string" },
      level: { type: "string" },
      categories: { type: "string" },
      "include-glob": { type: "string", multiple: true },
      "exclude-glob": { type: "string", multiple: true },
      "backup-policy": { type: "string" },
      "cache-mode": { type: "string" },
      "reference-cache-mode": { type: "string" },
      "git-commit-before": { type: "boolean" },
      "git-commit-message": { type: "string" },
      "rewrite-history": { type: "boolean" },
      "dry-run": { type: "boolean" },
      yes: { type: "boolean" },
      root: { type: "string" },
      config: { type: "string" },
      "plan-output": { type: "string" },
      help: { type: "boolean" },
      "list-categories": { type: "boolean" },
      "list-profiles": { type: "boolean" },
    },
  });

  if (values.help) {
    console.log(HELP_TEXT);
    return;
  }
  if (values["list-categories"]) {
    printList("Categories", CATEGORY_DEFINITIONS);
    return;
  }
  if (values["list-profiles"]) {
    printList("Profiles", PROFILE_DEFINITIONS);
    return;
  }

  let config = { ...DEFAULT_CONFIG };
  if (values.config) {
    const fileConfig = await readConfigFile(values.config);
    config = mergeConfig(config, fileConfig);
  }

  const profileName = values.profile ?? values.level;
  if (profileName) {
    const profile = loadProfile(profileName);
    if (profile) {
      config = mergeConfig(config, {
        categories: profile.categories,
        dryRun: profile.dryRun ?? config.dryRun,
        backupPolicy: profile.backupPolicy ?? config.backupPolicy,
        cacheMode: profile.cacheMode ?? config.cacheMode,
        referenceCacheMode: config.referenceCacheMode,
      });
    }
  }

  config = mergeConfig(config, {
    root: values.root ? path.resolve(values.root) : config.root,
    includeGlobs: values["include-glob"] ?? config.includeGlobs,
    excludeGlobs: values["exclude-glob"] ?? config.excludeGlobs,
    categories: parseCategories(values.categories) ?? config.categories,
    backupPolicy: parseBackupPolicy(values["backup-policy"]) ?? config.backupPolicy,
    cacheMode: (values["cache-mode"] as CacheMode) ?? config.cacheMode,
    referenceCacheMode: parseReferenceCacheMode(values["reference-cache-mode"] as string) ?? config.referenceCacheMode,
    dryRun: typeof values["dry-run"] === "boolean" ? values["dry-run"] : config.dryRun,
    prompt: values.yes ? false : config.prompt,
    gitCommitBefore:
      typeof values["git-commit-before"] === "boolean" ? values["git-commit-before"] : config.gitCommitBefore,
    gitCommitMessage: values["git-commit-message"] ?? config.gitCommitMessage,
    rewriteHistory: values["rewrite-history"] ?? config.rewriteHistory,
    planOutput: values["plan-output"] ?? config.planOutput,
  });

  if (!config.root) {
    config.root = process.cwd();
  }

  const plan = await buildPlan(config);

  if (config.planOutput) {
    writePlanToFile(plan, config.planOutput);
  }
  renderPlan(plan);

  const hasReferencePrune = plan.referenceCache?.mode === "prune";
  if (plan.deletions.length === 0 && plan.truncated.length === 0 && !hasReferencePrune) {
    console.log("Nothing to remove. You're already clean!");
    return;
  }

  if (config.prompt && !config.dryRun) {
    const confirmed = await promptUser("Proceed with cleanup?");
    if (!confirmed) {
      console.log("Aborted.");
      return;
    }
  }

  if (config.gitCommitBefore) {
    createPreCleanupCommit(config);
  }

  if (config.dryRun) {
    console.log("Dry-run complete. Re-run with --no-dry-run or --dry-run=false to apply.");
    return;
  }

  await executePlan(plan, config);
  console.log("Cleanup complete.");

  if (config.rewriteHistory) {
    const relativePaths = plan.deletions.map((candidate) => candidate.relativePath);
    rewriteGitHistory(relativePaths, config.root);
  }
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}

export {
  CATEGORY_DEFINITIONS,
  PROFILE_DEFINITIONS,
  type CleanupConfig,
  type CleanupPlan,
  type Candidate,
  type BackupPolicy,
  type CacheMode,
  buildPlan,
  executePlan,
  mergeConfig,
  parseBackupPolicy,
  parseCategories,
  loadProfile,
};
