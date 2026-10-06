import { ArrowRight } from "lucide-react";
import Link from "next/link";

import AppMock from "@/components/mock";
import Btn from "@/components/ui/btn";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import { appMeta, appSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

export default function Apps({ lang }: { lang: string }) {
  const { home, apps, common } = getDict(lang);
  return (
    <Section id="apps" tone="base">
      <SectionHead eyebrow={home.apps.eyebrow} title={home.apps.title} desc={home.apps.desc} />
      <div className="space-y-16 md:space-y-24">
        {appSlugs.map((slug, i) => {
          const app = apps.items[slug];
          const meta = appMeta[slug];
          return (
            <div key={slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={i % 2 ? "md:order-2" : ""} data-aos="fade-up">
                <IconBox icon={meta.icon} tone={meta.tone} size="lg" />
                <h3 className="font-display mt-6 mb-3 text-3xl font-bold">{app.name}</h3>
                <p className="mb-6 text-lg leading-[26px] text-tinta-suave">{app.tagline}</p>
                <ul className="mb-8 space-y-2">
                  {app.features.slice(0, 3).map((f, fi) => {
                    const Icon = meta.featureIcons[fi];
                    return (
                      <li key={f.title} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 shrink-0 text-rio" aria-hidden="true" />
                        {f.title}
                      </li>
                    );
                  })}
                </ul>
                <Btn href={`/${lang}/apps/${slug}`} variant="secondary" icon={ArrowRight}>
                  {common.learnMore}
                </Btn>
              </div>
              <div data-aos={i % 2 ? "fade-right" : "fade-left"}>
                <AppMock slug={slug} variant={slug === "promo-engine" ? "list" : "product"} />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
