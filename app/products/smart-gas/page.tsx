import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import { appConfig, productsPageHero } from "@/constants";
import CTASection from "@/sections/CTASection";
import SmartGasSection from "@/sections/SmartGasSection";

export const metadata: Metadata = {
  title: `Smart Gas Meters | ${appConfig.siteName}`,
  description:
    "SAAIR Smart LoRa RF prepaid split keypad gas meter for residential and light commercial networks, with STS prepaid technology, remote monitoring, and automatic shut-off.",
};

const SmartGasPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero {...productsPageHero} title="SMART GAS METERS" />
      <SmartGasSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default SmartGasPage;
