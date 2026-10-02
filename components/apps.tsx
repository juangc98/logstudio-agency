import { ArrowRight } from "lucide-react";
import Link from "next/link";

import AppMock from "@/components/mock";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import { appMeta, appSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

// Alternating rows: text on one side, app mockup on the other.
export default function Apps({ lang }: { lang: string }) {
  const { home, apps, common } = getDict(lang);
  return (
    <Section id="apps" tone="alta">
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
                <p className="mb-6 text-lg text-corteza">{app.tagline}</p>
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
                <Link className="btn btn-apps" href={`/${lang}/apps/${slug}`}>
                  {common.learnMore}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div data-aos={i % 2 ? "fade-right" : "fade-left"}>
                <AppMock slug={slug} />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
