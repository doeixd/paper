
import { parseArgs } from "util";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";

// --- Types ---
interface AssembleOptions {
  main: string;
  appendix: string[];
  out: string;
  strategy: 'simple' | 'smart';
  metadata?: string; // path or JSON string
  separator: string;
}

// --- Argument Parsing ---
function parseArguments(): AssembleOptions {
  const { values } = parseArgs({
    args: Bun.argv,
    options: {
      main: { type: 'string' },
      appendix: { type: 'string', multiple: true },
      out: { type: 'string' },
      strategy: { type: 'string', default: 'simple' },
      metadata: { type: 'string' },
      separator: { type: 'string', default: '\n\n---\n\n' },
    },
    strict: true,
    allowPositionals: true,
  });

  if (!values.main || !values.out) {
    console.error("Error: --main and --out are required arguments.");
    console.error("Usage: bun assemble_paper.ts --main <path> --out <path> [--appendix <path>...] [--strategy simple|smart]");
    process.exit(1);
  }

  return {
    main: values.main,
    appendix: values.appendix || [],
    out: values.out,
    strategy: (values.strategy as 'simple' | 'smart') || 'simple',
    metadata: values.metadata,
    separator: values.separator || '\n\n---\n\n'
  };
}

// --- Frontmatter Helpers ---
function extractFrontmatter(content: string): { frontmatter: string | null; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (match) {
    return { frontmatter: match[1], body: match[2] };
  }
  return { frontmatter: null, body: content };
}

function mergeMetadata(originalYaml: string | null, newMetadata: any): string {
  // Simple YAML parser/dumper is complex to implement dep-free. 
  // For 'smart' strategy without deps, we'll do a basic prepend or append if needed.
  // However, if newMetadata is provided, we can reconstruct the block.
  // Given the constraints (standard libs), we will assume:
  // 1. If originalYaml exists, we wrap new metadata logic around it or replace strictly if keys collide?
  // Let's implement a safe basic approach: Parse JSON metadata, convert to YAML lines, append to existing frontmatter lines.

  let lines = originalYaml ? originalYaml.split('\n') : [];

  for (const [key, value] of Object.entries(newMetadata)) {
    // Remove existing key if present
    lines = lines.filter(l => !l.startsWith(`${key}:`));
    lines.push(`${key}: ${JSON.stringify(value)}`);
  }

  return lines.join('\n');
}

// --- Main Logic ---
async function main() {
  try {
    const opts = parseArguments();

    // 1. Validate Inputs
    if (!existsSync(opts.main)) {
      throw new Error(`Main file not found: ${opts.main}`);
    }
    for (const app of opts.appendix) {
      if (!existsSync(app)) {
        throw new Error(`Appendix file not found: ${app}`);
      }
    }

    // 2. Read Main
    console.log(`Reading main: ${opts.main}`);
    let mainContent = readFileSync(opts.main, 'utf-8');
    let finalContent = "";
    let finalFrontmatter = "";

    // 3. Process Main Content
    if (opts.strategy === 'smart') {
      const { frontmatter, body } = extractFrontmatter(mainContent);
      finalFrontmatter = frontmatter || "";
      mainContent = body;

      // Handle Metadata Injection
      if (opts.metadata) {
        let metaObj: any = {};
        if (opts.metadata.trim().startsWith('{')) {
          // It's a raw JSON string
          metaObj = JSON.parse(opts.metadata);
        } else {
          // It's a file path - let Bun handle the parsing (supports .json, .yaml, .toml)
          // We need an absolute path or relative to cwd
          const metaPath = join(process.cwd(), opts.metadata);
          if (existsSync(metaPath)) {
            // Dynamic import returns a module. If it's a JSON/YAML file, the content is in 'default'
            const module = await import(metaPath);
            metaObj = module.default || module;
          } else {
            console.warn(`Warning: Metadata file not found: ${opts.metadata}`);
          }
        }

        if (Object.keys(metaObj).length > 0) {
          finalFrontmatter = mergeMetadata(finalFrontmatter, metaObj);
        }
      }

      // Reconstruct Main
      if (finalFrontmatter) {
        finalContent = `---\n${finalFrontmatter}\n---\n\n${mainContent}`;
      } else {
        finalContent = mainContent;
      }

    } else {
      // Simple Strategy
      finalContent = mainContent;
    }

    // 4. Append Appendices
    for (const app of opts.appendix) {
      console.log(`Appending: ${app}`);
      let appContent = readFileSync(app, 'utf-8');

      if (opts.strategy === 'smart') {
        const { body } = extractFrontmatter(appContent);
        appContent = body; // Strip frontmatter from appendix
      }

      finalContent += opts.separator + appContent;
    }

    // 5. Write Output
    const outDir = dirname(opts.out);
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    console.log(`Writing to: ${opts.out}`);
    writeFileSync(opts.out, finalContent, 'utf-8');

    console.log(`Success! Output size: ${finalContent.length} bytes.`);

  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
}

main();
