import { productsPageOverview } from "@/constants";

const ProductsOverviewSection = () => {
  return (
    <section className="bg-[#F9FAF9] py-16 md:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
        <div className="mb-6 inline-flex items-center rounded-full bg-[#0F172A] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white md:text-sm">
          {productsPageOverview.badgeLabel}
        </div>
        <h2 className="text-3xl font-bold uppercase tracking-wide text-[#008148] md:text-4xl lg:text-5xl">
          {productsPageOverview.title}
        </h2>
        {productsPageOverview.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="mt-6 text-base leading-8 text-neutral-800 md:text-lg md:leading-9"
          >
            {paragraph}
          </p>
        ))}
        <h3 className="mt-12 text-xl font-bold text-neutral-900 md:text-2xl">
          {productsPageOverview.subheading}
        </h3>
        <p className="mt-4 text-base leading-8 text-neutral-800 md:text-lg md:leading-9">
          {productsPageOverview.leadIn}
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-neutral-800 md:text-lg">
          {productsPageOverview.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-10 text-base leading-8 text-neutral-800 md:text-lg md:leading-9">
          {productsPageOverview.closing}
        </p>
      </div>
    </section>
  );
};

export default ProductsOverviewSection;
