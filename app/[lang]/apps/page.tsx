import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Cta from "@/components/cta";
import AppMock from "@/components/mock";
import PageHero from "@/components/page-hero";
import { IconBox, Section } from "@/components/ui/section";
import { appMeta, appSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return { title: `${getDict(lang).apps.index.title} · log studio` };
}

export default async function AppsIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { apps, common } = getDict(lang);
  return (
    <>
      <PageHero title={apps.index.title} desc={apps.index.desc} />
      <Section border={false}>
        <ul className="grid gap-8 md:grid-cols-3">
          {appSlugs.map((slug, i) => {
            const app = apps.items[slug];
            const meta = appMeta[slug];
            return (
              <li key={slug} data-aos="fade-up" data-aos-delay={i * 100} className="flex flex-col rounded-md border-2 border-tinta bg-arena shadow-hard p-6">
                <IconBox icon={meta.icon} tone={meta.tone} size="lg" />
                <h2 className="font-display mt-5 mb-2 text-2xl font-bold">{app.name}</h2>
                <p className="mb-6 text-tinta-suave">{app.tagline}</p>
                <div className="mb-6 grow">
                  <AppMock slug={slug} />
                </div>
                <Link className="btn btn-secondary w-full" href={`/${lang}/apps/${slug}`}>
                  {common.learnMore}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>
      <Cta lang={lang} />
    </>
  );
}
