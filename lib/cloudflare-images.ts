/**
 * Cloudflare Images vault for searchforhomesvegas.com
 * Account hash: byE6BTe9lNqo21V57n4aPQ (Real Estate Domains)
 *
 * Delivery: https://imagedelivery.net/{hash}/{id}/{variant}
 * Local fallbacks live under /public/images/... for offline/dev.
 */

export const CF_IMAGES_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

export type CfImageVariant =
  | "public"
  | "hero"
  | "heroxl"
  | "desktop"
  | "tablet"
  | "card"
  | "thumb"
  | "og"
  | "avatar";

/** Custom IDs uploaded to the Cloudflare Images vault */
export const CF_IMAGE_IDS = {
  heroEstateDusk: "searchforhomesvegas/hero-no-hoa-estate-dusk",
  heroRvAcreage: "searchforhomesvegas/hero-no-hoa-rv-acreage",
  heroHorseProperty: "searchforhomesvegas/hero-no-hoa-horse-property",
  globalHeroValley: "searchforhomesvegas/global-hero-las-vegas-valley",
  propertyLuxuryCustom: "searchforhomesvegas/property-no-hoa-luxury-custom",
  propertyHenderson: "searchforhomesvegas/property-no-hoa-henderson-spacious",
  propertyGreenValley:
    "searchforhomesvegas/property-no-hoa-green-valley-estate",
  sectionWhyDrJan: "searchforhomesvegas/section-why-dr-jan-office",
  /** Existing vault asset */
  agentPortrait: "fc4911a4-7842-470b-a54d-4589039a2a00",
} as const;

export type CfImageKey = keyof typeof CF_IMAGE_IDS;

/** Local public/ fallbacks (same filenames as vault uploads). */
export const LOCAL_IMAGE_FALLBACKS: Record<CfImageKey, string> = {
  heroEstateDusk: "/images/hero/hero-no-hoa-estate-dusk.jpg",
  heroRvAcreage: "/images/hero/hero-no-hoa-rv-acreage.jpg",
  heroHorseProperty: "/images/hero/hero-no-hoa-horse-property.jpg",
  globalHeroValley: "/images/global-hero/global-hero-las-vegas-valley.jpg",
  propertyLuxuryCustom: "/images/properties/property-no-hoa-luxury-custom.jpg",
  propertyHenderson:
    "/images/properties/property-no-hoa-henderson-spacious.jpg",
  propertyGreenValley:
    "/images/properties/property-no-hoa-green-valley-estate.jpg",
  sectionWhyDrJan: "/images/sections/section-why-dr-jan-office.jpg",
  agentPortrait: "/images/agent/dr-jan-duffy.png",
};

export function cfImageUrl(
  id: string,
  variant: CfImageVariant = "public",
): string {
  return `https://imagedelivery.net/${CF_IMAGES_ACCOUNT_HASH}/${id}/${variant}`;
}

/**
 * Prefer Cloudflare Images CDN; set NEXT_PUBLIC_CF_IMAGES=false to force local.
 */
export function siteImage(
  key: CfImageKey,
  variant: CfImageVariant = "public",
): string {
  if (process.env.NEXT_PUBLIC_CF_IMAGES === "false") {
    return LOCAL_IMAGE_FALLBACKS[key];
  }
  return cfImageUrl(CF_IMAGE_IDS[key], variant);
}

/** Hero carousel for No HOA luxury buyer persona */
export const HERO_CAROUSEL = [
  {
    key: "heroEstateDusk" as const,
    alt: "Luxury custom estate on a private Las Vegas desert lot at dusk — No HOA acreage living",
  },
  {
    key: "heroRvAcreage" as const,
    alt: "Southwest Las Vegas non-HOA home with RV parking on a rural-preservation lot",
  },
  {
    key: "heroHorseProperty" as const,
    alt: "Las Vegas valley horse property with ranch-style luxury home — no HOA",
  },
] as const;
