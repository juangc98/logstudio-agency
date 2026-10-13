import { Calendar, LayoutGrid } from "lucide-react";

import AppMock from "@/components/mock";
import { AccentTitle } from "@/components/ui/accent";
import Btn from "@/components/ui/btn";
import { ShopifyMark } from "@/components/ui/marks";
import { getDict } from "@/lib/i18n";

// Night hero, same look as the launch slides: grid, soft glows, pill badge, headline with an accent tail, chips.
export default function Hero({ lang }: { lang: string }) {
  const { home, doors } = getDict(lang);
  const { hero } = home;
  return (
    <section style={{ "--accent": "#ff6a2b" } as React.CSSProperties} className="on-night noche-grid relative overflow-hidden">
      <span aria-hidden="true" className="glow animate-float -top-20 left-[8%] h-[28rem] w-[28rem] bg-rosa/25" />
      <span aria-hidden="true" className="glow animate-float-slow right-[-6%] bottom-[-10%] h-[32rem] w-[32rem] bg-indigo/25" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-[calc(4rem+40px)] sm:px-6 md:grid-cols-2 md:gap-14 md:pt-24 md:pb-[calc(7rem+40px)]">
        <div>
          <span className="pill-night" data-aos="fade-up">
            <ShopifyMark className="h-3.5 w-3.5" />
            {hero.badge}
          </span>
          <h1 className="font-display mt-6 mb-6 text-5xl leading-[1.02] font-extrabold md:text-[68px] md:leading-[68px]" data-aos="fade-up" data-aos-delay="100">
            <AccentTitle text={hero.title} from={0.5} />
          </h1>
          <p className="muted mb-8 max-w-lg text-lg leading-[26px]" data-aos="fade-up" data-aos-delay="200">
            {hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row" data-aos="fade-up" data-aos-delay="300">
            <Btn href={`/${lang}/apps`} variant="secondary" icon={LayoutGrid}>
              {doors.apps}
            </Btn>
            <Btn href={`/${lang}/contact`} variant="primary" icon={Calendar}>
              {doors.store}
            </Btn>
          </div>
          <p className="muted mt-5 text-sm">{hero.note}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {hero.chips.map((chip) => (
              <li key={chip} className="chip-night">
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative" data-aos="fade-left" data-aos-delay="200">
          <div aria-hidden="true" className="absolute -inset-3 -rotate-3 rounded-[2rem] border border-white/10 bg-white/[0.03]" />
          <div aria-hidden="true" className="absolute -inset-6 rotate-2 rounded-[2.5rem] border border-white/5 bg-white/[0.02]" />
          <div className="relative [&_figcaption]:text-[#a7a5c0]">
            <AppMock slug="promo-engine" />
          </div>
        </div>
      </div>
    </section>
  );
}
