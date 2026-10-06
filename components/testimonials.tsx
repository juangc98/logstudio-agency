import { Quote } from "lucide-react";
import Image from "next/image";

import Carousel, { CarouselItem } from "@/components/ui/carousel";
import { Section, SectionHead } from "@/components/ui/section";
import avatar1 from "@/public/images/testimonial-01.jpg";
import avatar2 from "@/public/images/testimonial-02.jpg";
import avatar3 from "@/public/images/testimonial-03.jpg";
import avatar4 from "@/public/images/testimonial-04.jpg";
import avatar5 from "@/public/images/testimonial-05.jpg";

// TODO(marca): placeholder avatars (template stock photos) and invented quotes.
const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

export default function Testimonials({
  eyebrow,
  title,
  label,
  items,
  prev,
  next,
}: {
  eyebrow: string;
  title: string;
  label: string;
  items: { quote: string; name: string; role: string }[];
  prev: string;
  next: string;
}) {
  return (
    <Section tone="alta">
      <SectionHead eyebrow={eyebrow} title={title} />
      <Carousel label={label} prevLabel={prev} nextLabel={next}>
        {items.map((t, i) => (
          <CarouselItem key={t.name}>
            <figure className="flex h-full flex-col rounded-md border-2 border-tinta bg-papel shadow-hard p-6">
              <Quote className="mb-4 h-6 w-6 text-brasa" aria-hidden="true" />
              <blockquote className="mb-6 grow">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3">
                <Image className="h-10 w-10 rounded-sm object-cover" src={avatars[i % avatars.length]} alt="" width={40} height={40} />
                <span>
                  <span className="block font-bold">{t.name}</span>
                  <span className="block text-sm text-tinta-suave">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
}
