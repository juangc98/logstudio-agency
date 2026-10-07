import { Asterisk } from "lucide-react";

import Marquee from "@/components/ui/marquee";

// Tilted band that breaks the vertical rhythm between sections. Purely decorative repetition of the key words.
export default function Ribbon({ words }: { words: string[] }) {
  return (
    <div aria-hidden="true" className="relative z-20 -my-6 overflow-hidden py-6">
      <div className="-rotate-1 border-y-2 border-tinta bg-sol py-4 text-tinta">
        <Marquee label="">
          {[...words, ...words].map((w, i) => (
            <li key={`${w}-${i}`} className="font-display flex shrink-0 items-center gap-8 text-2xl font-extrabold whitespace-nowrap md:text-4xl">
              {w}
              <Asterisk className="h-6 w-6 md:h-8 md:w-8" strokeWidth={3} />
            </li>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
