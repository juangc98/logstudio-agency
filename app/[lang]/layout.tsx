import "../css/style.css";

import type { Metadata } from "next";

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
        { url: "/brand/favicon/favicon.svg", type: "image/svg+xml" },
        { url: "/brand/favicon/favicon-32.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/brand/favicon/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

// Light by default; the stored choice (set by the header toggle) wins. Runs before paint to avoid a flash.
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="dark"?"dark":"light"}catch(e){}`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header lang={lang} />
          <main className="grow">{children}</main>
          <Footer lang={lang} />
        </div>
      </body>
    </html>
  );
}
