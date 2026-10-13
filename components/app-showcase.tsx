"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import FeatureVisual from "@/components/feature-visuals";
import { appMeta, type AppSlug } from "@/lib/content";

// Skailama-style app section: feature lines on one side, the screen on the other swaps as you hover (or focus / tap) a line.
export default function AppShowcase({
  slug,
  name,
  tagline,
  desc,
  features,
  href,
  cta,
  flip = false,
  intro,
  headingTag = "h2",
  first = false,
  extra,
}: {
  slug: AppSlug;
  name: string;
  tagline: string;
  desc: string;
  features: { title: string; desc: string }[];
  href?: string;
  cta?: string;
  flip?: boolean;
  intro?: React.ReactNode;
  headingTag?: "h1" | "h2";
  first?: boolean;
  extra?: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const meta = appMeta[slug];
  const words = tagline.split(" ");
  const cut = Math.ceil(words.length / 2);
  const H = headingTag;
  return (
    <section
      id={slug}
      style={{ "--accent": meta.accent } as React.CSSProperties}
      className={`on-night noche-grid relative scroll-mt-28 overflow-hidden ${first ? "" : "-mt-10 rounded-t-[32px] md:rounded-t-[48px]"}`}
    >
      <span aria-hidden="true" className={`glow animate-float top-10 h-96 w-96 bg-[var(--accent)]/30 ${flip ? "-right-32" : "-left-32"}`} />
      <span aria-hidden="true" className={`glow animate-float-slow bottom-0 h-80 w-80 bg-indigo/20 ${flip ? "-left-24" : "-right-24"}`} />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-[calc(5rem+40px)] sm:px-6 md:pt-28 md:pb-[calc(7rem+40px)]">
        {intro}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className={flip ? "md:order-2" : ""} data-aos="fade-up">
            <span className="pill-night mb-6">{name}</span>
            <H className="font-display mb-5 text-4xl leading-[1.05] font-extrabold md:text-[56px] md:leading-[58px]">
              {words.slice(0, cut).join(" ")} <span className="accent-text">{words.slice(cut).join(" ")}</span>
            </H>
            <p className="muted mb-8 max-w-md text-lg leading-[26px]">{desc}</p>
            <ul className="mb-9 -ml-3 space-y-1">
              {features.map((f, i) => {
                const Icon = meta.featureIcons[i];
                const on = active === i;
                return (
                  <li key={f.title}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={on}
                      className={`relative flex w-full items-start gap-4 rounded-2xl px-3 py-3 text-left transition duration-300 ${
                        on ? "bg-white/[0.06]" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 ${
                          on ? "bg-[var(--accent)] text-noche" : "bg-white/10 text-white"
                        }`}
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="font-display block text-lg font-bold">{f.title}</span>
                        <span
                          className={`muted grid text-[15px] leading-6 transition-all duration-300 ${
                            on ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <span className="overflow-hidden">{f.desc}</span>
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`absolute top-3 bottom-3 left-0 w-0.5 rounded-full bg-[var(--accent)] transition-opacity duration-300 ${
                          on ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              {href && cta && (
                <Link className="btn btn-secondary" href={href}>
                  {cta}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              {extra}
            </div>
          </div>
          <div data-aos={flip ? "fade-right" : "fade-left"} className="relative">
            <span aria-hidden="true" className="absolute inset-4 rounded-[2rem] bg-[var(--accent)]/20 blur-3xl" />
            <div className="relative">
              <FeatureVisual slug={slug} active={active} accent={meta.accent} />
              <p className="muted mt-4 text-center text-xs">Example screens · numbers are illustrative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
