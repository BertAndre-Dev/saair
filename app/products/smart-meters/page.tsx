import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import { appConfig, productsPageHero } from "@/constants";
import CTASection from "@/sections/CTASection";
import SmartMetersSection from "@/sections/SmartMetersSection";

export const metadata: Metadata = {
  title: `Smart Electricity Meters | ${appConfig.siteName}`,
  description:
    "SAAIR smart electricity meters for utilities and large energy operators, with real-time data, remote monitoring, and PLC metering through 4G-enabled data concentrators.",
};

const SmartMetersPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero {...productsPageHero} title="SMART ELECTRICITY METERS" />
      <SmartMetersSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default SmartMetersPage;
