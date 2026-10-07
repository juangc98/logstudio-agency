import { ArrowUpRight } from "lucide-react";

import { InstagramMark, LinkedinMark } from "@/components/ui/marks";
import { Section, SectionHead } from "@/components/ui/section";
import { socialLinks } from "@/lib/content";
import { getDict } from "@/lib/i18n";

const marks = { instagram: InstagramMark, linkedin: LinkedinMark };
const covers = { instagram: "bg-brasa-claro", linkedin: "bg-rio-claro" };

export default function Social({ lang }: { lang: string }) {
  const { social } = getDict(lang).home;
  return (
    <Section tone="rio">
      <SectionHead eyebrow={social.eyebrow} title={social.title} desc={social.desc} />
      <ul className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {socialLinks.map((link) => {
          const Mark = marks[link.id];
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="card-pop group flex h-full flex-col overflow-hidden rounded-md border-2 border-tinta bg-papel shadow-hard"
              >
                <div className={`flex h-24 items-center justify-center ${covers[link.id]}`}>
                  <Mark className="h-10 w-10" />
                </div>
                <div className="flex grow items-start justify-between gap-3 p-6">
                  <div>
                    <h3 className="font-display mb-1 text-[22px] leading-7 font-bold">{social[link.id]}</h3>
                    <p className="text-tinta-suave">{link.id === "instagram" ? social.instagramDesc : social.linkedinDesc}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-rio transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
