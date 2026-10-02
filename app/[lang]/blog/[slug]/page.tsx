import Cta from "@/components/cta";
import PageHero from "@/components/page-hero";
import { Badge, Section } from "@/components/ui/section";
import { type PostSlug, postSlugs } from "@/lib/content";
import { getDict, withLocales } from "@/lib/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => withLocales(postSlugs);

type P = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: P) {
  const { lang, slug } = await params;
  const p = getDict(lang).blog.items[slug as PostSlug];
  return { title: `${p.title} · log studio`, description: p.excerpt };
}

export default async function PostPage({ params }: P) {
  const { lang, slug } = await params;
  const { blog, common, nav } = getDict(lang);
  const p = blog.items[slug as PostSlug];
  return (
    <>
      <PageHero title={p.title} back={{ href: `/${lang}/blog`, label: nav.blog }}>
        <Badge>{p.category}</Badge>
        <span className="self-center text-sm text-corteza">
          {p.date} · {p.readTime} {common.minRead}
        </span>
      </PageHero>
      <Section border={false}>
        <article className="mx-auto max-w-2xl space-y-6 text-lg">
          {p.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </article>
      </Section>
      <Cta lang={lang} />
    </>
  );
}
