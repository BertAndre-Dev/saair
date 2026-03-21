import Image from "next/image";

import { servicesCopy } from "@/constants";

const ServicesSection = () => {
  return (
    <section
      id={servicesCopy.sectionId}
      className="bg-[#001F3F] py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-8 xl:px-0">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-[30px] md:text-[40px] xl:text-[48px] font-bold tracking-wide text-white ">
              {servicesCopy.title}
            </h2>
          </div>
          <div className="text-[18px] md:text-[20px] xl:text-[24px] font-semibold text-[#00804D] ">
            {servicesCopy.subtitle}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-[18px] md:text-[20px] xl:text-[24px] leading-7 text-[#F7F7F7]">
            {servicesCopy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {servicesCopy.cards.map((card) => (
            <article
              key={card.number}
              className="overflow-hidden rounded-[24px] bg-white shadow-sm"
            >
              <div className="relative h-56 w-full md:h-60">
                <Image
                  src={card.imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  priority={card.number === "01"}
                />
              </div>

              <div className="relative p-4">
                <div className="absolute right-6 top-1">
                  <Image
                    src={card.iconSrc}
                    alt=""
                    width={100}
                    height={80}
                    className="h-10 w-10"
                  />
                </div>

                <div className="flex flex-col items-start border border-[#FFFFFF14] gap-4">
                  <div className="text-[28px] md:text-[32px] xl:text-[40px] font-bold leading-none text-[#00804D]">
                    {card.number}
                  </div>
                    <h3 className="text-base md:text-[18px] font-bold text-black">
                      {card.title}
                    </h3>
                </div>

                <p className="mt-2 text-[14px] leading-6 text-[#4C4C4C] md:text-[16px] xl:text-[18px]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

