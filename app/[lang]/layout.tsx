import "../css/style.css";

import type { Metadata } from "next";

import AosInit from "@/components/aos-init";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { getDict, locales } from "@/lib/i18n";

export const dynamicParams = false;

export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { meta } = getDict(lang);
  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: [
        { url: "/brand/favicon/favicon.svg?v=2", type: "image/svg+xml" },
        { url: "/brand/favicon/favicon-16.png?v=2", type: "image/png", sizes: "16x16" },
        { url: "/brand/favicon/favicon-32.png?v=2", type: "image/png", sizes: "32x32" },
        { url: "/brand/favicon/favicon-48.png?v=2", type: "image/png", sizes: "48x48" },
      ],
      apple: [{ url: "/brand/favicon/apple-touch-icon.png?v=2", sizes: "180x180" }],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <noscript>
          <style>{`[data-aos]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <AosInit />
          <Header lang={lang} />
          <main className="grow">{children}</main>
          <Footer lang={lang} />
        </div>
      </body>
    </html>
  );
}
