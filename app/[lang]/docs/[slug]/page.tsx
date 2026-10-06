import Link from "next/link";

import { Section } from "@/components/ui/section";
import { type AppSlug, appSlugs } from "@/lib/content";
import { getDict, withLocales } from "@/lib/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => withLocales(appSlugs);

type P = { params: Promise<{ lang: string; slug: string }> };

const anchor = (i: number) => `section-${i + 1}`;

export async function generateMetadata({ params }: P) {
  const { lang, slug } = await params;
  const d = getDict(lang);
  return { title: `${d.apps.items[slug as AppSlug].name} · ${d.nav.docs} · log studio` };
}

export default async function DocPage({ params }: P) {
  const { lang, slug: raw } = await params;
  const slug = raw as AppSlug;
  const d = getDict(lang);
  const doc = d.docs.items[slug];
  return (
    <Section border={false}>
      <div className="grid gap-10 md:grid-cols-[14rem_1fr]">
        <aside>
          <nav aria-label={d.common.onThisPage} className="md:sticky md:top-32">
            <Link className="mb-4 block text-sm font-bold text-rio hover:underline" href={`/${lang}/docs`}>
              ← {d.nav.docs}
            </Link>
            <p className="mb-2 text-xs font-bold tracking-wide text-tinta-suave uppercase">{d.common.onThisPage}</p>
            <ul className="space-y-2 text-sm">
              {doc.sections.map((s, i) => (
                <li key={s.title}>
                  <a className="hover:text-rio" href={`#${anchor(i)}`}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <article className="max-w-2xl">
          <h1 className="font-display mb-4 text-4xl font-bold">{d.apps.items[slug].name}</h1>
          <p className="mb-10 text-lg text-tinta-suave">{doc.intro}</p>
          {doc.sections.map((s, i) => (
            <section key={s.title} id={anchor(i)} className="mb-10 scroll-mt-28">
              <h2 className="font-display mb-3 text-2xl font-bold">{s.title}</h2>
              <p className="text-lg">{s.body}</p>
            </section>
          ))}
        </article>
      </div>
    </Section>
  );
}
