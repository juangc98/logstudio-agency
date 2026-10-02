import { Handshake } from "lucide-react";
import Link from "next/link";

import Apps from "@/components/apps";
import Benefits from "@/components/benefits";
import { CaseCard, PostCard } from "@/components/cards";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Stats from "@/components/stats";
import Steps from "@/components/steps";
import Testimonials from "@/components/testimonials";
import Trusted from "@/components/trusted";
import Carousel, { CarouselItem } from "@/components/ui/carousel";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import { caseSlugs, postSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

// Parked for later (apps will have plans and pricing): components/pricing-tabs.tsx, features-0x.tsx.
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { home, common } = getDict(lang);
  return (
    <>
      <Hero lang={lang} />
      <Trusted label={home.trusted} />
      <Apps lang={lang} />
      <Stats items={home.stats} />
      <Benefits {...home.benefits} />
      <Steps eyebrow={home.how.eyebrow} title={home.how.title} steps={home.how.steps} />
      <Testimonials {...home.testimonials} prev={common.prev} next={common.next} />
      <Services lang={lang} />

      <Section tone="alta">
        <SectionHead eyebrow={home.cases.eyebrow} title={home.cases.title} desc={home.cases.desc} />
        <Carousel label={home.cases.title} prevLabel={common.prev} nextLabel={common.next}>
          {caseSlugs.map((slug, i) => (
            <CarouselItem key={slug}>
              <CaseCard lang={lang} slug={slug} index={i} />
            </CarouselItem>
          ))}
        </Carousel>
        <p className="mt-4 text-center">
          <Link className="btn btn-outline" href={`/${lang}/case-studies`}>
            {home.cases.cta}
          </Link>
        </p>
      </Section>

      <Section>
        <SectionHead eyebrow={home.blog.eyebrow} title={home.blog.title} />
        <ul className="grid gap-6 md:grid-cols-3">
          {postSlugs.map((slug, i) => (
            <li key={slug} data-aos="fade-up" data-aos-delay={i * 100}>
              <PostCard lang={lang} slug={slug} index={i} />
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <Link className="btn btn-outline" href={`/${lang}/blog`}>
            {home.blog.cta}
          </Link>
        </p>
      </Section>

      <Section tone="alta">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:text-left" data-aos="fade-up">
          <IconBox icon={Handshake} tone="castor" size="lg" />
          <div className="grow">
            <h2 className="font-display mb-2 text-2xl font-bold">{home.partner.title}</h2>
            <p className="text-corteza">{home.partner.desc}</p>
          </div>
          <Link className="btn btn-agency shrink-0" href={`/${lang}/partners`}>
            {home.partner.cta}
          </Link>
        </div>
      </Section>

      <Faq title={home.faq.title} items={home.faq.items} />
      <Cta lang={lang} />
    </>
  );
}
