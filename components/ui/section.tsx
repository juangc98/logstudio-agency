import type { LucideIcon } from "lucide-react";

type Tone = "base" | "alta" | "rio" | "brasa" | "sol" | "brote";

const tones: Record<Tone, string> = {
  base: "bg-papel text-tinta",
  alta: "bg-arena text-tinta",
  rio: "bg-rio-claro text-tinta",
  brasa: "bg-brasa-claro text-tinta",
  sol: "bg-sol-claro text-tinta",
  brote: "bg-brote-claro text-tinta",
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
    <section id={id} className={`scroll-mt-28 ${tones[tone]} ${border ? "border-t border-linea" : ""}`}>
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
    <div className={`mb-12 max-w-3xl md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`} data-aos="fade-up">
      {eyebrow && <p className="etiqueta text-rio mb-3">{eyebrow}</p>}
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

export function Badge({ children, tone = "sol" }: { children: React.ReactNode; tone?: "sol" | "rio" | "brote" | "brasa" }) {
  const t = {
    sol: "bg-sol text-tinta",
    rio: "bg-rio-claro text-tinta",
    brote: "bg-brote-claro text-tinta",
    brasa: "bg-brasa-claro text-tinta",
  }[tone];
  return <span className={`etiqueta inline-flex w-fit items-center gap-1 rounded-sm px-2 py-1 ${t}`}>{children}</span>;
}
