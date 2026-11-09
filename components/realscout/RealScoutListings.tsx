"use client";

import ScheduleSection from "@/components/sections/ScheduleSection";
import NoHoaBuyerSection from "@/components/sections/NoHoaBuyerSection";

/**
 * RealScout Office Listings + No-HOA persona + Calendly booking band.
 * Place immediately below each page hero. Scripts load once in root layout.
 */
export default function RealScoutListings() {
  const realScoutAgentEncodedId =
    process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID?.trim() || "QWdlbnQtMjI1MDUw";
  const realScoutHomeSearchUrl =
    process.env.NEXT_PUBLIC_REALSCOUT_URL?.trim() || "https://drjanduffy.realscout.com/";

  return (
    <>
      <section
        className="py-12 md:py-16 bg-stone-soft border-y border-ink/10"
        aria-label="Office listings from Dr. Jan Duffy"
        data-realscout-office-listings
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-bronze-deep mb-2">
                Live MLS · No HOA focus
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
                Featured Properties
              </h2>
              <p className="text-ink/65 mt-2 font-light">
                Las Vegas and Henderson listings for No HOA Las Vegas home buyers — updated from
                the MLS
              </p>
            </div>
            <a
              href={realScoutHomeSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold tracking-wide text-ink border-b border-bronze pb-0.5 no-underline hover:text-bronze-deep"
            >
              View all properties
            </a>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings 
              agent-encoded-id="${realScoutAgentEncodedId}" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              property-types=",SFR,MF,TC" 
              price-min="500000" 
              price-max="800000"
            ></realscout-office-listings>`,
            }}
          />
        </div>
      </section>
      <NoHoaBuyerSection />
      <ScheduleSection
        title="Tour No HOA homes with Dr. Jan"
        subtitle="Book a showing or a 30-minute buyer consult — she pulls non-HOA comps before you walk in."
      />
    </>
  );
}
