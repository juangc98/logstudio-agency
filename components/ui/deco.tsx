// Background graphic assets from the brand system: concentric arcs (the logo rings), dot grid and diagonal pills.
// All use currentColor and sit behind content; set color and opacity from the parent.

export type DecoName = "rings-right" | "rings-left" | "dots" | "pills";

function Rings() {
  // Half-circle arcs, open to the left, like the rings of the log.
  const radii = [60, 130, 200, 270, 340, 410];
  return (
    <svg viewBox="0 0 420 840" fill="none" stroke="currentColor" strokeWidth="22" aria-hidden="true" className="h-full w-auto">
      {radii.map((r) => (
        <path key={r} d={`M420 ${420 - r} A${r} ${r} 0 0 0 420 ${420 + r}`} />
      ))}
    </svg>
  );
}

function Dots() {
  return (
    <svg width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id="deco-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#deco-dots)" />
    </svg>
  );
}

function Pills() {
  // Diagonal rounded bars, like the shapes that drift across big hero areas.
  return (
    <svg viewBox="0 0 400 400" fill="currentColor" aria-hidden="true" className="h-full w-auto">
      <rect x="40" y="120" width="360" height="56" rx="28" transform="rotate(-35 40 120)" />
      <rect x="120" y="260" width="300" height="56" rx="28" transform="rotate(-35 120 260)" />
      <circle cx="70" cy="340" r="28" />
    </svg>
  );
}

export default function Deco({ name, dark = false }: { name: DecoName; dark?: boolean }) {
  const color = dark ? "text-papel" : "text-tinta";
  if (name === "dots") {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-[0.12] [mask-image:linear-gradient(to_left,#000,transparent)] md:block ${color}`}>
        <Dots />
      </div>
    );
  }
  if (name === "pills") {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute -top-10 right-0 hidden h-80 opacity-[0.10] md:block ${color}`}>
        <Pills />
      </div>
    );
  }
  const left = name === "rings-left";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 h-[130%] -translate-y-1/2 opacity-[0.07] ${color} ${left ? "left-0 -translate-x-1/3" : "right-0 translate-x-1/3"}`}
      style={left ? { transform: "translateY(-50%) translateX(-33%) scaleX(-1)" } : undefined}
    >
      <Rings />
    </div>
  );
}
