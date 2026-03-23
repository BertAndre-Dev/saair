import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

import CTASection from "@/sections/CTASection";
import AboutIntroSection from "@/sections/AboutIntroSection";
import AboutMissionVisionApproachSection from "@/sections/AboutMissionVisionApproachSection";

import { aboutPageHero } from "@/constants";

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero {...aboutPageHero} />
      <AboutIntroSection />
      <AboutMissionVisionApproachSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default AboutPage;
