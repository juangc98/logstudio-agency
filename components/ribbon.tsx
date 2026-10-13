"use client";

import { Asterisk } from "lucide-react";
import { useEffect, useRef } from "react";

// Two crossing tilted bands. Their text slides sideways as the page scrolls (opposite directions).
// Reduced motion: no sliding, the text stays put.
export default function Ribbon({ words }: { words: string[] }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      // 0 when the ribbon is centred in the viewport, grows as it moves away.
      el.style.setProperty("--shift", `${(r.top + r.height / 2 - window.innerHeight / 2) * 0.9}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const line = (cls: string) =>
    [0, 1, 2, 3].flatMap((k) => words.map((w) => ({ w, k }))).map(({ w, k }, i) => (
      <span key={`${k}-${i}`} className={`font-display flex shrink-0 items-center gap-8 text-3xl font-extrabold whitespace-nowrap md:text-5xl ${cls}`}>
        {w}
        <Asterisk className="h-7 w-7 md:h-10 md:w-10" strokeWidth={3} />
      </span>
    ));

  return (
    <div ref={root} aria-hidden="true" className="relative z-20 -my-10 overflow-hidden py-16 md:py-24" style={{ "--shift": "0px" } as React.CSSProperties}>
      <div className="relative -mx-[10vw] w-[120vw]">
        <div className="-rotate-2 bg-gradient-to-r from-rosa via-brasa to-sol py-5 text-noche shadow-[0_20px_60px_-20px_rgb(255_106_43/0.6)]">
          <div className="flex w-max gap-8 will-change-transform" style={{ transform: "translate3d(calc(var(--shift) * -1 - 1200px), 0, 0)" }}>
            {line("")}
          </div>
        </div>
        <div className="absolute inset-x-0 top-1/2 -mt-8 rotate-[1.5deg] bg-noche py-4 text-papel ring-1 ring-white/15" style={{ zIndex: -1 }}>
          <div className="flex w-max gap-8 will-change-transform" style={{ transform: "translate3d(calc(var(--shift) - 2200px), 0, 0)" }}>
            {line("text-transparent [-webkit-text-stroke:1.5px_#f4f2fb]")}
          </div>
        </div>
      </div>
    </div>
  );
}
