import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import { productsPageHero } from "@/constants";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  productJsonLd,
} from "@/lib/seo";
import CTASection from "@/sections/CTASection";
import SmartMetersSection from "@/sections/SmartMetersSection";

const path = "/products/smart-meters";
const title = "Smart Electricity Meters";
const description =
  "SAAIR smart electricity meters for utilities and large energy operators — real-time data, remote monitoring, STS prepaid capability, and PLC metering through 4G-enabled data concentrators.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  image: "/meter/meter1.png",
  imageAlt: "SAAIR three phase energy meter",
  keywords: [
    "smart electricity meters",
    "PLC meters Nigeria",
    "prepaid electricity meters",
    "STS meters",
    "data concentrator unit",
  ],
});

const SmartMetersPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: title, path },
          ]),
          productJsonLd({
            name: title,
            description,
            path,
            image: "/meter/meter1.png",
            category: "Smart Electricity Meters",
          }),
        ]}
      />
      <Navbar />
      <Hero {...productsPageHero} title="SMART ELECTRICITY METERS" />
      <SmartMetersSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default SmartMetersPage;
