import { Phone, Calendar, Home } from "lucide-react";
import AgentPortrait from "@/components/agent/AgentPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { CALENDLY } from "@/lib/calendly";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-ink text-stone-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <AgentPortrait size="lg" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Ready to find your next home?
          </h2>
          <p className="text-lg text-stone/70 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a consult with Dr. Jan Duffy — map search, comps, and a clear next step.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <a
              href="http://drjanduffy.realscout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-stone/35 text-stone-soft px-7 py-3.5 text-sm font-semibold tracking-wide hover:border-bronze hover:text-bronze-soft no-underline"
            >
              <Home className="h-4 w-4" />
              Browse properties
            </a>
            <CalendlyButton
              url={CALENDLY.buyerConsultation}
              className="inline-flex items-center justify-center gap-2 bg-bronze text-ink px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-bronze-soft no-underline"
            >
              <Calendar className="h-4 w-4" />
              Schedule online
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
