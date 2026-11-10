"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import SiteLogo from "@/components/layouts/SiteLogo";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { href: "/", label: "Home", external: false },
    { href: "http://drjanduffy.realscout.com/", label: "Properties", external: true },
    { href: "/neighborhoods", label: "Neighborhoods", external: false },
    { href: "/about", label: "About", external: false },
    { href: "/contact", label: "Contact", external: false },
  ];

  const serviceLinks = [
    { href: "/buyers", label: "Home Buying" },
    { href: "/sellers", label: "Home Selling" },
    { href: "/luxury-homes", label: "Luxury Homes" },
    { href: "/55-plus-communities", label: "55+ Communities" },
    { href: "/new-construction", label: "New Construction" },
    { href: "/market-report", label: "Market Report" },
    { href: "/market-insights", label: "Market Insights" },
  ];

  const overHero = isHome && !isScrolled;
  const linkClass = overHero
    ? "text-stone/90 hover:text-white font-medium transition-colors text-sm tracking-wide"
    : "text-ink/80 hover:text-ink font-medium transition-colors text-sm tracking-wide";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        overHero
          ? "bg-transparent py-5"
          : "bg-stone-soft/95 backdrop-blur-md border-b border-ink/10 py-3 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <SiteLogo inverted={overHero} />

          <div className="hidden lg:flex items-center space-x-6">
            {mainNavLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} no-underline`}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={`${linkClass} no-underline`}>
                  {link.label}
                </Link>
              )
            )}

            <div className="relative">
              <button
                type="button"
                className={`${linkClass} inline-flex items-center gap-1`}
                onClick={() => setIsServicesOpen((open) => !open)}
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-stone-soft border border-ink/10 shadow-xl py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-ink/80 hover:bg-ink/5 hover:text-ink no-underline"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+17025001955"
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-wide no-underline ${
                overHero
                  ? "bg-bronze text-ink hover:bg-bronze-soft"
                  : "bg-ink text-stone-soft hover:bg-ink-soft"
              }`}
            >
              <Phone className="h-4 w-4" />
              702-500-1955
            </a>
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 ${overHero ? "text-white" : "text-ink"}`}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-ink/10 bg-stone-soft/95 backdrop-blur-md px-1 pt-4">
            <div className="flex flex-col gap-3">
              {mainNavLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink font-medium no-underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-ink font-medium no-underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ink/70 text-sm no-underline pl-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center gap-2 bg-ink text-stone-soft px-4 py-3 font-semibold no-underline"
              >
                <Phone className="h-4 w-4" />
                Call 702-500-1955
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
