import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

import CTASection from "@/sections/CTASection";
import AboutIntroSection from "@/sections/AboutIntroSection";
import AboutMissionSection from "@/sections/AboutMissionSection";
import AboutVisionSection from "@/sections/AboutVisionSection";
import AboutValuesSection from "@/sections/AboutValuesSection";

import { aboutPageHero } from "@/constants";

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero {...aboutPageHero} />
      <AboutIntroSection />
      <AboutMissionSection />
      <AboutVisionSection />
      <AboutValuesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default AboutPage;
