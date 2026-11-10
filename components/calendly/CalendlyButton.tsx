"use client";

import { CALENDLY } from "@/lib/calendly";
import "./types";

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Opens Calendly popup. Requires global Calendly script in root layout.
 */
export default function CalendlyButton({
  url = CALENDLY.buyerConsultation,
  text = "Schedule with Dr. Jan",
  className = "inline-flex items-center justify-center bg-bronze text-ink px-6 py-3 font-semibold tracking-wide hover:bg-bronze-soft transition-colors no-underline",
  children,
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <a href={url} onClick={handleClick} className={className} role="button">
      {children || text}
    </a>
  );
}
