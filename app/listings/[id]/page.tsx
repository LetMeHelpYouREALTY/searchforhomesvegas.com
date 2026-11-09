import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Footer from "@/components/layouts/Footer";
import AgentPortrait from "@/components/agent/AgentPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { CALENDLY } from "@/lib/calendly";
import Image from "next/image";
import { Bed, Bath, Square, MapPin, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { withPageCanonical } from "@/lib/metadata";

type ListingPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ListingPageProps): Promise<Metadata> {
  const { id } = await params;
  return withPageCanonical(`/listings/${id}`, {
    title: `Las Vegas Property ${id} | Listing Details`,
    description:
      "View property details for this Las Vegas area listing. Contact Dr. Jan Duffy at (702) 500-1955 for a private showing.",
  });
}

// This would typically fetch from RealScout API
async function getProperty(id: string) {
  // Placeholder - replace with RealScout API call
  return {
    id,
    name: "Modern Luxury Home",
    location: "Summerlin, Las Vegas, NV",
    price: "$850,000",
    image: "/Image/hero_bg_1.jpg",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
    yearBuilt: 2018,
    description:
      "Stunning modern home in desirable Summerlin community. Features open floor plan, updated kitchen, and beautiful backyard. Close to schools, shopping, and entertainment.",
  };
}

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = await getProperty(id);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-slate-600">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <a
                  href="http://drjanduffy.realscout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  Properties
                </a>
              </li>
              <li>/</li>
              <li className="text-slate-900">{property.name}</li>
            </ol>
          </nav>

          {/* Property Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {property.name}
            </h1>
            <div className="flex items-center text-slate-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </div>
            <div className="text-3xl font-bold text-blue-600">
              {property.price}
            </div>
          </div>

          {/* Main Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <RealScoutListings />

          {/* Property Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Property Details
              </h2>
              <p className="text-slate-700 mb-6">{property.description}</p>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Features
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      {property.bedrooms} Bedrooms
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      {property.bathrooms} Bathrooms
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      {property.squareFeet.toLocaleString()} sq ft
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      Built {property.yearBuilt}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Schedule a Showing
                </h3>
                <p className="text-slate-700 mb-4">
                  Contact us to schedule a private viewing of this property.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="/contact">Contact Agent</a>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
                <div className="mb-4 flex justify-center">
                  <AgentPortrait size="md" caption />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  Schedule a showing
                </h3>
                <p className="text-sm text-slate-600 mb-6 text-center">
                  No HOA Las Vegas Homes by Dr Jan Duffy
                </p>
                <div className="space-y-3">
                  <CalendlyButton
                    url={CALENDLY.showing}
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 font-semibold no-underline hover:bg-blue-700"
                  >
                    <Calendar className="h-4 w-4" />
                    Book on Calendly
                  </CalendlyButton>
                  <Button
                    asChild
                    className="w-full bg-slate-900 hover:bg-slate-800"
                  >
                    <a href="tel:+17025001955" className="inline-flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call (702) 500-1955
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/contact">Send Message</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
