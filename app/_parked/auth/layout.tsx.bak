import Header from "@/components/ui/header";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="grow">
        <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-80 before:bg-linear-to-b before:from-zinc-100">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="px-4 sm:px-6">{children}</div>
          </div>
        </section>
      </main>
    </>
  );
}
