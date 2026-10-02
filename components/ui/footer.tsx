import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import { appSlugs, legalSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

import Logo from "./logo";

export default function Footer({ lang }: { lang: string }) {
  const { nav, footer, common, apps, legal } = getDict(lang);
  const cols = [
    {
      title: nav.apps,
      links: [
        ...appSlugs.map((s) => ({ label: apps.items[s].name, href: `/${lang}/apps/${s}` })),
        { label: nav.allApps, href: `/${lang}/apps` },
      ],
    },
    {
      title: nav.company,
      links: [
        { label: nav.services, href: `/${lang}/services` },
        { label: nav.about, href: `/${lang}/about` },
        { label: nav.partners, href: `/${lang}/partners` },
        { label: nav.contact, href: `/${lang}/contact` },
      ],
    },
    {
      title: nav.resources,
      links: [
        { label: nav.caseStudies, href: `/${lang}/case-studies` },
        { label: nav.blog, href: `/${lang}/blog` },
        { label: nav.docs, href: `/${lang}/docs` },
      ],
    },
    {
      title: footer.legal,
      links: legalSlugs.map((s) => ({ label: legal.items[s].title, href: `/${lang}/legal/${s}` })),
    },
  ];
  return (
    <footer className="border-t border-borde bg-crema-alta">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link href={`/${lang}`} className="mb-4 inline-block">
              <Logo height={28} />
            </Link>
            <p className="mb-4 max-w-xs text-sm text-corteza">{footer.tagline}</p>
            {/* TODO(marca): official Shopify Partner badge */}
            <p className="inline-flex items-center gap-2 rounded-sm bg-rio-claro px-3 py-2 text-xs font-bold">
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              {common.partnerBadge}
            </p>
          </div>
          {cols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-3 text-sm font-bold">{col.title}</h2>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link className="text-corteza hover:text-ink" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        {/* TODO(marca): social links once the accounts exist */}
        <p className="mt-12 border-t border-borde pt-6 text-sm text-corteza">
          &copy; {new Date().getFullYear()} log studio. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
