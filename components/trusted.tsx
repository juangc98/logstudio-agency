import Marquee from "@/components/ui/marquee";
import { clientIcons, clientNames } from "@/lib/content";

// Placeholder client names and generic icons. Replace with real logos (SVG) when available.
export default function Trusted({ label }: { label: string }) {
  return (
    <section className="border-y border-linea bg-rio-claro">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="mb-6 text-center text-sm text-tinta-suave">{label}</p>
        <Marquee label={label}>
          {clientNames.map((name, i) => {
            const Icon = clientIcons[i];
            return (
              <li key={name} className="flex shrink-0 items-center gap-2 text-tinta-suave">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="font-display text-lg font-bold whitespace-nowrap">{name}</span>
              </li>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
