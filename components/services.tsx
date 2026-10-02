import Image from "next/image";
import Link from "next/link";

import { getDict } from "@/lib/i18n";
import castor from "@/public/brand/mascota/castor-construyendo.svg";

export default function Services({ lang }: { lang: string }) {
  const { services, doors } = getDict(lang);
  return (
    <section id="services" className="scroll-mt-16 border-t border-borde">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">{services.title}</h2>
          <p className="mb-8 text-lg text-corteza">{services.subtitle}</p>
          <ul className="mb-8 grid gap-6 sm:grid-cols-2">
            {services.items.map((s) => (
              <li key={s.title}>
                <h3 className="font-display mb-1 text-lg font-bold">{s.title}</h3>
                <p className="text-corteza">{s.desc}</p>
              </li>
            ))}
          </ul>
          <Link className="btn btn-agency" href={`/${lang}/contact`}>
            {doors.store}
          </Link>
        </div>
        <div className="flex justify-center">
          <Image className="w-full max-w-sm" src={castor} alt={services.imageAlt} />
        </div>
      </div>
    </section>
  );
}
