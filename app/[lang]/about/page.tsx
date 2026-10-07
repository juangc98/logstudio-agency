import { Hammer, LineChart, MessageCircle } from "lucide-react";

import Cta from "@/components/cta";
import PageHero from "@/components/page-hero";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import { getDict } from "@/lib/i18n";

const valueIcons = [Hammer, LineChart, MessageCircle];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return { title: `${getDict(lang).nav.about} · log studio` };
}

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { about } = getDict(lang);
  return (
    <>
      <PageHero title={about.hero.title} desc={about.hero.desc} />

      <Section border={false}>
        <div className="mx-auto max-w-3xl" data-aos="fade-up">
          <h2 className="font-display mb-6 text-3xl font-bold">{about.story.title}</h2>
          {about.story.paras.map((p) => (
            <p key={p} className="mb-4 text-lg text-tinta-suave">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="alta" deco="rings-right">
        <SectionHead title={about.valuesTitle} />
        <ul className="grid gap-6 md:grid-cols-3">
          {about.values.map((v, i) => (
            <li key={v.title} data-aos="fade-up" data-aos-delay={i * 100} className="card-pop rounded-md border-2 border-tinta bg-papel shadow-hard p-6">
              <IconBox icon={valueIcons[i]} tone="sol" />
              <h3 className="font-display mt-4 mb-2 text-[22px] leading-7 font-bold">{v.title}</h3>
              <p className="text-tinta-suave">{v.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Cta lang={lang} />
    </>
  );
}
