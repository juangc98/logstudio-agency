import Link from "next/link";

import AppSections from "@/components/app-sections";
import Benefits from "@/components/benefits";
import Calculator from "@/components/calculator";
import { CaseCard } from "@/components/cards";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Ribbon from "@/components/ribbon";
import Services from "@/components/services";
import Stats from "@/components/stats";
import Trusted from "@/components/trusted";
import Carousel, { CarouselItem } from "@/components/ui/carousel";
import { Section, SectionHead } from "@/components/ui/section";
import { caseSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

// Section rhythm (tone / background asset): never the same asset in two contiguous sections.
// Parked for later (apps will have plans and pricing): components/pricing-tabs.tsx, features-0x.tsx.
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { home, common } = getDict(lang);
  return (
    <>
      <Hero lang={lang} />
      <Trusted label={home.trusted} />
      <Problem {...home.problem} />
      <AppSections lang={lang} />
      <Ribbon words={home.ribbon} />
      <Benefits {...home.benefits} partner={{ ...home.partner, href: `/${lang}/partners` }} />
      <Stats items={home.stats} />
      <Section tone="base" deco="plus">
        <Calculator lang={lang} labels={home.calc} />
      </Section>
      <Services lang={lang} />

      <Section tone="base" deco="rings-left">
        <SectionHead eyebrow={home.cases.eyebrow} title={home.cases.title} desc={home.cases.desc} />
        <Carousel label={home.cases.title} prevLabel={common.prev} nextLabel={common.next}>
          {caseSlugs.map((slug, i) => (
            <CarouselItem key={slug}>
              <CaseCard lang={lang} slug={slug} index={i} />
            </CarouselItem>
          ))}
        </Carousel>
        <p className="mt-4 text-center">
          <Link className="btn btn-secondary" href={`/${lang}/case-studies`}>
            {home.cases.cta}
          </Link>
        </p>
      </Section>

      <Faq title={home.faq.title} items={home.faq.items} tone="alta" deco="waves" />
      <Cta lang={lang} />
    </>
  );
}
