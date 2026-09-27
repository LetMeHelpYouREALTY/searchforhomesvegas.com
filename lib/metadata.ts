import type { Metadata } from "next";
import { SITE_ANGLE } from "@/lib/site-angle";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

type PageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  keywords,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(pathname);
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
  };
}

export function rootLayoutMetadata(pathname: string): Metadata {
  const canonical = absoluteUrl(pathname);
  const isHome = pathname === "/" || pathname === "";
  const title = isHome
    ? SITE_ANGLE.title
    : { template: "%s | Dr. Jan Duffy", default: SITE_ANGLE.title };

  return {
    metadataBase: new URL(getSiteUrl()),
    title,
    description: SITE_ANGLE.description,
    keywords: [...SITE_ANGLE.keywords],
    alternates: { canonical },
    openGraph: {
      title: isHome ? SITE_ANGLE.title : SITE_ANGLE.h1,
      description: SITE_ANGLE.description,
      type: "website",
      url: canonical,
    },
  };
}
