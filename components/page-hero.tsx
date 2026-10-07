import Link from "next/link";

import Deco from "@/components/ui/deco";

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
    <section className="relative overflow-hidden bg-arena">
      <Deco name="pills" />
      <div className="mx-auto max-w-6xl relative px-4 pt-14 pb-[calc(4rem+40px)] sm:px-6 md:pt-24 md:pb-[calc(6rem+40px)]">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          {back && (
            <Link className="mb-6 inline-block text-sm font-bold text-rio hover:underline" href={back.href}>
              ← {back.label}
            </Link>
          )}
          <h1 className="font-display mb-4 text-4xl leading-tight font-bold md:text-5xl">{title}</h1>
          {desc && <p className="text-lg text-tinta-suave">{desc}</p>}
          {children && <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">{children}</div>}
        </div>
      </div>
    </section>
  );
}
