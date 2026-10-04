import Link from "next/link";
import { notFound } from "next/navigation";
import CityScape from "@/components/CityScape";
import Personas from "@/components/Personas";
import Tracker from "@/components/Tracker";
import WardFinder from "@/components/WardFinder";
import WhoToAsk from "@/components/WhoToAsk";
import { CORPS, getDictionary, hasLocale, SOURCES, SURVEY_URL } from "@/lib/i18n";
import { CORP_HEX, CORP_ORDER, WARD_COUNT } from "@/lib/wards";

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      {CORP_ORDER.map((k) => (
        <i key={k} style={{ background: CORP_HEX[k] }} />
      ))}
    </span>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const other = lang === "en" ? "kn" : "en";
  const stops = t.timeline.stops;

  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="top">
        <Link href={`/${lang}`} className="brand">
          <Mark />
          {t.nav.brand}
        </Link>
        <nav aria-label="Sections">
          {t.nav.links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <Link href={`/${other}`} hrefLang={other} className="lang">
          {t.nav.switchLang}
        </Link>
      </header>

      <main id="main">
        <section className="hero">
          <div className="hero-text">
            <h1>{t.hero.title}</h1>
            <p className="hero-lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <a href="#ward" className="btn">
                {t.hero.ctaWard}
              </a>
              <a href="#tracker" className="btn btn-quiet">
                {t.hero.ctaSurvey}
              </a>
            </div>
            <figure className="inscription">
              <blockquote lang="kn">{t.hero.inscription}</blockquote>
              <figcaption>{t.hero.inscriptionGloss}</figcaption>
            </figure>
          </div>
          <div className="hero-city">
            <CityScape lang={lang} hint={t.hero.mapHint} replayLabel={t.hero.replay} />
            <ul className="hero-legend">
              {CORP_ORDER.map((k) => {
                const c = CORPS.find((x) => x.key === k)!;
                return (
                  <li key={k} style={{ ["--c" as string]: CORP_HEX[k] }}>
                    <span className="legend-name">{lang === "kn" ? c.kn : k}</span>
                    <span className="legend-count">
                      {WARD_COUNT[k]} {t.hero.wards}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="sec line-sec" aria-labelledby="line-h">
          <div className="sec-head">
            <h2 id="line-h">{t.timeline.title}</h2>
            <p>{t.timeline.lede}</p>
          </div>
          <ol className="metro">
            {stops.map((s, i) => (
              <li key={s.date} className={i === stops.length - 1 ? "stop pending" : "stop"}>
                <span className="stop-dot" />
                <span className="stop-date">{s.date}</span>
                <span className="stop-text">{s.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="tracker" className="sec sec-alt" aria-labelledby="tracker-h">
          <div className="sec-head">
            <h2 id="tracker-h">{t.tracker.title}</h2>
            <p>{t.tracker.lede}</p>
          </div>
          <Tracker t={t.tracker} lang={lang} />
        </section>

        <section id="people" className="sec" aria-labelledby="people-h">
          <div className="sec-head">
            <h2 id="people-h">{t.people.title}</h2>
            <p>{t.people.lede}</p>
          </div>
          <Personas t={t.people} lang={lang} />
        </section>

        <section id="changed" className="sec sec-alt" aria-labelledby="changed-h">
          <div className="sec-head">
            <h2 id="changed-h">{t.changed.title}</h2>
            <p>{t.changed.lede}</p>
          </div>
          <div className="ledger" role="table">
            <div className="ledger-row ledger-headrow" role="row">
              <span role="columnheader" />
              <span role="columnheader">{t.changed.before}</span>
              <span role="columnheader">{t.changed.after}</span>
            </div>
            {t.changed.rows.map(([topic, before, after]) => (
              <div className="ledger-row" role="row" key={topic}>
                <span role="rowheader" className="ledger-topic">
                  {topic}
                </span>
                <span role="cell" className="ledger-before">
                  {before}
                </span>
                <span role="cell" className="ledger-after">
                  {after}
                </span>
              </div>
            ))}
          </div>
          <p className="fine">{t.changed.source}</p>

          <div className="lenses">
            <p className="lenses-title">{t.changed.lensesTitle}</p>
            <dl>
              {t.changed.lenses.map((l) => (
                <div key={l.name}>
                  <dt>{l.name}</dt>
                  <dd>{l.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="concerns">
            <h3>{t.changed.concernsTitle}</h3>
            <ul>
              {t.changed.concerns.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="ward" className="sec" aria-labelledby="ward-h">
          <div className="sec-head">
            <h2 id="ward-h">{t.ward.title}</h2>
            <p>{t.ward.lede}</p>
          </div>
          <WardFinder t={t.ward} lang={lang} />
        </section>

        <section id="who" className="sec sec-alt" aria-labelledby="who-h">
          <div className="sec-head">
            <h2 id="who-h">{t.who.title}</h2>
            <p>{t.who.lede}</p>
          </div>
          <WhoToAsk t={t.who} />
        </section>

        <section id="survey" className="sec survey" aria-labelledby="survey-h">
          <div className="sec-head">
            <h2 id="survey-h">{t.survey.title}</h2>
            <p>{t.survey.lede}</p>
          </div>
          <div>
            <a href={SURVEY_URL} target="_blank" rel="noopener" className="btn">
              {t.survey.cta}
            </a>
            <p className="fine">{t.survey.note}</p>
          </div>
        </section>

        <section id="about" className="sec about" aria-labelledby="about-h">
          <div className="sec-head">
            <h2 id="about-h">{t.about.title}</h2>
            <p>{t.about.text}</p>
            <p className="fine">{t.about.disclaimer}</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div>
          <p className="foot-brand">
            <Mark /> {t.nav.brand}
          </p>
          <p>{t.footer.built}</p>
          <p>{t.footer.data}</p>
          <p>{t.footer.colours}</p>
        </div>
        <div>
          <h2>{t.footer.sources}</h2>
          <ul>
            {SOURCES.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
