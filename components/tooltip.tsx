"use client";

import { Transition } from "@headlessui/react";
import { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  id: string;
  dark?: boolean;
}

export default function Tooltip({ children, content, id, dark = false }: TooltipProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        className={`block cursor-help text-left text-zinc-500 underline decoration-dotted underline-offset-4 ${dark ? "decoration-zinc-600" : "decoration-zinc-300"}`}
        aria-describedby={`tooltip-${id}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {children}
      </button>
      <div id={`tooltip-${id}`} role="tooltip" className="absolute top-full left-0 z-10">
        <Transition
          as="div"
          show={open}
          className="mt-1 w-[12.5rem] transform overflow-hidden rounded-sm border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-500 shadow-lg transition duration-200 ease-out data-closed:opacity-0 data-enter:data-closed:-translate-y-1"
        >
          {content}
        </Transition>
      </div>
    </div>
  );
}
