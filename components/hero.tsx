import Link from "next/link";

import { getDict } from "@/lib/i18n";

export default function Hero({ lang }: { lang: string }) {
  const { hero, doors } = getDict(lang);
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display mb-6 text-4xl leading-tight font-bold md:text-[56px] md:leading-[60px]">
            {hero.title}
          </h1>
          <p className="mb-8 text-lg text-corteza">{hero.subtitle}</p>
          <div className="mx-auto flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <Link className="btn btn-agency" href={`/${lang}/contact`}>
              {doors.store}
            </Link>
            <Link className="btn btn-apps" href={`/${lang}#apps`}>
              {doors.apps}
            </Link>
          </div>
        </div>

        {/* TODO(marca): replace with a real store/app screenshot */}
        <div
          role="img"
          aria-label={hero.placeholder}
          className="mx-auto mt-12 flex aspect-video max-w-4xl items-center justify-center rounded-md border border-dashed border-corteza bg-crema-alta text-sm text-corteza md:mt-16"
        >
          {hero.placeholder}
        </div>
      </div>
    </section>
  );
}
