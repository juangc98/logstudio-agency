export const metadata = {
  title: "Request Demo - Creative",
  description: "Page description",
};

import Blocks from "./blocks";
import Community from "./community";

export default function Home() {
  return (
    <>
      {/* Demo form */}
      <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-80 before:bg-linear-to-b before:from-zinc-100">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">
            {/* Page header */}
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
              <h1 className="font-inter-tight bg-linear-to-r from-zinc-500 via-zinc-900 to-zinc-900 bg-clip-text pb-4 text-4xl font-bold text-transparent md:text-5xl">
                Get started with Gray
              </h1>
              <p className="text-lg text-zinc-500">
                Talk to an expert about your requirements, needs, and timeline. Complete the form and we'll make sure to
                reach out.
              </p>
            </div>

            {/* Form */}
            <div className="to-zinc-50/.7 relative mx-auto max-w-[25rem] rounded-lg bg-linear-to-b from-zinc-100 p-6 shadow-2xl before:absolute before:-top-12 before:-left-16 before:-z-10 before:h-96 before:w-96 before:rounded-full before:bg-zinc-900 before:opacity-[.15] before:blur-3xl">
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-800" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      className="form-input w-full text-sm"
                      type="text"
                      placeholder="Patrick Rossi"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-800" htmlFor="email">
                      Work Email
                    </label>
                    <input
                      id="email"
                      className="form-input w-full text-sm"
                      type="email"
                      placeholder="mark@acmecorp.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="channel">
                      How did you hear about us?
                    </label>
                    <select id="channel" className="form-select w-full" required>
                      <option>Twitter</option>
                      <option>Medium</option>
                      <option>Telegram</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="message">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      className="form-textarea w-full text-sm"
                      rows={4}
                      placeholder="Share your requirements"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="btn w-full bg-zinc-900 text-zinc-100 shadow-sm hover:bg-zinc-800">
                    Request Demo
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <div className="text-xs text-zinc-500">
                  By submitting you agree with our{" "}
                  <a className="underline hover:no-underline" href="#0">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blocks />
      <Community />
    </>
  );
}
