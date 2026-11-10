import Image from "next/image";
import { GLOBAL_HERO } from "@/lib/global-hero";

/**
 * Compact full-width hero band in the root layout (every page).
 * Intentionally shorter than PageHero so it does not collide with
 * page-level full-bleed heroes on the homepage.
 */
export default function GlobalHeroBanner() {
  const { src, alt, tagline, phoneDisplay, phoneTel } = GLOBAL_HERO;

  return (
    <aside
      className="relative w-full overflow-hidden border-b border-ink/30"
      aria-label={tagline}
    >
      <div className="relative h-[180px] sm:h-[220px] md:h-[260px] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/20"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-5 md:pb-6">
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.7)] max-w-3xl text-balance">
              {tagline}
            </p>
            {phoneDisplay && phoneTel && (
              <a
                href={phoneTel}
                className="mt-2 inline-block text-sm sm:text-base font-medium text-bronze-soft hover:text-white underline-offset-2 hover:underline [text-shadow:0_1px_6px_rgba(0,0,0,0.6)] no-underline"
              >
                Call or text {phoneDisplay}
              </a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
