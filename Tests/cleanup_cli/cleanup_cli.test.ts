import { describe, expect, test } from "bun:test";
import { mkdtemp, rm, mkdir, writeFile, utimes, readdir } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { buildPlan, executePlan, type CleanupConfig } from "../../cleanup-cli";

async function withTempDir<T>(fn: (dir: string) => Promise<T>): Promise<T> {
  const dir = await mkdtemp(path.join(os.tmpdir(), "cleanup-cli-"));
  try {
    return await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

function baseConfig(root: string): CleanupConfig {
  return {
    root,
    categories: [],
    includeGlobs: [],
    excludeGlobs: ["**/.git/**"],
    dryRun: true,
    prompt: false,
    gitCommitBefore: false,
    gitCommitMessage: "test",
  rewriteHistory: false,
  backupPolicy: {},
  cacheMode: "remove",
  referenceCacheMode: "prune",
  extraDeleteGlobs: [],
  planOutput: undefined,
};
}

function normalizeRelativePath(p: string): string {
  return p.replace(/\\/g, "/");
}

describe("cleanup-cli", () => {
  test("detects category targets", async () => {
    await withTempDir(async (root) => {
      await mkdir(path.join(root, "tmp"), { recursive: true });
      await writeFile(path.join(root, "tmp", "scratch.tmp"), "temp");
      await writeFile(path.join(root, "notes.md"), "keep me");
      const config: CleanupConfig = {
        ...baseConfig(root),
        categories: ["temp"],
      };
      const plan = await buildPlan(config);
      const targets = plan.deletions.map((item) => normalizeRelativePath(item.relativePath));
      expect(targets).toContain("tmp/scratch.tmp");
      expect(plan.summary.deletedCount).toBe(1);
    });
  });

  test("applies backup retention policies", async () => {
    await withTempDir(async (root) => {
      await mkdir(path.join(root, "backups"), { recursive: true });
      const files = ["backups/day1.bak", "backups/day2.bak", "backups/day3.bak"];
      for (let i = 0; i < files.length; i++) {
        const file = path.join(root, files[i]);
        await writeFile(file, `backup-${i}`);
        const when = new Date(Date.now() - i * 86400000);
        await utimes(file, when, when);
      }
      const config: CleanupConfig = {
        ...baseConfig(root),
        categories: ["backup"],
        backupPolicy: { daily: 1 },
      };
      const plan = await buildPlan(config);
      expect(plan.keptByBackupPolicy.length).toBe(1);
      expect(plan.deletions.length).toBe(2);
    });
  });

  test("truncates caches when requested", async () => {
    await withTempDir(async (root) => {
      await mkdir(path.join(root, ".cache", "foo"), { recursive: true });
      await writeFile(path.join(root, ".cache", "foo", "bar.log"), "cache data");
      const config: CleanupConfig = {
        ...baseConfig(root),
        categories: ["cache"],
        cacheMode: "truncate",
        dryRun: false,
      };
      const plan = await buildPlan(config);
      expect(plan.truncated.length).toBe(1);
      expect(normalizeRelativePath(plan.truncated[0].relativePath)).toBe(".cache");
      await executePlan(plan, config);
      const remainingCacheEntries = await readdir(path.join(root, ".cache")).catch(() => []);
      expect(remainingCacheEntries.length).toBe(0);
    });
  });

  test("prunes reference verification cache entries", async () => {
    await withTempDir(async (root) => {
      const referenceDir = path.join(root, ".cache", "reference-verification", "doi");
      await mkdir(referenceDir, { recursive: true });
      await writeFile(path.join(root, ".cache", "reference-verification", ".gitkeep"), "");
      const stalePath = path.join(referenceDir, "old.json");
      const freshPath = path.join(referenceDir, "fresh.json");
      const day = 24 * 60 * 60 * 1000;
      await writeFile(
        stalePath,
        JSON.stringify({ timestamp: Date.now() - 40 * day, source: "crossref", data: { foo: "bar" } }),
      );
      await writeFile(
        freshPath,
        JSON.stringify({ timestamp: Date.now() - 5 * day, source: "crossref", data: { foo: "baz" } }),
      );
      const config: CleanupConfig = {
        ...baseConfig(root),
        categories: ["cache"],
        cacheMode: "truncate",
        referenceCacheMode: "prune",
        dryRun: false,
      };
      const plan = await buildPlan(config);
      expect(plan.referenceCache?.mode).toBe("prune");
      await executePlan(plan, config);
      expect(await Bun.file(stalePath).exists()).toBe(false);
      expect(await Bun.file(freshPath).exists()).toBe(true);
    });
  });
});
