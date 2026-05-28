#!/usr/bin/env node
/**
 * Usage:
 *   node screenshot.js <url> [label] [selector1,selector2,...]
 *
 * Examples:
 *   node screenshot.js http://localhost:3001/prototypes/equibt_plan_prototype_v2.html plan-v2
 *   node screenshot.js http://localhost:3001/prototypes/equibt_solve_prototype_v2.html solve-v2 .hero,.what-you-receive,.related-services
 *   node screenshot.js http://localhost:3001/prototypes/equibt_plan_prototype_v2.html plan-v2 .what-you-receive,.deliverables-grid
 *   node screenshot.js http://localhost:3001/prototypes/equibt_plan_prototype_v2.html plan-v2 "" --clean
 *
 * Flags:
 *   --clean   Delete all files in temp_screenshots/ after saving (for cleanup after review)
 *
 * Captures:
 *   - Full page (always)
 *   - Each selector as a cropped section (default: .hero, .what-you-receive, .related-services)
 *
 * Output goes to temp_screenshots/ — never commit this folder.
 * Filename format: <label>-full.png, <label>-<section-name>.png
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const cleanFlag = args.includes('--clean');
const positional = args.filter(a => a !== '--clean');

const url = positional[0];
const label = positional[1] || 'page';
const selectorArg = positional[2];

const DEFAULT_SELECTORS = ['.hero', '.what-you-receive', '.related-services'];
const selectors = selectorArg ? selectorArg.split(',').map(s => s.trim()) : DEFAULT_SELECTORS;

if (!url) {
  console.error('Usage: node screenshot.js <url> [label] [selector1,selector2,...]');
  process.exit(1);
}

const outDir = path.join(__dirname, 'temp_screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

/** Convert a CSS selector to a safe filename segment, e.g. ".what-you-receive" → "what-you-receive" */
function selectorToName(selector) {
  return selector.replace(/^[.#]/, '').replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Full page
  const fullPath = path.join(outDir, `${label}-full.png`);
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log(`Saved: ${fullPath}`);

  // Section crops by CSS selector
  for (const selector of selectors) {
    const el = await page.$(selector);
    if (!el) {
      console.warn(`  Skipped (not found): ${selector}`);
      continue;
    }
    const sectionName = selectorToName(selector);
    const cropPath = path.join(outDir, `${label}-${sectionName}.png`);
    await el.screenshot({ path: cropPath });
    console.log(`Saved: ${cropPath}`);
  }

  await browser.close();

  if (cleanFlag) {
    const files = fs.readdirSync(outDir);
    files.forEach(f => fs.rmSync(path.join(outDir, f)));
    console.log(`Cleaned: temp_screenshots/ (${files.length} file${files.length !== 1 ? 's' : ''} deleted)`);
  }
})();
