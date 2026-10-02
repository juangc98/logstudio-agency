import Link from "next/link";

// Inner-page header: optional back link, title, description, optional actions.
export default function PageHero({
  title,
  desc,
  back,
  children,
}: {
  title: string;
  desc?: string;
  back?: { href: string; label: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-crema-alta">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          {back && (
            <Link className="mb-6 inline-block text-sm font-bold text-rio hover:underline" href={back.href}>
              ← {back.label}
            </Link>
          )}
          <h1 className="font-display mb-4 text-4xl leading-tight font-bold md:text-5xl">{title}</h1>
          {desc && <p className="text-lg text-corteza">{desc}</p>}
          {children && <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">{children}</div>}
        </div>
      </div>
    </section>
  );
}
