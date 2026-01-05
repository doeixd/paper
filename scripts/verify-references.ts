#!/usr/bin/env bun
/**
 * Academic Reference Verification Script
 *
 * Automatically verifies and corrects academic references in references.md
 * using CrossRef, OpenLibrary, arXiv APIs, web search, and Claude CLI.
 *
 * Usage: bun run scripts/verify-references.ts [options]
 */

import { $ } from 'bun';
import { parseArgs } from 'util';
import { rename } from 'fs/promises';

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
  exportJson?: string;
  clearCache: boolean;
  noCache: boolean;
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

    // Extract URL (first URL found, but not DOI URLs)
    const urlMatch = text.match(PATTERNS.URL);
    if (urlMatch && !urlMatch[0].includes('doi.org')) {
      identifiers.url = urlMatch[0].replace(/[.,;:)\]]+$/, ''); // Remove trailing punctuation
    }

    return identifiers;
  }

  private determineType(text: string, ids: Identifiers): ReferenceType {
    if (ids.arxivId) return 'arxiv-preprint';
    if (ids.doi) {
      // Check if it's a journal article (has quotes and asterisks)
      if (text.includes('"') && text.includes('*')) return 'journal-article';
      // DOI could also be for books, chapters, etc.
      if (text.toLowerCase().includes('in ') && text.includes('edited by')) return 'book-chapter';
      if (text.includes('*') && !text.includes('"')) return 'book';
      return 'journal-article'; // Default for DOI
    }
    if (ids.isbn) return 'book';
    if (text.toLowerCase().includes('in ') && text.toLowerCase().includes('edited by')) return 'book-chapter';
    if (text.toLowerCase().includes('preprint') || text.toLowerCase().includes('working paper')) return 'other-preprint';
    if (ids.url && !ids.doi) return 'web-resource';
    if (ids.ssrnId) return 'other-preprint';
    if (ids.philpapersId) return 'web-resource';
    return 'unknown';
  }

  private extractAuthors(text: string): Author[] {
    // Pattern: "Author(s). Year." at start
    const match = text.match(/^(.*?)\.\s*(\d{4}|Forthcoming)\./);
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

    // Handle "et al." - check this first before comma processing
    if (authorString.toLowerCase().includes('et al')) {
      const beforeEtAl = authorString.split(/\s+et\s+al/i)[0].trim();
      if (beforeEtAl) {
        authors.push(this.parseAuthorName(beforeEtAl));
      }
      return authors.length > 0 ? authors : [{ family: 'Unknown', given: '' }];
    }

    // Handle "and"/"&" connections by replacing with comma
    let processedString = authorString.replace(/,?\s+(?:and|&)\s+/g, ', ');

    // Split by comma and clean up
    const rawParts = processedString.split(',').map(s => s.trim()).filter(s => s.length > 0);

    // Process parts, combining family,given pairs
    const authorParts: string[] = [];
    for (let i = 0; i < rawParts.length; i++) {
      const part = rawParts[i].trim();

      // Skip empty parts
      if (!part) continue;

      // Check if this is a suffix for the previous author
      if (i > 0 && (part === 'Jr.' || part === 'Sr.' || part === 'III' || part === 'II' || part === 'IV' || part === 'V')) {
        // Append suffix to last author part
        if (authorParts.length > 0) {
          authorParts[authorParts.length - 1] += ' ' + part;
        }
        continue;
      }

      // Check if this is an editor designation
      if (part.toLowerCase() === 'ed.' || part.toLowerCase() === 'eds.' || part.toLowerCase() === 'ed' || part.toLowerCase() === 'eds') {
        continue; // Skip editor designations
      }

      // If this part contains a comma, it's already a complete author name
      if (part.includes(',')) {
        authorParts.push(part);
      } else {
        // Check if next part exists and doesn't contain comma (likely a given name)
        if (i + 1 < rawParts.length && !rawParts[i + 1].includes(',')) {
          const nextPart = rawParts[i + 1].trim();
          // Skip if next part is editor designation
          if (nextPart.toLowerCase() === 'ed.' || nextPart.toLowerCase() === 'eds.' || nextPart.toLowerCase() === 'ed' || nextPart.toLowerCase() === 'eds') {
            authorParts.push(part); // Just add current part
            i++; // Skip the editor part
          } else {
            // Combine as "Family, Given"
            authorParts.push(`${part}, ${nextPart}`);
            i++; // Skip the next part as it's been consumed
          }
        } else {
          // Standalone name (could be given name first or single name)
          authorParts.push(part);
        }
      }
    }

    // Parse each author part
    for (const part of authorParts) {
      authors.push(this.parseAuthorName(part));
    }

    return authors.length > 0 ? authors : [{ family: 'Unknown', given: '' }];
  }

  private parseAuthorName(name: string): Author {
    const cleanName = name.trim();

    // Handle suffixes like "Jr.", "Sr.", "III", etc.
    const suffixMatch = cleanName.match(/^(.+?)\s+(Jr\.?|Sr\.?|III?|IV|V)$/i);
    let baseName = cleanName;
    let suffix = '';

    if (suffixMatch) {
      baseName = suffixMatch[1].trim();
      suffix = suffixMatch[2];
    }

    // Pattern: "Family, Given" or "Given Family"
    const commaSplit = baseName.split(',').map(s => s.trim());

    if (commaSplit.length >= 2 && commaSplit[0]) {
      // "Family, Given" format
      let family = commaSplit[0];
      let given = commaSplit.slice(1).join(', ').trim();

      // Append suffix to family name if present
      if (suffix) {
        family += ' ' + suffix;
      }

      return { family, given };
    }

    // Try to split by last space for "Given Family" format
    const parts = baseName.trim().split(/\s+/);
    if (parts.length >= 2) {
      const family = parts[parts.length - 1] + (suffix ? ' ' + suffix : '');
      const given = parts.slice(0, -1).join(' ');
      return { family, given };
    }

    // Single name
    return {
      family: baseName + (suffix ? ' ' + suffix : ''),
      given: ''
    };
  }

  private extractYear(text: string): string {
    // Look for year patterns
    const yearMatch = text.match(/\b(\d{4}|Forthcoming|n\.d\.)\b/i);
    if (yearMatch) {
      return yearMatch[1].toLowerCase() === 'n.d.' ? '' : yearMatch[1];
    }

    // Look for year in parentheses (sometimes used in citations)
    const parenMatch = text.match(/\(([0-9]{4}|Forthcoming)\)/i);
    if (parenMatch) {
      return parenMatch[1];
    }

    return '';
  }

  private extractTitle(text: string): string {
    // Try quoted title first (articles) - remove quotes
    const quotedMatch = text.match(/"([^"]+)"/);
    if (quotedMatch) return quotedMatch[1].trim();

    // Try italicized title (books) - remove asterisks
    const italicMatch = text.match(/\*([^*]+)\*/);
    if (italicMatch) return italicMatch[1].trim();

    // Fallback: look for title after year and before other markers
    const yearMatch = text.match(/(\d{4}|Forthcoming)\.\s*(.+?)(?=\s*\*|\s*https?:|\s*ISBN|\s*$)/);
    if (yearMatch && yearMatch[2]) {
      const potentialTitle = yearMatch[2].trim();
      // Avoid extracting author names or other metadata
      if (!potentialTitle.match(/^(In\s+|edited|et\s+al|vol\.|pp\.|doi:)/i) &&
          potentialTitle.length > 5 && potentialTitle.length < 200) {
        return potentialTitle.replace(/[.,;:]$/, ''); // Remove trailing punctuation
      }
    }

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
// CACHE MANAGER
// ============================================================================

interface CacheEntry {
  key: string;
  data: any;
  timestamp: number;
  ttl: number; // in milliseconds
  source: VerificationSource;
}

class CacheManager {
  private cacheDir: string;
  private fs = require('fs');
  private path = require('path');

  constructor() {
    // Use absolute path for cache directory
    this.cacheDir = this.path.resolve(process.cwd(), '.cache', 'reference-verification');

    // Ensure cache directory exists
    this.ensureCacheDir();
  }

  /**
   * Ensure cache directory exists
   */
  private ensureCacheDir(): void {
    try {
      if (!this.fs.existsSync(this.cacheDir)) {
        this.fs.mkdirSync(this.cacheDir, { recursive: true });
      }
      // Create .gitkeep if it doesn't exist
      const gitkeepPath = this.path.join(this.cacheDir, '.gitkeep');
      if (!this.fs.existsSync(gitkeepPath)) {
        this.fs.writeFileSync(gitkeepPath, '');
      }
    } catch (error) {
      console.warn('Warning: Failed to create cache directory:', error);
    }
  }

  /**
   * Generate cache key from reference identifiers
   */
  private generateKey(ref: ParsedReference): string {
    const identifiers = ref.identifiers;

    // Use most specific identifier as key, sanitize for filesystem
    if (identifiers.doi) return this.sanitizeKey(`doi-${identifiers.doi}`);
    if (identifiers.arxivId) return this.sanitizeKey(`arxiv-${identifiers.arxivId}`);
    if (identifiers.isbn && identifiers.isbn.length > 0) return this.sanitizeKey(`isbn-${identifiers.isbn[0]}`);
    if (identifiers.ssrnId) return this.sanitizeKey(`ssrn-${identifiers.ssrnId}`);
    if (identifiers.philpapersId) return this.sanitizeKey(`philpapers-${identifiers.philpapersId}`);
    if (identifiers.osfId) return this.sanitizeKey(`osf-${identifiers.osfId}`);
    if (identifiers.url) return this.sanitizeKey(`url-${Buffer.from(identifiers.url).toString('base64').slice(0, 32)}`);

    // Fallback to title-author hash (more robust)
    const hashInput = `${ref.authors.map(a => a.family).join('|')}-${ref.title}-${ref.year}`.toLowerCase();
    const hash = Buffer.from(hashInput).toString('base64').replace(/[^a-zA-Z0-9]/g, '').slice(0, 32);
    return `fallback-${hash}`;
  }

  /**
   * Sanitize cache key for filesystem safety
   */
  private sanitizeKey(key: string): string {
    return key.replace(/[^a-zA-Z0-9\-_.]/g, '_');
  }

  /**
   * Get TTL for different sources (in milliseconds)
   */
  private getTTL(source: VerificationSource): number {
    const ttlMap: Record<VerificationSource, number> = {
      'crossref': 30 * 24 * 60 * 60 * 1000,     // 30 days
      'arxiv': 90 * 24 * 60 * 60 * 1000,        // 90 days
      'openlibrary': 7 * 24 * 60 * 60 * 1000,   // 7 days
      'web-search': 1 * 24 * 60 * 60 * 1000,    // 1 day
      'claude-cli': 7 * 24 * 60 * 60 * 1000,    // 7 days
    };
    return ttlMap[source] || 24 * 60 * 60 * 1000; // 1 day default
  }

  /**
   * Get cache file path for a reference (creates subdirectories as needed)
   */
  private getCachePath(key: string): string {
    // Create subdirectory structure for better organization
    // e.g., "doi-10.1177/0963721412436806" -> "doi-10.1177/0963721412436806.json"
    const parts = key.split('-', 2);
    if (parts.length === 2) {
      const subDir = this.path.join(this.cacheDir, parts[0]);
      // Ensure subdirectory exists
      try {
        if (!this.fs.existsSync(subDir)) {
          this.fs.mkdirSync(subDir, { recursive: true });
        }
      } catch (error) {
        // Fall back to root directory
        return this.path.join(this.cacheDir, `${key}.json`);
      }
      return this.path.join(subDir, `${parts[1]}.json`);
    }

    return this.path.join(this.cacheDir, `${key}.json`);
  }

  /**
   * Check if cached data exists and is still valid
   */
  async get(ref: ParsedReference, source: VerificationSource): Promise<any | null> {
    const key = this.generateKey(ref);
    const cachePath = this.getCachePath(key);

    try {
      // Check if file exists
      if (!this.fs.existsSync(cachePath)) return null;

      const file = Bun.file(cachePath);
      const cacheEntry: CacheEntry = await file.json();
      const now = Date.now();

      // Use stored TTL, but also check if source TTL policy has changed
      const storedTTL = cacheEntry.ttl || this.getTTL(source);
      const currentTTL = this.getTTL(source);
      const effectiveTTL = Math.min(storedTTL, currentTTL); // Use more restrictive TTL

      // Check if expired
      if (now - cacheEntry.timestamp > effectiveTTL) {
        // Remove expired cache
        await this.delete(key);
        return null;
      }

      return cacheEntry.data;
    } catch (error) {
      // Cache read error, treat as miss
      console.warn(`Warning: Cache read error for ${key}:`, error);
      return null;
    }
  }

  /**
   * Store data in cache with atomic write
   */
  async set(ref: ParsedReference, source: VerificationSource, data: any): Promise<void> {
    const key = this.generateKey(ref);
    const cachePath = this.getCachePath(key);
    const tempPath = `${cachePath}.tmp`;
    const ttl = this.getTTL(source);

    const cacheEntry: CacheEntry = {
      key,
      data,
      timestamp: Date.now(),
      ttl,
      source
    };

    try {
      // Ensure cache directory exists
      this.ensureCacheDir();

      // Atomic write: write to temp file first
      await Bun.write(tempPath, JSON.stringify(cacheEntry, null, 2));

      // Then move to final location
      this.fs.renameSync(tempPath, cachePath);
    } catch (error) {
      console.warn(`Warning: Failed to write cache for ${key}:`, error);
      // Clean up temp file if it exists
      try {
        if (this.fs.existsSync(tempPath)) {
          this.fs.unlinkSync(tempPath);
        }
      } catch (cleanupError) {
        // Ignore cleanup errors
      }
    }
  }

  /**
   * Delete cache entry
   */
  async delete(key: string): Promise<void> {
    const cachePath = this.getCachePath(key);
    try {
      if (this.fs.existsSync(cachePath)) {
        this.fs.unlinkSync(cachePath);
      }
    } catch (error) {
      console.warn(`Warning: Failed to delete cache for ${key}:`, error);
    }
  }

  /**
   * Clear all cache entries recursively
   */
  async clear(): Promise<void> {
    try {
      // Remove cache directory and all contents
      if (this.fs.existsSync(this.cacheDir)) {
        this.fs.rmSync(this.cacheDir, { recursive: true, force: true });
      }

      // Recreate cache directory
      this.ensureCacheDir();
      console.log('Cache cleared successfully');
    } catch (error) {
      console.error('Failed to clear cache:', error);
    }
  }

  /**
   * Get cache statistics recursively
   */
  async getStats(): Promise<{ total: number; expired: number; valid: number }> {
    try {
      if (!this.fs.existsSync(this.cacheDir)) {
        return { total: 0, expired: 0, valid: 0 };
      }

      let total = 0, expired = 0, valid = 0;

      const processDirectory = async (dirPath: string): Promise<void> => {
        const items = this.fs.readdirSync(dirPath);

        for (const item of items) {
          if (item === '.gitkeep') continue;

          const itemPath = this.path.join(dirPath, item);
          const stats = this.fs.statSync(itemPath);

          if (stats.isDirectory()) {
            await processDirectory(itemPath);
          } else if (item.endsWith('.json')) {
            total++;
            try {
              const entry: CacheEntry = await Bun.file(itemPath).json();
              const now = Date.now();
              const ttl = this.getTTL(entry.source);

              if (now - entry.timestamp > ttl) {
                expired++;
              } else {
                valid++;
              }
            } catch (error) {
              expired++; // Corrupted files count as expired
            }
          }
        }
      };

      await processDirectory(this.cacheDir);
      return { total, expired, valid };
    } catch (error) {
      console.warn('Warning: Failed to get cache stats:', error);
      return { total: 0, expired: 0, valid: 0 };
    }
  }

  /**
   * Clean expired cache entries recursively
   */
  async cleanExpired(): Promise<number> {
    try {
      if (!this.fs.existsSync(this.cacheDir)) {
        return 0;
      }

      let cleaned = 0;

      const processDirectory = async (dirPath: string): Promise<void> => {
        const items = this.fs.readdirSync(dirPath);

        for (const item of items) {
          if (item === '.gitkeep') continue;

          const itemPath = this.path.join(dirPath, item);
          const stats = this.fs.statSync(itemPath);

          if (stats.isDirectory()) {
            await processDirectory(itemPath);
            // Remove empty directories
            try {
              if (this.fs.readdirSync(itemPath).length === 0) {
                this.fs.rmdirSync(itemPath);
              }
            } catch (error) {
              // Ignore directory removal errors
            }
          } else if (item.endsWith('.json')) {
            try {
              const entry: CacheEntry = await Bun.file(itemPath).json();
              const now = Date.now();
              const ttl = this.getTTL(entry.source);

              if (now - entry.timestamp > ttl) {
                this.fs.unlinkSync(itemPath);
                cleaned++;
              }
            } catch (error) {
              // Corrupted file, remove it
              try {
                this.fs.unlinkSync(itemPath);
                cleaned++;
              } catch (deleteError) {
                // Ignore
              }
            }
          }
        }
      };

      await processDirectory(this.cacheDir);
      return cleaned;
    } catch (error) {
      console.warn('Warning: Failed to clean expired cache:', error);
      return 0;
    }
  }

  /**
   * Get cache size in bytes recursively
   */
  async getSize(): Promise<number> {
    try {
      if (!this.fs.existsSync(this.cacheDir)) {
        return 0;
      }

      let totalSize = 0;

      const processDirectory = (dirPath: string): void => {
        const items = this.fs.readdirSync(dirPath);

        for (const item of items) {
          if (item === '.gitkeep') continue;

          const itemPath = this.path.join(dirPath, item);
          try {
            const stats = this.fs.statSync(itemPath);

            if (stats.isDirectory()) {
              processDirectory(itemPath);
            } else {
              totalSize += stats.size;
            }
          } catch (error) {
            // Ignore stat errors
          }
        }
      };

      processDirectory(this.cacheDir);
      return totalSize;
    } catch (error) {
      console.warn('Warning: Failed to get cache size:', error);
      return 0;
    }
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
  private cache = new CacheManager();
  private verbose: boolean;
  private noCache: boolean;

  constructor(verbose: boolean = false, noCache: boolean = false) {
    this.verbose = verbose;
    this.noCache = noCache;
  }

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (!ref.identifiers.doi) {
      return { source: 'crossref', status: 'skipped', confidence: 0 };
    }

    if (this.verbose) {
      console.log(`  [CrossRef] Verifying DOI: ${ref.identifiers.doi}`);
    }

    // Validate DOI format
    if (!ref.identifiers.doi.match(/^10\.\d{4,}/)) {
      if (this.verbose) console.error(`  [CrossRef] Invalid DOI format: ${ref.identifiers.doi}`);
      return { source: 'crossref', status: 'failed', confidence: 0 };
    }

    // Check cache first (unless noCache is enabled)
    if (!this.noCache) {
      if (this.verbose) console.log(`  [CrossRef] Checking cache for DOI: ${ref.identifiers.doi}`);
      const cachedData = await this.cache.get(ref, 'crossref');
      if (cachedData) {
        if (this.verbose) console.log(`  [CrossRef] Cache hit for DOI: ${ref.identifiers.doi}`);
        return this.compareMetadata(ref, cachedData);
      }
      if (this.verbose) console.log(`  [CrossRef] Cache miss for DOI: ${ref.identifiers.doi}`);
    } else {
      if (this.verbose) console.log(`  [CrossRef] Skipping cache lookup (--no-cache enabled)`);
    }

    if (this.verbose) console.log(`  [CrossRef] Rate limiting: waiting for API call`);
    await this.rateLimiter.wait();

    try {
      const result = await retryWithBackoff(async () => {
        const url = `${this.baseUrl}${encodeURIComponent(ref.identifiers.doi!)}`;
        if (this.verbose) console.log(`  [CrossRef] Making API call to: ${url}`);

        const startTime = Date.now();
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'ReferenceVerifier/1.0 (mailto:research@example.com)'
          },
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        const endTime = Date.now();

        if (this.verbose) console.log(`  [CrossRef] API call completed in ${endTime - startTime}ms, status: ${response.status}`);

        if (!response.ok) {
          if (response.status === 404) {
            if (this.verbose) console.log(`  [CrossRef] DOI not found: ${ref.identifiers.doi}`);
            return null; // DOI not found
          }
          if (response.status === 429) {
            if (this.verbose) console.log(`  [CrossRef] Rate limited, will retry`);
            throw new Error('Rate limited - will retry');
          }
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        if (!data || !data.message) {
          throw new Error('Invalid response format');
        }
        if (this.verbose) console.log(`  [CrossRef] Received valid API response with title: "${data.message.title?.[0]}"`);
        return data.message;
      }, 3, 2000); // 3 retries, 2 second initial delay

      if (!result) {
        return { source: 'crossref', status: 'failed', confidence: 0 };
      }

      // Optionally validate DOI URL accessibility
      let urlValid = false;
      try {
        const doiUrl = `https://doi.org/${ref.identifiers.doi}`;
        if (this.verbose) console.log(`  [CrossRef] Validating DOI URL: ${doiUrl}`);

        const urlStartTime = Date.now();
        const urlResponse = await fetch(doiUrl, {
          method: 'HEAD',
          redirect: 'follow',
          signal: AbortSignal.timeout(5000) // 5 second timeout
        });
        const urlEndTime = Date.now();

        urlValid = urlResponse.ok;
        if (this.verbose) {
          console.log(`  [CrossRef] DOI URL validation completed in ${urlEndTime - urlStartTime}ms, status: ${urlResponse.status}, valid: ${urlValid}`);
        }
      } catch (error) {
        // URL validation failed, but don't fail the whole verification
        if (this.verbose) console.warn(`  [CrossRef] DOI URL validation failed: ${(error as Error).message}`);
      }

      // Cache the result
      if (this.verbose) console.log(`  [CrossRef] Caching result for DOI: ${ref.identifiers.doi}`);
      await this.cache.set(ref, 'crossref', result);

      return this.compareMetadata(ref, result, urlValid);

    } catch (error) {
      const errorMsg = (error as Error).message;
      if (this.verbose || errorMsg.includes('timeout')) {
        console.error(`  CrossRef error: ${errorMsg}`);
      }
      return { source: 'crossref', status: 'failed', confidence: 0 };
    }
  }

  private compareMetadata(ref: ParsedReference, apiData: any, urlValid = false): VerificationResult {
    const corrections: Correction[] = [];

    if (this.verbose) {
      console.log(`  [CrossRef] Comparing metadata for: ${ref.title} (${ref.year})`);
    }

    // Compare title
    const apiTitle = apiData.title?.[0];
    if (this.verbose) console.log(`  [CrossRef] API title: "${apiTitle}", Reference title: "${ref.title}"`);
    if (apiTitle && !fuzzyMatch(ref.title, apiTitle)) {
      if (this.verbose) console.log(`  [CrossRef] Title mismatch detected`);
      corrections.push({
        field: 'title',
        original: ref.title,
        corrected: apiTitle,
        reason: 'CrossRef has different title'
      });
    }

    // Compare year
    const apiYear = apiData.published?.['date-parts']?.[0]?.[0]?.toString();
    if (this.verbose) console.log(`  [CrossRef] API year: "${apiYear}", Reference year: "${ref.year}"`);
    if (apiYear && apiYear !== ref.year) {
      if (this.verbose) console.log(`  [CrossRef] Year mismatch detected`);
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
      confidence: urlValid ? 0.95 : 0.90, // Slightly lower confidence if DOI URL doesn't work
      corrections: corrections.length > 0 ? corrections : undefined,
      metadata: {
        title: apiTitle,
        year: apiYear,
        doi: ref.identifiers.doi!,
        doiUrlValid: urlValid
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
  private cache = new CacheManager();
  private verbose: boolean;
  private noCache: boolean;

  constructor(verbose: boolean = false, noCache: boolean = false) {
    this.verbose = verbose;
    this.noCache = noCache;
  }

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (!ref.identifiers.isbn || ref.identifiers.isbn.length === 0) {
      return { source: 'openlibrary', status: 'skipped', confidence: 0 };
    }

    if (this.verbose) {
      console.log(`  [OpenLibrary] Verifying ISBNs: ${ref.identifiers.isbn?.join(', ')}`);
    }

    // Check cache first (unless noCache is enabled)
    if (!this.noCache) {
      if (this.verbose) console.log(`  [OpenLibrary] Checking cache for ISBNs`);
      const cachedData = await this.cache.get(ref, 'openlibrary');
      if (cachedData) {
        if (this.verbose) console.log(`  [OpenLibrary] Cache hit for ISBNs`);
        // cachedData should contain { result, verifiedISBN }
        return this.compareMetadata(ref, cachedData.result, cachedData.verifiedISBN);
      }
      if (this.verbose) console.log(`  [OpenLibrary] Cache miss for ISBNs`);
    } else {
      if (this.verbose) console.log(`  [OpenLibrary] Skipping cache lookup (--no-cache enabled)`);
    }

    if (this.verbose) console.log(`  [OpenLibrary] Rate limiting: waiting for API call`);
    await this.rateLimiter.wait();

    try {
      // Try each ISBN
      for (const isbn of ref.identifiers.isbn) {
        if (this.verbose) console.log(`  [OpenLibrary] Trying ISBN: ${isbn}`);

        const result = await retryWithBackoff(async () => {
          const url = `${this.baseUrl}?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
          if (this.verbose) console.log(`  [OpenLibrary] Making API call to: ${url}`);

          const startTime = Date.now();
          const response = await fetch(url);
          const endTime = Date.now();

          if (this.verbose) console.log(`  [OpenLibrary] API call completed in ${endTime - startTime}ms, status: ${response.status}`);

          if (!response.ok) {
            throw new Error(`OpenLibrary API error: ${response.status}`);
          }

          const data = await response.json();
          return data[`ISBN:${isbn}`];
        });

        if (result) {
          // Cache the result with ISBN
          await this.cache.set(ref, 'openlibrary', { result, verifiedISBN: isbn });
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
  private baseUrl = 'https://export.arxiv.org/api/query';
  private rateLimiter = new RateLimiter(1); // 1 req/3 sec
  private cache = new CacheManager();
  private verbose: boolean;
  private noCache: boolean;

  constructor(verbose: boolean = false, noCache: boolean = false) {
    this.verbose = verbose;
    this.noCache = noCache;
  }

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (!ref.identifiers.arxivId) {
      return { source: 'arxiv', status: 'skipped', confidence: 0 };
    }

    // Check cache first (unless noCache is enabled)
    if (!this.noCache) {
      const cachedData = await this.cache.get(ref, 'arxiv');
      if (cachedData) {
        return this.compareMetadata(ref, cachedData);
      }
    } else {
      if (this.verbose) console.log(`  [arXiv] Skipping cache lookup (--no-cache enabled)`);
    }

    await this.rateLimiter.wait();

    try {
        const result = await retryWithBackoff(async () => {
        const url = `${this.baseUrl}?id_list=${ref.identifiers.arxivId}&max_results=1`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`arXiv API error: ${response.status}`);
        }

        const xml = await response.text();
        if (this.verbose) console.log(`  [arXiv] Raw XML response (first 500 chars):`, xml.substring(0, 500));
        return this.parseArxivXML(xml);
      });

      if (!result) {
        return { source: 'arxiv', status: 'failed', confidence: 0 };
      }

      // Cache the result
      await this.cache.set(ref, 'arxiv', result);

      return this.compareMetadata(ref, result);

    } catch (error) {
      console.error(`  arXiv error: ${(error as Error).message}`);
      return { source: 'arxiv', status: 'failed', confidence: 0 };
    }
  }

  private parseArxivXML(xml: string): any {
    // Parse arXiv XML - look for title within entry elements, not feed title
    const entryTitleMatch = xml.match(/<entry[^>]*>[\s\S]*?<title[^>]*>([^<]+)<\/title>/);
    const publishedMatch = xml.match(/<entry[^>]*>[\s\S]*?<published[^>]*>([^<]+)<\/published>/);

    if (!entryTitleMatch) return null;

    return {
      title: entryTitleMatch[1].trim(),
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
  private cache = new CacheManager();
  private verbose: boolean;
  private noCache: boolean;

  constructor(verbose: boolean = false, noCache: boolean = false) {
    this.verbose = verbose;
    this.noCache = noCache;
  }

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (!ref.identifiers.url) {
      return { source: 'web-search', status: 'skipped', confidence: 0 };
    }

    // Check cache first (unless noCache is enabled)
    if (!this.noCache) {
      const cachedData = await this.cache.get(ref, 'web-search');
      if (cachedData) {
        return {
          source: 'web-search',
          status: 'verified',
          confidence: 0.7,
          metadata: { validatedUrl: ref.identifiers.url }
        };
      }
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
        // Cache the successful validation
        await this.cache.set(ref, 'web-search', { validated: true, url: ref.identifiers.url });
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
 * Verification Orchestrator - coordinates all verifiers
 */
class VerificationOrchestrator {
  private crossref: CrossRefVerifier;
  private openlibrary: OpenLibraryVerifier;
  private arxiv: ArxivVerifier;
  private webSearch: WebSearchVerifier;
  private claudeCLI: ClaudeCLIVerifier;
  private skipClaude: boolean;
  private verbose: boolean;
  private noCache: boolean;

  constructor(skipClaude: boolean = false, verbose: boolean = false, noCache: boolean = false) {
    this.skipClaude = skipClaude;
    this.verbose = verbose;
    this.noCache = noCache;
    this.crossref = new CrossRefVerifier(verbose, noCache);
    this.openlibrary = new OpenLibraryVerifier(verbose, noCache);
    this.arxiv = new ArxivVerifier(verbose, noCache);
    this.webSearch = new WebSearchVerifier(verbose, noCache);
    this.claudeCLI = new ClaudeCLIVerifier(verbose, noCache);
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
      verifiers.push({ name: 'Claude CLI', fn: () => this.claudeCLI.verify(ref) });
    }

    for (const verifier of verifiers) {
      if (this.verbose) console.log(`  [Orchestrator] Trying ${verifier.name} verifier`);

      try {
        const startTime = Date.now();
        const result = await verifier.fn();
        const endTime = Date.now();

        attempts.push(result);

        if (this.verbose) {
          console.log(`  [Orchestrator] ${verifier.name} completed in ${endTime - startTime}ms, status: ${result.status}, confidence: ${result.confidence}`);
        }

        // Success - return immediately
        if (result.status === 'verified' || result.status === 'corrected') {
          if (this.verbose) console.log(`  [Orchestrator] ${verifier.name} succeeded, returning result`);
          return result;
        }

      } catch (error) {
        if (this.verbose) {
          console.error(`  [Orchestrator] ${verifier.name} error:`, error);
        } else {
          console.error(`  ${verifier.name} error:`, error);
        }
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

/**
 * Claude CLI Verifier
 */
class ClaudeCLIVerifier {
  private rateLimiter = new RateLimiter(1); // 1 req/5 sec
  private cache = new CacheManager();
  private verbose: boolean;
  private noCache: boolean;

  constructor(verbose: boolean = false, noCache: boolean = false) {
    this.verbose = verbose;
    this.noCache = noCache;
  }

  async verify(ref: ParsedReference): Promise<VerificationResult> {
    if (this.verbose) {
      console.log(`  [Claude CLI] Researching reference: ${ref.title}`);
    }

    // Check cache first (unless noCache is enabled)
    if (!this.noCache) {
      const cachedData = await this.cache.get(ref, 'claude-cli');
      if (cachedData) {
        if (this.verbose) console.log(`  [Claude CLI] Cache hit`);
        return cachedData;
      }
    }

    if (this.verbose) console.log(`  [Claude CLI] Rate limiting: waiting for API call`);
    await this.rateLimiter.wait();

    try {
      // Prepare comprehensive instructions for Claude
      const instructions = this.buildClaudeInstructions(ref);

      if (this.verbose) console.log(`  [Claude CLI] Calling Claude CLI with research instructions`);

      // Call Claude CLI with the instructions
      const claudeResponse = await this.callClaudeCLI(instructions);

      if (this.verbose) console.log(`  [Claude CLI] Received response from Claude CLI`);

      // Parse the response
      const result = this.parseClaudeResponse(claudeResponse, ref);

      // Note: Claude CLI results are not cached to ensure fresh verification
      // (unlike other verifiers that cache raw API data)

      return result;

    } catch (error) {
      if (this.verbose) console.error(`  [Claude CLI] Error:`, error);
      return { source: 'claude-cli', status: 'failed', confidence: 0 };
    }
  }

  private buildClaudeInstructions(ref: ParsedReference): string {
    const authors = ref.authors.map(a => a.family || a.literal || 'Unknown').join(', ');
    const year = ref.year || 'Unknown';

    return `You are an expert academic reference verification assistant. Your task is to research and verify the following academic reference by finding the most accurate metadata available online.

REFERENCE TO VERIFY:
Title: "${ref.title}"
Authors: ${authors}
Year: ${year}
${ref.identifiers.doi ? `DOI: ${ref.identifiers.doi}` : ''}
${ref.identifiers.isbn ? `ISBN: ${ref.identifiers.isbn.join(', ')}` : ''}
${ref.identifiers.arxivId ? `arXiv ID: ${ref.identifiers.arxivId}` : ''}
${ref.identifiers.url ? `URL: ${ref.identifiers.url}` : ''}

YOUR OBJECTIVES:
1. Find the most accurate and complete metadata for this reference
2. Verify the title, authors, and publication year
3. Identify any corrections needed to match standard academic citation formats
4. Determine if this reference actually exists and is legitimate

RESEARCH INSTRUCTIONS:
- Search academic databases, publisher websites, Google Scholar, and other reliable sources
- Cross-reference multiple sources to ensure accuracy
- Pay special attention to exact title matches and author name variations
- Check for publication years that might differ from the provided year
- Look for official DOIs, ISBNs, or other identifiers

RESEARCH TOOLS AVAILABLE:
You have access to web search and browsing tools. Use them to:
- Search Google Scholar, academic databases, and publisher websites
- Visit specific URLs to verify information
- Cross-reference multiple sources for accuracy

OUTPUT FORMAT:
Return a JSON object matching the provided schema. The response will be automatically validated against the JSON schema, so ensure it conforms exactly to the expected structure.

VERIFICATION GUIDELINES:
- Status "verified": All metadata matches exactly and reference is confirmed legitimate
- Status "corrected": Found accurate metadata that differs from provided reference
- Status "failed": Could not find reliable information about this reference
- Confidence: 0.8+ for verified with multiple sources, 0.6-0.8 for corrected with good sources, <0.6 for uncertain findings
- Only suggest corrections when you have high confidence in the alternative metadata

IMPORTANT NOTES:
- This is a one-way interaction - you will not receive follow-up questions or responses
- Be thorough in your research but efficient in your response
- Prioritize accuracy over speed
- If the reference appears to be fictional or non-existent, set status to "failed"
- Focus on finding the canonical version of the reference as it appears in academic databases

Please provide your research results in the exact JSON format specified above.`;
  }

  private async callClaudeCLI(instructions: string): Promise<string> {
    try {
      // Check if claude command is available
      try {
        await $`claude --version`.quiet();
      } catch {
        if (this.verbose) console.log(`  [Claude CLI] Claude CLI not available, skipping`);
        throw new Error('Claude CLI not installed');
      }

      // Write instructions to a temporary file to avoid shell escaping issues
      const instructionsFile = `/tmp/claude_instructions_${Date.now()}.txt`;
      await Bun.write(instructionsFile, instructions);

      if (this.verbose) console.log(`  [Claude CLI] Executing Claude CLI with instructions file`);

      // Simple command without JSON schema for now
      const result = await $`claude --print --no-session-persistence --system-prompt "You are an expert academic reference verification assistant. Return your response as valid JSON with status, confidence, corrections array, and metadata object." @${instructionsFile}`.quiet();

      // Clean up
      try {
        await $`rm ${instructionsFile}`.quiet();
      } catch {
        // Ignore cleanup errors
      }

      const output = (result.stdout || result.stderr || '').toString();
      if (this.verbose) console.log(`  [Claude CLI] Raw output:`, output);
      return output;
    } catch (error) {
      if (this.verbose) console.error(`  [Claude CLI] Command failed:`, error);
      throw error;
    }
  }

  private parseClaudeResponse(response: string, ref: ParsedReference): VerificationResult {
    try {
      // Try to extract JSON from the response
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        if (this.verbose) console.warn(`  [Claude CLI] No JSON found in response`);
        return { source: 'claude-cli', status: 'failed', confidence: 0 };
      }

      const parsed = JSON.parse(jsonMatch[0]);

      // Validate the response structure
      if (!parsed.status || !['verified', 'corrected', 'failed'].includes(parsed.status)) {
        if (this.verbose) console.warn(`  [Claude CLI] Invalid status in response:`, parsed.status);
        return { source: 'claude-cli', status: 'failed', confidence: 0 };
      }

      const result: VerificationResult = {
        source: 'claude-cli',
        status: parsed.status,
        confidence: Math.min(Math.max(parsed.confidence || 0, 0), 1), // Clamp to 0-1
        corrections: parsed.corrections || [],
        metadata: parsed.metadata || {},
        rawResponse: parsed
      };

      if (this.verbose) {
        console.log(`  [Claude CLI] Parsed result: status=${result.status}, confidence=${result.confidence}`);
      }

      return result;

    } catch (error) {
      if (this.verbose) console.error(`  [Claude CLI] Failed to parse response:`, error);
      return { source: 'claude-cli', status: 'failed', confidence: 0 };
    }
  }
}

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
    this.verifier = new VerificationOrchestrator(options.skipClaude, options.verbose, options.noCache);
    this.backup = new BackupManager(options.backupDir);
  }

  async run() {
    // Handle cache clearing if requested
    if (this.options.clearCache) {
      const cache = new CacheManager();
      await cache.clear();
      console.log('Cache cleared. Exiting.');
      return;
    }

    // Clean expired cache entries (run in background)
    const cache = new CacheManager();
    cache.cleanExpired().then(cleaned => {
      if (cleaned > 0) {
        console.log(`Cleaned ${cleaned} expired cache entries`);
      }
    }).catch(error => {
      console.warn('Warning: Failed to clean expired cache:', error);
    });

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
    if (this.options.verbose) {
      console.log(`Verbose logging enabled - will show detailed verification steps`);
    }
    this.consoleReporter.start(references.length);

    // Create backup
    if (this.options.backup && !this.options.dryRun) {
      if (this.options.verbose) console.log(`Creating backup of ${this.options.input}`);
      await this.backup.createBackup(this.options.input);
    }

    // Verify each reference
    const results: Array<{
      ref: ParsedReference;
      verification: VerificationResult;
    }> = [];

    if (this.options.verbose) console.log(`Starting verification of ${references.length} references...`);

    for (const ref of references) {
      if (this.options.verbose) {
        console.log(`\n[Reference ${results.length + 1}/${references.length}] Verifying: ${ref.title} (${ref.year})`);
      }

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
      const outputPath = (this.options.output && this.options.output.trim()) || this.options.input;
      if (!outputPath || !outputPath.trim()) {
        throw new Error('Output path cannot be empty. Please specify a valid output file or ensure input file is set.');
      }
      const outputText = this.reconstructFile(lines, results);

      // Atomic write
      const tempPath = `${outputPath}.tmp`;
      await Bun.write(tempPath, outputText);
      await rename(tempPath, outputPath);

      console.log(`\nWrote verified references to: ${outputPath}`);
    } else {
      console.log('\n[DRY RUN] No files modified');
      this.showChanges(results);
    }

    // Generate reports
    await this.fileReporter.generateReport(this.options.reportPath);

    // Export JSON if requested
    if (this.options.exportJson) {
      await this.exportJson(results);
    }

    this.consoleReporter.summary();
  }

  private async exportJson(results: Array<{ ref: ParsedReference; verification: VerificationResult }>) {
    const exportData = {
      exported_at: new Date().toISOString(),
      total_references: results.length,
      verified_references: results.map(({ ref, verification }) => ({
        original_text: ref.originalText,
        parsed: {
          authors: ref.authors,
          year: ref.year,
          title: ref.title,
          identifiers: ref.identifiers,
          type: ref.type
        },
        verification: {
          source: verification.source,
          status: verification.status,
          confidence: verification.confidence,
          corrections: verification.corrections,
          metadata: verification.metadata
        }
      }))
    };

    await Bun.write(this.options.exportJson!, JSON.stringify(exportData, null, 2));
    console.log(`\nExported verification data to: ${this.options.exportJson}`);
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
    if (!this.options.autoCorrect) {
      return originalLines.join('\n');
    }

    const correctedLines = [...originalLines];

    results.forEach(({ ref, verification }) => {
      if (verification.status === 'corrected' &&
          verification.confidence >= this.options.confidenceThreshold &&
          verification.corrections) {

        // Find the line to correct (line numbers are 1-based)
        const lineIndex = ref.lineNumber - 1;
        if (lineIndex >= 0 && lineIndex < correctedLines.length) {
          let correctedText = ref.originalText;

          // Apply each correction
          verification.corrections.forEach(correction => {
            switch (correction.field) {
              case 'title':
                // Replace title in the text (this is a simple approach)
                correctedText = correctedText.replace(
                  new RegExp(this.escapeRegex(ref.title), 'g'),
                  correction.corrected
                );
                break;
              case 'authors':
                // Replace author name (simplified)
                correctedText = correctedText.replace(
                  new RegExp(this.escapeRegex(correction.original), 'g'),
                  correction.corrected
                );
                break;
              case 'year':
                // Replace year
                correctedText = correctedText.replace(
                  new RegExp(`\\b${this.escapeRegex(ref.year)}\\b`, 'g'),
                  correction.corrected
                );
                break;
            }
          });

          correctedLines[lineIndex] = correctedText;
        }
      }
    });

    return correctedLines.join('\n');
  }

  private escapeRegex(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

Usage: bun run scripts/verify-references.ts [options]

 Options:
   -i, --input <file>              Input references file (default: ./references.md)
   -o, --output <file>             Output file (default: overwrites input)
   -b, --[no-]backup               Create backup before modifying (default: true)
   --backup-dir <dir>              Backup directory (default: ./backups)
   --confidence-threshold <num>    Minimum confidence for auto-correction (default: 0.7)
   --report-path <file>            Unverifiable references report (default: ./unverifiable-references.md)
   --export-json <file>            Export verification results to JSON file
   --clear-cache                   Clear all cached API responses and exit
   --no-cache                      Skip cache lookups and force fresh API calls
   --dry-run                       Show what would be changed without modifying files
   --skip-claude                   Skip Claude CLI research (faster, uses fewer API calls)
   -v, --verbose                   Verbose logging
   -h, --help                      Show this help message

 Examples:
   bun run scripts/verify-references.ts                           # Verify references.md
   bun run scripts/verify-references.ts --dry-run                 # Preview changes
   bun run scripts/verify-references.ts --no-cache                # Force fresh API calls
   bun run scripts/verify-references.ts --skip-claude             # Skip Claude CLI (faster)
   bun run scripts/verify-references.ts -i custom.md -o fixed.md  # Custom input/output
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
      'export-json': { type: 'string' },
      'clear-cache': { type: 'boolean', default: false },
      'no-cache': { type: 'boolean', default: false },
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
    exportJson: values['export-json'] as string | undefined,
    clearCache: values['clear-cache'] as boolean,
    noCache: values['no-cache'] as boolean || false,
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
