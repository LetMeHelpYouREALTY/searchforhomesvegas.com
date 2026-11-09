import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import FeaturedListing from "@/components/sections/FeaturedListing";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import AgentPortrait from "@/components/agent/AgentPortrait";
import { CALENDLY } from "@/lib/calendly";
import { Phone, Calendar } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { getFaqsForDomain } from "@/lib/faq-config";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/lib/site-config";
import { SITE_ANGLE } from "@/lib/site-angle";
import { withPageCanonical } from "@/lib/metadata";

export const metadata: Metadata = withPageCanonical("/", {
  title: SITE_ANGLE.title,
  description: SITE_ANGLE.description,
  keywords: [...SITE_ANGLE.keywords],
});

const FAQ_SECTION_COPY: Record<string, { title: string; subtitle: string }> = {
  community: {
    title: "Community Real Estate FAQ",
    subtitle: "Common questions from buyers and sellers in this neighborhood",
  },
  luxury: {
    title: "Luxury Las Vegas Real Estate FAQ",
    subtitle: "What high-end buyers and sellers ask Dr. Jan most",
  },
  "55plus": {
    title: "55+ Community FAQ",
    subtitle: "Everything active-adult buyers need to know before moving",
  },
  search: {
    title: "Las Vegas Home Search FAQ",
    subtitle: "Straight answers from a 30-year Las Vegas market expert",
  },
  lifestyle: {
    title: "Moving to Las Vegas FAQ",
    subtitle: "What relocating buyers ask Dr. Jan most often",
  },
  investment: {
    title: "Las Vegas Investment Property FAQ",
    subtitle: "Numbers, strategy, and market insight for investors",
  },
};

export default async function Home() {
  const config = await getPageDomainConfig();
  const faqs = getFaqsForDomain(config.pageType, config.domain);
  const faqCopy = FAQ_SECTION_COPY[config.pageType] ?? FAQ_SECTION_COPY["search"];
  const faqTitle =
    config.pageType === "community" || config.pageType === "55plus"
      ? `${config.neighborhood} FAQ`
      : faqCopy.title;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${getSiteUrl()}#business`,
    name: siteConfig.name,
    alternateName: `No HOA ${config.neighborhood} Homes by Dr Jan Duffy`,
    url: getSiteUrl(),
    telephone: "+17025001955",
    image: `${getSiteUrl()}/images/agent/dr-jan-duffy.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 W Lake Mead Blvd, Suite 100",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US",
    },
    areaServed: config.neighborhood,
    knowsAbout: ["No HOA homes Las Vegas", "Luxury non-HOA estates", config.neighborhood],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Luxury full-bleed hero — brand, one headline, one line, one CTA group */}
        <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink text-stone-soft">
          <div className="absolute inset-0">
            <Image
              src="/Image/hero_bg_1.jpg"
              alt="Las Vegas Valley homes at dusk with mountain backdrop"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center motion-safe:animate-ken-burns"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 pb-16 pt-32 md:pb-24 md:pt-40">
            <div className="max-w-3xl motion-safe:animate-fade-up">
              <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-2">
                No HOA Las Vegas Homes
              </p>
              <p className="text-sm sm:text-base uppercase tracking-[0.22em] text-bronze-soft mb-8">
                by Dr Jan Duffy
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-white/95 leading-[1.1] mb-5">
                {config.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-stone/85 max-w-2xl mb-10 font-light leading-relaxed">
                {config.heroSubheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <a
                  href="tel:+17025001955"
                  className="inline-flex items-center justify-center gap-2 bg-bronze text-ink px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-bronze-soft no-underline"
                >
                  <Phone className="h-4 w-4" />
                  Call 702-500-1955
                </a>
                <CalendlyButton
                  url={CALENDLY.buyerConsultation}
                  className="inline-flex items-center justify-center gap-2 border border-stone/40 text-stone-soft px-7 py-3.5 text-sm font-semibold tracking-wide hover:border-bronze hover:text-bronze-soft no-underline"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a consultation
                </CalendlyButton>
              </div>
              <div className="realscout-wrapper justify-start px-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <RealScoutListings />


        <FeaturedListing
          phone="(702) 500-1955"
          phoneHref="tel:+17025001955"
          siteHost="searchforhomesvegas.com"
        />

        {/* Editorial proof — one job, no card chrome */}
        <section className="py-20 md:py-28 bg-stone-soft">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
              <div className="lg:col-span-5">
                <div className="mb-6">
                  <AgentPortrait size="xl" caption priority />
                </div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-bronze-deep mb-4">
                  Why Dr. Jan
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6">
                  Las Vegas market depth with direct, no-HOA expertise.
                </h2>
                <p className="text-ink/70 text-lg font-light leading-relaxed mb-8">
                  Since 2008: $127M+ closed, map-first search, and direct access — she answers
                  702-500-1955 herself.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a
                    href="tel:+17025001955"
                    className="inline-flex items-center gap-2 text-ink font-semibold tracking-wide border-b border-bronze pb-1 no-underline hover:text-bronze-deep"
                  >
                    <Phone className="h-4 w-4" />
                    Talk with Dr. Jan
                  </a>
                  <CalendlyButton
                    url={CALENDLY.buyerConsultation}
                    className="inline-flex items-center gap-2 text-ink font-semibold tracking-wide border-b border-bronze pb-1 no-underline hover:text-bronze-deep"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule online
                  </CalendlyButton>
                </div>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-3 gap-10 sm:gap-8">
                {[
                  {
                    value: "30+",
                    label: "Years in Las Vegas",
                    detail: "Neighborhood-level pricing, not portal averages.",
                  },
                  {
                    value: "$127M+",
                    label: "Career volume",
                    detail: "Buyers, sellers, luxury, 55+, and investment deals.",
                  },
                  {
                    value: "5.0★",
                    label: "Realtor.com",
                    detail: "Verified rating across 50 published reviews.",
                  },
                ].map((item) => (
                  <div key={item.label} className="border-t border-ink/15 pt-6">
                    <div className="font-display text-4xl text-ink mb-2">{item.value}</div>
                    <div className="text-sm font-semibold tracking-wide text-ink mb-2">
                      {item.label}
                    </div>
                    <p className="text-sm text-ink/60 font-light leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Market pulse */}
        <section className="py-20 md:py-24 bg-ink text-stone-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <p className="text-[11px] uppercase tracking-[0.24em] text-bronze-soft mb-4">
                Market pulse
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">
                {config.neighborhood} real estate, current read
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-5xl">
              {[
                { value: "$450K", label: "Median price" },
                { value: "28", label: "Avg days on market" },
                { value: "4,850", label: "Active listings" },
                { value: "2.1", label: "Months of inventory" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-4xl md:text-5xl text-bronze-soft mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-stone/60 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/market-report"
                className="inline-flex border border-stone/30 text-stone-soft px-6 py-3 text-sm font-semibold tracking-wide hover:border-bronze hover:text-bronze-soft no-underline"
              >
                Full market report
              </Link>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection />

        <FAQSection faqs={faqs} title={faqTitle} subtitle={faqCopy.subtitle} />

        {/* Single primary CTA */}
        <section className="relative py-24 md:py-28 overflow-hidden bg-ink text-stone-soft">
          <div
            className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bronze/40 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="relative container mx-auto px-4 text-center max-w-3xl">
            <div className="mb-8 flex justify-center">
              <AgentPortrait size="lg" />
            </div>
            <p className="font-display text-2xl md:text-3xl text-white mb-2">
              No HOA Las Vegas Homes
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-soft mb-6">
              by Dr Jan Duffy
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-5">
              {config.ctaHeadline}
            </h2>
            <p className="text-lg text-stone/75 font-light mb-10 leading-relaxed">
              {config.ctaSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center gap-2 bg-bronze text-ink px-8 py-4 text-base font-semibold tracking-wide hover:bg-bronze-soft no-underline"
              >
                <Phone className="h-5 w-5" />
                Call 702-500-1955
              </a>
              <CalendlyButton
                url={CALENDLY.buyerConsultation}
                className="inline-flex items-center justify-center gap-2 border border-stone/35 text-stone-soft px-8 py-4 text-base font-semibold tracking-wide hover:border-bronze hover:text-bronze-soft no-underline"
              >
                <Calendar className="h-5 w-5" />
                Schedule online
              </CalendlyButton>
            </div>
            <p className="mt-8 text-sm text-stone/50">
              No HOA Las Vegas Homes by Dr Jan Duffy · License S.0197614.LLC · 9406 W Lake Mead
              Blvd, Suite 100, Las Vegas, NV 89134
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
