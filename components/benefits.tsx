import { BarChart3, Gauge, Handshake, Headphones, LayoutTemplate, Rocket, ShieldCheck } from "lucide-react";

import Link from "next/link";

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
  partner,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  items: { title: string; desc: string }[];
  partner: { title: string; desc: string; cta: string; href: string };
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
              className={`card-pop flex flex-col rounded-md border border-linea p-6 shadow-hard ${spans[i % spans.length]} ${
                big ? "justify-between noche-grid text-papel md:p-8" : "bg-papel"
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

      <div
        data-aos="fade-up"
        style={{ "--accent": "#ffc93c" } as React.CSSProperties}
        className="on-night noche-grid relative mt-6 flex flex-col items-center gap-6 overflow-hidden rounded-lg p-8 text-center md:flex-row md:p-10 md:text-left"
      >
        <span aria-hidden="true" className="glow animate-float -top-16 -left-10 h-56 w-56 bg-sol/25" />
        <span aria-hidden="true" className="glow animate-float-slow -right-10 -bottom-20 h-64 w-64 bg-rosa/25" />
        <span className="relative">
          <IconBox icon={Handshake} tone="sol" size="lg" />
        </span>
        <div className="relative grow">
          <h3 className="font-display mb-2 text-2xl font-bold">{partner.title}</h3>
          <p className="muted">{partner.desc}</p>
        </div>
        <Link className="btn btn-secondary relative" href={partner.href}>
          {partner.cta}
        </Link>
      </div>
    </Section>
  );
}
