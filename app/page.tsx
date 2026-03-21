import Navbar from "@/components/layout/Navbar";

import AboutSection from "@/sections/AboutSection";
import CTASection from "@/sections/CTASection";
import CommitmentSection from "@/sections/CommitmentSection";
import HeroSection from "@/sections/HeroSection";
import ProductsSection from "@/sections/PartnersSection";
import ServicesSection from "@/sections/ServicesSection";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
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
