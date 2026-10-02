"use client";

import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 60,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);
  return null;
}
