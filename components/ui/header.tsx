import Link from "next/link";

import { getDict } from "@/lib/i18n";

import HeaderControls from "./header-controls";
import Logo from "./logo";

export default function Header({ lang }: { lang: string }) {
  const { nav, doors } = getDict(lang);
  const links = [
    { href: `/${lang}#apps`, label: nav.apps },
    { href: `/${lang}#services`, label: nav.services },
    { href: `/${lang}/contact`, label: nav.contact },
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-borde bg-crema">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${lang}`} className="shrink-0">
          <Logo height={28} />
        </Link>

        <nav aria-label={nav.menu} className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-bold">
            {links.map((l) => (
              <li key={l.href}>
                <Link className="text-ink hover:text-rio" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <HeaderControls lang={lang} themeLabel={nav.theme} languageLabel={nav.language} />
          <Link className="btn btn-agency hidden sm:inline-flex" href={`/${lang}/contact`}>
            {doors.store}
          </Link>
        </div>
      </div>
    </header>
  );
}
