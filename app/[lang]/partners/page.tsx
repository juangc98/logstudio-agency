import { BadgePercent, Headset, Megaphone, Repeat } from "lucide-react";
import Link from "next/link";

import PageHero from "@/components/page-hero";
import Steps from "@/components/steps";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import { getDict } from "@/lib/i18n";

const icons = [Repeat, BadgePercent, Headset, Megaphone];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return { title: `${getDict(lang).nav.partners} · log studio` };
}

export default async function Partners({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { partners } = getDict(lang);
  return (
    <>
      <PageHero title={partners.hero.title} desc={partners.hero.desc}>
        <Link className="btn btn-primary" href={`/${lang}/contact`}>
          {partners.cta}
        </Link>
      </PageHero>

      <Section border={false}>
        <SectionHead title={partners.whyTitle} />
        <ul className="grid gap-6 sm:grid-cols-2">
          {partners.why.map((w, i) => (
            <li key={w.title} data-aos="fade-up" data-aos-delay={(i % 2) * 100} className="flex gap-4 rounded-md border-2 border-tinta bg-arena shadow-hard p-6">
              <IconBox icon={icons[i]} tone={i % 2 ? "brote" : "sol"} />
              <div>
                <h3 className="font-display mb-1 text-[22px] leading-7 font-bold">{w.title}</h3>
                <p className="text-tinta-suave">{w.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Steps title={partners.stepsTitle} steps={partners.steps} />

      <Section tone="rio">
        <p className="text-center">
          <Link className="btn btn-primary" href={`/${lang}/contact`}>
            {partners.cta}
          </Link>
        </p>
      </Section>
    </>
  );
}
