import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: one original roast of my own AI agent — funny, playful,
// never hateful; funniness, freshness, tight wording.
const LINE =
  "My agent can write a thousand lines of code before breakfast, but the Wi-Fi goes down and suddenly it's my problem.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Self-check: the gate needs 1-200 chars of real text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`roast line must be 1-200 chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
