// Background graphic assets from the brand system. All use currentColor and sit behind content;
// the parent sets color (tinta or papel) and each shape sets its own opacity and edge fade.
// Rule of use: never repeat the same asset in two contiguous sections.

export type DecoName = "rings-right" | "rings-left" | "dots" | "pills" | "grid" | "waves" | "plus" | "stripes";

function Rings() {
  // Half-circle arcs, like the rings of the log.
  const radii = [60, 130, 200, 270, 340, 410];
  return (
    <svg viewBox="0 0 420 840" fill="none" stroke="currentColor" strokeWidth="22" aria-hidden="true" className="h-full w-auto">
      {radii.map((r) => (
        <path key={r} d={`M420 ${420 - r} A${r} ${r} 0 0 0 420 ${420 + r}`} />
      ))}
    </svg>
  );
}

function Pills() {
  // Diagonal rounded bars.
  return (
    <svg viewBox="0 0 400 400" fill="currentColor" aria-hidden="true" className="h-full w-auto">
      <rect x="40" y="120" width="360" height="56" rx="28" transform="rotate(-35 40 120)" />
      <rect x="120" y="260" width="300" height="56" rx="28" transform="rotate(-35 120 260)" />
      <circle cx="70" cy="340" r="28" />
    </svg>
  );
}

function Waves() {
  // Water lines: the surface line of the logo, repeated.
  return (
    <svg viewBox="0 0 800 220" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" aria-hidden="true" className="h-full w-full">
      {[30, 90, 150].map((y) => (
        <path key={y} d={`M0 ${y} Q100 ${y - 40} 200 ${y} T400 ${y} T600 ${y} T800 ${y}`} />
      ))}
    </svg>
  );
}

// Tiled patterns (dots, grid, plus, stripes) share one helper.
function Pattern({ id, size, children }: { id: string; size: number; children: React.ReactNode }) {
  return (
    <svg width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          {children}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

const fadeLeft = "[mask-image:linear-gradient(to_left,#000,transparent)]";
const fadeRight = "[mask-image:linear-gradient(to_right,#000,transparent)]";
const fadeUp = "[mask-image:linear-gradient(to_top,#000,transparent)]";

export default function Deco({ name, dark = false }: { name: DecoName; dark?: boolean }) {
  const color = dark ? "text-papel" : "text-tinta";
  const base = `pointer-events-none absolute ${color}`;

  switch (name) {
    case "dots":
      return (
        <div aria-hidden="true" className={`${base} inset-y-0 right-0 hidden w-1/3 opacity-[0.14] md:block ${fadeLeft}`}>
          <Pattern id="deco-dots" size={22}>
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </Pattern>
        </div>
      );
    case "grid":
      return (
        <div aria-hidden="true" className={`${base} inset-y-0 left-0 hidden w-1/2 opacity-[0.10] md:block ${fadeRight}`}>
          <Pattern id="deco-grid" size={48}>
            <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="2" />
          </Pattern>
        </div>
      );
    case "plus":
      return (
        <div aria-hidden="true" className={`${base} inset-y-0 right-0 hidden w-2/5 opacity-[0.16] md:block ${fadeLeft}`}>
          <Pattern id="deco-plus" size={40}>
            <path d="M20 14v12M14 20h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </Pattern>
        </div>
      );
    case "stripes":
      return (
        <div aria-hidden="true" className={`${base} right-0 bottom-0 hidden h-3/5 w-1/2 opacity-[0.10] md:block ${fadeUp}`}>
          <Pattern id="deco-stripes" size={26}>
            <path d="M-4 30L30 -4M-4 4L4 -4M22 30L30 22" stroke="currentColor" strokeWidth="6" />
          </Pattern>
        </div>
      );
    case "waves":
      return (
        <div aria-hidden="true" className={`${base} bottom-0 left-0 hidden h-44 w-3/4 opacity-[0.10] md:block`}>
          <Waves />
        </div>
      );
    case "pills":
      return (
        <div aria-hidden="true" className={`${base} -top-10 right-0 hidden h-80 opacity-[0.10] md:block`}>
          <Pills />
        </div>
      );
    case "rings-left":
      return (
        <div
          aria-hidden="true"
          className={`${base} top-1/2 left-0 h-[130%] opacity-[0.08]`}
          style={{ transform: "translateY(-50%) translateX(-33%) scaleX(-1)" }}
        >
          <Rings />
        </div>
      );
    default:
      return (
        <div aria-hidden="true" className={`${base} top-1/2 right-0 h-[130%] translate-x-1/3 -translate-y-1/2 opacity-[0.08]`}>
          <Rings />
        </div>
      );
  }
}
