import { Section, SectionHead } from "@/components/ui/section";

const panels = ["bg-rio-claro", "bg-sol-claro", "bg-brote-claro", "bg-brasa-claro"];

export default function Steps({
  eyebrow,
  title,
  steps,
  tone = "base",
}: {
  eyebrow?: string;
  title: string;
  steps: { title: string; desc: string }[];
  tone?: "base" | "alta";
}) {
  const cols = steps.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <Section tone={tone}>
      <SectionHead eyebrow={eyebrow} title={title} />
      <ol className={`grid gap-6 ${cols}`}>
        {steps.map((s, i) => (
          <li key={s.title} data-aos="fade-up" data-aos-delay={i * 120} className="card-pop overflow-hidden rounded-md border-2 border-tinta bg-papel shadow-hard">
            <div className={`h-16 ${panels[i % panels.length]}`} aria-hidden="true" />
            <div className="p-6">
              <span className="etiqueta mb-3 block text-rio">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mb-2 text-[22px] leading-7 font-bold">{s.title}</h3>
              <p className="text-tinta-suave">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
