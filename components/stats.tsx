import Counter from "@/components/counter";
import { Section } from "@/components/ui/section";

export default function Stats({ items }: { items: { value: number; suffix: string; label: string }[] }) {
  return (
    <Section tone="rio" border={false}>
      <dl className="grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
        {items.map((s, i) => (
          <div key={s.label} data-aos="fade-up" data-aos-delay={i * 100}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display mb-2 text-4xl font-bold tabular-nums md:text-5xl">
              <Counter number={s.value} duration={1800} />
              {s.suffix}
            </dd>
            <p className="text-sm">{s.label}</p>
          </div>
        ))}
      </dl>
    </Section>
  );
}
