import Image from "next/image";

import { aboutValuesCopy } from "@/constants";

const AboutValuesSection = () => {
  return (
    <section className="bg-[#F7F9F7] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1E6B52] md:text-4xl">
          <span className="border-b-4 border-[#1E6B52] pb-2">
            {aboutValuesCopy.title}
          </span>
        </h2>
        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-7 text-[#4A4A4A] md:text-lg">
          {aboutValuesCopy.description}
        </p>
        <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-2xl md:aspect-[2.4/1]">
          <Image
            src={aboutValuesCopy.imageSrc}
            alt={aboutValuesCopy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
