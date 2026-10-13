// Headline with its last part in the section accent (reads var(--accent) from a parent). Splits by words so it works in any language.
export function AccentTitle({ text, from = 0.5 }: { text: string; from?: number }) {
  const words = text.split(" ");
  const cut = Math.ceil(words.length * from);
  return (
    <>
      {words.slice(0, cut).join(" ")} <span className="accent-text">{words.slice(cut).join(" ")}</span>
    </>
  );
}
