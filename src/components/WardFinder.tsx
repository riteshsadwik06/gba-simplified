"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dict, Locale } from "@/lib/i18n";
import { CORP_KN } from "@/lib/i18n";
import { BY_ID, CORP_HEX, CORP_ORDER, SEARCH_WARDS, SELECT_EVENT, SHAPES, WARD_COUNT, corpKey, type Ward } from "@/lib/wards";
import { CORPS } from "@/lib/i18n";

export default function WardFinder({ t, lang }: { t: Dict["ward"]; lang: Locale }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<Ward | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const matches = useMemo(() => SEARCH_WARDS(q), [q]);

  useEffect(() => {
    const on = (e: Event) => {
      const w = BY_ID.get((e as CustomEvent<string>).detail);
      if (w) setSel(w);
    };
    window.addEventListener(SELECT_EVENT, on);
    return () => window.removeEventListener(SELECT_EVENT, on);
  }, []);

  const name = (w: Ward) => (lang === "kn" ? w.ward_name_kn : w.ward_name);
  const alt = (w: Ward) => (lang === "kn" ? w.ward_name : w.ward_name_kn);
  const corpName = (full: string) => (lang === "kn" ? CORP_KN[full] ?? full : full);
  const hovered = hover ? BY_ID.get(hover) : null;

  return (
    <div className="finder">
      <div className="finder-map">
        <svg viewBox={`0 0 ${SHAPES.width} ${SHAPES.height}`} role="img" aria-label="Map of Bengaluru's 369 wards">
          {SHAPES.shapes.map((s) => {
            const w = BY_ID.get(s.ward_id);
            if (!w) return null;
            const active = sel?.ward_id === s.ward_id;
            const sameCorp = !sel || sel.corporation === w.corporation;
            return (
              <path
                key={s.ward_id}
                d={s.d}
                fill={CORP_HEX[corpKey(w.corporation)]}
                fillOpacity={active ? 1 : hover === s.ward_id ? 0.9 : sameCorp ? 0.62 : 0.18}
                stroke={active ? "var(--ink)" : "var(--ground)"}
                strokeWidth={active ? 4 : 1}
                onMouseEnter={() => setHover(s.ward_id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setSel(w)}
              >
                <title>{name(w)}</title>
              </path>
            );
          })}
        </svg>
        <p className="finder-hover" aria-hidden="true">
          {hovered ? name(hovered) : " "}
        </p>
      </div>

      <div className="finder-side">
        <label className="finder-search">
          <span className="sr-only">{t.placeholder}</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.placeholder} type="search" autoComplete="off" />
        </label>
        {q.trim().length >= 2 && (
          <ul className="finder-results">
            {matches.length === 0 ? (
              <li className="finder-none">{t.noMatch}</li>
            ) : (
              matches.map((w) => (
                <li key={w.ward_id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSel(w);
                      setQ("");
                    }}
                  >
                    <span className="dot" style={{ background: CORP_HEX[corpKey(w.corporation)] }} />
                    <span>{name(w)}</span>
                    <span className="finder-zone">{w.zone_name}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        )}

        {sel ? (
          <div className="finder-card" style={{ ["--corp" as string]: CORP_HEX[corpKey(sel.corporation)] }}>
            <p className="finder-alt">{alt(sel)}</p>
            <h3>{name(sel)}</h3>
            <dl>
              <div>
                <dt>{t.corporation}</dt>
                <dd>{corpName(sel.corporation)}</dd>
              </div>
              <div>
                <dt>{t.zone}</dt>
                <dd>{sel.zone_name}</dd>
              </div>
              <div>
                <dt>{t.assembly}</dt>
                <dd>{sel.assembly}</dd>
              </div>
              <div>
                <dt>{t.wardId}</dt>
                <dd>{sel.ward_id}</dd>
              </div>
            </dl>
          </div>
        ) : (
          <p className="finder-empty">{t.empty}</p>
        )}

        <ul className="legend">
          {CORP_ORDER.map((k) => {
            const c = CORPS.find((x) => x.key === k)!;
            return (
              <li key={k}>
                <span className="dot" style={{ background: CORP_HEX[k] }} />
                {lang === "kn" ? c.kn : k} <span className="legend-n">{WARD_COUNT[k]}</span>
              </li>
            );
          })}
        </ul>
        <p className="fine">{t.caveat}</p>
      </div>
    </div>
  );
}
