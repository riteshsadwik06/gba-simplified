import wards from "@/data/wards.json";
import shapes from "@/data/ward-shapes.json";

export type Ward = {
  ward_id: string;
  ward_name: string;
  ward_name_kn: string;
  corporation: string;
  zone_name: string;
  assembly: string;
};

export const WARDS = wards as Ward[];
export const BY_ID = new Map(WARDS.map((w) => [w.ward_id, w]));
export const SHAPES = shapes as { width: number; height: number; shapes: { ward_id: string; d: string }[] };

export type CorpKey = "Central" | "North" | "East" | "South" | "West";
export const corpKey = (full: string) => full.replace("Bengaluru ", "").replace(" City Corporation", "") as CorpKey;

// Namma Metro line colours, one per corporation, stepped to pass the
// colour-vision and contrast checks on the granite ground (light) and indigo (dark).
// DOM marks use the CSS variables so dark mode switches; Three.js needs hex.
export const CORP_HEX: Record<CorpKey, string> = {
  Central: "var(--c-central)", // Pink line
  North: "var(--c-north)", // Blue line
  South: "var(--c-south)", // Yellow line
  East: "var(--c-east)", // Purple line
  West: "var(--c-west)", // Green line
};
export const CORP_HEX_3D: Record<CorpKey, string> = {
  Central: "#d0427f",
  North: "#1f6fbf",
  South: "#b98600",
  East: "#7b3294",
  West: "#15884a",
};

// Fixed order everywhere (validated as adjacent pairs).
export const CORP_ORDER: CorpKey[] = ["Central", "North", "South", "East", "West"];

export const WARD_COUNT: Record<CorpKey, number> = WARDS.reduce(
  (acc, w) => {
    acc[corpKey(w.corporation)] += 1;
    return acc;
  },
  { Central: 0, North: 0, East: 0, South: 0, West: 0 } as Record<CorpKey, number>,
);

/** Parse the simplified "M x y L x y ... Z" polygons into point rings. */
export function parseRings(d: string): [number, number][][] {
  return d
    .split("M")
    .map((s) => s.replace(/Z/g, "").trim())
    .filter(Boolean)
    .map((s) =>
      s.split("L").map((pair) => {
        const [x, y] = pair.trim().split(/\s+/).map(Number);
        return [x, y] as [number, number];
      }),
    );
}

export const SEARCH_WARDS = (q: string, limit = 8) => {
  const s = q.trim().toLowerCase();
  if (s.length < 2) return [];
  return WARDS.filter(
    (w) =>
      w.ward_name.toLowerCase().includes(s) ||
      w.ward_name_kn.includes(q.trim()) ||
      w.zone_name.toLowerCase().includes(s) ||
      w.assembly.toLowerCase().includes(s) ||
      w.ward_id.toLowerCase() === s,
  ).slice(0, limit);
};

export const SELECT_EVENT = "gba:select-ward";
