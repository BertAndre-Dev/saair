import Image from "next/image";

export type HeroCardTone = "light" | "medium" | "dark";

export type HeroCard = {
  label: string;
  icon: "renewable" | "nonRenewable" | "technical";
  tone: HeroCardTone;
};

export type HeroProps = {
  backgroundImageSrc: string;
  backgroundImageAlt?: string;
  title: string;
  /** Used when variant is `default`. */
  subtitle?: string;
  bottomFeatureLabels?: string[];
  cards?: HeroCard[];
  /** `pageTitle`: centered title only (e.g. About Us). `default`: home marketing layout. */
  variant?: "default" | "pageTitle";
  className?: string;
};

const CardIcon = ({ kind }: { kind: HeroCard["icon"] }) => {
  const common = "h-8 w-8 shrink-0 text-white";
  if (kind === "renewable") {
    return (
      <Image
        src="/renewable-energy.svg"
        alt="Renewable"
        width={20}
        height={20}
      />
    );
  }
  if (kind === "nonRenewable") {
    return (
      <Image src="/fuel-tank.svg" alt="Non-Renewable" width={20} height={20} />
    );
  }
  return (
    <Image src="/nano-technology.svg" alt="Technical" width={20} height={20} />
  );
};

const EnergyIntelIcon = () => (
  <Image src="/Group.svg" alt="Energy Intelligence" width={20} height={20} />
);

const toneClass: Record<HeroCardTone, string> = {
  light: "border border-[#00814E24] bg-[#00814E24] backdrop-blur-md",
  medium: "border border-[#00814E24] bg-[#00814E24]  backdrop-blur-md",
  dark: "border border-[#00814E24] bg-[#00814E24] backdrop-blur-md",
};

const Hero = ({
  backgroundImageSrc,
  backgroundImageAlt = "",
  title,
  subtitle = "",
  bottomFeatureLabels = [],
  cards = [],
  variant = "default",
  className = "",
}: HeroProps) => {
  if (variant === "pageTitle") {
    return (
      <section
        className={`relative isolate flex min-h-[min(75vh,720px)] items-center justify-center overflow-hidden ${className}`}
      >
        <div className="absolute inset-0">
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 px-4 py-28 text-center md:py-32">
          <h1 className="text-4xl font-bold uppercase tracking-wide text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative isolate min-h-[min(60vh,920px)] overflow-hidden ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          fill
          className="scale-105 object-cover blur-sm"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto mt-28 flex w-full max-w-6xl flex-col gap-12 px-4 md:px-8 xl:px-0 pb-20 md:pb-0 md:mt-30 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl md:w-[58%]">
          <h1 className="text-4xl font-bold uppercase leading-tight tracking-wide text-white md:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 text-sm font-light leading-7 text-white/95 md:text-xl lg:text-2xl">
              {subtitle}
            </p>
          ) : null}
          {bottomFeatureLabels.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {bottomFeatureLabels.map((label, index) => (
                <div
                  key={`${label}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white"
                >
                  <EnergyIntelIcon />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {cards.length > 0 ? (
          <div className="flex w-full flex-col gap-4 md:max-w-sm md:w-[38%]">
            {cards.map((card) => (
              <div
                key={card.label}
                className={`flex items-center gap-4 rounded-2xl border border-[#00814E24] bg-[#00814E24] px-5 py-4 ${toneClass[card.tone]}`}
              >
                <CardIcon kind={card.icon} />
                <span className="text-[14px] md:text-[20px] xl:text-[24px] font-light text-white">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
