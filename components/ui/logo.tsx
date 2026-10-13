import Image from "next/image";

import logo from "@/public/brand/logo.svg";
import logoOscuro from "@/public/brand/logo-oscuro.svg";

// Brand rule: always the SVG, never the wordmark typed with a font.
export default function Logo({ height = 32, dark = false }: { height?: number; dark?: boolean }) {
  const width = Math.round((height * 730) / 100);
  return <Image src={dark ? logoOscuro : logo} width={width} height={height} alt="log studio" priority />;
}
