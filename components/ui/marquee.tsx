// Infinite horizontal marquee (CSS only). Static when the user prefers reduced motion.
export default function Marquee({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] motion-reduce:flex-wrap motion-reduce:justify-center"
      role="group"
      aria-label={label}
    >
      {[0, 1].map((i) => (
        <ul
          key={i}
          aria-hidden={i === 1}
          className="flex min-w-full shrink-0 animate-infinite-scroll items-center justify-around gap-8 pr-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:hidden first:motion-reduce:flex"
        >
          {children}
        </ul>
      ))}
    </div>
  );
}
