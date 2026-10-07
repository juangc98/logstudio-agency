import { BarChart3, Gauge, Headphones, LayoutTemplate, Rocket, ShieldCheck } from "lucide-react";

import { IconBox, Section, SectionHead } from "@/components/ui/section";

const icons = [Rocket, LayoutTemplate, Gauge, ShieldCheck, BarChart3, Headphones];

export default function Benefits({
  eyebrow,
  title,
  desc,
  items,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  items: { title: string; desc: string }[];
}) {
  return (
    <Section tone="alta" deco="dots">
      <SectionHead eyebrow={eyebrow} title={title} desc={desc} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 100}
            className="card-pop rounded-md border-2 border-tinta bg-papel shadow-hard p-6"
          >
            <IconBox icon={icons[i % icons.length]} tone="sol" />
            <h3 className="font-display mt-4 mb-2 text-[22px] leading-7 font-bold">{item.title}</h3>
            <p className="text-tinta-suave">{item.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
