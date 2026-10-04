"use client";

import { useMemo, useState } from "react";
import wards from "@/data/wards.json";
import shapes from "@/data/ward-shapes.json";
import type { Dict, Locale } from "@/lib/i18n";
import { CORP_KN } from "@/lib/i18n";

type Ward = {
  ward_id: string;
  ward_name: string;
  ward_name_kn: string;
  corporation: string;
  zone_name: string;
  assembly: string;
};

const WARDS = wards as Ward[];
const BY_ID = new Map(WARDS.map((w) => [w.ward_id, w]));

export const CORP_COLOR: Record<string, string> = {
  "Bengaluru Central City Corporation": "var(--c-central)",
  "Bengaluru North City Corporation": "var(--c-north)",
  "Bengaluru South City Corporation": "var(--c-south)",
  "Bengaluru East City Corporation": "var(--c-east)",
  "Bengaluru West City Corporation": "var(--c-west)",
};

const CORPS = Object.keys(CORP_COLOR);

function shortCorp(c: string) {
  return c.replace("Bengaluru ", "").replace(" City Corporation", "");
}

export default function WardFinder({ t, lang }: { t: Dict["ward"]; lang: Locale }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<Ward | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  const matches = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (s.length < 2) return [];
    return WARDS.filter(
      (w) =>
        w.ward_name.toLowerCase().includes(s) ||
        w.ward_name_kn.includes(q.trim()) ||
        w.zone_name.toLowerCase().includes(s) ||
        w.assembly.toLowerCase().includes(s),
    ).slice(0, 8);
  }, [q]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const w of WARDS) c[w.corporation] = (c[w.corporation] ?? 0) + 1;
    return c;
  }, []);

  const corpLabel = (c: string) => (lang === "kn" ? CORP_KN[c] ?? c : c);
  const wardLabel = (w: Ward) => (lang === "kn" ? w.ward_name_kn : w.ward_name);
  const hovered = hover ? BY_ID.get(hover) : null;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] items-start">
      <div className="relative rounded-2xl border border-line bg-card p-3 sm:p-5">
        <svg
          viewBox={`0 0 ${shapes.width} ${shapes.height}`}
          className="w-full h-auto"
          role="img"
          aria-label="Map of the 369 GBA wards, coloured by city corporation"
        >
          {shapes.shapes.map((s) => {
            const w = BY_ID.get(s.ward_id);
            if (!w) return null;
            const active = sel?.ward_id === s.ward_id;
            const dim = sel && sel.corporation !== w.corporation;
            return (
              <path
                key={s.ward_id}
                d={s.d}
                fill={CORP_COLOR[w.corporation]}
                fillOpacity={active ? 1 : dim ? 0.25 : hover === s.ward_id ? 0.95 : 0.7}
                stroke={active ? "var(--ink)" : "var(--card)"}
                strokeWidth={active ? 3 : 0.8}
                className="cursor-pointer transition-[fill-opacity] duration-150"
                onMouseEnter={() => setHover(s.ward_id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setSel(w)}
              >
                <title>{wardLabel(w)}</title>
              </path>
            );
          })}
        </svg>
        {hovered && (
          <div className="pointer-events-none absolute left-4 top-4 rounded-lg bg-ink px-3 py-1.5 text-sm text-paper shadow">
            {wardLabel(hovered)} · {shortCorp(hovered.corporation)}
          </div>
        )}
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          {CORPS.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="inline-block size-3 rounded-sm" style={{ background: CORP_COLOR[c] }} />
              {lang === "kn" ? CORP_KN[c] : shortCorp(c)}{" "}
              <span className="tabular-nums">({counts[c]})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <div className="relative">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.placeholder}
            aria-label={t.placeholder}
            className="w-full rounded-xl border border-line bg-card px-4 py-3.5 text-base outline-none focus:border-ink focus:ring-2 focus:ring-accent/40"
          />
          {q.trim().length >= 2 && (
            <ul className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-line bg-card shadow-lg">
              {matches.length === 0 ? (
                <li className="px-4 py-3 text-sm text-muted">{t.noMatch}</li>
              ) : (
                matches.map((w) => (
                  <li key={w.ward_id}>
                    <button
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-paper"
                      onClick={() => {
                        setSel(w);
                        setQ("");
                      }}
                    >
                      <span>{wardLabel(w)}</span>
                      <span className="text-xs text-muted">{shortCorp(w.corporation)}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>

        <div className="rounded-2xl border border-line bg-card p-6">
          {sel ? (
            <>
              <p className="text-sm text-muted">{lang === "kn" ? sel.ward_name : sel.ward_name_kn}</p>
              <h3 className="font-display text-3xl leading-tight">{wardLabel(sel)}</h3>
              <dl className="mt-5 grid gap-4">
                <Row label={t.corporation}>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block size-3 rounded-sm" style={{ background: CORP_COLOR[sel.corporation] }} />
                    {corpLabel(sel.corporation)}
                  </span>
                </Row>
                <Row label={t.zone}>{sel.zone_name}</Row>
                <Row label={t.assembly}>{sel.assembly}</Row>
                <Row label={t.wardId}>{sel.ward_id}</Row>
              </dl>
            </>
          ) : (
            <p className="text-muted">{t.empty}</p>
          )}
        </div>
        <p className="text-sm text-muted">{t.caveat}</p>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-3">
      <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 text-lg">{children}</dd>
    </div>
  );
}
