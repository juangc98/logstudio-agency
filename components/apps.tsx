import { getDict } from "@/lib/i18n";

// TODO(marca): app icons are pending (the manual leaves them undefined). Placeholder squares for now.
export default function Apps({ lang }: { lang: string }) {
  const { apps } = getDict(lang);
  return (
    <section id="apps" className="scroll-mt-16 border-t border-borde bg-crema-alta">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl">{apps.title}</h2>
          <p className="text-lg text-corteza">{apps.subtitle}</p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {apps.items.map((app) => (
            <li key={app.name} className="flex flex-col rounded-md border border-borde bg-crema p-6">
              <div
                aria-hidden="true"
                className="mb-6 h-16 w-16 rounded-sm border border-dashed border-corteza bg-rio-claro"
              />
              <span className="mb-3 inline-flex w-fit rounded-sm bg-panza px-2 py-1 text-xs font-bold text-ink">
                {apps.soon}
              </span>
              <h3 className="font-display mb-2 text-[22px] leading-7 font-bold">{app.name}</h3>
              <p className="text-corteza">{app.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
