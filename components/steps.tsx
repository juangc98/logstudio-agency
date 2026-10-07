"use client";

import { useEffect, useRef } from "react";

import { Section, SectionHead } from "@/components/ui/section";

// Vertical timeline. Each step fades in on its own as it scrolls into view, one after another.
// Reduced motion: everything is visible from the start (see motion-reduce classes).
export default function Steps({
  eyebrow,
  title,
  steps,
  tone = "alta",
}: {
  eyebrow?: string;
  title: string;
  steps: { title: string; desc: string }[];
  tone?: "base" | "alta";
}) {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = list.current?.querySelectorAll<HTMLElement>("[data-step]");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.in = "true";
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -30% 0px", threshold: 0.2 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section tone={tone} deco="rings-left">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          <SectionHead eyebrow={eyebrow} title={title} align="left" />
        </div>
        <ol ref={list} className="relative space-y-10 md:space-y-16">
          {/* rail */}
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[19px] w-0.5 bg-tinta/20" />
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-step
              data-in="false"
              className="relative translate-y-10 pl-16 opacity-0 transition duration-700 ease-out data-[in=true]:translate-y-0 data-[in=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            >
              <span className="font-display absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-tinta bg-brasa text-lg font-extrabold">
                {i + 1}
              </span>
              <div className="card-pop rounded-md border-2 border-tinta bg-papel p-6 shadow-hard">
                <h3 className="font-display mb-2 text-[22px] leading-7 font-bold">{s.title}</h3>
                <p className="text-tinta-suave">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
