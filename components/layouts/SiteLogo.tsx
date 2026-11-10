import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type SiteLogoProps = {
  /** When true, use light text for dark/transparent heroes */
  inverted?: boolean;
  className?: string;
  /** Link to home (default true) */
  linked?: boolean;
};

/**
 * Site logo lockup: "No HOA Las Vegas Homes by Dr Jan Duffy"
 */
export default function SiteLogo({
  inverted = false,
  className = "",
  linked = true,
}: SiteLogoProps) {
  const primaryClass = inverted ? "text-white" : "text-ink";
  const secondaryClass = inverted ? "text-bronze-soft" : "text-bronze-deep";

  const mark = (
    <span className={`flex flex-col leading-tight ${className}`}>
      <span
        className={`font-display text-base sm:text-lg md:text-xl tracking-tight ${primaryClass}`}
      >
        {siteConfig.logoPrimary}
      </span>
      <span
        className={`text-[10px] sm:text-[11px] uppercase tracking-[0.16em] mt-0.5 ${secondaryClass}`}
      >
        {siteConfig.logoSecondary}
      </span>
    </span>
  );

  if (!linked) {
    return mark;
  }

  return (
    <Link href="/" className="no-underline" aria-label={siteConfig.logo}>
      {mark}
    </Link>
  );
}
