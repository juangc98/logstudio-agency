import { Calendar, LayoutGrid } from "lucide-react";

import Btn from "@/components/ui/btn";
import { Section } from "@/components/ui/section";
import { getDict } from "@/lib/i18n";

export default function Cta({ lang }: { lang: string }) {
  const { home, doors } = getDict(lang);
  return (
    <Section tone="tinta" deco="rings-right">
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <h2 className="font-display mb-4 text-3xl font-bold md:text-[40px] md:leading-[44px]">{home.final.title}</h2>
        <p className="mb-8 text-lg leading-[26px] text-linea">{home.final.desc}</p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Btn href={`/${lang}/apps`} variant="secondary" icon={LayoutGrid}>
            {doors.apps}
          </Btn>
          <Btn href={`/${lang}/contact`} variant="primary" icon={Calendar}>
            {doors.store}
          </Btn>
        </div>
      </div>
    </Section>
  );
}
