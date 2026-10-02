import { Section, SectionHead } from "@/components/ui/section";

// Numbered steps (how it works / process).
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
  const cols = steps.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <Section tone={tone}>
      <SectionHead eyebrow={eyebrow} title={title} />
      <ol className={`grid gap-8 ${cols}`}>
        {steps.map((s, i) => (
          <li key={s.title} data-aos="fade-up" data-aos-delay={i * 120}>
            <span className="font-display mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-castor-hondo text-xl font-bold text-crema">
              {i + 1}
            </span>
            <h3 className="font-display mb-2 text-[22px] leading-7 font-bold">{s.title}</h3>
            <p className="text-corteza">{s.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
