// The Funniest Sick-Day Excuse — make.fun entry (program/v1, node22).
// Writes one line, 137 characters, to /output/entry.txt — inside the
// gate's 1-to-200 character window, with no trailing newline and nothing
// else in the file, so the judge reads exactly the excuse and nothing more.
// The line is built for the judge's brief: half believable (everyone has
// fought autocorrect), a fresh idea (no fever, no dog, no dead
// grandmother), and the laugh lands at the very end, when the typo
// escalates into a meeting with HR about the sender's own resignation.
// It reads like a real message typed in a panic, because that is exactly
// what it is pretending to be.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry, I tried to call in sick but my phone autocorrected it to 'I quit', so now I'm stuck in a meeting with HR about my own resignation.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}
if (!EXCUSE.trim()) {
  throw new Error("excuse must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length} characters to ${OUT_FILE}`);
