import { BookOpen } from "lucide-react";
import Link from "next/link";

import PageHero from "@/components/page-hero";
import { IconBox, Section } from "@/components/ui/section";
import { appMeta, appSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return { title: `${getDict(lang).docs.index.title} · log studio` };
}

export default async function DocsIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { docs, apps } = getDict(lang);
  return (
    <>
      <PageHero title={docs.index.title} desc={docs.index.desc} />
      <Section border={false}>
        <ul className="grid gap-6 md:grid-cols-3">
          {appSlugs.map((slug, i) => (
            <li key={slug} data-aos="fade-up" data-aos-delay={i * 100}>
              <Link href={`/${lang}/docs/${slug}`} className="flex h-full flex-col gap-3 rounded-md border border-borde bg-crema-alta p-6 hover:border-ink">
                <IconBox icon={appMeta[slug].icon} tone={appMeta[slug].tone} />
                <h2 className="font-display text-[22px] leading-7 font-bold">{apps.items[slug].name}</h2>
                <p className="grow text-corteza">{docs.items[slug].intro}</p>
                <span className="flex items-center gap-2 text-sm font-bold text-rio">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  {docs.openGuide}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
