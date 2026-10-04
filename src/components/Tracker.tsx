"use client";

import { useMemo, useState } from "react";
import rows from "@/data/transition.json";
import type { Dict, Locale } from "@/lib/i18n";

type Row = (typeof rows)[number];
export const STATUS_ORDER = ["moved", "underway", "legacy", "stuck", "not_yet"] as const;
type Status = (typeof STATUS_ORDER)[number];

function Marker({ s }: { s: Status }) {
  // Shape carries the status, so it reads without colour.
  return <span className={`mk mk-${s}`} aria-hidden="true" />;
}

export default function Tracker({ t, lang }: { t: Dict["tracker"]; lang: Locale }) {
  const [status, setStatus] = useState<Status | "all">("all");
  const [area, setArea] = useState<string>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const r of rows) c[r.status] = (c[r.status] ?? 0) + 1;
    return c;
  }, []);

  const list = (rows as Row[]).filter((r) => (status === "all" || r.status === status) && (area === "all" || r.area === area));
  const areas = Object.keys(t.areas) as (keyof Dict["tracker"]["areas"])[];

  return (
    <div className="tracker">
      <div className="tracker-tally" role="group" aria-label={t.filterStatus}>
        <button type="button" aria-pressed={status === "all"} onClick={() => setStatus("all")} className="tally">
          <span className="tally-n">{rows.length}</span>
          <span className="tally-l">{t.all}</span>
        </button>
        {STATUS_ORDER.map((s) => (
          <button key={s} type="button" aria-pressed={status === s} onClick={() => setStatus(status === s ? "all" : s)} className="tally">
            <span className="tally-n">
              <Marker s={s} /> {counts[s] ?? 0}
            </span>
            <span className="tally-l">{t.statuses[s]}</span>
          </button>
        ))}
      </div>

      <div className="tracker-tools">
        <label>
          <span>{t.filterArea}</span>
          <select value={area} onChange={(e) => setArea(e.target.value)}>
            <option value="all">{t.allAreas}</option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {t.areas[a]}
              </option>
            ))}
          </select>
        </label>
        <p className="tracker-dl">
          {t.download}{" "}
          <a href="/data/gba-transition.csv" download>
            CSV
          </a>{" "}
          <a href="/data/gba-transition.json" download>
            JSON
          </a>
        </p>
      </div>

      <ul className="tracker-list">
        {list.map((r) => (
          <li key={r.id} className="trow">
            <details>
              <summary>
                <span className="trow-status">
                  <Marker s={r.status as Status} />
                  {t.statuses[r.status as Status]}
                </span>
                <span className="trow-item">
                  <span className="trow-area">{t.areas[r.area as keyof Dict["tracker"]["areas"]]}</span>
                  {lang === "kn" ? r.item_kn : r.item}
                </span>
                <span className="trow-summary">{lang === "kn" ? r.summary_kn : r.summary}</span>
              </summary>
              <div className="trow-more">
                <p lang="en">{r.detail}</p>
                <p className="trow-asof">
                  {t.asOf} {r.as_of}
                </p>
                <ul>
                  {r.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </li>
        ))}
      </ul>
      {lang === "kn" && <p className="fine">{t.knNote}</p>}
    </div>
  );
}
