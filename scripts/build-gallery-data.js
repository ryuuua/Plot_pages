#!/usr/bin/env node

/**
 * Scans a plots directory and produces a JSON manifest grouped by top-level folder.
 *
 * Usage:
 *   node scripts/build-gallery-data.js [sourceDir] [baseUrl]
 *
 * - sourceDir: absolute or relative path to the plots root (default: ../data_image)
 * - baseUrl:   base path used by the frontend when constructing URLs (default: data_image)
 */

const fs = require('fs');
const path = require('path');

const allowedExt = new Set(['.png', '.jpg', '.jpeg', '.svg', '.html', '.htm']);
const repoRoot = path.resolve(__dirname, '..');

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '')
    .replace(/--+/g, '-');
}

function makeUniqueSlug(name, used) {
  const base = slugify(name) || 'category';
  if (!used.has(base)) {
    used.add(base);
    return base;
  }
  let i = 2;
  while (used.has(`${base}-${i}`)) i += 1;
  const slug = `${base}-${i}`;
  used.add(slug);
  return slug;
}

function prettifySegment(str) {
  return str
    .replace(/\.[^.]+$/, '') // drop extension
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatTitle(relativePath) {
  const parts = relativePath.split('/');
  const file = parts.pop();
  const dir = parts.length ? `${parts.map(prettifySegment).join(' / ')} — ` : '';
  return `${dir}${prettifySegment(file)}`;
}

function collectItems(root) {
  const items = [];
  const stack = [{ abs: root, rel: '' }];

  while (stack.length) {
    const { abs, rel } = stack.pop();
    const entries = fs.readdirSync(abs, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const absPath = path.join(abs, entry.name);
      const relPath = rel ? `${rel}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        stack.push({ abs: absPath, rel: relPath });
        continue;
      }

      const ext = path.extname(entry.name).toLowerCase();
      if (!allowedExt.has(ext)) continue;

      const type = ext === '.html' || ext === '.htm' ? 'html' : 'image';

      items.push({
        file: relPath.replace(/\\/g, '/'),
        filename: entry.name,
        title: formatTitle(relPath),
        type
      });
    }
  }

  return items.sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
}

function buildManifest(sourceDir, baseUrl) {
  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory not found: ${sourceDir}`);
  }

  const categories = [];
  const usedSlugs = new Set();
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;
    const categoryPath = path.join(sourceDir, entry.name);
    const items = collectItems(categoryPath);
    if (!items.length) continue;

    categories.push({
      name: entry.name,
      slug: makeUniqueSlug(entry.name, usedSlugs),
      path: entry.name,
      items
    });
  }

  categories.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  return {
    baseUrl,
    sourceDir,
    generatedAt: new Date().toISOString(),
    categoryCount: categories.length,
    totalItems: categories.reduce((sum, c) => sum + c.items.length, 0),
    categories
  };
}

function runCli() {
  const sourceDir = path.resolve(
    process.argv[2] || process.env.DATA_IMAGE_DIR || path.join(repoRoot, 'data_image')
  );
  const baseUrl =
    process.argv[3] || process.env.DATA_IMAGE_BASE_URL || path.basename(sourceDir) || 'data_image';
  const outputPath = path.join(repoRoot, 'assets', 'data', 'gallery-data.json');

  const manifest = buildManifest(sourceDir, baseUrl);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
  console.log(
    `Gallery data written to ${outputPath}\n` +
      `Categories: ${manifest.categoryCount}, items: ${manifest.totalItems}\n` +
      `Base URL: ${manifest.baseUrl}\n` +
      `Source: ${manifest.sourceDir}`
  );
}

if (require.main === module) {
  try {
    runCli();
  } catch (error) {
    console.error(error.message || error);
    process.exit(1);
  }
}

module.exports = {
  buildManifest,
  slugify,
  makeUniqueSlug,
  prettifySegment,
  formatTitle,
  collectItems,
  allowedExt
};
