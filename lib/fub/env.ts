import { SITE_ANGLE } from "@/lib/site-angle";

export function getFubApiKey(): string | undefined {
  const key = process.env.FOLLOW_UP_BOSS_API_KEY || process.env.FUB_API_KEY;
  return key?.trim() || undefined;
}

export function getFubSystemKey(): string | undefined {
  const key = process.env.FUB_SYSTEM_KEY;
  return key?.trim() || undefined;
}

/** FUB person.source — always this site's domain. */
export function getSiteLeadSource(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv).hostname.replace(/^www\./, "");
    } catch {
      // fall through
    }
  }
  return SITE_ANGLE.domain;
}
