import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import AboutSection from "@/sections/AboutSection";
import CTASection from "@/sections/CTASection";
import CommitmentSection from "@/sections/CommitmentSection";
import HeroSection from "@/sections/HeroSection";
import ProductsSection from "@/sections/PartnersSection";
import ServicesSection from "@/sections/ServicesSection";
import { serviceCards } from "@/constants";
import { absoluteUrl, buildPageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "SAAIR Energy | Integrated Energy Solutions for Africa",
  description:
    "Gas supply, smart metering, energy audits, energy management, and site infrastructure from SAAIR Energy — integrated solutions for utilities, businesses, and communities across Africa.",
  path: "/",
  image: "/sliders/view-male.jpg",
  imageAlt: "SAAIR Energy industrial energy operations",
  keywords: [
    "SAAIR Energy",
    "integrated energy solutions",
    "smart metering Nigeria",
    "gas supply Africa",
    "energy audit Lagos",
  ],
});

const homeItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SAAIR Energy services",
  itemListElement: serviceCards.map((card, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: card.title,
    url: absoluteUrl(`/services/${card.slug}`),
  })),
};

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
          homeItemListJsonLd,
        ]}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <CommitmentSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
