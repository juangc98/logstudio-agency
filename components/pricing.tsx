import { Check } from "lucide-react";
import Link from "next/link";

import { Badge, Section, SectionHead } from "@/components/ui/section";

export type Plan = { name: string; price: string; period: string; desc: string; features: string[]; cta: string };

// TODO(marca): placeholder plans and prices. Plan index 1 is highlighted as the popular one.
export default function Pricing({
  title,
  desc,
  plans,
  popular,
  href,
}: {
  title: string;
  desc: string;
  plans: Plan[];
  popular: string;
  href: string;
}) {
  return (
    <Section id="pricing" tone="base">
      <SectionHead title={title} desc={desc} />
      <ul className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <li
            key={plan.name}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className={`card-pop flex flex-col rounded-md border-2 border-tinta p-6 shadow-hard ${i === 1 ? "bg-arena" : "bg-papel"}`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-[22px] font-bold">{plan.name}</h3>
              {i === 1 && <Badge>{popular}</Badge>}
            </div>
            <p className="mb-4 text-tinta-suave">{plan.desc}</p>
            <p className="mb-6">
              <span className="font-display text-4xl font-bold">{plan.price}</span>
              <span className="text-tinta-suave"> {plan.period}</span>
            </p>
            <ul className="mb-8 grow space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brote" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Link className={`btn w-full ${i === 1 ? "btn-primary" : "btn-secondary"}`} href={href}>
              {plan.cta}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
