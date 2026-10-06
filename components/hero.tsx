import { Calendar, LayoutGrid, ShoppingBag } from "lucide-react";

import AppMock from "@/components/mock";
import Btn from "@/components/ui/btn";
import { Badge } from "@/components/ui/section";
import { getDict } from "@/lib/i18n";

export default function Hero({ lang }: { lang: string }) {
  const { home, doors } = getDict(lang);
  const { hero } = home;
  return (
    <section className="bg-papel">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-12 sm:px-6 md:grid-cols-2 md:gap-14 md:pt-20 md:pb-20">
        <div>
          <Badge tone="rio">
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            {hero.badge}
          </Badge>
          <h1 className="font-display mt-6 mb-6 text-4xl leading-[1.05] font-extrabold md:text-[56px] md:leading-[60px]">
            {hero.title}
          </h1>
          <p className="mb-8 text-lg leading-[26px] text-tinta-suave">{hero.subtitle}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Btn href={`/${lang}/apps`} variant="secondary" icon={LayoutGrid}>
              {doors.apps}
            </Btn>
            <Btn href={`/${lang}/contact`} variant="primary" icon={Calendar}>
              {doors.store}
            </Btn>
          </div>
          <p className="mt-5 text-sm text-tinta-suave">{hero.note}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {hero.chips.map((chip) => (
              <li key={chip} className="rounded-full border-2 border-tinta bg-arena px-3 py-1 text-xs font-semibold">
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <AppMock slug="promo-engine" />
        </div>
      </div>
    </section>
  );
}
