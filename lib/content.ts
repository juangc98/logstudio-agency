import {
  BarChart3,
  BookOpen,
  Boxes,
  Brush,
  Cable,
  CalendarClock,
  FlaskConical,
  Gauge,
  Gift,
  LayoutGrid,
  type LucideIcon,
  Package,
  Percent,
  Rocket,
  Search,
  ShieldCheck,
  Shuffle,
  Store,
  Target,
  Users,
  Zap,
} from "lucide-react";

// Non-text structure shared by every language. Text lives in lib/dictionaries.
export const appSlugs = ["promo-engine", "bundle-builder", "test-lab"] as const;
export type AppSlug = (typeof appSlugs)[number];

export const appMeta: Record<AppSlug, { icon: LucideIcon; tone: "brasa" | "rio" | "brote"; featureIcons: LucideIcon[] }> = {
  "promo-engine": { icon: Percent, tone: "brasa", featureIcons: [CalendarClock, Target, Gift, BarChart3] },
  "bundle-builder": { icon: Package, tone: "brote", featureIcons: [LayoutGrid, Boxes, Brush, Gauge] },
  "test-lab": { icon: FlaskConical, tone: "rio", featureIcons: [Shuffle, Zap, BarChart3, ShieldCheck] },
};

export const caseSlugs = ["case-one", "case-two", "case-three"] as const;
export type CaseSlug = (typeof caseSlugs)[number];

export const postSlugs = ["post-one", "post-two", "post-three"] as const;
export type PostSlug = (typeof postSlugs)[number];

export const legalSlugs = ["privacy", "terms", "cookies", "data-processing"] as const;
export type LegalSlug = (typeof legalSlugs)[number];

// Placeholder brand names for the "trusted by" strip. Invented; replace with real clients.
export const clientNames = ["Casa Alba", "Nube Store", "Orbita", "Verde Mate", "Pampa Gear", "Lumen", "Tierra Viva", "Kintsu"];
export const clientIcons: LucideIcon[] = [Store, Rocket, Search, BookOpen, Cable, Zap, Users, ShieldCheck];

export const socialLinks = [
  { id: "instagram" as const, href: "https://www.instagram.com/logstudio", src: "/svg/insta-icon.svg" },
  { id: "linkedin" as const, href: "https://www.linkedin.com/company/logstudio", src: "/svg/linkedin-icon.svg" },
];
