#!/usr/bin/env node
/**
 * House style linter.
 * Deterministic checks only. Everything here is a string match, so it runs
 * free, instantly, and with perfect recall. Judgement rules live in
 * VOICE_REVIEW_RUBRIC.md and are a reviewer's job, not this script's.
 *
 * Usage: node tools/house-style-lint.mjs [path ...]
 * Default targets: src/content, src/pages
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const TARGETS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["src/content", "src/pages"];

/**
 * Strip everything that is code rather than prose, replacing it with spaces so
 * line numbers stay correct. Without this the linter reads import paths, ASCII
 * divider comments and class names as copy, and drowns real findings in noise.
 */
function stripCode(text, file) {
  const blank = (m) => m.replace(/[^\n]/g, " ");
  let t = text;
  if (file.endsWith(".astro")) {
    // Astro frontmatter fence at the very top
    t = t.replace(/^---\n[\s\S]*?\n---/, blank);
  }
  if (file.endsWith(".md") || file.endsWith(".mdx")) {
    // YAML frontmatter: keep title and description, drop the rest
    t = t.replace(/^---\n[\s\S]*?\n---/, (m) =>
      m
        .split("\n")
        .map((l) => (/^(title|description|lede|summary):/i.test(l) ? l : blank(l)))
        .join("\n")
    );
  }
  t = t.replace(/<!--[\s\S]*?-->/g, blank);        // html comments
  t = t.replace(/\/\*[\s\S]*?\*\//g, blank);      // block comments
  t = t.replace(/^\s*\/\/.*$/gm, blank);           // line comments
  t = t.replace(/^\s*import .*$/gm, blank);        // imports
  t = t.replace(/<style>[\s\S]*?<\/style>/g, blank);
  t = t.replace(/<script[\s\S]*?<\/script>/g, blank);
  t = t.replace(/(class|href|src|id|import)="[^"]*"/g, blank);
  t = t.replace(/`[^`\n]*`/g, blank);               // inline code
  return t;
}

const EXTS = new Set([".md", ".mdx", ".astro", ".html"]);

const RULES = [
  {
    id: "M1",
    name: "no em or en dashes",
    re: /[–—]/g,
    hint: "use a colon, comma or hyphen",
  },
  {
    id: "M2",
    prose: true,
    name: "banned word",
    re: /\b(game[- ]changer|unlock(?:s|ed|ing)?|leverage(?:s|d|ing)?|unpack(?:s|ed|ing)?|dive in|fast[- ]paced world)\b/gi,
    hint: "house style bans this word",
  },
  {
    id: "M2b",
    prose: true,
    name: "banned word: journey",
    re: /\bjourney\b/gi,
    hint: "banned unless describing a literal trip",
  },
  {
    id: "M3",
    name: "LMI abbreviation",
    re: /\bLMI\b/g,
    hint: "always spell out Lean Methods Institute",
  },
  {
    id: "M5",
    name: "internal brand in external content",
    re: /\b(CUBOROO|Cuboro|Emvisage)\b/g,
    hint: "never appears in external content",
  },
  {
    id: "M8",
    prose: true,
    name: "US spelling",
    re: /\b(organiz(?:e|es|ed|ing|ation)|recogniz(?:e|es|ed|ing)|optimiz(?:e|es|ed|ing)|color(?:s|ed)?|behavior(?:s)?|center(?:s|ed)?|analyz(?:e|es|ed|ing))\b/gi,
    hint: "Australian spelling",
  },
  {
    id: "H4",
    name: "negative parallelism",
    re: /\b(?:it'?s|this is|that'?s|we'?re) not (?:just|only|merely) [^.,;]{1,60}[,;] (?:it'?s|this is|that'?s|we'?re)\b/gi,
    hint: "make one clean positive claim instead",
  },
  {
    id: "H11",
    name: "stock LinkedIn theatre",
    re: /\b(the room (?:goes|went) quiet|let that sink in|here'?s the thing|read that again)\b/gi,
    hint: "cut it",
  },
  {
    id: "H12",
    prose: true,
    name: "lazy CTA",
    re: /(?:^|[.!?]\s|\n)\s*(thoughts\?|let me know\.?$|what do you think\?)/gim,
    hint: "make the question specific",
  },
];

// Service and pillar names that must be exact when they appear.
const CANON = [
  ["Architecture & Governance", /Architecture and Governance/g],
  ["Operations Diagnostic", /Operational Diagnostic/g],
  ["Iterative Improvement", /Iterative Improvements/g],
];

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (EXTS.has(extname(p))) out.push(p);
  }
  return out;
}

function lineOf(text, index) {
  return text.slice(0, index).split("\n").length;
}

function snippet(text, index, len) {
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + len + 40);
  return text.slice(start, end).replace(/\s+/g, " ").trim();
}

let findings = 0;
const files = TARGETS.flatMap((t) => walk(t));

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const text = stripCode(raw, file);
  const isProse = /\.(md|mdx)$/.test(file);
  for (const rule of RULES) {
    if (rule.prose && !isProse) continue; // CSS keywords and code trip these
    rule.re.lastIndex = 0;
    let m;
    while ((m = rule.re.exec(text)) !== null) {
      findings++;
      console.log(
        `${file}:${lineOf(text, m.index)}  [${rule.id}] ${rule.name}\n` +
          `    "${snippet(text, m.index, m[0].length)}"\n` +
          `    -> ${rule.hint}\n`
      );
      if (m[0].length === 0) rule.re.lastIndex++;
    }
  }
  for (const [correct, wrong] of CANON) {
    wrong.lastIndex = 0;
    let m;
    while ((m = wrong.exec(text)) !== null) {
      findings++;
      console.log(
        `${file}:${lineOf(text, m.index)}  [M6] canonical name\n` +
          `    "${m[0]}"\n    -> should be "${correct}"\n`
      );
    }
  }
}

console.log(
  findings === 0
    ? `house-style: clean (${files.length} files checked)`
    : `house-style: ${findings} finding${findings === 1 ? "" : "s"} across ${files.length} files`
);
process.exit(findings === 0 ? 0 : 1);
