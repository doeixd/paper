#!/usr/bin/env bun
/**
 * Academic Reference Verification Script
 *
 * Automatically verifies and corrects academic references in references.md
 * using CrossRef, OpenLibrary, arXiv APIs, web search, and Claude CLI.
 *
 * Usage: bun run verify-references.ts [options]
 */

import { $ } from 'bun';
import { parseArgs } from 'util';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type ReferenceType =
  | 'journal-article'
  | 'book'
  | 'book-chapter'
  | 'arxiv-preprint'
  | 'other-preprint'
  | 'web-resource'
  | 'unknown';

interface Author {
  family: string;
  given?: string;
  literal?: string;  // For "Cogitate Consortium" etc.
}

interface Identifiers {
  doi?: string;
  isbn?: string[];
  arxivId?: string;
  url?: string;
  philpapersId?: string;
  ssrnId?: string;
  osfId?: string;
}

interface ParsedReference {
  originalText: string;
  lineNumber: number;
  type: ReferenceType;
  authors: Author[];
  year: string;
  title: string;
  identifiers: Identifiers;
  metadata: Record<string, string>;
}

type VerificationSource = 'crossref' | 'openlibrary' | 'arxiv' | 'web-search' | 'claude-cli';
type VerificationStatus = 'verified' | 'corrected' | 'failed' | 'skipped';

interface Correction {
  field: string;
  original: string;
  corrected: string;
  reason: string;
}

interface VerificationResult {
  source: VerificationSource;
  status: VerificationStatus;
  confidence: number;
  corrections?: Correction[];
  metadata?: Record<string, string>;
  rawResponse?: any;
}

interface CLIOptions {
  input: string;
  output?: string;
  backup: boolean;
  backupDir: string;
  autoCorrect: boolean;
  confidenceThreshold: number;
  reportPath: string;
  dryRun: boolean;
  skipClaude: boolean;
  verbose: boolean;
}

// ============================================================================
// REGEX PATTERNS
// ============================================================================

const PATTERNS = {
  DOI: /https?:\/\/doi\.org\/(10\.\d{4,}(?:\.\d+)*\/[^\s]+)/gi,
  ISBN: /ISBN\s+([\d-]+(?:,\s*[\d-]+)*)/gi,
  ARXIV: /arXiv[:\s](\d{4}\.\d{4,5})|arxiv\.org\/abs\/(\d{4}\.\d{4,5})/gi,
  PHILPAPERS: /philpapers\.org\/rec\/([A-Z0-9-]+)/i,
  SSRN: /ssrn\.com\/abstract=(\d+)|doi\.org\/10\.2139\/ssrn\.(\d+)/i,
  OSF: /osf\.io\/([a-z0-9]+)/i,
  URL: /(https?:\/\/[^\s]+)/gi,
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Rate limiter using token bucket algorithm
 */
class RateLimiter {
  private queue: number[] = [];
  private requestsPerSecond: number;
  private burstSize: number;

  constructor(requestsPerSecond: number, burstSize?: number) {
    this.requestsPerSecond = requestsPerSecond;
    this.burstSize = burstSize || Math.ceil(requestsPerSecond);
  }

  async wait(): Promise<void> {
    const now = Date.now();
    const windowStart = now - 1000;

    // Remove old timestamps
    this.queue = this.queue.filter(t => t > windowStart);

    // Check burst capacity
    if (this.queue.length >= this.burstSize) {
      const oldestRequest = this.queue[0];
      const waitTime = oldestRequest + 1000 - now;
      await Bun.sleep(waitTime);
      return this.wait();
    }

    // Check rate
    if (this.queue.length >= this.requestsPerSecond) {
      const interval = 1000 / this.requestsPerSecond;
      const timeSinceFirst = now - this.queue[0];
      const waitTime = Math.ceil(interval - timeSinceFirst);

      if (waitTime > 0) {
        await Bun.sleep(waitTime);
        return this.wait();
      }
    }

    this.queue.push(now);
  }
}

/**
 * Calculate Levenshtein distance between two strings
 */
function levenshtein(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Normalize string for comparison
 */
function normalizeString(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Check if two strings match with fuzzy matching
 */
function fuzzyMatch(s1: string, s2: string, threshold: number = 0.05): boolean {
  const n1 = normalizeString(s1);
  const n2 = normalizeString(s2);

  if (n1 === n2) return true;

  const distance = levenshtein(n1, n2);
  const maxLength = Math.max(n1.length, n2.length);
  return distance / maxLength < threshold;
}

/**
 * Retry function with exponential backoff
 */
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  initialDelay: number = 1000
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      if (attempt < maxRetries - 1) {
        const delay = initialDelay * Math.pow(2, attempt);
        console.warn(`  Retry ${attempt + 1}/${maxRetries} in ${delay}ms...`);
        await Bun.sleep(delay);
      }
    }
  }

  throw lastError!;
}

// ============================================================================
// REFERENCE PARSER
// ============================================================================

class ChicagoParser {
  parse(text: string, lineNumber: number = 0): ParsedReference {
    // Extract identifiers first
    const identifiers = this.extractIdentifiers(text);

    // Determine reference type
    const type = this.determineType(text, identifiers);

    // Extract basic metadata
    const authors = this.extractAuthors(text);
    const year = this.extractYear(text);
    const title = this.extractTitle(text);
    const metadata = this.extractMetadata(text, type);

    return {
      originalText: text,
      lineNumber,
      type,
      authors,
      year,
      title,
      identifiers,
      metadata
    };
  }

  private extractIdentifiers(text: string): Identifiers {
    const identifiers: Identifiers = {};

    // Extract DOI
    const doiMatch = text.match(PATTERNS.DOI);
    if (doiMatch) {
      // Remove URL prefix and trailing punctuation
      identifiers.doi = doiMatch[0]
        .replace(/https?:\/\/doi\.org\//, '')
        .replace(/[.,;:)\]]+$/, '');
    }

    // Extract ISBN (may have multiple)
    const isbnMatch = text.match(PATTERNS.ISBN);
    if (isbnMatch) {
      identifiers.isbn = isbnMatch[0]
        .replace(/ISBN\s+/i, '')
        .split(/[,\s]+/)
        .map(isbn => isbn.replace(/[-\s]/g, ''))
        .filter(Boolean);
    }

    // Extract arXiv ID
    text.replace(PATTERNS.ARXIV, (match, g1, g2) => {
      identifiers.arxivId = g1 || g2;
      return match;
    });

    // Extract PhilPapers ID
    const philpapersMatch = text.match(PATTERNS.PHILPAPERS);
    if (philpapersMatch) {
      identifiers.philpapersId = philpapersMatch[1];
    }

    // Extract SSRN ID
    const ssrnMatch = text.match(PATTERNS.SSRN);
    if (ssrnMatch) {
      identifiers.ssrnId = ssrnMatch[1] || ssrnMatch[2];
    }

    // Extract OSF ID
    const osfMatch = text.match(PATTERNS.OSF);
    if (osfMatch) {
      identifiers.osfId = osfMatch[1];
    }

    // Extract URL (first URL found)
    const urlMatch = text.match(PATTERNS.URL);
    if (urlMatch) {
      identifiers.url = urlMatch[0];
    }

    return identifiers;
  }

  private determineType(text: string, ids: Identifiers): ReferenceType {
    if (ids.arxivId) return 'arxiv-preprint';
    if (ids.doi && text.includes('*') && text.includes('"')) return 'journal-article';
    if (ids.isbn) return 'book';
    if (text.toLowerCase().includes('in *') && text.includes(', edited by')) return 'book-chapter';
    if (text.toLowerCase().includes('preprint')) return 'other-preprint';
    if (ids.url) return 'web-resource';
    return 'unknown';
  }

  private extractAuthors(text: string): Author[] {
    // Pattern: "Author(s). Year." at start
    const match = text.match(/^([^.]+)\.\s*(\d{4}|Forthcoming)\./);
    if (!match) {
      // Fallback: try to extract first word as family name
      const firstWord = text.split(/\s+/)[0];
      if (firstWord && firstWord.length > 0) {
        return [{ family: firstWord.replace(/[^a-zA-Z-]/g, ''), given: '' }];
      }
      return [];
    }

    const authorString = match[1].trim();
    if (!authorString) return [];

    // Handle organizational authors (e.g., "Cogitate Consortium", "MLPerf Association")
    if (!authorString.includes(',') && authorString.split(/\s+/).length <= 4) {
      return [{ family: '', given: '', literal: authorString }];
    }

    // Parse author list
    const authors: Author[] = [];

    // Handle "et al."
    if (authorString.includes('et al.')) {
      const firstAuthor = authorString.split(',')[0].trim();
      if (firstAuthor) {
        authors.push(this.parseAuthorName(firstAuthor));
      }
      return authors.length > 0 ? authors : [{ family: 'Unknown', given: '' }];
    }

    // Split by "and" or "&"
    const authorParts = authorString.split(/,?\s+(?:and|&)\s+/);

    for (const part of authorParts) {
      const cleanPart = part.replace(/,$/, '').trim();
      if (cleanPart && cleanPart.length > 0) {
        authors.push(this.parseAuthorName(cleanPart));
      }
    }

    return authors.length > 0 ? authors : [{ family: 'Unknown', given: '' }];
  }

  private parseAuthorName(name: string): Author {
    // Pattern: "Family, Given" or "Given Family"
    const commaSplit = name.split(',').map(s => s.trim());

    if (commaSplit.length === 2 && commaSplit[0]) {
      return {
        family: commaSplit[0],
        given: commaSplit[1]
      };
    } else if (commaSplit.length > 2 && commaSplit[0]) {
      // Handle cases like "Author, First, Jr."
      return {
        family: commaSplit[0],
        given: commaSplit.slice(1).join(', ')
      };
    }

    // Try to split by last space
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return {
        family: parts[parts.length - 1],
        given: parts.slice(0, -1).join(' ')
      };
    }

    return { family: name || 'Unknown', given: '' };
  }

  private extractYear(text: string): string {
    const match = text.match(/\b(\d{4}|Forthcoming)\b/);
    return match ? match[1] : '';
  }

  private extractTitle(text: string): string {
    // Try quoted title first (articles)
    const quotedMatch = text.match(/"([^"]+)"/);
    if (quotedMatch) return quotedMatch[1];

    // Try italicized title (books)
    const italicMatch = text.match(/\*([^*]+)\*/);
    if (italicMatch) return italicMatch[1];

    return '';
  }

  private extractMetadata(text: string, type: ReferenceType): Record<string, string> {
    const metadata: Record<string, string> = {};

    if (type === 'journal-article') {
      // Extract journal name
      const journalMatch = text.match(/\*([^*]+)\*/);
      if (journalMatch) metadata.journal = journalMatch[1];

      // Extract volume/issue/pages
      const volMatch = text.match(/(\d+)\((\d+)\):\s*(\d+(?:[-–]\d+)?)/);
      if (volMatch) {
        metadata.volume = volMatch[1];
        metadata.issue = volMatch[2];
        metadata.pages = volMatch[3];
      }
    } else if (type === 'book') {
      // Extract publisher info
      const pubMatch = text.match(/([^:]+):\s*([^.]+)\.\s*ISBN/);
      if (pubMatch) {
        metadata.publisherLocation = pubMatch[1].trim();
        metadata.publisher = pubMatch[2].trim();
      }
    }

    return metadata;
  }
}

// ============================================================================
// API VERIFIERS
// ============================================================================

/**
 * CrossRef API Verifier
 */
class CrossRefVerifier {
  private baseUrl = 'https://api.crossref.org/works/';
  private rateLimiter = new RateLimiter(10); // 10 req/sec

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (!ref.identifiers.doi) {
      return { source: 'crossref', status: 'skipped', confidence: 0 };
    }

    // Validate DOI format
    if (!ref.identifiers.doi.match(/^10\.\d{4,}/)) {
      if (this.verbose) console.error(`  Invalid DOI format: ${ref.identifiers.doi}`);
      return { source: 'crossref', status: 'failed', confidence: 0 };
    }

    await this.rateLimiter.wait();

    try {
      const result = await retryWithBackoff(async () => {
        const url = `${this.baseUrl}${encodeURIComponent(ref.identifiers.doi!)}`;
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'ReferenceVerifier/1.0 (mailto:research@example.com)'
          },
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });

        if (!response.ok) {
          if (response.status === 404) {
            return null; // DOI not found
          }
          if (response.status === 429) {
            throw new Error('Rate limited - will retry');
          }
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        if (!data || !data.message) {
          throw new Error('Invalid response format');
        }
        return data.message;
      }, 3, 2000); // 3 retries, 2 second initial delay

      if (!result) {
        return { source: 'crossref', status: 'failed', confidence: 0 };
      }

      return this.compareMetadata(ref, result);

    } catch (error) {
      const errorMsg = (error as Error).message;
      if (this.verbose || errorMsg.includes('timeout')) {
        console.error(`  CrossRef error: ${errorMsg}`);
      }
      return { source: 'crossref', status: 'failed', confidence: 0 };
    }
  }

  private verbose = false;

  private compareMetadata(ref: ParsedReference, apiData: any): VerificationResult {
    const corrections: Correction[] = [];

    // Compare title
    const apiTitle = apiData.title?.[0];
    if (apiTitle && !fuzzyMatch(ref.title, apiTitle)) {
      corrections.push({
        field: 'title',
        original: ref.title,
        corrected: apiTitle,
        reason: 'CrossRef has different title'
      });
    }

    // Compare year
    const apiYear = apiData.published?.['date-parts']?.[0]?.[0]?.toString();
    if (apiYear && apiYear !== ref.year) {
      corrections.push({
        field: 'year',
        original: ref.year,
        corrected: apiYear,
        reason: 'CrossRef has different year'
      });
    }

    // Compare authors
    const apiAuthors = apiData.author || [];
    if (apiAuthors.length > 0 && ref.authors.length > 0) {
      const firstApiAuthor = apiAuthors[0];
      const firstRefAuthor = ref.authors[0];

      if (firstApiAuthor.family && firstRefAuthor.family) {
        if (!fuzzyMatch(firstApiAuthor.family, firstRefAuthor.family)) {
          corrections.push({
            field: 'authors',
            original: firstRefAuthor.family,
            corrected: firstApiAuthor.family,
            reason: 'CrossRef has different first author family name'
          });
        }
      }
    }

    return {
      source: 'crossref',
      status: corrections.length > 0 ? 'corrected' : 'verified',
      confidence: 0.95,
      corrections: corrections.length > 0 ? corrections : undefined,
      metadata: {
        title: apiTitle,
        year: apiYear,
        doi: ref.identifiers.doi!
      },
      rawResponse: apiData
    };
  }
}

/**
 * OpenLibrary API Verifier
 */
class OpenLibraryVerifier {
  private baseUrl = 'https://openlibrary.org/api/books';
  private rateLimiter = new RateLimiter(2); // 2 req/sec

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (!ref.identifiers.isbn || ref.identifiers.isbn.length === 0) {
      return { source: 'openlibrary', status: 'skipped', confidence: 0 };
    }

    await this.rateLimiter.wait();

    try {
      // Try each ISBN
      for (const isbn of ref.identifiers.isbn) {
        const result = await retryWithBackoff(async () => {
          const url = `${this.baseUrl}?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`OpenLibrary API error: ${response.status}`);
          }

          const data = await response.json();
          return data[`ISBN:${isbn}`];
        });

        if (result) {
          return this.compareMetadata(ref, result, isbn);
        }
      }

      return { source: 'openlibrary', status: 'failed', confidence: 0 };

    } catch (error) {
      console.error(`  OpenLibrary error: ${(error as Error).message}`);
      return { source: 'openlibrary', status: 'failed', confidence: 0 };
    }
  }

  private compareMetadata(ref: ParsedReference, apiData: any, verifiedISBN: string): VerificationResult {
    const corrections: Correction[] = [];

    const apiTitle = apiData.title;
    const apiYear = apiData.publish_date?.match(/\d{4}/)?.[0];

    if (apiTitle && !fuzzyMatch(ref.title, apiTitle)) {
      corrections.push({
        field: 'title',
        original: ref.title,
        corrected: apiTitle,
        reason: 'OpenLibrary has different title'
      });
    }

    if (apiYear && apiYear !== ref.year) {
      corrections.push({
        field: 'year',
        original: ref.year,
        corrected: apiYear,
        reason: 'OpenLibrary has different year'
      });
    }

    return {
      source: 'openlibrary',
      status: corrections.length > 0 ? 'corrected' : 'verified',
      confidence: 0.85,
      corrections: corrections.length > 0 ? corrections : undefined,
      metadata: {
        title: apiTitle,
        year: apiYear,
        verifiedISBN
      }
    };
  }
}

/**
 * arXiv API Verifier
 */
class ArxivVerifier {
  private baseUrl = 'http://export.arxiv.org/api/query';
  private rateLimiter = new RateLimiter(0.3); // 1 req per 3 seconds

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (!ref.identifiers.arxivId) {
      return { source: 'arxiv', status: 'skipped', confidence: 0 };
    }

    await this.rateLimiter.wait();

    try {
      const result = await retryWithBackoff(async () => {
        const url = `${this.baseUrl}?id_list=${ref.identifiers.arxivId}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`arXiv API error: ${response.status}`);
        }

        const xml = await response.text();
        return this.parseArxivXML(xml);
      });

      if (!result) {
        return { source: 'arxiv', status: 'failed', confidence: 0 };
      }

      return this.compareMetadata(ref, result);

    } catch (error) {
      console.error(`  arXiv error: ${(error as Error).message}`);
      return { source: 'arxiv', status: 'failed', confidence: 0 };
    }
  }

  private parseArxivXML(xml: string): any {
    // Simple XML parsing for arXiv
    const titleMatch = xml.match(/<title>([^<]+)<\/title>/);
    const publishedMatch = xml.match(/<published>([^<]+)<\/published>/);

    if (!titleMatch) return null;

    return {
      title: titleMatch[1].trim(),
      published: publishedMatch ? publishedMatch[1] : null,
      year: publishedMatch ? publishedMatch[1].match(/\d{4}/)?.[0] : null
    };
  }

  private compareMetadata(ref: ParsedReference, apiData: any): VerificationResult {
    const corrections: Correction[] = [];

    if (apiData.title && !fuzzyMatch(ref.title, apiData.title)) {
      corrections.push({
        field: 'title',
        original: ref.title,
        corrected: apiData.title,
        reason: 'arXiv has different title'
      });
    }

    if (apiData.year && apiData.year !== ref.year) {
      corrections.push({
        field: 'year',
        original: ref.year,
        corrected: apiData.year,
        reason: 'arXiv has different year'
      });
    }

    return {
      source: 'arxiv',
      status: corrections.length > 0 ? 'corrected' : 'verified',
      confidence: 0.9,
      corrections: corrections.length > 0 ? corrections : undefined,
      metadata: apiData
    };
  }
}

/**
 * Web Search Verifier (URL validation)
 */
class WebSearchVerifier {
  private rateLimiter = new RateLimiter(1);

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (!ref.identifiers.url) {
      return { source: 'web-search', status: 'skipped', confidence: 0 };
    }

    await this.rateLimiter.wait();

    try {
      const result = await retryWithBackoff(async () => {
        const response = await fetch(ref.identifiers.url!, {
          method: 'HEAD',
          redirect: 'follow'
        });
        return response.ok;
      }, 2, 500); // Only 2 retries for HEAD requests

      if (result) {
        return {
          source: 'web-search',
          status: 'verified',
          confidence: 0.7,
          metadata: { validatedUrl: ref.identifiers.url }
        };
      }

      return { source: 'web-search', status: 'failed', confidence: 0 };

    } catch (error) {
      return { source: 'web-search', status: 'failed', confidence: 0 };
    }
  }
}

/**
 * Claude CLI Verifier
 */
class ClaudeCLIVerifier {
  private rateLimiter = new RateLimiter(0.2); // 1 req per 5 seconds

  async research(ref: ParsedReference): Promise<VerificationResult> {
    await this.rateLimiter.wait();

    const prompt = this.constructPrompt(ref);

    try {
      // Use Bun shell to invoke Claude CLI
      const result = await $`claude -p ${prompt}`.text();
      const parsed = this.parseClaudeResponse(result);

      return {
        source: 'claude-cli',
        status: parsed.found ? 'verified' : 'failed',
        confidence: parsed.confidence || 0.5,
        corrections: parsed.corrections,
        metadata: parsed.metadata,
        rawResponse: result
      };

    } catch (error) {
      console.error(`  Claude CLI error: ${(error as Error).message}`);
      return { source: 'claude-cli', status: 'failed', confidence: 0 };
    }
  }

  private constructPrompt(ref: ParsedReference): string {
    return `You are verifying an academic reference. Please research this citation using web search and return ONLY a JSON response with this exact structure:

{
  "found": true/false,
  "confidence": 0.0-1.0,
  "corrections": [
    {"field": "title", "original": "...", "corrected": "...", "reason": "..."}
  ],
  "metadata": {
    "title": "...",
    "authors": "...",
    "year": "...",
    "doi": "...",
    "url": "..."
  }
}

Reference to verify:
${ref.originalText}

Verify:
- Are the author names correct?
- Is the year correct?
- Is the title correct?
- Can you find a DOI or authoritative URL?

If you cannot find this reference, set "found": false. Return ONLY the JSON, no other text.`;
  }

  private parseClaudeResponse(response: string): any {
    try {
      // Extract JSON from response
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        return { found: false, confidence: 0 };
      }

      return JSON.parse(jsonMatch[0]);
    } catch {
      return { found: false, confidence: 0 };
    }
  }
}

// ============================================================================
// VERIFICATION ORCHESTRATOR
// ============================================================================

class VerificationOrchestrator {
  private crossref = new CrossRefVerifier();
  private openlibrary = new OpenLibraryVerifier();
  private arxiv = new ArxivVerifier();
  private webSearch = new WebSearchVerifier();
  private claudeCLI = new ClaudeCLIVerifier();
  private skipClaude: boolean;

  constructor(skipClaude: boolean = false) {
    this.skipClaude = skipClaude;
  }

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    const attempts: VerificationResult[] = [];

    // Try each verifier in sequence
    const verifiers = [
      { name: 'CrossRef', fn: () => this.crossref.verify(ref) },
      { name: 'arXiv', fn: () => this.arxiv.verify(ref) },
      { name: 'OpenLibrary', fn: () => this.openlibrary.verify(ref) },
      { name: 'Web Search', fn: () => this.webSearch.verify(ref) },
    ];

    if (!this.skipClaude) {
      verifiers.push({ name: 'Claude CLI', fn: () => this.claudeCLI.research(ref) });
    }

    for (const verifier of verifiers) {
      try {
        const result = await verifier.fn();
        attempts.push(result);

        // Success - return immediately
        if (result.status === 'verified' || result.status === 'corrected') {
          return result;
        }

      } catch (error) {
        console.error(`  ${verifier.name} error:`, error);
      }
    }

    // All failed - return best attempt
    const best = attempts.reduce((a, b) =>
      a.confidence > b.confidence ? a : b,
      { source: 'crossref' as const, status: 'failed' as const, confidence: 0 }
    );

    return best;
  }
}

// ============================================================================
// BACKUP MANAGER
// ============================================================================

class BackupManager {
  constructor(private backupDir: string) {}

  async createBackup(filePath: string): Promise<string> {
    // Create backup directory
    await $`mkdir -p ${this.backupDir}`.quiet();

    // Generate backup filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const basename = filePath.split(/[/\\]/).pop();
    const backupPath = `${this.backupDir}/${basename}.${timestamp}.bak`;

    // Copy file
    await $`cp ${filePath} ${backupPath}`.quiet();

    console.log(`\nBackup created: ${backupPath}`);
    return backupPath;
  }
}

// ============================================================================
// REPORTERS
// ============================================================================

class ConsoleReporter {
  private totalRefs = 0;
  private processed = 0;
  private verified = 0;
  private corrected = 0;
  private failed = 0;

  start(total: number) {
    this.totalRefs = total;
    console.log(`\nStarting verification of ${total} references...\n`);
  }

  progress(ref: ParsedReference, result: VerificationResult) {
    this.processed++;

    const statusSymbol: Record<VerificationStatus, string> = {
      'verified': '✓',
      'corrected': '✎',
      'failed': '✗',
      'skipped': '⊘'
    };

    const color: Record<VerificationStatus, string> = {
      'verified': '\x1b[32m',  // green
      'corrected': '\x1b[33m', // yellow
      'failed': '\x1b[31m',    // red
      'skipped': '\x1b[90m'    // gray
    };

    const reset = '\x1b[0m';
    const symbol = statusSymbol[result.status] || '?';
    const col = color[result.status] || '';

    const firstAuthor = ref.authors[0]?.family || ref.authors[0]?.literal || 'Unknown';

    console.log(
      `[${this.processed}/${this.totalRefs}] ${col}${symbol}${reset} ` +
      `${firstAuthor} ${ref.year} (${result.source})`
    );

    if (result.status === 'corrected' && result.corrections) {
      result.corrections.forEach(c => {
        console.log(`  └─ ${c.field}: ${c.reason}`);
      });
    }

    // Update counters
    if (result.status === 'verified') this.verified++;
    if (result.status === 'corrected') this.corrected++;
    if (result.status === 'failed') this.failed++;
  }

  summary() {
    console.log('\n' + '='.repeat(60));
    console.log('VERIFICATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total references: ${this.totalRefs}`);
    console.log(`✓ Verified:       ${this.verified}`);
    console.log(`✎ Corrected:      ${this.corrected}`);
    console.log(`✗ Failed:         ${this.failed}`);
    console.log(`  Skipped:        ${this.totalRefs - this.processed}`);
    console.log('='.repeat(60) + '\n');
  }
}

class FileReporter {
  private unverifiableRefs: Array<{
    ref: ParsedReference;
    result: VerificationResult;
  }> = [];

  addUnverifiable(ref: ParsedReference, result: VerificationResult) {
    this.unverifiableRefs.push({ ref, result });
  }

  async generateReport(outputPath: string): Promise<void> {
    if (this.unverifiableRefs.length === 0) {
      console.log('✓ All references verified successfully!');
      return;
    }

    const timestamp = new Date().toISOString();
    let report = `# Unverifiable References Report\n\n`;
    report += `Generated: ${timestamp}\n`;
    report += `Total unverifiable: ${this.unverifiableRefs.length}\n\n`;
    report += `---\n\n`;

    this.unverifiableRefs.forEach(({ ref, result }, index) => {
      const firstAuthor = ref.authors[0]?.family || ref.authors[0]?.literal || 'Unknown';
      report += `## ${index + 1}. ${firstAuthor} ${ref.year}\n\n`;
      report += `**Original Text:**\n\`\`\`\n${ref.originalText}\n\`\`\`\n\n`;
      report += `**Line Number:** ${ref.lineNumber}\n\n`;
      report += `**Verification Status:** ${result.status} (confidence: ${result.confidence})\n\n`;

      if (result.corrections && result.corrections.length > 0) {
        report += `**Suggested Corrections:**\n`;
        result.corrections.forEach(c => {
          report += `- ${c.field}: ${c.reason}\n`;
        });
        report += `\n`;
      }

      report += `**Action Required:**\n`;
      report += `- [ ] Manual verification needed\n`;
      report += `- [ ] Check if reference exists\n`;
      report += `- [ ] Update or remove from references.md\n\n`;
      report += `---\n\n`;
    });

    await Bun.write(outputPath, report);
    console.log(`\nUnverifiable references report: ${outputPath}`);
  }
}

// ============================================================================
// MAIN VERIFIER
// ============================================================================

class ReferenceVerifier {
  private options: CLIOptions;
  private parser = new ChicagoParser();
  private verifier: VerificationOrchestrator;
  private consoleReporter = new ConsoleReporter();
  private fileReporter = new FileReporter();
  private backup: BackupManager;

  constructor(options: CLIOptions) {
    this.options = options;
    this.verifier = new VerificationOrchestrator(options.skipClaude);
    this.backup = new BackupManager(options.backupDir);
  }

  async run() {
    // Check if input file exists
    const inputFile = Bun.file(this.options.input);
    if (!(await inputFile.exists())) {
      throw new Error(`Input file not found: ${this.options.input}`);
    }

    // Read input file
    const inputText = await inputFile.text();
    if (!inputText || inputText.trim().length === 0) {
      throw new Error(`Input file is empty: ${this.options.input}`);
    }

    const lines = inputText.split('\n');

    // Parse references
    const references = this.parseReferences(lines);

    if (references.length === 0) {
      console.warn('Warning: No valid references found in input file');
      console.log('Make sure references are in Chicago style format: "Author. Year. Title..."');
      return;
    }

    console.log(`Found ${references.length} references to verify`);
    this.consoleReporter.start(references.length);

    // Create backup
    if (this.options.backup && !this.options.dryRun) {
      await this.backup.createBackup(this.options.input);
    }

    // Verify each reference
    const results: Array<{
      ref: ParsedReference;
      verification: VerificationResult;
    }> = [];

    for (const ref of references) {
      const verification = await this.verifier.verify(ref);
      this.consoleReporter.progress(ref, verification);

      results.push({ ref, verification });

      // Track unverifiable
      if (verification.status === 'failed') {
        this.fileReporter.addUnverifiable(ref, verification);
      }
    }

    // Generate output
    if (!this.options.dryRun) {
      const outputPath = this.options.output || this.options.input;
      const outputText = this.reconstructFile(lines, results);

      // Atomic write
      const tempPath = `${outputPath}.tmp`;
      await Bun.write(tempPath, outputText);
      await $`mv ${tempPath} ${outputPath}`.quiet();

      console.log(`\nWrote verified references to: ${outputPath}`);
    } else {
      console.log('\n[DRY RUN] No files modified');
      this.showChanges(results);
    }

    // Generate reports
    await this.fileReporter.generateReport(this.options.reportPath);
    this.consoleReporter.summary();
  }

  private parseReferences(lines: string[]): ParsedReference[] {
    const references: ParsedReference[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Skip empty, headers, comments
      if (!line || line.startsWith('#') || line.startsWith('<!--')) {
        continue;
      }

      try {
        const ref = this.parser.parse(line, i + 1);
        references.push(ref);
      } catch (error) {
        if (this.options.verbose) {
          console.warn(`Warning: Could not parse line ${i + 1}`);
        }
      }
    }

    return references;
  }

  private reconstructFile(
    originalLines: string[],
    results: Array<{ ref: ParsedReference; verification: VerificationResult }>
  ): string {
    // For now, keep original text (corrections applied in future iteration)
    return originalLines.join('\n');
  }

  private showChanges(results: Array<{ ref: ParsedReference; verification: VerificationResult }>) {
    const changes = results.filter(r => r.verification.corrections && r.verification.corrections.length > 0);

    if (changes.length === 0) {
      console.log('\nNo changes needed');
      return;
    }

    console.log('\n' + '='.repeat(60));
    console.log('POTENTIAL CHANGES');
    console.log('='.repeat(60) + '\n');

    changes.forEach(({ ref, verification }) => {
      console.log(`Line ${ref.lineNumber}:`);
      verification.corrections?.forEach(c => {
        console.log(`  ${c.field}: "${c.original}" → "${c.corrected}"`);
        console.log(`  Reason: ${c.reason}`);
      });
      console.log('');
    });
  }
}

// ============================================================================
// CLI
// ============================================================================

function printHelp() {
  console.log(`
Academic Reference Verifier

Usage: bun run verify-references.ts [options]

Options:
  -i, --input <file>              Input references file (default: ./references.md)
  -o, --output <file>             Output file (default: overwrites input)
  -b, --[no-]backup               Create backup before modifying (default: true)
  --backup-dir <dir>              Backup directory (default: ./backups)
  --confidence-threshold <num>    Minimum confidence for auto-correction (default: 0.7)
  --report-path <file>            Unverifiable references report (default: ./unverifiable-references.md)
  --dry-run                       Show what would be changed without modifying files
  --skip-claude                   Skip Claude CLI fallback (faster, less comprehensive)
  -v, --verbose                   Verbose logging
  -h, --help                      Show this help message

Examples:
  bun run verify-references.ts                           # Verify references.md
  bun run verify-references.ts --dry-run                 # Preview changes
  bun run verify-references.ts --skip-claude             # Skip Claude CLI (faster)
  bun run verify-references.ts -i custom.md -o fixed.md  # Custom input/output
  `);
}

async function main() {
  const { values } = parseArgs({
    options: {
      input: { type: 'string', short: 'i', default: './references.md' },
      output: { type: 'string', short: 'o' },
      backup: { type: 'boolean', short: 'b', default: true },
      'backup-dir': { type: 'string', default: './backups' },
      'confidence-threshold': { type: 'string', default: '0.7' },
      'report-path': { type: 'string', default: './unverifiable-references.md' },
      'dry-run': { type: 'boolean', default: false },
      'skip-claude': { type: 'boolean', default: false },
      verbose: { type: 'boolean', short: 'v', default: false },
      help: { type: 'boolean', short: 'h' }
    }
  });

  if (values.help) {
    printHelp();
    process.exit(0);
  }

  const options: CLIOptions = {
    input: values.input as string,
    output: values.output as string | undefined,
    backup: values.backup as boolean,
    backupDir: values['backup-dir'] as string,
    autoCorrect: true,
    confidenceThreshold: parseFloat(values['confidence-threshold'] as string),
    reportPath: values['report-path'] as string,
    dryRun: values['dry-run'] as boolean,
    skipClaude: values['skip-claude'] as boolean,
    verbose: values.verbose as boolean
  };

  const verifier = new ReferenceVerifier(options);
  await verifier.run();
}

// Run if executed directly
if (import.meta.main) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}
