import ScrollReveal from "@/components/motion/ScrollReveal";
import { aboutPageIntroCopy } from "@/constants";

const AboutIntroSection = () => {
  return (
    <ScrollReveal id="about" className="bg-[#F9FAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
        {aboutPageIntroCopy.intro.map((p) => (
          <p
            key={p}
            className="text-base leading-7 text-[#4C4C4C] md:text-lg md:leading-8"
          >
            {p}
          </p>
        ))}
        <ul className="mt-8 list-disc space-y-3 pl-5 text-base leading-7 text-[#4C4C4C] marker:text-[#1E6B52] md:text-lg">
          {aboutPageIntroCopy.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-10 space-y-6">
          {aboutPageIntroCopy.outro.map((p) => (
            <p
              key={p}
              className="text-base leading-7 text-[#4C4C4C] md:text-lg md:leading-8"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default AboutIntroSection;
