"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

// Native scroll-snap carousel: swipe on touch, arrows on desktop, keyboard-scrollable.
export default function Carousel({
  children,
  label,
  prevLabel,
  nextLabel,
}: {
  children: React.ReactNode;
  label: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const btn =
    "flex h-10 w-10 items-center justify-center rounded-sm border border-ink text-ink hover:bg-crema-alta";
  return (
    <div>
      <ul
        ref={track}
        tabIndex={0}
        aria-label={label}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:thin] sm:mx-0 sm:px-0"
      >
        {children}
      </ul>
      <div className="mt-4 flex justify-end gap-2">
        <button type="button" className={btn} onClick={() => scroll(-1)} aria-label={prevLabel}>
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" className={btn} onClick={() => scroll(1)} aria-label={nextLabel}>
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function CarouselItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <li className={`w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${className}`}>{children}</li>;
}
