import AppShowcase from "@/components/app-showcase";
import { SectionHead } from "@/components/ui/section";
import { appSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

// One full-width section per app. Replaces the old tabbed explorer.
export default function AppSections({ lang }: { lang: string }) {
  const { home, apps, common } = getDict(lang);
  return (
    <div id="apps">
      {appSlugs.map((slug, i) => {
        const app = apps.items[slug];
        return (
          <AppShowcase
            key={slug}
            slug={slug}
            name={app.name}
            tagline={app.tagline}
            desc={app.desc}
            features={app.features}
            href={`/${lang}/apps/${slug}`}
            cta={common.learnMore}
            flip={i % 2 === 1}
            intro={
              i === 0 ? (
                <div className="on-dark">
                  <SectionHead eyebrow={home.apps.eyebrow} title={home.apps.title} desc={home.apps.desc} />
                </div>
              ) : undefined
            }
          />
        );
      })}
    </div>
  );
}
