// Ridiculous at First Glance, Real by the Second.
//
// The entry is one sentence of at most 200 characters pitching a bizarre
// startup idea that sounds absurd until you realise it would actually sell.
// The pitch names the odd thing being sold, who pays for it, and why the
// business holds together: employees pay because no manager has ever
// said no to a grandmother. The turn is the whole pitch — laugh at the
// premise, then nod, because every reader knows it would work.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We rent out grandmothers to call your boss and explain, at length, " +
  "why you deserve a raise — no manager has ever said no to a grandmother.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\s{2,}/.test(ENTRY)) {
  throw new Error("entry must be a single clean line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
