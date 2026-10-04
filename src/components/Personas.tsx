"use client";

import { useState } from "react";
import type { Dict, Locale } from "@/lib/i18n";
import { CORP_KN } from "@/lib/i18n";
import { BY_ID, CORP_HEX, SHAPES, corpKey } from "@/lib/wards";

export default function Personas({
  t,
  lang,
}: {
  t: Dict["people"];
  lang: Locale;
}) {
  const [active, setActive] = useState(t.list[0].id);
  const p = t.list.find((x) => x.id === active)!;
  const ward = BY_ID.get(p.ward)!;
  const corp = corpKey(ward.corporation);
  const color = CORP_HEX[corp];

  return (
    <div className="people" style={{ ["--corp" as string]: color }}>
      <div className="people-line" role="tablist" aria-label={t.title}>
        {t.list.map((x) => {
          const w = BY_ID.get(x.ward)!;
          const c = CORP_HEX[corpKey(w.corporation)];
          const on = x.id === active;
          return (
            <button
              key={x.id}
              role="tab"
              aria-selected={on}
              aria-controls="persona-panel"
              className={on ? "station on" : "station"}
              style={{ ["--c" as string]: c }}
              onClick={() => setActive(x.id)}
            >
              <span className="station-dot" />
              <span className="station-name">{x.name}</span>
              <span className="station-place">
                {lang === "kn" ? w.ward_name_kn : w.ward_name}
              </span>
            </button>
          );
        })}
      </div>

      <div id="persona-panel" role="tabpanel" className="people-panel">
        <div className="people-where">
          <svg
            viewBox={`0 0 ${SHAPES.width} ${SHAPES.height}`}
            aria-hidden="true"
          >
            {SHAPES.shapes.map((s) => {
              const w = BY_ID.get(s.ward_id);
              if (!w) return null;
              const mine = s.ward_id === p.ward;
              const sameCorp = corpKey(w.corporation) === corp;
              return (
                <path
                  key={s.ward_id}
                  d={s.d}
                  fill={mine ? "var(--ink)" : sameCorp ? color : "var(--line)"}
                  fillOpacity={mine ? 1 : sameCorp ? 0.55 : 0.6}
                  stroke="var(--ground)"
                  strokeWidth={0.8}
                />
              );
            })}
          </svg>
          <p className="people-who">{p.who}</p>
          <p className="people-corp">
            {lang === "kn" ? CORP_KN[ward.corporation] : ward.corporation}
          </p>
        </div>

        <div className="people-right">
          <p className="people-stat">
            <span className="people-stat-n">{p.stat.value}</span>
            <span className="people-stat-l">{p.stat.label}</span>
          </p>
          <div className="people-cols">
            <section>
              <h3>{t.act}</h3>
              <p>{p.act}</p>
            </section>
            <section className="people-ground">
              <h3>{t.ground}</h3>
              <p>{p.ground}</p>
            </section>
            <section>
              <h3>{t.todo}</h3>
              <ul>
                {p.todo.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <p className="fine people-note">{t.note}</p>
    </div>
  );
}
