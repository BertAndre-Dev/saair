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
import SmartGasSection from "@/sections/SmartGasSection";

const path = "/products/smart-gas";
const title = "Smart Gas Meters";
const description =
  "SAAIR Smart LoRa RF prepaid split keypad gas meters for residential and light commercial networks — STS prepaid technology, remote monitoring, and automatic shut-off.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  image: "/meter/meter3.png",
  imageAlt: "SAAIR prepaid gas meter",
  keywords: [
    "smart gas meters",
    "prepaid gas meters Nigeria",
    "LoRa RF gas meter",
    "STS gas metering",
  ],
});

const SmartGasPage = () => {
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
            image: "/meter/meter3.png",
            category: "Smart Gas Meters",
          }),
        ]}
      />
      <Navbar />
      <Hero {...productsPageHero} title="SMART GAS METERS" />
      <SmartGasSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default SmartGasPage;
