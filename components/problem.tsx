import { ReceiptMock } from "@/components/mock";
import { Section } from "@/components/ui/section";

export default function Problem({
  eyebrow,
  title,
  desc,
  gift,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  gift: string;
}) {
  return (
    <Section tone="sol">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="etiqueta text-brasa mb-3">{eyebrow}</p>
          <h2 className="font-display mb-4 text-3xl leading-tight font-bold md:text-[40px] md:leading-[44px]">{title}</h2>
          <p className="mb-4 text-lg leading-[26px] text-tinta-suave">{desc}</p>
          <p className="text-lg leading-[26px]">{gift}</p>
        </div>
        <div>
          <ReceiptMock />
        </div>
      </div>
    </Section>
  );
}
