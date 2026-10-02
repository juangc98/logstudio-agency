import Link from "next/link";

import { Section } from "@/components/ui/section";
import { getDict } from "@/lib/i18n";

export default function Cta({ lang }: { lang: string }) {
  const { home, doors } = getDict(lang);
  return (
    <Section tone="rio">
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">{home.final.title}</h2>
        <p className="mb-8 text-lg">{home.final.desc}</p>
        <div className="mx-auto flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
          <Link className="btn btn-apps" href={`/${lang}/apps`}>
            {doors.apps}
          </Link>
          <Link className="btn btn-agency" href={`/${lang}/contact`}>
            {doors.store}
          </Link>
        </div>
      </div>
    </Section>
  );
}
