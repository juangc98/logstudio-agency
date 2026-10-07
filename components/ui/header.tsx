import { Calendar, LayoutGrid } from "lucide-react";
import Link from "next/link";

import Btn from "@/components/ui/btn";
import { ShopifyMark } from "@/components/ui/marks";
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
    <header className="sticky top-0 z-30 border-b-2 border-tinta bg-papel">
      <div className="bg-sol text-xs font-semibold text-tinta">
        <p className="mx-auto flex h-8 max-w-6xl items-center justify-center gap-2 px-4">
          <ShopifyMark className="h-4 w-4" />
          {common.partnerBadge}
        </p>
      </div>
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${lang}`} className="shrink-0">
          <Logo height={28} />
        </Link>

        <div className="flex items-center gap-3">
          <HeaderNav items={items} menuLabel={nav.menu} openLabel={nav.openMenu} closeLabel={nav.closeMenu} />
          <HeaderControls lang={lang} languageLabel={nav.language} />
          <Btn href={`/${lang}/apps`} variant="secondary" size="sm" icon={LayoutGrid} className="hidden lg:inline-flex">
            {doors.apps}
          </Btn>
          <Btn href={`/${lang}/contact`} variant="primary" size="sm" icon={Calendar} className="hidden xl:inline-flex">
            {doors.store}
          </Btn>
        </div>
      </div>
    </header>
  );
}
