/**
 * Compact global hero banner config — shown on every page via root layout.
 * Distinct from full-bleed PageHero (homepage / page-level heroes).
 */

import { siteImage } from "@/lib/cloudflare-images";

export type GlobalHeroConfig = {
  src: string;
  alt: string;
  tagline: string;
  phoneDisplay?: string;
  phoneTel?: string;
};

export const GLOBAL_HERO: GlobalHeroConfig = {
  src: siteImage("globalHeroValley", "hero"),
  alt: "Las Vegas Valley residential rooftops and desert mountains at dusk — No HOA Las Vegas Homes",
  tagline: "No HOA Las Vegas Homes by Dr Jan Duffy",
  phoneDisplay: "(702) 500-1955",
  phoneTel: "tel:+17025001955",
};
