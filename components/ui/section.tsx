import type { LucideIcon } from "lucide-react";

import Deco, { type DecoName } from "./deco";

// Surfaces are papel, arena or tinta only. Color lives in accents (brasa buttons, sol badges, app icons).
type Tone = "base" | "alta" | "tinta";

const tones: Record<Tone, string> = {
  base: "bg-papel text-tinta",
  alta: "bg-arena text-tinta",
  tinta: "on-dark bg-tinta text-papel",
};

// Sections overlap the previous one by 40px with a rounded top edge (divider). Bottom padding adds the 40px back.
export function Section({
  id,
  tone = "base",
  deco,
  children,
}: {
  id?: string;
  tone?: Tone;
  deco?: DecoName;
  /** @deprecated kept so old call sites compile; sections no longer draw a top border */
  border?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative -mt-10 scroll-mt-28 overflow-hidden rounded-t-[32px] md:rounded-t-[48px] ${tones[tone]}`}
    >
      {deco && <Deco name={deco} dark={tone === "tinta"} />}
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-[calc(4rem+40px)] sm:px-6 md:pt-28 md:pb-[calc(7rem+40px)]">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <div data-head className={`mb-12 max-w-3xl md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`} data-aos="fade-up">
      {eyebrow && <p className="etiqueta mb-3 text-tinta-suave">{eyebrow}</p>}
      <h2 className="font-display mb-4 text-3xl leading-tight font-bold md:text-[40px] md:leading-[44px]">{title}</h2>
      {desc && <p className="text-lg leading-[26px] text-tinta-suave">{desc}</p>}
    </div>
  );
}

const iconTones = {
  sol: "bg-sol text-tinta",
  rio: "bg-rio-claro text-rio",
  brote: "bg-brote-claro text-tinta",
  brasa: "bg-brasa text-tinta",
  uva: "bg-uva-claro text-tinta",
} as const;

export function IconBox({
  icon: Icon,
  tone = "rio",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: keyof typeof iconTones;
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  return (
    <span
      className={`inline-flex ${box} shrink-0 items-center justify-center ${iconTones[tone]}`}
      style={{ borderRadius: "var(--radius-punta)" }}
      aria-hidden="true"
    >
      <Icon className={size === "lg" ? "h-7 w-7" : "h-5 w-5"} strokeWidth={2.25} />
    </span>
  );
}

export function Badge({ children, tone = "sol" }: { children: React.ReactNode; tone?: "sol" | "arena" }) {
  const t = { sol: "bg-sol text-tinta", arena: "bg-arena text-tinta" }[tone];
  return <span className={`etiqueta inline-flex w-fit items-center gap-1 rounded-sm px-2 py-1 ${t}`}>{children}</span>;
}
