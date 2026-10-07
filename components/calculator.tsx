"use client";

import { useState } from "react";

type Labels = {
  eyebrow: string;
  title: string;
  desc: string;
  orders: string;
  aov: string;
  uplift: string;
  extra: string;
  year: string;
  note: string;
};

// Interactive estimate: extra revenue = orders x AOV x uplift. Illustrative only.
export default function Calculator({ labels, lang }: { labels: Labels; lang: string }) {
  const [orders, setOrders] = useState(1500);
  const [aov, setAov] = useState(60);
  const [uplift, setUplift] = useState(8);
  const money = new Intl.NumberFormat(lang === "es" ? "es-AR" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const extra = orders * aov * (uplift / 100);

  const rows = [
    { id: "orders", label: labels.orders, value: orders, set: setOrders, min: 100, max: 10000, step: 100, show: orders.toLocaleString(lang) },
    { id: "aov", label: labels.aov, value: aov, set: setAov, min: 10, max: 300, step: 5, show: money.format(aov) },
    { id: "uplift", label: labels.uplift, value: uplift, set: setUplift, min: 1, max: 25, step: 1, show: `${uplift}%` },
  ];

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div>
        <p className="etiqueta mb-3 text-tinta-suave">{labels.eyebrow}</p>
        <h2 className="font-display mb-4 text-3xl leading-tight font-bold md:text-[40px] md:leading-[44px]">{labels.title}</h2>
        <p className="text-lg leading-[26px] text-tinta-suave">{labels.desc}</p>
      </div>
      <div className="rounded-lg border-2 border-tinta bg-papel p-6 text-tinta shadow-hard-l md:p-8">
        <div className="space-y-6">
          {rows.map((r) => (
            <div key={r.id}>
              <label htmlFor={`calc-${r.id}`} className="mb-2 flex items-baseline justify-between text-sm font-semibold">
                {r.label}
                <output htmlFor={`calc-${r.id}`} className="font-mono text-base font-bold">
                  {r.show}
                </output>
              </label>
              <input
                id={`calc-${r.id}`}
                type="range"
                min={r.min}
                max={r.max}
                step={r.step}
                value={r.value}
                onChange={(e) => r.set(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full border-2 border-tinta bg-arena accent-brasa"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-md bg-sol p-5 text-center" aria-live="polite">
          <p className="etiqueta mb-1">{labels.extra}</p>
          <p className="font-display text-4xl font-extrabold tabular-nums md:text-5xl">{money.format(extra)}</p>
          <p className="mt-1 text-sm">
            {labels.year}: <strong>{money.format(extra * 12)}</strong>
          </p>
        </div>
        <p className="mt-4 text-xs text-tinta-suave">{labels.note}</p>
      </div>
    </div>
  );
}
