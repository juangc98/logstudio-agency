import { Cable, Code2, Gauge, Layers, LifeBuoy, ShoppingBag } from "lucide-react";
import Link from "next/link";

import Marquee from "@/components/ui/marquee";
import { IconBox, Section, SectionHead } from "@/components/ui/section";
import { clientIcons, clientNames } from "@/lib/content";
import { getDict } from "@/lib/i18n";

export const serviceIcons = [Code2, Layers, Cable, ShoppingBag, Gauge, LifeBuoy];

// Secondary block on the home: the agency side. Apps stay the main story.
export default function Services({ lang }: { lang: string }) {
  const { home, doors } = getDict(lang);
  const { agency } = home;
  return (
    <Section id="services">
      <SectionHead eyebrow={agency.eyebrow} title={agency.title} desc={agency.desc} />
      <ul className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {agency.points.map((p, i) => {
          const Icon = serviceIcons[i];
          return (
            <li key={p} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-center gap-4 rounded-md border-2 border-tinta bg-arena shadow-hard p-4">
              <IconBox icon={Icon} tone={i % 2 ? "brote" : "sol"} />
              <span className="font-bold">{p}</span>
            </li>
          );
        })}
      </ul>
      <div className="mb-12 text-center">
        <Link className="btn btn-primary mr-3" href={`/${lang}/contact`}>
          {doors.store}
        </Link>
        <Link className="btn btn-secondary" href={`/${lang}/services`}>
          {agency.cta}
        </Link>
      </div>
      <p className="mb-6 text-center text-sm text-tinta-suave">{agency.logosTitle}</p>
      <Marquee label={agency.logosTitle}>
        {clientNames
          .slice()
          .reverse()
          .map((name, i) => {
            const Icon = clientIcons[(i + 3) % clientIcons.length];
            return (
              <li key={name} className="flex shrink-0 items-center gap-2 text-tinta-suave">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="font-display text-lg font-bold whitespace-nowrap">{name}</span>
              </li>
            );
          })}
      </Marquee>
    </Section>
  );
}
