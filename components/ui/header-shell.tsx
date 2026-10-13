"use client";

import { useEffect, useRef, useState } from "react";

// Fixed header: transparent at the top, glass once scrolled, slides away on scroll down and back on scroll up.
export default function HeaderShell({ children }: { children: React.ReactNode }) {
  const [top, setTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setTop(y < 16);
      if (Math.abs(y - last.current) > 6) {
        setHidden(y > last.current && y > 120);
        last.current = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={`on-night fixed inset-x-0 top-0 z-30 transition duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"} ${
        top ? "border-b border-transparent bg-transparent" : "border-b border-white/10 bg-noche/80 backdrop-blur-xl"
      }`}
    >
      {children}
    </header>
  );
}
