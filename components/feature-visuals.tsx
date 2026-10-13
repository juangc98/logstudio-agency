import type { AppSlug } from "@/lib/content";

// One small dark "screen" per app feature, same visual language as the launch slides.
// Numbers are examples. Order matches `features` in the dictionaries.
const accentVar = (accent: string) => ({ "--accent": accent }) as React.CSSProperties;

function Panel({ title, tag, children }: { title: string; tag?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-noche-alta/90 p-6 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)] backdrop-blur md:p-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-base text-[#a7a5c0]">{title}</p>
        {tag && (
          <span className="rounded-full bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] px-3 py-1 text-xs font-bold tracking-wide text-[var(--accent)] uppercase">
            {tag}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function Meter({ value, label, right }: { value: number; label?: string; right?: string }) {
  return (
    <div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${value}%` }} />
      </div>
      {label && (
        <div className="mt-2 flex justify-between text-sm text-[#a7a5c0]">
          <span>{label}</span>
          <span>{right}</span>
        </div>
      )}
    </div>
  );
}

const row = "flex items-center justify-between rounded-xl bg-white/[0.05] px-4 py-3 text-[#f4f2fb]";

const visuals: Record<AppSlug, React.ReactNode[]> = {
  "promo-engine": [
    <Panel key="a" title="Campaign calendar" tag="Scheduled">
      {[
        ["Spend $75, get a tote", 8, 52],
        ["Socks volume discount", 0, 34],
        ["Holiday gift tiers", 58, 38],
        ["Weekend free shipping", 30, 22],
      ].map(([n, l, w]) => (
        <div key={n} className="mb-3 last:mb-0">
          <p className="mb-1.5 text-sm text-[#f4f2fb]">{n}</p>
          <div className="relative h-3 rounded-full bg-white/[0.07]">
            <div
              className="absolute h-full rounded-full bg-[var(--accent)]"
              style={{ left: `${l}%`, width: `${w}%`, opacity: 0.55 + Number(w) / 200 }}
            />
          </div>
        </div>
      ))}
      <div className="mt-5 flex justify-between text-xs text-[#a7a5c0]">
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>
    </Panel>,
    <Panel key="b" title="Who gets this offer" tag="412 products">
      <div className="space-y-2.5">
        {[
          ["Collection", "Summer linen"],
          ["Tag", "full-price"],
          ["Customers", "Returning, 2+ orders"],
          ["Exclude", "Gift cards"],
        ].map(([k, v], i) => (
          <div key={k} className={row}>
            <span className="text-sm text-[#a7a5c0]">{k}</span>
            <span className="text-sm font-semibold">{v}</span>
            <span className={`h-5 w-9 rounded-full p-0.5 ${i < 3 ? "bg-[var(--accent)]" : "bg-white/15"}`}>
              <span className={`block h-4 w-4 rounded-full bg-noche ${i < 3 ? "translate-x-4" : ""}`} />
            </span>
          </div>
        ))}
      </div>
    </Panel>,
    <Panel key="c" title="Your cart">
      <p className="mb-3 rounded-xl bg-white/[0.05] px-4 py-3 text-lg font-semibold text-[#f4f2fb]">You unlocked a free gift</p>
      <div className="mb-5">
        <Meter value={100} />
      </div>
      <div className="flex items-center justify-between text-lg text-[#f4f2fb]">
        <span>Canvas tote</span>
        <span className="rounded-lg bg-menta/15 px-3 py-1 text-sm font-bold text-menta">FREE</span>
      </div>
      <p className="mt-5 text-sm text-[#a7a5c0]">Free shipping over $60 · applied automatically</p>
    </Panel>,
    <Panel key="d" title="Revenue by promotion" tag="Last 30 days">
      <div className="mb-4 flex h-32 items-end gap-3">
        {[38, 55, 42, 78, 64, 92, 70].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-lg bg-[var(--accent)]" style={{ height: `${h}%`, opacity: 0.4 + h / 160 }} />
        ))}
      </div>
      <div className="flex items-end justify-between">
        <p className="font-display text-4xl font-extrabold text-[#f4f2fb]">+18%</p>
        <p className="text-sm text-[#a7a5c0]">average order value</p>
      </div>
    </Panel>,
  ],
  "bundle-builder": [
    <Panel key="a" title="Mix and match" tag="Pick any 2">
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className={`rounded-xl border p-2.5 ${
              n < 3 ? "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]" : "border-white/10 bg-white/[0.04]"
            }`}
          >
            <div className="mb-2 aspect-square rounded-lg bg-white/10" />
            <div className="h-2 w-3/4 rounded bg-white/20" />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-[#a7a5c0]">15% off the set when 2 are in the cart</p>
    </Panel>,
    <Panel key="b" title="Tiered savings" tag="Buy more, save more">
      <div className="space-y-3">
        {[
          ["2 items", 10],
          ["3 items", 15],
          ["4+ items", 20],
        ].map(([k, v]) => (
          <div key={k} className={row}>
            <span className="font-semibold">{k}</span>
            <div className="mx-4 h-2 flex-1 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${Number(v) * 5}%` }} />
            </div>
            <span className="font-display text-xl font-bold text-[var(--accent)]">{v}%</span>
          </div>
        ))}
      </div>
    </Panel>,
    <Panel key="c" title="Styled with your theme" tag="Inherited">
      <div className="mb-4 flex gap-2">
        {["#1a1412", "#fff9ee", "#ff6a2b", "#ffc93c"].map((c) => (
          <span key={c} className="h-9 w-9 rounded-full border border-white/20" style={{ background: c }} />
        ))}
      </div>
      <p className="font-display mb-1 text-2xl font-bold text-[#f4f2fb]">Serum + cream routine</p>
      <p className="mb-4 text-sm text-[#a7a5c0]">Fonts and colors come from the store theme.</p>
      <span className="inline-flex h-11 items-center rounded-full bg-[var(--accent)] px-6 font-semibold text-noche">Add the set · $49.30</span>
    </Panel>,
    <Panel key="d" title="Storefront speed" tag="Passed">
      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          ["98", "Performance"],
          ["0.00", "Layout shift"],
          ["4 kB", "Script"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-xl bg-white/[0.05] px-2 py-5">
            <p className="font-display text-3xl font-extrabold text-[var(--accent)]">{v}</p>
            <p className="mt-1 text-xs text-[#a7a5c0]">{l}</p>
          </div>
        ))}
      </div>
    </Panel>,
  ],
  "test-lab": [
    <Panel key="a" title="Visual experiment" tag="2 variants">
      <div className="grid grid-cols-2 gap-3">
        {[
          ["Control", "Free shipping over $60"],
          ["Variant B", "Free tote over $75"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className={`rounded-xl border p-4 ${
              i ? "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]" : "border-white/10 bg-white/[0.04]"
            }`}
          >
            <p className="mb-3 text-xs text-[#a7a5c0]">{k}</p>
            <p className="font-display mb-4 text-lg leading-tight font-bold text-[#f4f2fb]">{v}</p>
            <div className="h-8 rounded-full bg-white/15" />
          </div>
        ))}
      </div>
    </Panel>,
    <Panel key="b" title="Likely winner" tag="94% confidence">
      <p className="font-display mb-4 text-2xl font-bold text-[#f4f2fb]">Free tote over $75</p>
      <Meter value={94} label="Chance the result is real, not luck" right="94%" />
      <p className="mt-4 text-sm text-[#a7a5c0]">8,398 visitors · 14 days · 50 / 50 split</p>
    </Panel>,
    <Panel key="c" title="Profit per visitor" tag="After costs">
      {[
        ["Control", "$1.84", 68],
        ["Free tote over $75", "$2.26", 100],
      ].map(([k, v, w], i) => (
        <div key={k} className="mb-4 last:mb-0">
          <div className="mb-1.5 flex justify-between text-sm text-[#f4f2fb]">
            <span>{k}</span>
            <span className="font-bold">
              {v}
              {i ? " ▲" : ""}
            </span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-full rounded-full" style={{ width: `${w}%`, background: i ? "var(--accent)" : "rgb(255 255 255 / 0.3)" }} />
          </div>
        </div>
      ))}
    </Panel>,
    <Panel key="d" title="Rollout control" tag="Live">
      <div className="space-y-2.5">
        {[
          ["Variant B at 50%", "Running"],
          ["Variant B at 100%", "Ready"],
          ["Back to control", "One click"],
        ].map(([k, v], i) => (
          <div key={k} className={row}>
            <span className="flex items-center gap-3 text-sm font-semibold">
              <span className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-menta" : "bg-white/25"}`} />
              {k}
            </span>
            <span className="text-xs text-[#a7a5c0]">{v}</span>
          </div>
        ))}
      </div>
    </Panel>,
  ],
};

// All panels share one grid cell, so the box keeps the height of the tallest one while they cross-fade.
export default function FeatureVisual({ slug, active, accent }: { slug: AppSlug; active: number; accent: string }) {
  return (
    <div className="grid" style={accentVar(accent)} aria-live="polite">
      {visuals[slug].map((v, i) => (
        <div
          key={i}
          aria-hidden={active !== i}
          className={`col-start-1 row-start-1 transition duration-500 ease-out motion-reduce:transition-none ${
            active === i ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-[0.97] opacity-0"
          }`}
        >
          {v}
        </div>
      ))}
    </div>
  );
}
