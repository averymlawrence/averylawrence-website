// Astro's content-collection image() schema emits the full-resolution original
// asset into dist/_astro alongside every optimized variant actually used in the
// page, even though the original is never referenced (astro#11887). This script
// deletes anything in dist/_astro that no built HTML/CSS file actually links to.
import { readdirSync, readFileSync, statSync, unlinkSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const ASTRO_DIR = join(DIST, '_astro');

function walk(dir) {
	const out = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			if (full === ASTRO_DIR) continue; // don't scan the asset dir itself for references
			out.push(...walk(full));
		} else {
			out.push(full);
		}
	}
	return out;
}

const referencingFiles = walk(DIST).filter((f) => ['.html', '.css', '.js'].includes(extname(f)));
const haystack = referencingFiles.map((f) => readFileSync(f, 'utf8')).join('\n');

const assetFiles = readdirSync(ASTRO_DIR);
let removedCount = 0;
let removedBytes = 0;

for (const filename of assetFiles) {
	if (!haystack.includes(filename)) {
		const full = join(ASTRO_DIR, filename);
		removedBytes += statSync(full).size;
		unlinkSync(full);
		removedCount += 1;
	}
}

console.log(
	`prune-unused-assets: removed ${removedCount} unreferenced file(s), ${(removedBytes / 1024 / 1024).toFixed(1)}MB`
);
