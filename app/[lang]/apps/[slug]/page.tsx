import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Cta from "@/components/cta";
import Faq from "@/components/faq";
import AppMock from "@/components/mock";
import Pricing from "@/components/pricing";
import Steps from "@/components/steps";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import { appMeta, type AppSlug, appSlugs } from "@/lib/content";
import { getDict, withLocales } from "@/lib/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => withLocales(appSlugs);

type P = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: P) {
  const { lang, slug } = await params;
  const app = getDict(lang).apps.items[slug as AppSlug];
  return { title: `${app.name} · log studio`, description: app.tagline };
}

export default async function AppPage({ params }: P) {
  const { lang, slug: raw } = await params;
  const slug = raw as AppSlug;
  const d = getDict(lang);
  const app = d.apps.items[slug];
  const meta = appMeta[slug];
  const { page } = d.apps;
  const others = appSlugs.filter((s) => s !== slug);

  return (
    <>
      <section className="bg-crema-alta">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-16 md:py-20">
          <div data-aos="fade-up">
            <Link className="mb-6 inline-block text-sm font-bold text-rio hover:underline" href={`/${lang}/apps`}>
              ← {d.nav.allApps}
            </Link>
            <div className="mb-6">
              <IconBox icon={meta.icon} tone={meta.tone} size="lg" />
            </div>
            <h1 className="font-display mb-4 text-4xl leading-tight font-bold md:text-5xl">{app.name}</h1>
            <p className="mb-2 text-xl font-bold">{app.tagline}</p>
            <p className="mb-8 text-lg text-corteza">{app.desc}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* TODO(marca): link to the Shopify App Store listing once the app is published */}
              <Link className="btn btn-apps" href={`/${lang}/contact`}>
                {d.common.installApp}
              </Link>
              <Link className="btn btn-outline" href={`/${lang}/docs/${slug}`}>
                {page.docsCta}
              </Link>
            </div>
          </div>
          <div data-aos="fade-left">
            <AppMock slug={slug} />
          </div>
        </div>
      </section>

      <Section tone="rio" border={false}>
        <dl className="grid gap-8 text-center sm:grid-cols-3">
          {app.metrics.map((m) => (
            <div key={m.label}>
              <dd className="font-display text-4xl font-bold md:text-5xl">{m.value}</dd>
              <dt className="mt-1 text-sm">{m.label}</dt>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHead title={page.featuresTitle} desc={page.featuresDesc} />
        <ul className="grid gap-6 sm:grid-cols-2">
          {app.features.map((f, i) => (
            <li key={f.title} data-aos="fade-up" data-aos-delay={(i % 2) * 100} className="flex gap-4 rounded-md border border-borde bg-crema-alta p-6">
              <IconBox icon={meta.featureIcons[i]} tone={meta.tone} />
              <div>
                <h3 className="font-display mb-1 text-[22px] leading-7 font-bold">{f.title}</h3>
                <p className="text-corteza">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Steps title={page.howTitle} steps={app.steps} />
      <Pricing
        title={page.pricingTitle}
        desc={page.pricingDesc}
        popular={page.popular}
        href={`/${lang}/contact`}
        plans={app.plans.map((p) => ({ ...p, period: p.price === "$0" ? "" : page.perMonth, cta: page.choose }))}
      />
      <Faq title={page.faqTitle} items={app.faq} />

      <Section tone="alta">
        <SectionHead title={page.relatedTitle} />
        <ul className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {others.map((s) => {
            const o = d.apps.items[s];
            return (
              <li key={s}>
                <Link href={`/${lang}/apps/${s}`} className="group flex h-full items-start gap-4 rounded-md border border-borde bg-crema p-6 hover:border-ink">
                  <IconBox icon={appMeta[s].icon} tone={appMeta[s].tone} />
                  <span>
                    <span className="font-display block text-xl font-bold">{o.name}</span>
                    <span className="mb-2 block text-corteza">{o.tagline}</span>
                    <span className="flex items-center gap-2 text-sm font-bold text-rio">
                      {d.common.learnMore}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </span>
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
