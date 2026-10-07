import { ArrowRight } from "lucide-react";
import Link from "next/link";

import AppMock from "@/components/mock";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import Tabs from "@/components/ui/tabs";
import { appMeta, appSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

// Interactive: pick an app, the panel swaps to its pitch and mockup.
export default function AppExplorer({ lang }: { lang: string }) {
  const { home, apps, common } = getDict(lang);
  const items = appSlugs.map((slug) => {
    const app = apps.items[slug];
    const meta = appMeta[slug];
    return {
      id: slug,
      label: app.name,
      icon: <IconBox icon={meta.icon} tone={meta.tone} />,
      panel: (
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="font-display mb-3 text-3xl font-bold">{app.tagline}</h3>
            <p className="mb-6 text-lg text-tinta-suave">{app.desc}</p>
            <ul className="mb-8 space-y-3">
              {app.features.map((f, i) => {
                const Icon = meta.featureIcons[i];
                return (
                  <li key={f.title} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="font-semibold">{f.title}.</span> <span className="text-tinta-suave">{f.desc}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <Link className="btn btn-primary" href={`/${lang}/apps/${slug}`}>
              {common.learnMore}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <AppMock slug={slug} />
        </div>
      ),
    };
  });

  return (
    <Section id="apps" tone="base" deco="waves">
      <SectionHead eyebrow={home.apps.eyebrow} title={home.apps.title} desc={home.apps.desc} />
      <Tabs items={items} label={home.apps.title} />
    </Section>
  );
}
