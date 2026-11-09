"use client";

import { NO_HOA_FAQS, NO_HOA_PERSONA } from "@/lib/no-hoa-persona";

/**
 * Sitewide No-HOA buyer persona band — visible copy + FAQPage JSON-LD for AEO.
 * Rendered after RealScout on every page that uses RealScoutListings.
 */
export default function NoHoaBuyerSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: NO_HOA_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="py-16 md:py-20 bg-stone-soft border-y border-ink/10"
      aria-label="No HOA Las Vegas home buyers"
      data-persona="no-hoa-las-vegas-home-buyers"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-bronze-deep mb-3">
            {NO_HOA_PERSONA.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-4">
            {NO_HOA_PERSONA.title}
          </h2>
          <p className="text-ink/70 text-lg font-light leading-relaxed">{NO_HOA_PERSONA.lead}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mb-12">
          {NO_HOA_PERSONA.points.map((point) => (
            <div key={point.heading} className="border-t border-ink/15 pt-5">
              <h3 className="text-base font-semibold tracking-wide text-ink mb-2">
                {point.heading}
              </h3>
              <p className="text-sm text-ink/65 font-light leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-6">
          <h3 className="font-display text-2xl text-ink">No HOA buyer questions, answered</h3>
          {NO_HOA_FAQS.map((faq) => (
            <div key={faq.question}>
              <h4 className="text-base font-semibold text-ink mb-1">{faq.question}</h4>
              <p className="text-sm text-ink/70 font-light leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
