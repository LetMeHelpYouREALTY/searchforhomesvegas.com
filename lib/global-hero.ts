/**
 * Compact global hero banner config — shown on every page via root layout.
 * Distinct from full-bleed PageHero (homepage / page-level heroes).
 */

export type GlobalHeroConfig = {
  src: string;
  alt: string;
  tagline: string;
  phoneDisplay?: string;
  phoneTel?: string;
};

export const GLOBAL_HERO: GlobalHeroConfig = {
  src: "/images/global-hero/search-homes-vegas.jpg",
  alt: "Overview of Las Vegas Valley residential neighborhoods with desert mountains, Las Vegas, NV",
  tagline: "Search Vegas Homes for Sale — Dr. Jan Duffy",
  phoneDisplay: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
};
