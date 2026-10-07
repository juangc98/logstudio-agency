import Cta from "@/components/cta";
import PageHero from "@/components/page-hero";
import { Badge, Section } from "@/components/ui/section";
import { type CaseSlug, caseSlugs } from "@/lib/content";
import { getDict, withLocales } from "@/lib/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => withLocales(caseSlugs);

type P = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: P) {
  const { lang, slug } = await params;
  const c = getDict(lang).cases.items[slug as CaseSlug];
  return { title: `${c.client} · log studio`, description: c.summary };
}

export default async function CasePage({ params }: P) {
  const { lang, slug } = await params;
  const { cases } = getDict(lang);
  const c = cases.items[slug as CaseSlug];
  const blocks = [
    [cases.labels.challenge, c.challenge],
    [cases.labels.solution, c.solution],
    [cases.labels.result, c.result],
  ];
  return (
    <>
      <PageHero title={c.title} desc={c.summary} back={{ href: `/${lang}/case-studies`, label: cases.labels.back }}>
        <Badge tone="arena">{c.client}</Badge>
        <Badge>{c.industry}</Badge>
      </PageHero>

      <Section tone="deep" deco="rings-right">
        <dl className="grid gap-8 text-center sm:grid-cols-3">
          {c.metrics.map((m) => (
            <div key={m.label}>
              <dd className="font-display text-4xl font-bold md:text-5xl">{m.value}</dd>
              <dt className="mt-1 text-sm">{m.label}</dt>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {blocks.map(([title, body]) => (
            <div key={title} data-aos="fade-up">
              <h2 className="font-display mb-3 text-2xl font-bold">{title}</h2>
              <p className="text-lg text-tinta-suave">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Cta lang={lang} />
    </>
  );
}
