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
    <section className="on-night noche-grid relative overflow-hidden" style={{ "--accent": "#ff6a2b" } as React.CSSProperties}>
      <span aria-hidden="true" className="glow animate-float -top-24 left-[10%] h-80 w-80 bg-rosa/25" />
      <span aria-hidden="true" className="glow animate-float-slow right-[-5%] bottom-[-20%] h-96 w-96 bg-indigo/25" />
      <div className="mx-auto max-w-6xl relative px-4 pt-28 pb-[calc(4rem+40px)] sm:px-6 md:pt-36 md:pb-[calc(6rem+40px)]">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          {back && (
            <Link className="mb-6 inline-block text-sm font-bold muted hover:text-papel" href={back.href}>
              ← {back.label}
            </Link>
          )}
          <h1 className="font-display mb-4 text-4xl leading-tight font-bold md:text-5xl">{title}</h1>
          {desc && <p className="muted text-lg">{desc}</p>}
          {children && <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">{children}</div>}
        </div>
      </div>
    </section>
  );
}
