import { ShoppingBag, Star } from "lucide-react";
import Link from "next/link";

import AppMock from "@/components/mock";
import { Badge } from "@/components/ui/section";
import { getDict } from "@/lib/i18n";

export default function Hero({ lang }: { lang: string }) {
  const { home, doors } = getDict(lang);
  const { hero } = home;
  return (
    <section className="bg-crema">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-12 sm:px-6 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <Badge tone="rio">
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            {hero.badge}
          </Badge>
          <h1 className="font-display mt-6 mb-6 text-4xl leading-tight font-bold md:text-[56px] md:leading-[60px]">
            {hero.title}
          </h1>
          <p className="mb-8 text-lg text-corteza">{hero.subtitle}</p>
          <div className="mx-auto flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <Link className="btn btn-apps" href={`/${lang}/apps`}>
              {doors.apps}
            </Link>
            <Link className="btn btn-agency" href={`/${lang}/contact`}>
              {doors.store}
            </Link>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-corteza">
            <span className="flex text-castor" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="font-bold text-ink">{hero.rating}</span>
            <span>{hero.ratingNote}</span>
          </p>
        </div>

        {/* TODO(marca): swap CSS mockups for real app screenshots */}
        <div className="mt-12 grid items-start gap-6 md:mt-16 md:grid-cols-3">
          {(["promo-engine", "bundle-builder", "test-lab"] as const).map((slug, i) => (
            <div key={slug} data-aos="fade-up" data-aos-delay={i * 120} className={i === 1 ? "md:mt-8" : ""}>
              <AppMock slug={slug} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
