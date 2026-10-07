import { Check } from "lucide-react";
import Link from "next/link";

import PageHero from "@/components/page-hero";
import { serviceIcons } from "@/components/services";
import Steps from "@/components/steps";
import Trusted from "@/components/trusted";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return { title: `${getDict(lang).nav.services} · log studio` };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { services, common, doors, home, cases } = getDict(lang);
  return (
    <>
      <PageHero title={services.hero.title} desc={services.hero.desc}>
        <Link className="btn btn-primary" href={`/${lang}/contact`}>
          {doors.store}
        </Link>
        <Link className="btn btn-secondary" href={`/${lang}/case-studies`}>
          {cases.index.title}
        </Link>
      </PageHero>
      <Trusted label={home.agency.logosTitle} />

      <Section>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <li key={s.title} data-aos="fade-up" data-aos-delay={(i % 3) * 100} className="card-pop rounded-md border-2 border-tinta bg-papel shadow-hard p-6">
              <IconBox icon={serviceIcons[i]} tone="sol" />
              <h2 className="font-display mt-4 mb-2 text-[22px] leading-7 font-bold">{s.title}</h2>
              <p className="text-tinta-suave">{s.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Steps title={services.processTitle} steps={services.process} />

      <Section>
        <SectionHead title={services.whyTitle} />
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {services.why.map((w) => (
            <li key={w} className="card-pop flex items-center gap-3 rounded-md border-2 border-tinta bg-papel shadow-hard p-4 font-bold">
              <Check className="h-5 w-5 shrink-0 text-brote" aria-hidden="true" />
              {w}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="deep" deco="rings-right">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">{services.cta.title}</h2>
          <p className="mb-8 text-lg">{services.cta.desc}</p>
          <Link className="btn btn-primary" href={`/${lang}/contact`}>
            {common.bookCall}
          </Link>
        </div>
      </Section>
    </>
  );
}
