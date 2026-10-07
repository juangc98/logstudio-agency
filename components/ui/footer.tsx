import Link from "next/link";

import { InstagramMark, LinkedinMark, ShopifyMark } from "@/components/ui/marks";
import { appSlugs, legalSlugs, socialLinks } from "@/lib/content";
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
    <footer className="border-t-2 border-tinta bg-papel">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link href={`/${lang}`} className="mb-4 inline-block">
              <Logo height={28} />
            </Link>
            <p className="mb-4 max-w-xs text-sm text-tinta-suave">{footer.tagline}</p>
            <p className="mb-4 inline-flex items-center gap-2 rounded-sm bg-rio-claro px-3 py-2 text-xs font-semibold">
              <ShopifyMark className="h-4 w-4" />
              {common.partnerBadge}
            </p>
            <p className="mb-2 text-sm font-semibold">{footer.follow}</p>
            <ul className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="card-pop flex h-10 w-10 items-center justify-center rounded-sm border-2 border-tinta bg-papel shadow-hard"
                    aria-label={link.id === "instagram" ? "Instagram" : "LinkedIn"}
                  >
                    {link.id === "instagram" ? <InstagramMark className="h-5 w-5" /> : <LinkedinMark className="h-5 w-5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {cols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-3 text-sm font-semibold">{col.title}</h2>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link className="text-tinta-suave hover:text-tinta" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-12 border-t border-linea pt-6 font-mono text-xs text-tinta-suave">
          $ exit · session closed. &copy; {new Date().getFullYear()} log studio. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
