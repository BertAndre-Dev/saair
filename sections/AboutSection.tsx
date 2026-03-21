import Image from "next/image";

import Button from "@/components/ui/Button";
import { aboutCopy } from "@/constants";

const AboutSection = () => {
  return (
    <section id={aboutCopy.sectionId} className="bg-[#F7F7F7] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg h-[200px] md:h-[650px] ">
            <Image
              src="/who.svg"
              alt={aboutCopy.image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-[#00804D] text-[30px] md:text-[40px] xl:text-[48px] text-center md:text-left font-bold leading-none tracking-tight">
              {aboutCopy.title}
            </h2>

            {aboutCopy.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-[15px] leading-7 text-[#4C4C4C] md:text-[16px]"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8">
              <Button
                href={aboutCopy.button.href}
                className="bg-[#00804D] hover:bg-[#00804D]/90 p-2 rounded-full text-white border border-[#00804D]"
              >
                <span className="inline-flex items-center gap-3">
                  {aboutCopy.button.label}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
