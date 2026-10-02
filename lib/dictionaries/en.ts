// TODO(copy): English drafts, pending review. Every app name and feature is a placeholder.
const en = {
  meta: {
    title: "log studio · Shopify stores and apps",
    description: "log studio builds custom Shopify stores and maintains a suite of apps for merchants.",
  },
  nav: {
    apps: "Apps",
    services: "Services",
    contact: "Contact",
    theme: "Toggle dark mode",
    language: "Language",
    menu: "Main",
  },
  doors: {
    store: "Build my store",
    apps: "See our apps",
  },
  hero: {
    title: "We build Shopify stores and the apps that run them",
    subtitle:
      "log studio is a Shopify studio. We build custom stores for brands, and we maintain a suite of apps for merchants everywhere.",
    placeholder: "Screenshot placeholder",
  },
  apps: {
    title: "Apps for your store",
    subtitle: "Install, set up, watch the numbers move. Names and features are placeholders for now.",
    soon: "Coming soon",
    items: [
      { name: "Promo engine", desc: "Placeholder: build and schedule promotions without touching code." },
      { name: "Bundle builder", desc: "Placeholder: let shoppers put their own bundles together." },
      { name: "App 03", desc: "Placeholder: name and purpose to be defined." },
    ],
  },
  services: {
    title: "Stores built around your brand",
    subtitle: "Placeholder: we take a store from first sketch to launch, and keep it healthy after.",
    imageAlt: "Beaver mascot building",
    items: [
      { title: "Custom themes", desc: "Placeholder: design and build on Online Store 2.0." },
      { title: "Migrations", desc: "Placeholder: move your catalog and customers to Shopify." },
      { title: "Integrations", desc: "Placeholder: connect your store to the tools you already use." },
      { title: "Performance", desc: "Placeholder: faster pages, better conversion." },
    ],
  },
  final: {
    title: "Pick your door",
    desc: "A store built for you, or apps you install today.",
  },
  contact: {
    title: "Tell us about your store",
    desc: "Share what you have in mind. We reply within one business day (placeholder).",
    name: "Name",
    email: "Email",
    store: "Store URL (optional)",
    topic: "What do you need?",
    topics: ["A custom store", "One of the apps", "Something else"],
    message: "Message",
    submit: "Send message",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export type Dict = typeof en;
export default en;
