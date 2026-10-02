"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type NavItem = { label: string; href?: string; children?: { label: string; href: string; desc?: string }[] };

// Desktop: CSS dropdowns (hover and keyboard focus). Mobile: disclosure menu.
export default function HeaderNav({
  items,
  menuLabel,
  openLabel,
  closeLabel,
}: {
  items: NavItem[];
  menuLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav aria-label={menuLabel} className="hidden xl:block">
        <ul className="flex items-center gap-1 text-sm font-bold">
          {items.map((item) =>
            item.children ? (
              <li key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-sm px-3 py-2 hover:text-rio"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                <ul className="invisible absolute top-full left-0 z-40 w-72 rounded-md border border-borde bg-crema-alta p-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link className="block rounded-sm p-3 hover:bg-crema" href={c.href}>
                        <span className="block">{c.label}</span>
                        {c.desc && <span className="block text-xs font-normal text-corteza">{c.desc}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <Link className="block rounded-sm px-3 py-2 hover:text-rio" href={item.href!}>
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink text-ink hover:bg-crema-alta xl:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label={menuLabel}
          className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-borde bg-crema p-4 xl:hidden"
        >
          <ul className="space-y-1 font-bold">
            {items.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <span className="block px-3 pt-3 pb-1 text-xs tracking-wide text-corteza uppercase">{item.label}</span>
                    <ul>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link className="block rounded-sm px-3 py-2 hover:bg-crema-alta" href={c.href} onClick={close}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link className="block rounded-sm px-3 py-2 hover:bg-crema-alta" href={item.href!} onClick={close}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
