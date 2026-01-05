
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
  insertBefore?: string;
  insertAfter?: string;
  placeholder?: string;
  refsFile?: string;
  moveRefsToEnd: boolean;
}

// --- Argument Parsing ---
function parseArguments(): AssembleOptions {
  const { values } = parseArgs({
    args: Bun.argv.slice(2),
    options: {
      main: { type: 'string' },
      appendix: { type: 'string', multiple: true },
      out: { type: 'string' },
      strategy: { type: 'string', default: 'simple' },
      metadata: { type: 'string' },
      separator: { type: 'string', default: '\n\n---\n\n' },
      'insert-before': { type: 'string' },
      'insert-after': { type: 'string' },
      'placeholder': { type: 'string' },
      'refs-file': { type: 'string' },
      'move-refs-to-end': { type: 'boolean', default: false },
    },
    strict: true,
    allowPositionals: true,
  });

  if (!values.main || !values.out) {
    console.error("Error: --main and --out are required arguments.");
    console.error("Usage: bun scripts/assemble_paper.ts --main <path> --out <path> [--appendix <path>...] [--strategy simple|smart]");
    process.exit(1);
  }

  return {
    main: values.main,
    appendix: values.appendix || [],
    out: values.out,
    strategy: (values.strategy as 'simple' | 'smart') || 'simple',
    metadata: values.metadata,
    separator: values.separator || '\n\n---\n\n',
    insertBefore: values['insert-before'],
    insertAfter: values['insert-after'],
    placeholder: values['placeholder'],
    refsFile: values['refs-file'],
    moveRefsToEnd: !!values['move-refs-to-end']
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

// --- Reference Helpers ---
const REF_HEADERS = [/^#+ References/mi, /^#+ Bibliography/mi, /^#+ Works Cited/mi];

function extractReferences(content: string): { body: string; references: string } {
  for (const regex of REF_HEADERS) {
    const match = content.match(regex);
    if (match && match.index !== undefined) {
      return {
        body: content.slice(0, match.index).trimEnd(),
        references: "\n\n" + content.slice(match.index).trim()
      };
    }
  }
  return { body: content, references: "" };
}

// --- Insertion Helpers ---
function splitAtInsertionPoint(body: string, opts: AssembleOptions): { prefix: string; suffix: string } {
  // 1. Placeholder check
  if (opts.placeholder) {
    const index = body.indexOf(opts.placeholder);
    if (index !== -1) {
      return {
        prefix: body.slice(0, index).trimEnd(),
        suffix: "\n\n" + body.slice(index + opts.placeholder.length).trim()
      };
    }
    console.warn(`Warning: Placeholder "${opts.placeholder}" not found.`);
  }

  // 2. Insert Before
  if (opts.insertBefore) {
    const index = body.indexOf(opts.insertBefore);
    if (index !== -1) {
      return {
        prefix: body.slice(0, index).trimEnd(),
        suffix: "\n\n" + body.slice(index).trim()
      };
    }
    console.warn(`Warning: Insert point (before) "${opts.insertBefore}" not found.`);
  }

  // 3. Insert After
  if (opts.insertAfter) {
    const index = body.indexOf(opts.insertAfter);
    if (index !== -1) {
      const endOfLine = body.indexOf('\n', index);
      const splitPoint = endOfLine === -1 ? body.length : endOfLine;
      return {
        prefix: body.slice(0, splitPoint).trimEnd(),
        suffix: "\n\n" + body.slice(splitPoint).trim()
      };
    }
    console.warn(`Warning: Insert point (after) "${opts.insertAfter}" not found.`);
  }

  // Default: End of body
  return { prefix: body.trimEnd(), suffix: "" };
}

function mergeMetadata(originalYaml: string | null, newMetadata: any): string {
  let lines = originalYaml ? originalYaml.split('\n') : [];

  for (const [key, value] of Object.entries(newMetadata)) {
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
    if (!existsSync(opts.main)) throw new Error(`Main file not found: ${opts.main}`);
    for (const app of opts.appendix) {
      if (!existsSync(app)) throw new Error(`Appendix file not found: ${app}`);
    }
    if (opts.refsFile && !existsSync(opts.refsFile)) {
      throw new Error(`References file not found: ${opts.refsFile}`);
    }

    // 2. Read Main and Extract Components
    console.log(`Reading main: ${opts.main}`);
    let { frontmatter, body } = extractFrontmatter(readFileSync(opts.main, 'utf-8'));

    let references = "";
    if (opts.moveRefsToEnd) {
      const extracted = extractReferences(body);
      body = extracted.body;
      references = extracted.references;
    }

    // 3. Handle Metadata Injection (if smart)
    if (opts.strategy === 'smart' && opts.metadata) {
      let metaObj: any = {};
      if (opts.metadata.trim().startsWith('{')) {
        metaObj = JSON.parse(opts.metadata);
      } else {
        const metaPath = join(process.cwd(), opts.metadata);
        if (existsSync(metaPath)) {
          const module = await import(metaPath);
          metaObj = module.default || module;
        } else {
          console.warn(`Warning: Metadata file not found: ${opts.metadata}`);
        }
      }
      if (Object.keys(metaObj).length > 0) {
        frontmatter = mergeMetadata(frontmatter, metaObj);
      }
    }

    // 4. Assemble Appendices
    let appendicesContent = "";
    for (const app of opts.appendix) {
      console.log(`Processing appendix: ${app}`);
      let appContent = readFileSync(app, 'utf-8');
      if (opts.strategy === 'smart') {
        const { body: appBody } = extractFrontmatter(appContent);
        appContent = appBody;
      }
      appendicesContent += (appendicesContent ? opts.separator : "") + appContent;
    }

    // 5. Determine Insertion Point
    const { prefix, suffix } = splitAtInsertionPoint(body, opts);

    // 6. Handle External References
    if (opts.refsFile) {
      console.log(`Reading external references: ${opts.refsFile}`);
      const extRefs = readFileSync(opts.refsFile, 'utf-8');
      const { body: refBody } = extractFrontmatter(extRefs);
      references = (references ? references + "\n\n" : "\n\n") + refBody.trim();
    }

    // 7. Reconstruct Content
    let finalContent = "";
    if (frontmatter) finalContent += `---\n${frontmatter}\n---\n\n`;

    finalContent += prefix;
    if (appendicesContent) {
      finalContent += opts.separator + appendicesContent;
    }
    if (suffix) finalContent += suffix;
    if (references) finalContent += references;

    // 8. Write Output
    const outDir = dirname(opts.out);
    if (outDir && outDir !== "." && !existsSync(outDir)) {
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
