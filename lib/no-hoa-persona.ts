/**
 * No-HOA Las Vegas home buyer persona — copy + AEO FAQ for every page.
 * Keep answers direct, number-led, fair-housing safe (no school/safety proxies).
 */

export const NO_HOA_PERSONA = {
  eyebrow: "No HOA buyer persona",
  title: "Built for No HOA Las Vegas home buyers",
  lead:
    "This site maps non-HOA inventory first — rural-preservation pockets, older central blocks, RV and horse-property corridors — then pairs you with Dr. Jan Duffy for showings and offers.",
  points: [
    {
      heading: "What “no HOA” means here",
      body: "Listings without a mandatory homeowners association fee or CC&R package. You still follow city/county codes; you skip monthly HOA dues and board rules.",
    },
    {
      heading: "Where non-HOA inventory clusters",
      body: "Northwest and southwest rural-preservation areas, plus older central Las Vegas and parts of North Las Vegas — map search beats portal filters for these.",
    },
    {
      heading: "Luxury without an HOA gate",
      body: "Estate lots, custom builds, and acreage can sit outside master-planned HOAs. Dr. Jan prices comps by lot size, utilities, and recent non-HOA closes — not portal averages.",
    },
  ],
} as const;

export const NO_HOA_FAQS = [
  {
    question: "What are No HOA homes in Las Vegas?",
    answer:
      "No HOA homes are properties sold without a required homeowners association. Buyers avoid monthly HOA dues and association rules while still following city and county codes. Dr. Jan Duffy maps these listings across Las Vegas, Henderson, and North Las Vegas.",
  },
  {
    question: "Where should No HOA Las Vegas home buyers search first?",
    answer:
      "Start with northwest and southwest rural-preservation corridors and older central neighborhoods. Tell Dr. Jan if you need RV parking, horse facilities, or larger lots so she can filter live MLS inventory on the map.",
  },
  {
    question: "Are luxury homes available without an HOA in Las Vegas?",
    answer:
      "Yes. Custom estates and acreage listings often sit outside master-planned HOAs. Expect to underwrite well depth, septic or sewer, and lot utilities carefully — Dr. Jan walks those details before you write an offer.",
  },
  {
    question: "How do I schedule a No HOA home showing with Dr. Jan Duffy?",
    answer:
      "Book online on Calendly or call 702-500-1955. License S.0197614.LLC · Berkshire Hathaway HomeServices Nevada Properties · 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
  },
] as const;
