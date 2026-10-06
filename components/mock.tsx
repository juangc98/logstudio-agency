import type { AppSlug } from "@/lib/content";

function Example({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="text-left">
      <div className="overflow-hidden border-2 border-tinta bg-papel text-tinta shadow-hard-l" style={{ borderRadius: "var(--radius-lg)" }}>
        {children}
      </div>
      <figcaption className="mt-3 text-sm text-tinta-suave">{caption}</figcaption>
    </figure>
  );
}

function Chip({ children, tone = "arena" }: { children: React.ReactNode; tone?: "arena" | "brote" | "sol" | "rio" | "brasa" }) {
  const t = {
    arena: "bg-arena",
    brote: "bg-brote-claro",
    sol: "bg-sol",
    rio: "bg-rio-claro",
    brasa: "bg-brasa-claro",
  }[tone];
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${t}`}>{children}</span>;
}

function Bar({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-tinta bg-arena px-4 py-2.5">
      <p className="etiqueta truncate text-tinta">{title}</p>
      <span className="etiqueta text-tinta-suave">Example</span>
    </div>
  );
}

function Cart({ gift }: { gift: boolean }) {
  return (
    <div className="border-t-2 border-tinta bg-papel p-4">
      <p className="mb-3 text-sm font-semibold">
        {gift ? (
          <>
            You&apos;ve unlocked a free <span className="text-brote">Canvas tote</span>.
          </>
        ) : (
          "Your cart"
        )}
      </p>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span>
          Linen shirt
          <span className="block text-xs text-tinta-suave">Small / White</span>
        </span>
        <span className="font-semibold">$78.00</span>
      </div>
      {gift && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span>
            Canvas tote
            <span className="block text-xs text-tinta-suave">Natural · Gift</span>
          </span>
          <span className="font-semibold">
            <s className="mr-1 text-tinta-suave">$24.00</s>
            <span className="text-brote">FREE</span>
          </span>
        </div>
      )}
      <div className="mt-3 flex items-center justify-between border-t border-linea pt-3 text-sm font-semibold">
        <span>Subtotal</span>
        <span>$78.00</span>
      </div>
      <span className="mt-3 flex h-10 items-center justify-center rounded-sm bg-tinta text-sm font-semibold text-papel">Check out</span>
    </div>
  );
}

function PromoMock() {
  return (
    <Example caption="Example: the Promo Log editor, with the storefront cart updating as you build.">
      <Bar title="Acme Store · Promo Log · Spend $75, get a tote" />
      <div className="grid md:grid-cols-2">
        <div className="space-y-3 border-b-2 border-tinta p-4 md:border-r-2 md:border-b-0">
          <ol className="etiqueta mb-1 flex gap-3 text-tinta-suave">
            <li className="text-tinta">1 Trigger</li>
            <li>2 Gift</li>
            <li>3 Review</li>
          </ol>
          <p className="text-xs text-tinta-suave">When the cart reaches</p>
          <p className="rounded-sm bg-arena px-3 py-2 text-sm">
            Subtotal of at least <strong>$75.00</strong>
          </p>
          <p className="text-xs text-tinta-suave">Free gift</p>
          <p className="rounded-sm bg-arena px-3 py-2 text-sm">
            Canvas tote · Natural <span className="ml-2 text-xs text-tinta-suave">380 in stock</span>
          </p>
          <p className="rounded-sm bg-sol-claro px-3 py-2 text-xs">
            <strong>What this does.</strong> Carts over $75 get a free canvas tote, once.
          </p>
        </div>
        <Cart gift />
      </div>
    </Example>
  );
}

function OffersMock() {
  const rows = [
    ["Spend $75, get a tote", "Gift · since Sep 14", "Live", "brote"],
    ["Socks volume discount", "Discount · since Jul 9", "Live", "brote"],
    ["Matching case add-on", "Upsell · since Sep 20", "Live", "brote"],
    ["Holiday gift tiers", "Gift · starts Nov 20", "Scheduled", "sol"],
    ["Essentials gift box", "Bundle · not published", "Draft", "arena"],
  ] as const;
  return (
    <Example caption="Example: the offers list with each offer's status, beside the cart shoppers see.">
      <Bar title="Acme Store · Promo Log · Offers" />
      <div className="grid md:grid-cols-2">
        <ul className="space-y-2 border-b-2 border-tinta p-4 md:border-r-2 md:border-b-0">
          {rows.map(([name, meta, status, tone]) => (
            <li key={name} className="flex items-center justify-between gap-2 rounded-sm bg-arena px-3 py-2">
              <div>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-tinta-suave">{meta}</p>
              </div>
              <Chip tone={tone}>{status}</Chip>
            </li>
          ))}
        </ul>
        <Cart gift />
      </div>
    </Example>
  );
}

function BundleMock() {
  return (
    <Example caption="Example: a mix-and-match bundle in the cart, priced as a set.">
      <Bar title="Acme Store · Bundle Log · Serum + cream" />
      <div className="grid md:grid-cols-2">
        <div className="grid grid-cols-3 gap-2 border-b-2 border-tinta p-4 md:border-r-2 md:border-b-0">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className={`rounded-sm border-2 p-2 ${n < 3 ? "border-brote bg-brote-claro" : "border-linea bg-arena"}`}>
              <div className="mb-2 aspect-square rounded-sm bg-linea" />
              <div className="h-2 w-3/4 rounded-sm bg-tinta-suave/40" />
            </div>
          ))}
          <p className="col-span-3 mt-1 text-xs text-tinta-suave">Pick any 2 · 15% off the set</p>
        </div>
        <div className="p-4">
          <p className="mb-3 text-sm font-semibold">Your cart</p>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span>
              Serum + cream routine
              <span className="block text-xs text-tinta-suave">Bundle · 2 items</span>
            </span>
            <span className="font-semibold">
              <s className="mr-1 text-tinta-suave">$58.00</s>
              $49.30
            </span>
          </div>
          <p className="mb-3 text-xs text-brote">Bundle saving: $8.70</p>
          <span className="mt-3 flex h-10 items-center justify-center rounded-sm bg-tinta text-sm font-semibold text-papel">Check out</span>
        </div>
      </div>
    </Example>
  );
}

function TestMock() {
  return (
    <Example caption="Example: profit per visitor, after product cost, shipping and fees.">
      <Bar title="Test Log · Free tote vs control" />
      <div className="p-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Chip tone="rio">Offer test · 14 days</Chip>
          <Chip>50 / 50 split</Chip>
          <Chip tone="sol">Running</Chip>
        </div>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-tinta-suave">
              <th className="pb-2 font-medium">Variant</th>
              <th className="pb-2 font-medium">Visitors</th>
              <th className="pb-2 font-medium">Conv.</th>
              <th className="pb-2 font-medium">Profit / visitor</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-linea">
              <td className="py-2">Control</td>
              <td>4,210</td>
              <td>3.1%</td>
              <td>$1.84</td>
            </tr>
            <tr className="border-t border-linea">
              <td className="py-2 font-semibold">Free tote over $75</td>
              <td>4,188</td>
              <td>3.6%</td>
              <td className="font-semibold text-brote">$2.26 ▲</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 rounded-sm bg-brote-claro px-3 py-2 text-xs">
          Likely winner <strong>Free tote over $75</strong> · 94% confidence that the result is real, not luck.
        </p>
      </div>
    </Example>
  );
}

export function ReceiptMock() {
  return (
    <Example caption="Receipt · one $78 cart · Example">
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between text-sm">
          <span>15% off the cart</span>
          <span className="font-semibold">$11.70</span>
        </div>
        <div className="mb-4 flex items-center justify-between text-sm">
          <span>Free tote, at your item cost</span>
          <span className="font-semibold">$4.00</span>
        </div>
        <div className="flex items-center justify-between rounded-sm bg-brote-claro px-3 py-3 text-sm font-semibold">
          <span>You keep</span>
          <span>$7.70</span>
        </div>
      </div>
    </Example>
  );
}

export default function AppMock({ slug, variant = "product" }: { slug: AppSlug; variant?: "product" | "list" }) {
  if (slug === "promo-engine") return variant === "list" ? <OffersMock /> : <PromoMock />;
  if (slug === "bundle-builder") return <BundleMock />;
  return <TestMock />;
}
