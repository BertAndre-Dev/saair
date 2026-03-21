import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

import CTASection from "@/sections/CTASection";
import ProductsOverviewSection from "@/sections/ProductsOverviewSection";
import ProductsTechnicalSection from "@/sections/ProductsTechnicalSection";

import { productsPageHero } from "@/constants";

const ProductsPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero {...productsPageHero} />
      <ProductsOverviewSection />
      <ProductsTechnicalSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default ProductsPage;
