#!/usr/bin/env node
// Regenerates the table of contents in README.md from solutions/*.js,
// grouping entries by their `// #tag_name` comment.

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SOLUTIONS_DIR = path.join(ROOT, 'solutions');
const README_PATH = path.join(ROOT, 'README.md');

const TOC_START = '<!-- TOC:START -->';
const TOC_END = '<!-- TOC:END -->';

function titleFromFilename(filename) {
  const base = path.basename(filename, path.extname(filename));
  const withoutIndex = base.replace(/^\d+_/, '');
  return withoutIndex
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function tagFromContent(content) {
  const match = content.match(/^\/\/\s*#(\w+)\s*$/m);
  return match ? match[1] : 'untagged';
}

function tagToHeading(tag) {
  return tag
    .replace(/_pattern$/, '')
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function leadingNumber(filename) {
  const match = filename.match(/^(\d+)_/);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

function collectEntries() {
  const files = fs
    .readdirSync(SOLUTIONS_DIR)
    .filter((f) => f.endsWith('.js'))
    .sort((a, b) => leadingNumber(a) - leadingNumber(b));

  const byTag = new Map();

  for (const file of files) {
    const content = fs.readFileSync(path.join(SOLUTIONS_DIR, file), 'utf8');
    const tag = tagFromContent(content);
    if (!byTag.has(tag)) byTag.set(tag, []);
    byTag.get(tag).push({
      file,
      title: titleFromFilename(file),
    });
  }

  return byTag;
}

function renderToc(byTag) {
  const tags = [...byTag.keys()].sort((a, b) => tagToHeading(a).localeCompare(tagToHeading(b)));

  const lines = [];
  for (const tag of tags) {
    lines.push(`### ${tagToHeading(tag)}`);
    lines.push('');
    for (const entry of byTag.get(tag)) {
      lines.push(`- [${entry.title}](solutions/${entry.file})`);
    }
    lines.push('');
  }

  return lines.join('\n').trimEnd();
}

function updateReadme(tocContent) {
  let readme = fs.existsSync(README_PATH)
    ? fs.readFileSync(README_PATH, 'utf8')
    : '# Algorithms\n\nSolutions to algorithm practice problems, grouped by pattern.\n\n' +
      `${TOC_START}\n${TOC_END}\n`;

  if (!readme.includes(TOC_START) || !readme.includes(TOC_END)) {
    readme = readme.trimEnd() + `\n\n${TOC_START}\n${TOC_END}\n`;
  }

  const tocRegex = new RegExp(`${TOC_START}[\\s\\S]*?${TOC_END}`);
  readme = readme.replace(tocRegex, `${TOC_START}\n${tocContent}\n${TOC_END}`);

  fs.writeFileSync(README_PATH, readme);
}

function main() {
  const byTag = collectEntries();
  const tocContent = renderToc(byTag);
  updateReadme(tocContent);
}

main();
