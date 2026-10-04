"use client";

import { useState } from "react";
import type { Dict } from "@/lib/i18n";

export default function WhoToAsk({ t }: { t: Dict["who"] }) {
  const [i, setI] = useState(0);
  const p = t.problems[i];
  return (
    <div className="ask">
      <ul className="ask-list">
        {t.problems.map((x, n) => (
          <li key={x.q}>
            <button type="button" aria-pressed={n === i} onClick={() => setI(n)}>
              {x.q}
            </button>
          </li>
        ))}
      </ul>
      <div className="ask-answer" aria-live="polite">
        <p className="ask-q">{p.q}</p>
        <p className="ask-a">{p.a}</p>
        <p className="ask-more">{p.more}</p>
      </div>
    </div>
  );
}
