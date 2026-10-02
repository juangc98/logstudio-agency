import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import { appSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

import HeaderControls from "./header-controls";
import HeaderNav, { type NavItem } from "./header-nav";
import Logo from "./logo";

export default function Header({ lang }: { lang: string }) {
  const { nav, doors, apps, common } = getDict(lang);
  const items: NavItem[] = [
    {
      label: nav.apps,
      children: [
        ...appSlugs.map((slug) => ({
          label: apps.items[slug].name,
          href: `/${lang}/apps/${slug}`,
          desc: apps.items[slug].tagline,
        })),
        { label: nav.allApps, href: `/${lang}/apps` },
      ],
    },
    { label: nav.services, href: `/${lang}/services` },
    {
      label: nav.resources,
      children: [
        { label: nav.caseStudies, href: `/${lang}/case-studies` },
        { label: nav.blog, href: `/${lang}/blog` },
        { label: nav.docs, href: `/${lang}/docs` },
      ],
    },
    { label: nav.partners, href: `/${lang}/partners` },
    { label: nav.about, href: `/${lang}/about` },
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-borde bg-crema">
      {/* Shopify Partner strip. TODO(marca): use the official Shopify Partner badge once the partnership is confirmed. */}
      <div className="bg-rio-claro text-xs font-bold text-ink">
        <p className="mx-auto flex h-8 max-w-6xl items-center justify-center gap-2 px-4">
          <ShoppingBag className="h-4 w-4" aria-hidden="true" />
          {common.partnerBadge}
        </p>
      </div>
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${lang}`} className="shrink-0">
          <Logo height={28} />
        </Link>

        <div className="flex items-center gap-3">
          <HeaderNav items={items} menuLabel={nav.menu} openLabel={nav.openMenu} closeLabel={nav.closeMenu} />
          <HeaderControls lang={lang} themeLabel={nav.theme} languageLabel={nav.language} />
          <Link className="btn btn-apps hidden sm:inline-flex" href={`/${lang}/apps`}>
            {doors.apps}
          </Link>
          <Link className="btn btn-agency hidden 2xl:inline-flex" href={`/${lang}/contact`}>
            {doors.store}
          </Link>
        </div>
      </div>
    </header>
  );
}
