"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales } from "@/lib/i18n";

export default function HeaderControls({ lang, languageLabel }: { lang: string; languageLabel: string }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <ul className="flex items-center text-sm font-bold" aria-label={languageLabel}>
      {locales.map((l) => (
        <li key={l}>
          <Link
            className={`px-2 py-1 uppercase ${l === lang ? "text-papel" : "text-[#a7a5c0] hover:text-papel"}`}
            href={`/${l}${rest ? `/${rest}` : ""}`}
            hrefLang={l}
            lang={l}
            aria-current={l === lang ? "true" : undefined}
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
}
