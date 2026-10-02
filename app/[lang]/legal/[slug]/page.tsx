import PageHero from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { type LegalSlug, legalSlugs } from "@/lib/content";
import { getDict, withLocales } from "@/lib/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => withLocales(legalSlugs);

type P = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: P) {
  const { lang, slug } = await params;
  return { title: `${getDict(lang).legal.items[slug as LegalSlug].title} · log studio` };
}

export default async function LegalPage({ params }: P) {
  const { lang, slug } = await params;
  const { legal, common } = getDict(lang);
  const doc = legal.items[slug as LegalSlug];
  return (
    <>
      <PageHero title={doc.title} desc={`${common.updated}: ${doc.updated}`} />
      <Section border={false}>
        <article className="mx-auto max-w-2xl">
          {doc.sections.map((s) => (
            <section key={s.title} className="mb-8">
              <h2 className="font-display mb-2 text-2xl font-bold">{s.title}</h2>
              <p className="text-lg text-corteza">{s.body}</p>
            </section>
          ))}
        </article>
      </Section>
    </>
  );
}
