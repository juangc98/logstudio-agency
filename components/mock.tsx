import type { AppSlug } from "@/lib/content";

// TODO(marca): CSS mockups standing in for real app screenshots. All numbers are fake.
function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-md border border-corteza bg-crema-alta text-left text-ink" aria-hidden="true">
      <div className="flex items-center gap-2 border-b border-borde bg-crema px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-sm bg-castor" />
        <span className="h-2.5 w-2.5 rounded-sm bg-panza" />
        <span className="h-2.5 w-2.5 rounded-sm bg-brote" />
        <span className="ml-3 text-xs font-bold text-corteza">{title}</span>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

function Toggle({ on }: { on?: boolean }) {
  return (
    <span className={`flex h-5 w-9 items-center rounded-sm p-0.5 ${on ? "justify-end bg-brote" : "bg-borde"}`}>
      <span className="h-4 w-4 rounded-sm bg-crema-alta" />
    </span>
  );
}

function PromoMock() {
  const rows = [
    ["Summer 15% off", "Collection · Auto", true],
    ["Buy 2, get 1 free", "Product · Auto", true],
    ["VIP early access", "Customer tag", false],
    ["Free shipping > $80", "Cart · Auto", true],
  ] as const;
  return (
    <Window title="promo-engine / rules">
      <ul className="space-y-3">
        {rows.map(([name, meta, on]) => (
          <li key={name} className="flex items-center justify-between rounded-sm border border-borde bg-crema p-3">
            <div>
              <p className="text-sm font-bold">{name}</p>
              <p className="text-xs text-corteza">{meta}</p>
            </div>
            <Toggle on={on} />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3 text-xs font-bold">
        <span className="rounded-sm bg-brote-claro px-2 py-1">+18% AOV</span>
        <span className="rounded-sm bg-rio-claro px-2 py-1">3 active</span>
      </div>
    </Window>
  );
}

function BundleMock() {
  return (
    <Window title="bundle-builder / storefront">
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className={`rounded-sm border p-2 ${n < 4 ? "border-rio bg-rio-claro" : "border-borde bg-crema"}`}>
            <div className="mb-2 aspect-square rounded-sm bg-borde" />
            <div className="h-2 w-3/4 rounded-sm bg-corteza opacity-60" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-sm bg-crema p-3 text-sm">
        <span className="font-bold">3 of 3 picked</span>
        <span className="rounded-sm bg-rio px-3 py-1 text-xs font-bold text-crema">Add bundle · $54</span>
      </div>
    </Window>
  );
}

function TestMock() {
  const bars = [
    ["A", 46, "bg-corteza"],
    ["B", 64, "bg-rio"],
  ] as const;
  return (
    <Window title="test-lab / experiment #12">
      <div className="flex items-end gap-6">
        {bars.map(([k, h, c]) => (
          <div key={k} className="flex flex-1 flex-col items-center gap-2">
            <span className="text-xs font-bold">{h}%</span>
            <div className={`w-full rounded-sm ${c}`} style={{ height: h * 2 }} />
            <span className="text-xs text-corteza">Variant {k}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-sm bg-brote-claro p-2 text-xs font-bold">Variant B leads · 95% confidence</p>
    </Window>
  );
}

export default function AppMock({ slug }: { slug: AppSlug }) {
  if (slug === "promo-engine") return <PromoMock />;
  if (slug === "bundle-builder") return <BundleMock />;
  return <TestMock />;
}
