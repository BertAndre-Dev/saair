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
  subtitle: string;
  bottomFeatureLabels: string[];
  cards: HeroCard[];
  className?: string;
};

const CardIcon = ({ kind }: { kind: HeroCard["icon"] }) => {
  const common = "h-8 w-8 shrink-0 text-white";
  if (kind === "renewable") {
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
        <path
          d="M19.5 8.5a7 7 0 1 1-9.9 9.9"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "nonRenewable") {
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M4 22h16" strokeLinecap="round" />
        <path d="M6 22V10l4-2v14" />
        <path d="M14 22V8l4 2v12" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    );
  }
  return (
    <svg
      className={common}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h.01M15 9h.01M9 15h6" strokeLinecap="round" />
      <path d="M12 12v3" strokeLinecap="round" />
    </svg>
  );
};

const EnergyIntelIcon = () => (
  <svg
    className="h-5 w-5 shrink-0 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden="true"
  >
    <path
      d="M12 3c-4.5 3-7 6.5-7 10a7 7 0 0 0 14 0c0-3.5-2.5-7-7-10Z"
      strokeLinejoin="round"
    />
    <path d="M12 11v6M9 14h6" strokeLinecap="round" />
  </svg>
);

const toneClass: Record<HeroCardTone, string> = {
  light: "border border-white/40 bg-white/20 backdrop-blur-md",
  medium: "border border-white/35 bg-emerald-900/35 backdrop-blur-md",
  dark: "border border-white/25 bg-emerald-950/55 backdrop-blur-md",
};

const Hero = ({
  backgroundImageSrc,
  backgroundImageAlt = "",
  title,
  subtitle,
  bottomFeatureLabels,
  cards,
  className = "",
}: HeroProps) => {
  return (
    <section
      className={`relative isolate min-h-[min(90vh,920px)] overflow-hidden ${className}`}
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
        {/* <div className="absolute inset-0 bg-emerald-950/55" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 mt-58 md:flex-row md:items-center md:justify-between md:pt-32">
        <div className="max-w-xl md:w-[58%]">
          <h1 className="text- uppercase leading-tight tracking-wide text-white md:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-6 text-[14px] md:text-[20px] xl:text-[24px] leading-7 font-light">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {bottomFeatureLabels.map((label, index) => (
              <div
                key={`${label}-${index}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                <EnergyIntelIcon />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 md:max-w-sm md:w-[38%]">
          {cards.map((card) => (
            <div
              key={card.label}
              className={`flex items-center bg-[#00814E24] border border-[#00814E24] gap-4 rounded-2xl px-5 py-4 ${toneClass[card.tone]}`}
            >
              <CardIcon kind={card.icon} />
              <span className="text-[14px] md:text-[20px] xl:text-[24px] font-light text-white">
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
