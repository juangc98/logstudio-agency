import { CaseCard } from "@/components/cards";
import Cta from "@/components/cta";
import PageHero from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { caseSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return { title: `${getDict(lang).cases.index.title} · log studio` };
}

export default async function CasesIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { cases } = getDict(lang);
  return (
    <>
      <PageHero title={cases.index.title} desc={cases.index.desc} />
      <Section border={false}>
        <ul className="grid gap-6 md:grid-cols-3">
          {caseSlugs.map((slug, i) => (
            <li key={slug} data-aos="fade-up" data-aos-delay={i * 100}>
              <CaseCard lang={lang} slug={slug} index={i} />
            </li>
          ))}
        </ul>
      </Section>
      <Cta lang={lang} />
    </>
  );
}
