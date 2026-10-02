import type { LucideIcon } from "lucide-react";

type Tone = "base" | "alta" | "rio";

const tones: Record<Tone, string> = {
  base: "bg-crema text-ink",
  alta: "bg-crema-alta text-ink",
  rio: "bg-rio-claro text-ink",
};

export function Section({
  id,
  tone = "base",
  border = true,
  children,
}: {
  id?: string;
  tone?: Tone;
  border?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-28 ${tones[tone]} ${border ? "border-t border-borde" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">{children}</div>
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
    <div
      className={`mb-12 max-w-3xl md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
      data-aos="fade-up"
    >
      {eyebrow && <p className="mb-3 text-sm font-bold tracking-wide text-rio uppercase">{eyebrow}</p>}
      <h2 className="font-display mb-4 text-3xl leading-tight font-bold md:text-4xl">{title}</h2>
      {desc && <p className="text-lg text-corteza">{desc}</p>}
    </div>
  );
}

const iconTones = {
  panza: "bg-panza text-ink",
  rio: "bg-rio-claro text-rio",
  brote: "bg-brote-claro text-brote",
  castor: "bg-castor-hondo text-crema",
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
    <span className={`inline-flex ${box} shrink-0 items-center justify-center rounded-sm ${iconTones[tone]}`} aria-hidden="true">
      <Icon className={size === "lg" ? "h-7 w-7" : "h-5 w-5"} />
    </span>
  );
}

export function Badge({ children, tone = "panza" }: { children: React.ReactNode; tone?: "panza" | "rio" | "brote" }) {
  const t = { panza: "bg-panza text-ink", rio: "bg-rio-claro text-ink", brote: "bg-brote-claro text-ink" }[tone];
  return <span className={`inline-flex w-fit items-center gap-1 rounded-sm px-2 py-1 text-xs font-bold ${t}`}>{children}</span>;
}
