// Writes the transition tracker as downloadable JSON and CSV into public/data.
import { readFileSync, writeFileSync } from "node:fs";
const rows = JSON.parse(readFileSync("src/data/transition.json", "utf8"));
writeFileSync("public/data/gba-transition.json", JSON.stringify(rows, null, 2));
const cols = ["id", "area", "status", "item", "summary", "detail", "as_of", "sources"];
const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
const csv = [cols.join(",")]
  .concat(rows.map((r) => cols.map((c) => esc(c === "sources" ? r.sources.map((s) => s.url).join(" | ") : r[c])).join(",")))
  .join("\n");
writeFileSync("public/data/gba-transition.csv", "﻿" + csv + "\n");
console.log(`wrote ${rows.length} rows`);
