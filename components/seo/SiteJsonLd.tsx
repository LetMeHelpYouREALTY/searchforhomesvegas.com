import SchemaScript from "@/components/SchemaScript";
import {
  generateOrganizationSchema,
  generatePersonSchema,
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
} from "@/lib/schema";

/**
 * Sitewide entity graph for SEO / GEO / AEO — injected once in root layout.
 */
export default function SiteJsonLd() {
  return (
    <SchemaScript
      id="site-entity-graph"
      schemas={[
        generateWebSiteSchema(),
        generateRealEstateAgentSchema(),
        generatePersonSchema(),
        generateOrganizationSchema(),
      ]}
    />
  );
}
