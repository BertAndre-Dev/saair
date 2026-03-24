import ScrollReveal from "@/components/motion/ScrollReveal";
import { productsPageOverview } from "@/constants";

const ProductsOverviewSection = () => {
  return (
    <ScrollReveal className="bg-[#F9FAF9] py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-0">
        <div className="mb-6 inline-flex items-center rounded-lg bg-[#0F172A] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white md:text-sm">
          {productsPageOverview.badgeLabel}
        </div>
        <h2 className="text-[30px] md:text-[40px] font-bold uppercase tracking-wide text-[#008148]">
          {productsPageOverview.title}
        </h2>
        {productsPageOverview.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="mt-6 text-base leading-8 text-[#4C4C4C] font-normal"
          >
            {paragraph}
          </p>
        ))}
        <h3 className="mt-12 text-base font-bold text-[#4C4C4C]">
          {productsPageOverview.subheading}
        </h3>
        <p className="mt-4 text-base leading-8 font-normal text-[#4C4C4C]">
          {productsPageOverview.leadIn}
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 font-normal text-[#4C4C4C]">
          {productsPageOverview.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-base leading-8 font-normal text-[#4C4C4C]">
          {productsPageOverview.closing}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default ProductsOverviewSection;
