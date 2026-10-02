import Link from "next/link";

import { getDict } from "@/lib/i18n";

import Logo from "./logo";

export default function Footer({ lang }: { lang: string }) {
  const { nav, footer } = getDict(lang);
  const links = [
    { href: `/${lang}#apps`, label: nav.apps },
    { href: `/${lang}#services`, label: nav.services },
    { href: `/${lang}/contact`, label: nav.contact },
  ];
  return (
    <footer className="border-t border-borde">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 md:py-12">
        <Link href={`/${lang}`}>
          <Logo height={24} />
        </Link>

        <ul className="flex gap-6 text-sm font-bold">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="hover:text-rio" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* TODO(marca): social links once the accounts exist */}
        <p className="text-sm text-corteza">
          &copy; {new Date().getFullYear()} log studio. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
