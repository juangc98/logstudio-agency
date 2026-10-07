import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/section";
import type { CaseSlug, PostSlug } from "@/lib/content";
import { getDict } from "@/lib/i18n";

const covers = ["bg-arena", "bg-sol", "bg-arena"];

export function CaseCard({ lang, slug, index }: { lang: string; slug: CaseSlug; index: number }) {
  const { cases, common } = getDict(lang);
  const c = cases.items[slug];
  return (
    <Link href={`/${lang}/case-studies/${slug}`} className="card-pop group flex h-full flex-col overflow-hidden rounded-md border-2 border-tinta bg-papel shadow-hard">
      <div className="overflow-hidden">
        <div className={`flex h-40 items-end p-4 transition duration-500 group-hover:scale-105 ${covers[index % covers.length]}`}>
          <span className="font-display text-2xl font-bold">{c.client}</span>
        </div>
      </div>
      <div className="flex grow flex-col p-6">
        <Badge tone="arena">{c.industry}</Badge>
        <h3 className="font-display my-3 text-[22px] leading-7 font-bold">{c.title}</h3>
        <p className="mb-4 grow text-tinta-suave">{c.summary}</p>
        <span className="flex items-center gap-2 text-sm font-bold text-rio">
          {common.readMore}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function PostCard({ lang, slug, index }: { lang: string; slug: PostSlug; index: number }) {
  const { blog, common } = getDict(lang);
  const p = blog.items[slug];
  return (
    <Link href={`/${lang}/blog/${slug}`} className="card-pop group flex h-full flex-col overflow-hidden rounded-md border-2 border-tinta bg-papel shadow-hard">
      <div className="overflow-hidden">
        <div className={`h-32 transition duration-500 group-hover:scale-105 ${covers[(index + 1) % covers.length]}`} aria-hidden="true" />
      </div>
      <div className="flex grow flex-col p-6">
        <Badge>{p.category}</Badge>
        <h3 className="font-display my-3 text-[22px] leading-7 font-bold">{p.title}</h3>
        <p className="mb-4 grow text-tinta-suave">{p.excerpt}</p>
        <p className="text-sm text-tinta-suave">
          {p.date} · {p.readTime} {common.minRead}
        </p>
      </div>
    </Link>
  );
}
