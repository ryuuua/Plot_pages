#!/usr/bin/env node

/**
 * Copies a downsized subset of the local gallery into the repository so that
 * it can be served on GitHub Pages and emits a dedicated manifest.
 *
 * Usage:
 *   node scripts/create-public-gallery.js \
 *     [sourceDir] [targetDir] [maxCategories] [maxItemsPerCategory] \
 *     [manifestOutput] [baseUrl] [includeCategories]
 *
 * Any of the positional arguments can be omitted and will fall back to the
 * defaults described in README.md. Environment variables with the prefix
 * PUBLIC_GALLERY_* also override the defaults:
 *
 * - PUBLIC_GALLERY_MAX_CATEGORIES
 * - PUBLIC_GALLERY_MAX_ITEMS
 * - PUBLIC_GALLERY_BASE_URL
 * - PUBLIC_GALLERY_INCLUDE
 */

const fs = require('fs');
const path = require('path');
const { allowedExt, buildManifest } = require('./build-gallery-data');

const repoRoot = path.resolve(__dirname, '..');
const args = process.argv.slice(2);

const sourceDir = path.resolve(
  args[0] || process.env.DATA_IMAGE_DIR || path.join(repoRoot, 'data_image')
);
const targetDir = path.resolve(args[1] || path.join(repoRoot, 'public_gallery'));
const maxCategories = parsePositiveInt(
  process.env.PUBLIC_GALLERY_MAX_CATEGORIES || args[2],
  4
);
const maxItems = parsePositiveInt(process.env.PUBLIC_GALLERY_MAX_ITEMS || args[3], 8);
const manifestOutput = path.resolve(
  args[4] || path.join(repoRoot, 'assets', 'data', 'gallery-data.public.json')
);
const baseUrl =
  args[5] ||
  process.env.PUBLIC_GALLERY_BASE_URL ||
  toPosix(path.relative(repoRoot, targetDir)) ||
  path.basename(targetDir);
const includeFilter = parseList(process.env.PUBLIC_GALLERY_INCLUDE || args[6]);

function parsePositiveInt(value, fallback) {
  const num = Number.parseInt(value, 10);
  if (!Number.isFinite(num) || num <= 0) return fallback;
  return num;
}

function parseList(value) {
  if (!value) return [];
  return value
    .split(',')
    .map(part => part.trim())
    .filter(Boolean);
}

function toPosix(p) {
  return p.replace(/\\/g, '/');
}

function ensureInsideRepo(dirPath) {
  const normalizedRepo = toPosix(path.resolve(repoRoot));
  const normalizedPath = toPosix(path.resolve(dirPath));
  if (
    normalizedPath !== normalizedRepo &&
    !normalizedPath.startsWith(`${normalizedRepo}/`)
  ) {
    throw new Error(`Target directory must live inside the repository: ${dirPath}`);
  }
  if (normalizedPath === normalizedRepo) {
    throw new Error('Target directory cannot be the repository root.');
  }
}

function listCategories(root) {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
}

function listFiles(categoryPath) {
  const files = [];
  const stack = [{ abs: categoryPath, rel: '' }];

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
      files.push(relPath.replace(/\\/g, '/'));
    }
  }

  return files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function copySubset() {
  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory not found: ${sourceDir}`);
  }

  ensureInsideRepo(targetDir);

  const categories = listCategories(sourceDir);
  if (!categories.length) {
    throw new Error(`No categories found in ${sourceDir}`);
  }

  let filteredCategories = categories;
  if (includeFilter.length) {
    const targetNames = new Set(includeFilter);
    filteredCategories = categories.filter(entry => targetNames.has(entry.name));
    const availableNames = new Set(categories.map(entry => entry.name));
    const missing = includeFilter.filter(name => !availableNames.has(name));
    if (missing.length) {
      console.warn(`Warning: categories not found: ${missing.join(', ')}`);
    }
    if (!filteredCategories.length) {
      throw new Error('Include filter did not match any categories.');
    }
  }

  const selectedCategories =
    maxCategories > 0 ? filteredCategories.slice(0, maxCategories) : filteredCategories;

  fs.rmSync(targetDir, { recursive: true, force: true });

  const summary = [];
  let totalFiles = 0;

  for (const categoryDir of selectedCategories) {
    const categoryName = categoryDir.name;
    const categorySource = path.join(sourceDir, categoryName);
    const files = listFiles(categorySource);
    if (!files.length) continue;

    const limitedFiles = maxItems > 0 ? files.slice(0, maxItems) : files;
    const categoryTarget = path.join(targetDir, categoryName);

    for (const relativeFile of limitedFiles) {
      const srcPath = path.join(categorySource, relativeFile);
      const destPath = path.join(categoryTarget, relativeFile);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }

    summary.push({ category: categoryName, count: limitedFiles.length });
    totalFiles += limitedFiles.length;
  }

  if (!totalFiles) {
    throw new Error('No files were copied. Check your limits or source data.');
  }

  return { summary, totalFiles };
}

function writeManifest() {
  const manifest = buildManifest(targetDir, baseUrl);
  fs.mkdirSync(path.dirname(manifestOutput), { recursive: true });
  fs.writeFileSync(manifestOutput, JSON.stringify(manifest, null, 2));
  return manifest;
}

function main() {
  try {
    const { summary, totalFiles } = copySubset();
    const manifest = writeManifest();

    console.log(
      [
        `Copied ${totalFiles} files into ${toPosix(path.relative(repoRoot, targetDir)) || targetDir}`,
        `Categories included: ${summary.length}`,
        summary.map(item => `  - ${item.category}: ${item.count} items`).join('\n'),
        `Manifest written to ${toPosix(path.relative(repoRoot, manifestOutput)) || manifestOutput}`,
        `Base URL: ${manifest.baseUrl}`
      ].join('\n')
    );
  } catch (error) {
    console.error(error.message || error);
    process.exit(1);
  }
}

main();

