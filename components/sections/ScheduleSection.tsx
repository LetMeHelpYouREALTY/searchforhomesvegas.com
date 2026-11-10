"use client";

import { usePathname } from "next/navigation";
import { Calendar, Phone } from "lucide-react";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import AgentPortrait from "@/components/agent/AgentPortrait";
import { CALENDLY, calendlyUrlForPath } from "@/lib/calendly";

type ScheduleSectionProps = {
  title?: string;
  subtitle?: string;
  /** Override primary Calendly URL */
  primaryUrl?: string;
};

/**
 * Booking CTA band — place after hero/listings or before final CTA on conversion pages.
 */
export default function ScheduleSection({
  title = "Book time with Dr. Jan",
  subtitle = "Showings, buyer consults, and listing strategy — pick a slot that works for you.",
  primaryUrl,
}: ScheduleSectionProps) {
  const pathname = usePathname() || "/";
  const primary = primaryUrl || calendlyUrlForPath(pathname);

  return (
    <section
      className="py-14 md:py-20 bg-ink text-stone-soft"
      aria-label="Schedule with Dr. Jan Duffy"
      data-calendly-section
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <AgentPortrait size="lg" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-bronze-soft mb-3">
            Schedule with Dr. Jan
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">{title}</h2>
          <p className="text-stone/70 font-light mb-8 leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <CalendlyButton
              url={primary}
              className="inline-flex items-center justify-center gap-2 bg-bronze text-ink px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-bronze-soft no-underline"
            >
              <Calendar className="h-4 w-4" />
              Schedule online
            </CalendlyButton>
            <CalendlyButton
              url={CALENDLY.showing}
              className="inline-flex items-center justify-center gap-2 border border-stone/35 text-stone-soft px-7 py-3.5 text-sm font-semibold tracking-wide hover:border-bronze hover:text-bronze-soft no-underline"
            >
              Book a showing
            </CalendlyButton>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-bronze-soft hover:text-white no-underline"
            >
              <Phone className="h-4 w-4" />
              702-500-1955
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
