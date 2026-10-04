import Link from "next/link";
import { notFound } from "next/navigation";
import WardFinder from "@/components/WardFinder";
import { getDictionary, hasLocale, SOURCES, SURVEY_URL } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const other = lang === "en" ? "kn" : "en";

  const nav = [
    ["changed", t.nav.changed],
    ["ward", t.nav.ward],
    ["who", t.nav.who],
    ["voice", t.nav.voice],
    ["survey", t.nav.survey],
    ["about", t.nav.about],
  ] as const;

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href={`/${lang}`} className="font-display text-xl font-bold">
            {t.nav.brand}
          </Link>
          <nav className="hidden gap-5 text-sm md:flex">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-muted hover:text-ink">
                {label}
              </a>
            ))}
          </nav>
          <Link
            href={`/${other}`}
            className="rounded-full border border-line px-3 py-1 text-sm hover:border-ink"
            hrefLang={other}
          >
            {t.nav.switchLang}
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t.hero.kicker}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.1] sm:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t.hero.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#ward" className="rounded-full bg-ink px-6 py-3 font-semibold text-paper hover:opacity-90">
              {t.hero.ctaWard}
            </a>
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-ink px-6 py-3 font-semibold hover:bg-card"
            >
              {t.hero.ctaSurvey}
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {t.facts.map((f) => (
              <div key={f.label} className="bg-card p-5 sm:p-6">
                <dt className="font-display text-4xl font-bold sm:text-5xl">{f.value}</dt>
                <dd className="mt-2 text-sm text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Timeline */}
        <section className="border-y border-line bg-card">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="font-display text-3xl font-bold">{t.timeline.title}</h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.timeline.items.map((i) => (
                <li key={i.date} className="border-l-2 border-accent pl-4">
                  <p className="font-semibold">{i.date}</p>
                  <p className="mt-1 text-muted">{i.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What changed */}
        <section id="changed" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.changed.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">{t.changed.lede}</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-card">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-line text-sm text-muted">
                  {t.changed.headers.map((h, i) => (
                    <th key={i} className="px-5 py-4 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.changed.rows.map((r) => (
                  <tr key={r[0]} className="border-b border-line last:border-0 align-top">
                    <th className="w-44 px-5 py-4 font-semibold">{r[0]}</th>
                    <td className="px-5 py-4 text-muted">{r[1]}</td>
                    <td className="px-5 py-4">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">{t.changed.source}</p>

          <h3 className="mt-14 font-display text-2xl font-bold">{t.changed.lensesTitle}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.changed.lenses.map((l) => (
              <div key={l.name} className="rounded-2xl border border-line bg-card p-6">
                <p className="font-display text-xl font-bold text-accent">{l.name}</p>
                <p className="mt-2 text-muted">{l.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ward finder */}
        <section id="ward" className="border-y border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.ward.title}</h2>
            <p className="mt-4 mb-8 max-w-3xl text-lg text-muted">{t.ward.lede}</p>
            <WardFinder t={t.ward} lang={lang} />
          </div>
        </section>

        {/* Who does what */}
        <section id="who" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.who.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">{t.who.lede}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.who.items.map((a) => (
              <div key={a.name} className="rounded-2xl border border-line bg-card p-5">
                <p className="font-semibold">{a.name}</p>
                <p className="mt-2 text-sm text-muted">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Your voice */}
        <section id="voice" className="border-y border-line bg-card">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.voice.title}</h2>
              <ol className="mt-8 space-y-6">
                {t.voice.items.map((v, i) => (
                  <li key={v.title} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-paper">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{v.title}</p>
                      <p className="mt-1 text-muted">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-display text-xl font-bold">{t.voice.concernsTitle}</h3>
              <ul className="mt-4 space-y-3 text-muted">
                {t.voice.concerns.map((c) => (
                  <li key={c} className="border-l-2 border-line pl-3">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Survey */}
        <section id="survey" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.survey.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">{t.survey.lede}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-line text-muted"
              >
                {t.survey.pending}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full bg-accent px-6 py-3 font-semibold text-paper hover:opacity-90"
            >
              {t.survey.cta}
            </a>
            <p className="mt-3 text-sm text-muted">{t.survey.note}</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-line bg-card">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.about.title}</h2>
            <p className="mt-4 max-w-3xl text-lg text-muted">{t.about.text}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {t.about.workstreams.map((w) => (
                <div key={w.name} className="rounded-2xl border border-line bg-paper p-5">
                  <p className="font-semibold">{w.name}</p>
                  <p className="mt-1 text-sm text-muted">{w.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">{t.about.disclaimer}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted sm:px-6">
          <p className="font-semibold text-ink">{t.footer.sources}</p>
          <ul className="mt-2 space-y-1">
            {SOURCES.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4">{t.footer.data}</p>
          <p className="mt-1">{t.footer.built}</p>
        </div>
      </footer>
    </>
  );
}
