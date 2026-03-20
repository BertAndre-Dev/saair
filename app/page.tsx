import Navbar from "@/components/layout/Navbar";

import AboutSection from "@/sections/AboutSection";
import CTASection from "@/sections/CTASection";
import CommitmentSection from "@/sections/CommitmentSection";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import ProductsSection from "@/sections/PartnersSection";
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
      <ProductsSection />
      <CommitmentSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
