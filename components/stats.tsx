import Counter from "@/components/counter";
import { Section } from "@/components/ui/section";

export default function Stats({ items }: { items: { value: number; suffix: string; label: string }[] }) {
  return (
    <Section tone="tinta" deco="rings-right">
      <dl className="grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
        {items.map((s, i) => (
          <div key={s.label} data-aos="fade-up" data-aos-delay={i * 100}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display mb-2 text-5xl font-extrabold tabular-nums text-sol md:text-6xl">
              <Counter number={s.value} duration={1800} />
              {s.suffix}
            </dd>
            <p className="text-sm text-linea">{s.label}</p>
          </div>
        ))}
      </dl>
    </Section>
  );
}
