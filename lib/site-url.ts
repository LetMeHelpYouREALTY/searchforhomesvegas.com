/** Canonical origin for searchforhomesvegas.com (apex primary). */
const DEFAULT_SITE_URL = "https://searchforhomesvegas.com";

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(pathname: string): string {
  const base = getSiteUrl();
  if (!pathname || pathname === "/") {
    return base;
  }
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
