"use client";

import { useRef, useState } from "react";

export type TabItem = { id: string; label: string; icon: React.ReactNode; panel: React.ReactNode };

// Accessible tabs: arrow keys move between tabs, Home/End jump. Panels are server-rendered nodes.
export default function Tabs({ items, label }: { items: TabItem[]; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: React.KeyboardEvent, i: number) {
    const last = items.length - 1;
    const next = e.key === "ArrowRight" ? (i + 1) % items.length : e.key === "ArrowLeft" ? (i - 1 + items.length) % items.length : e.key === "Home" ? 0 : e.key === "End" ? last : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label={label} className="mx-auto mb-10 flex max-w-2xl flex-wrap justify-center gap-3">
        {items.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`flex items-center gap-2 rounded-md border-2 border-tinta px-4 py-2 font-semibold transition ${
              active === i ? "bg-brasa text-tinta shadow-hard" : "bg-papel text-tinta hover:bg-arena"
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>
      {items.map((t, i) => (
        <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={active !== i}>
          {t.panel}
        </div>
      ))}
    </div>
  );
}
