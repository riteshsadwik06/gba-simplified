"use client";

import { useMemo, useState } from "react";
import rows from "@/data/transition.json";
import type { Dict, Locale } from "@/lib/i18n";

type Row = (typeof rows)[number];
export const STATUS_ORDER = [
  "moved",
  "underway",
  "legacy",
  "stuck",
  "not_yet",
] as const;
type Status = (typeof STATUS_ORDER)[number];

function Marker({ s }: { s: Status }) {
  // Shape carries the status, so it reads without colour.
  return <span className={`mk mk-${s}`} aria-hidden="true" />;
}

export default function Tracker({
  t,
  lang,
}: {
  t: Dict["tracker"];
  lang: Locale;
}) {
  const status = "all" as Status | "all";
  const [area, setArea] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [sel, setSel] = useState<string>("voter-roll");
  const picked = (rows as Row[]).find((r) => r.id === sel)!;

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const r of rows) c[r.status] = (c[r.status] ?? 0) + 1;
    return c;
  }, []);

  const list = (rows as Row[]).filter(
    (r) =>
      (status === "all" || r.status === status) &&
      (area === "all" || r.area === area),
  );
  const areas = Object.keys(t.areas) as (keyof Dict["tracker"]["areas"])[];

  return (
    <div className="tracker">
      <div className="board" aria-label={t.boardLabel}>
        {STATUS_ORDER.map((st) => (
          <div key={st} className="board-col">
            <p className="board-head">
              <Marker s={st} />
              <span className="board-n">{counts[st] ?? 0}</span>
              <span className="board-l">{t.statuses[st]}</span>
            </p>
            <ul>
              {(rows as Row[])
                .filter((r) => r.status === st)
                .map((r) => (
                  <li key={r.id}>
                    <button
                      type="button"
                      aria-pressed={sel === r.id}
                      className={`tile tile-${st}`}
                      onClick={() => setSel(r.id)}
                    >
                      <span className="tile-area">
                        {t.areas[r.area as keyof Dict["tracker"]["areas"]]}
                      </span>
                      {lang === "kn" ? r.item_kn : r.item}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="picked" aria-live="polite">
        <p className="picked-status">
          <Marker s={picked.status as Status} />{" "}
          {t.statuses[picked.status as Status]}
          <span className="picked-area">
            {t.areas[picked.area as keyof Dict["tracker"]["areas"]]}
          </span>
        </p>
        <h3>{lang === "kn" ? picked.item_kn : picked.item}</h3>
        <p className="picked-summary">
          {lang === "kn" ? picked.summary_kn : picked.summary}
        </p>
        <p className="picked-detail" lang="en">
          {picked.detail}
        </p>
        <p className="trow-asof">
          {t.asOf} {picked.as_of}
        </p>
        <ul className="picked-src">
          {picked.sources.map((x) => (
            <li key={x.url}>
              <a href={x.url} target="_blank" rel="noopener">
                {x.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <details className="tracker-all">
        <summary>{t.allRows}</summary>
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
            <li key={r.id} className="trow" id={`t-${r.id}`}>
              <details
                open={openId === r.id}
                onToggle={(e) => {
                  const o = (e.currentTarget as HTMLDetailsElement).open;
                  if (o) setOpenId(r.id);
                  else if (openId === r.id) setOpenId(null);
                }}
              >
                <summary>
                  <span className="trow-status">
                    <Marker s={r.status as Status} />
                    {t.statuses[r.status as Status]}
                  </span>
                  <span className="trow-item">
                    <span className="trow-area">
                      {t.areas[r.area as keyof Dict["tracker"]["areas"]]}
                    </span>
                    {lang === "kn" ? r.item_kn : r.item}
                  </span>
                  <span className="trow-summary">
                    {lang === "kn" ? r.summary_kn : r.summary}
                  </span>
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
      </details>
      {lang === "kn" && <p className="fine">{t.knNote}</p>}
    </div>
  );
}
