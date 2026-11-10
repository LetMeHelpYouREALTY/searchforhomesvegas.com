"use client";

import { useEffect } from "react";
import { CALENDLY } from "@/lib/calendly";
import "./types";

interface CalendlyBadgeProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

/**
 * Floating schedule badge. Script must load once in root layout.
 */
export default function CalendlyBadge({
  url = CALENDLY.buyerConsultation,
  text = "Schedule with Dr. Jan",
  color = "#b8956c",
  textColor = "#0c0f14",
  branding = false,
}: CalendlyBadgeProps) {
  useEffect(() => {
    const initBadge = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        });
      }
    };

    if (window.Calendly) {
      initBadge();
      return;
    }

    const id = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(id);
        initBadge();
      }
    }, 200);

    const timeout = window.setTimeout(() => window.clearInterval(id), 10000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeout);
    };
  }, [url, text, color, textColor, branding]);

  return null;
}
