import Image from "next/image";

import ScrollReveal from "@/components/motion/ScrollReveal";
import { aboutMissionVisionApproachCopy } from "@/constants";

const { iconSrc, iconAlt, mission, vision, approach } =
  aboutMissionVisionApproachCopy;

function ApproachCard({ className }: { className?: string }) {
  return (
    <article
      className={`flex h-full flex-col gap-5 rounded-[24px] bg-white p-6  shadow-sm ${className ?? ""}`}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={44}
        height={44}
        className="shrink-0"
      />
      <h2 className="text-[18px] md:text-[20px] xl:text-[24px] font-bold pt-4 text-black ">
        {approach.title}
      </h2>
      <div className="flex flex-col gap-4 text-[14px] md:text-[18px] xl:text-[20px] leading-7 text-[#4C4C4C] font-normal md:leading-8">
        {approach.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <ul className="list-disc space-y-2 pl-5 marker:text-[#0a0a0a]">
          {approach.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function MissionVisionCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="flex flex-col gap-5 rounded-[24px] bg-white p-6 shadow-sm">
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={44}
        height={44}
        className="shrink-0"
      />
      <h2 className="text-[18px] md:text-[20px] xl:text-[24px] font-bold pt-4 text-black ">{title}</h2>
      <p className="text-[14px] md:text-[18px] xl:text-[20px] leading-7 text-[#4C4C4C] font-normal md:leading-8">
        {body}
      </p>
    </article>
  );
}

const AboutMissionVisionApproachSection = () => {
  return (
    <ScrollReveal className="bg-[#001F3F] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:items-stretch md:gap-8">
          <div className="flex flex-col gap-6 md:gap-8">
            <MissionVisionCard title={mission.title} body={mission.body} />
            <MissionVisionCard title={vision.title} body={vision.body} />
          </div>
          <div className="flex min-h-0 flex-col">
            <ApproachCard className="min-h-full" />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default AboutMissionVisionApproachSection;
