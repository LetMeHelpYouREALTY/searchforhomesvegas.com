/** Calendly scheduling links for Dr. Jan Duffy (live event types). */

export const CALENDLY = {
  base: "https://calendly.com/drjanduffy",
  showing: "https://calendly.com/drjanduffy/showing",
  buyerConsultation: "https://calendly.com/drjanduffy/buyer-consultation-30-min",
  marketStrategy: "https://calendly.com/drjanduffy/15min",
  appointment: "https://calendly.com/drjanduffy/appointment",
  listingConsultation: "https://calendly.com/drjanduffy/listing-consultation",
  zoom: "https://calendly.com/drjanduffy/meet-on-zoom",
  private15: "https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation",
  transition: "https://calendly.com/drjanduffy/realtor_strategy_meeting",
  luxuryLease: "https://calendly.com/drjanduffy/luxury-lease-consultation-30-min",
} as const;

export type CalendlyLink = (typeof CALENDLY)[keyof typeof CALENDLY];

/** Pick the best booking link for a page path. */
export function calendlyUrlForPath(pathname: string): string {
  if (pathname.startsWith("/sellers") || pathname.startsWith("/home-valuation")) {
    return CALENDLY.listingConsultation;
  }
  if (pathname.startsWith("/buyers") || pathname.startsWith("/listings")) {
    return CALENDLY.showing;
  }
  if (pathname.startsWith("/luxury")) {
    return CALENDLY.buyerConsultation;
  }
  if (pathname.startsWith("/market")) {
    return CALENDLY.marketStrategy;
  }
  if (pathname.startsWith("/relocation")) {
    return CALENDLY.transition;
  }
  return CALENDLY.buyerConsultation;
}
