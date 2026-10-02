import type { Dict } from "./dictionaries/en";
import en from "./dictionaries/en";
import es from "./dictionaries/es";

export const locales = ["en", "es"] as const; // English first
export type Lang = (typeof locales)[number];

const dictionaries: Record<Lang, Dict> = { en, es };

export const getDict = (lang: string): Dict => dictionaries[lang as Lang] ?? en;

// generateStaticParams helper for [lang]/.../[slug] routes.
export const withLocales = <T extends string>(slugs: readonly T[]) =>
  locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
