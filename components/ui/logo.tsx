import Image from "next/image";

import logo from "@/public/brand/logo.svg";

// Brand rule: always the SVG, never the wordmark typed with a font.
export default function Logo({ height = 32 }: { height?: number }) {
  const width = Math.round((height * 730) / 100);
  return <Image src={logo} width={width} height={height} alt="log studio" priority />;
}
