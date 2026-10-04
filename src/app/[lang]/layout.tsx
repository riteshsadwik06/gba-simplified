import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/anek-kannada/standard.css";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import "./globals.css";


export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { languages: { en: "/en", kn: "/kn" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} className="antialiased">
      <body>{children}</body>
    </html>
  );
}
