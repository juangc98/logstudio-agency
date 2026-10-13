import { AccentTitle } from "@/components/ui/accent";

// Full-width image band with a dark overlay and one big statement. The image drifts slower than the page (see .band).
// To use a photo instead of the generated art, drop it in /public/images and pass its path.
export default function ImageBand({
  image,
  eyebrow,
  title,
  desc,
  accent = "#f0609f",
  children,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  accent?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      style={{ "--accent": accent, backgroundImage: `url(${image})` } as React.CSSProperties}
      className="band on-night relative -mt-10 overflow-hidden rounded-t-[32px] md:rounded-t-[48px]"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-noche/65 via-noche/15 to-noche/75" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(11_13_26/0.7)_100%)]" />
      <div className="relative mx-auto flex min-h-[520px] max-w-4xl flex-col items-center justify-center px-4 pt-24 pb-[calc(6rem+40px)] text-center sm:px-6 md:min-h-[640px]">
        {eyebrow && <p className="etiqueta muted mb-5" data-aos="fade-up">{eyebrow}</p>}
        <h2 className="font-display mb-6 text-4xl leading-[1.02] font-extrabold md:text-7xl md:leading-[72px]" data-aos="fade-up" data-aos-delay="100">
          <AccentTitle text={title} />
        </h2>
        {desc && (
          <p className="muted max-w-xl text-lg leading-[26px]" data-aos="fade-up" data-aos-delay="200">
            {desc}
          </p>
        )}
        {children && <div className="mt-8" data-aos="fade-up" data-aos-delay="300">{children}</div>}
      </div>
    </section>
  );
}
