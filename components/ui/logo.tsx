import Image from "next/image";

import logo from "@/public/brand/logo.svg";
import logoOscuro from "@/public/brand/logo-oscuro.svg";

// Brand rule: always the SVG, never the wordmark typed with a font. Swapped by theme.
export default function Logo({ height = 32 }: { height?: number }) {
  const width = Math.round((height * 796) / 200);
  return (
    <>
      <Image className="dark:hidden" src={logo} width={width} height={height} alt="log studio" priority />
      <Image className="hidden dark:block" src={logoOscuro} width={width} height={height} alt="log studio" priority />
    </>
  );
}
