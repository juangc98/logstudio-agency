import Link from "next/link";

import { getDict } from "@/lib/i18n";

export default function Cta({ lang }: { lang: string }) {
  const { final, doors } = getDict(lang);
  return (
    <section className="border-t border-borde bg-crema-alta">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 md:py-20">
        <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">{final.title}</h2>
        <p className="mb-8 text-lg text-corteza">{final.desc}</p>
        <div className="mx-auto flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
          <Link className="btn btn-agency" href={`/${lang}/contact`}>
            {doors.store}
          </Link>
          <Link className="btn btn-apps" href={`/${lang}#apps`}>
            {doors.apps}
          </Link>
        </div>
      </div>
    </section>
  );
}
