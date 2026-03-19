import Navbar from "@/components/layout/Navbar";

import AboutSection from "@/sections/AboutSection";
import CTASection from "@/sections/CTASection";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import PartnersSection from "@/sections/PartnersSection";
import PricingSection from "@/sections/PricingSection";
import StatisticsSection from "@/sections/StatisticsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatisticsSection />
      <AboutSection />
      <TestimonialsSection />
      <PartnersSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
