import data from "@/data/numbers.json";
import { CORPS, type Dict, type Locale } from "@/lib/i18n";
import { CORP_HEX, type CorpKey } from "@/lib/wards";

const fmt = (n: number, d = 0) => n.toLocaleString("en-IN", { maximumFractionDigits: d, minimumFractionDigits: d });

function Sources({ list, label }: { list: { title: string; url: string }[]; label: string }) {
  return (
    <p className="viz-src">
      {label}:{" "}
      {list.map((s, i) => (
        <span key={s.url}>
          {i > 0 && "; "}
          <a href={s.url} target="_blank" rel="noopener">
            {s.title}
          </a>
        </span>
      ))}
    </p>
  );
}

/** A horizontal bar whose length is value/max; tooltip via data-tip. */
function Bar({ value, max, color, tip, label }: { value: number; max: number; color: string; tip: string; label: string }) {
  const w = max > 0 ? Math.max((value / max) * 100, value > 0 ? 0.6 : 0) : 0;
  return (
    <span className="hbar" data-tip={tip} tabIndex={0} aria-label={tip}>
      <span className="hbar-track">
        <span className="hbar-fill" style={{ width: `${w}%`, background: color }} />
      </span>
      <span className="hbar-val">{label}</span>
    </span>
  );
}

export default function Numbers({ t, lang }: { t: Dict["numbers"]; lang: Locale }) {
  const c = data.corporations;
  const order = c.order as CorpKey[];
  const name = (k: CorpKey) => {
    const x = CORPS.find((y) => y.key === k)!;
    return lang === "kn" ? x.kn : k;
  };
  const perVoter = Object.fromEntries(order.map((k) => [k, (c.budget_cr[k] * 1e7) / (c.voters_lakh[k] * 1e5)])) as Record<CorpKey, number>;
  const cols: { key: keyof Dict["numbers"]["cols"]; get: (k: CorpKey) => number; fmt: (n: number) => string }[] = [
    { key: "wards", get: (k) => c.wards[k], fmt: (n) => fmt(n) },
    { key: "area", get: (k) => c.area_sqkm[k], fmt: (n) => fmt(n) },
    { key: "voters", get: (k) => c.voters_lakh[k], fmt: (n) => fmt(n, 1) },
    { key: "budget", get: (k) => c.budget_cr[k], fmt: (n) => fmt(n) },
    { key: "perVoter", get: (k) => perVoter[k], fmt: (n) => fmt(Math.round(n / 100) * 100) },
  ];
  const max = (f: (k: CorpKey) => number) => Math.max(...order.map(f));

  const split = data.spend_split.items;
  const gap = data.west_gap.items;
  const gapMax = Math.max(...gap.map((g) => g.expected));
  const staff = data.staff.items;
  const staffMax = Math.max(...staff.map((s) => s.value));
  const roll = data.voter_roll;
  const ek = data.ekhata;

  return (
    <div className="numbers">
      {/* The five side by side: one row per corporation, one scale per column */}
      <div className="viz viz-wide">
        <p className="viz-insight">{t.insight}</p>
        <div className="matrix" role="table" aria-label={t.title}>
          <div className="matrix-row matrix-head" role="row">
            <span role="columnheader">{t.corpHead}</span>
            {cols.map((col) => (
              <span role="columnheader" key={col.key}>
                {t.cols[col.key]}
              </span>
            ))}
          </div>
          {order.map((k) => (
            <div className="matrix-row" role="row" key={k}>
              <span role="rowheader" className="matrix-corp">
                <span className="dot" style={{ background: CORP_HEX[k] }} />
                {name(k)}
              </span>
              {cols.map((col) => {
                const v = col.get(k);
                return (
                  <span role="cell" key={col.key} className="matrix-cell" data-col={t.cols[col.key]}>
                    <Bar value={v} max={max(col.get)} color={CORP_HEX[k]} label={col.fmt(v)} tip={`${name(k)}: ${t.cols[col.key]} ${col.fmt(v)}`} />
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        <p className="fine">{t.votersNote}</p>
        <Sources list={c.sources} label={t.sources} />
      </div>

      <div className="viz-grid">
        {/* Spend split: one 100% bar, labelled outside where segments are thin */}
        <figure className="viz">
          <figcaption>
            <h3>{t.splitTitle}</h3>
            <p>{t.splitLede}</p>
          </figcaption>
          <div className="stack" role="img" aria-label={split.map((s) => `${t.split[s.key as keyof typeof t.split]} ${s.pct}%`).join(", ")}>
            {split.map((s, i) => (
              <span
                key={s.key}
                className={`stack-seg stack-${i}`}
                style={{ flexGrow: s.pct }}
                data-tip={`${t.split[s.key as keyof typeof t.split]}: ${s.key === "education" || s.key === "council" ? "<1" : s.pct}%`}
                tabIndex={0}
              />
            ))}
          </div>
          <ul className="stack-legend">
            {split.map((s, i) => (
              <li key={s.key}>
                <span className={`swatch stack-${i}`} />
                <span>{t.split[s.key as keyof typeof t.split]}</span>
                <span className="stack-pct">{s.key === "education" || s.key === "council" ? "<1%" : `${fmt(s.pct, s.pct % 1 ? 1 : 0)}%`}</span>
              </li>
            ))}
          </ul>
          <p className="fine">{t.splitNote}</p>
          <Sources list={data.spend_split.sources} label={t.sources} />
        </figure>

        {/* West: budgeted vs earned, paired bars per scheme */}
        <figure className="viz">
          <figcaption>
            <h3>{t.gapTitle}</h3>
            <p>{t.gapLede}</p>
          </figcaption>
          <div className="pairs">
            {gap.map((g) => (
              <div key={g.key} className="pair">
                <p className="pair-name">{t.gap[g.key as "far" | "khata"]}</p>
                <div className="pair-row">
                  <span className="pair-l">{t.gap.expected}</span>
                  <Bar value={g.expected} max={gapMax} color="var(--muted)" label={fmt(g.expected)} tip={`${t.gap.expected}: Rs ${fmt(g.expected)} cr`} />
                </div>
                <div className="pair-row">
                  <span className="pair-l">{t.gap.earned}</span>
                  <Bar value={g.earned} max={gapMax} color={CORP_HEX.West} label={fmt(g.earned)} tip={`${t.gap.earned}: Rs ${fmt(g.earned)} cr`} />
                </div>
              </div>
            ))}
          </div>
          <Sources list={data.west_gap.sources} label={t.sources} />
        </figure>

        {/* Staff */}
        <figure className="viz">
          <figcaption>
            <h3>{t.staffTitle}</h3>
            <p>{t.staffLede}</p>
          </figcaption>
          <div className="bars">
            {staff.map((s) => (
              <div key={s.key} className="bars-row">
                <span className="bars-l">{t.staff[s.key as keyof typeof t.staff]}</span>
                <Bar value={s.value} max={staffMax} color="var(--ink)" label={fmt(s.value)} tip={`${t.staff[s.key as keyof typeof t.staff]}: ${fmt(s.value)}`} />
              </div>
            ))}
          </div>
          <Sources list={data.staff.sources} label={t.sources} />
        </figure>

        {/* e-khata meter */}
        <figure className="viz">
          <figcaption>
            <h3>{t.ekhataTitle}</h3>
          </figcaption>
          <p className="meter-n">
            {fmt(ek.issued_lakh, 1)} <span>{t.ekhataLabel}</span>
          </p>
          <div className="meter" role="img" aria-label={`${ek.issued_lakh} of ${ek.total_lakh} lakh`} data-tip={`${fmt((ek.issued_lakh / ek.total_lakh) * 100)}%`} tabIndex={0}>
            <span style={{ width: `${(ek.issued_lakh / ek.total_lakh) * 100}%` }} />
          </div>
          <Sources list={data.ekhata.sources} label={t.sources} />
        </figure>
      </div>

      {/* Voter roll */}
      <figure className="viz viz-wide">
        <figcaption>
          <h3>{t.rollTitle}</h3>
          <p>{t.rollLede}</p>
        </figcaption>
        <div className="roll">
          <div className="bars roll-totals">
            <div className="bars-row">
              <span className="bars-l">{t.roll.before}</span>
              <Bar value={roll.before_lakh} max={roll.before_lakh} color="var(--muted)" label={`${fmt(roll.before_lakh / 100, 2)} crore`} tip={`${t.roll.before}: ~${fmt(roll.before_lakh)} lakh`} />
            </div>
            <div className="bars-row">
              <span className="bars-l">{t.roll.draft}</span>
              <Bar value={roll.draft_lakh} max={roll.before_lakh} color="var(--ink)" label={`${fmt(roll.draft_lakh, 2)} lakh`} tip={`${t.roll.draft}: ${fmt(roll.draft_lakh, 2)} lakh`} />
            </div>
            <p className="roll-flag">
              <strong>{fmt(roll.flagged_lakh, 2)} lakh</strong> {t.roll.flagged}
            </p>
          </div>
          <div className="bars">
            <p className="bars-title">{t.roll.districts}</p>
            {roll.districts.map((d) => (
              <div key={d.name} className="bars-row">
                <span className="bars-l">{d.name}</span>
                <Bar value={d.pct} max={100} color="var(--ink)" label={`${fmt(d.pct, 1)}%`} tip={`${d.name}: ${fmt(d.pct, 2)}%`} />
              </div>
            ))}
          </div>
        </div>
        <p className="fine">{t.rollNote}</p>
        <Sources list={roll.sources} label={t.sources} />
      </figure>
    </div>
  );
}
