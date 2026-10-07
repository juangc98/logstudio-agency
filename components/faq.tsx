import { Plus } from "lucide-react";

import type { DecoName } from "@/components/ui/deco";
import { Section, SectionHead } from "@/components/ui/section";

// Native <details>: keyboard and screen-reader friendly, no JS.
export default function Faq({
  title,
  items,
  tone = "base",
  deco,
}: {
  title: string;
  items: { q: string; a: string }[];
  tone?: "base" | "alta";
  deco?: DecoName;
}) {
  return (
    <Section tone={tone} deco={deco}>
      <SectionHead title={title} />
      <div className="mx-auto max-w-3xl space-y-3" data-aos="fade-up">
        {items.map((item) => (
          <details key={item.q} className="group rounded-md border-2 border-tinta bg-papel shadow-hard open:bg-arena">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-bold">
              {item.q}
              <Plus className="h-5 w-5 shrink-0 transition group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="px-4 pb-4 text-tinta-suave">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
