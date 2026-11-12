// make.fun cutest-picture-01 entry (Node 22, standard library only).
// The picture ships base64-encoded (entry.png.b64) so the repository stays
// plain UTF-8 text; this program decodes it and writes the image to the
// grader's output directory (/output), or to $MAKEFUN_OUTPUT_DIR locally:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const b64 = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8').replace(/\s+/g, '');
writeFileSync(join(outDir, 'entry.png'), Buffer.from(b64, 'base64'));
