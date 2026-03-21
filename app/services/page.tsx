import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

import CTASection from "@/sections/CTASection";
import ServicesPageGrid from "@/sections/ServicesPageGrid";

import { servicesPageHero } from "@/constants";

const ServicesPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero {...servicesPageHero} />
      <ServicesPageGrid />
      <CTASection />
      <Footer />
    </main>
  );
};

export default ServicesPage;
