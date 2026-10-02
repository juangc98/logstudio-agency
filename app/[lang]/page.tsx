import Apps from "@/components/apps";
import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Services from "@/components/services";

// Parked for later (apps will have plans and pricing): components/pricing-tabs.tsx, testimonials.tsx, features-0x.tsx.
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <>
      <Hero lang={lang} />
      <Apps lang={lang} />
      <Services lang={lang} />
      <Cta lang={lang} />
    </>
  );
}
