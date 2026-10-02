import { PostCard } from "@/components/cards";
import PageHero from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { postSlugs } from "@/lib/content";
import { getDict } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return { title: `${getDict(lang).blog.index.title} · log studio` };
}

export default async function BlogIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { blog } = getDict(lang);
  return (
    <>
      <PageHero title={blog.index.title} desc={blog.index.desc} />
      <Section border={false}>
        <ul className="grid gap-6 md:grid-cols-3">
          {postSlugs.map((slug, i) => (
            <li key={slug} data-aos="fade-up" data-aos-delay={i * 100}>
              <PostCard lang={lang} slug={slug} index={i} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
