import Image from "next/image";

import { productsCopy } from "@/constants";

const ProductsSection = () => {
  return (
    <section
      id={productsCopy.sectionId}
      className="bg-white py-16 md:py-24 md:px-8 xl:px-0"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-4xl">
          <h2 className="text-[#00804D] text-[30px] md:text-[40px] xl:text-[48px] font-bold uppercase tracking-wide">
            {productsCopy.title}
          </h2>
          <div className="inline-flex items-center rounded-md bg-[#001F3F] px-4 py-2 text-[18px] md:text-[20px] xl:text-[24px] font-semibold tracking-wider text-white">
            {productsCopy.badgeLabel}
          </div>

          {productsCopy.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 text-[14px] md:text-[16px] xl:text-[18px] font-normal text-[#4C4C4C] leading-7"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative mt-12 md:mt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
            <div className="relative">
              <div
                className="absolute -left-3 -bottom-4 h-28 w-28 bg-[radial-gradient(circle,#E6C14A_2px,transparent_2px)] bg-size-[12px_12px] opacity-80"
                aria-hidden="true"
              />
              <div className="relative h-64 w-full overflow-hidden rounded-3xl md:h-72">
                <Image
                  src={productsCopy.images.left.src}
                  alt={productsCopy.images.left.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -right-6 -top-6 h-32 w-32 bg-[radial-gradient(circle,#FDCC0D_3px,transparent_2px)] bg-size-[12px_12px] opacity-80"
                aria-hidden="true"
              />
              <div className="relative h-64 w-full overflow-hidden rounded-3xl md:h-72">
                <Image
                  src={productsCopy.images.right.src}
                  alt={productsCopy.images.right.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

