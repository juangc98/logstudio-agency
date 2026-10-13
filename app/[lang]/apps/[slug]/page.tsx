import { ArrowRight } from "lucide-react";
import Link from "next/link";

import AppShowcase from "@/components/app-showcase";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import AppMock from "@/components/mock";
import Pricing from "@/components/pricing";
import Steps from "@/components/steps";
import Btn from "@/components/ui/btn";
import Deco from "@/components/ui/deco";
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
      <AppShowcase
        slug={slug}
        name={app.name}
        tagline={app.tagline}
        desc={app.desc}
        features={app.features}
        headingTag="h1"
        first
        href={`/${lang}/contact`}
        cta={d.common.installApp}
        extra={
          <Btn href={`/${lang}/docs/${slug}`} variant="primary">
            {page.docsCta}
          </Btn>
        }
        intro={
          <Link className="muted mb-8 inline-block text-sm font-bold hover:text-papel" href={`/${lang}/apps`}>
            ← {d.nav.allApps}
          </Link>
        }
      />

      <Section tone="deep" deco="rings-left">
        <dl className="grid gap-8 text-center sm:grid-cols-3">
          {app.metrics.map((m) => (
            <div key={m.label}>
              <dd className="font-display text-4xl font-bold md:text-5xl">{m.value}</dd>
              <dt className="mt-1 text-sm">{m.label}</dt>
            </div>
          ))}
        </dl>
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

      <Section tone="base">
        <SectionHead title={page.relatedTitle} />
        <ul className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {others.map((s) => {
            const o = d.apps.items[s];
            return (
              <li key={s}>
                <Link href={`/${lang}/apps/${s}`} className="group flex h-full items-start gap-4 rounded-md border-2 border-tinta bg-papel shadow-hard p-6 hover:border-tinta">
                  <IconBox icon={appMeta[s].icon} tone={appMeta[s].tone} />
                  <span>
                    <span className="font-display block text-xl font-bold">{o.name}</span>
                    <span className="mb-2 block text-tinta-suave">{o.tagline}</span>
                    <span className="flex items-center gap-2 text-sm font-bold text-uva">
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
