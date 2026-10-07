import { BarChart3, Gauge, Headphones, LayoutTemplate, Rocket, ShieldCheck } from "lucide-react";

import { IconBox, Section, SectionHead } from "@/components/ui/section";

const icons = [Rocket, LayoutTemplate, Gauge, ShieldCheck, BarChart3, Headphones];

// Bento layout: one large feature card next to a 2x2 of small ones, then a wide closing pair.
const spans = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "",
  "md:col-span-4",
];

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
    <Section tone="alta" deco="grid">
      <SectionHead eyebrow={eyebrow} title={title} desc={desc} />
      <ul className="grid gap-6 md:grid-cols-4">
        {items.map((item, i) => {
          const big = i === 0;
          return (
            <li
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
              className={`card-pop flex flex-col rounded-md border-2 border-tinta p-6 shadow-hard ${spans[i % spans.length]} ${
                big ? "justify-between bg-rio text-papel md:p-8" : "bg-papel"
              }`}
            >
              <IconBox icon={icons[i % icons.length]} tone="sol" size={big ? "lg" : "md"} />
              <div className={big ? "mt-16" : "mt-4"}>
                <h3 className={`font-display mb-2 font-bold ${big ? "text-3xl leading-9" : "text-[22px] leading-7"}`}>{item.title}</h3>
                <p className={big ? "text-lg text-papel" : "text-tinta-suave"}>{item.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
