"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales } from "@/lib/i18n";

export default function HeaderControls({
  lang,
  themeLabel,
  languageLabel,
}: {
  lang: string;
  themeLabel: string;
  languageLabel: string;
}) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <div className="flex items-center gap-1">
      <ul className="flex items-center text-sm font-bold" aria-label={languageLabel}>
        {locales.map((l) => (
          <li key={l}>
            <Link
              className={`px-2 py-1 uppercase ${l === lang ? "text-tinta" : "text-tinta-suave hover:text-tinta"}`}
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
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={themeLabel}
        className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-tinta text-tinta hover:bg-arena"
      >
        {/* moon in light theme, sun in dark theme */}
        <svg className="h-5 w-5 fill-current dark:hidden" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z" />
        </svg>
        <svg className="hidden h-5 w-5 fill-current dark:block" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="4" />
          <path d="M9.25 1h1.5v2.5h-1.5V1Zm0 15.5h1.5V19h-1.5v-2.5ZM1 9.25h2.5v1.5H1v-1.5Zm15.5 0H19v1.5h-2.5v-1.5Z" />
        </svg>
      </button>
    </div>
  );
}
