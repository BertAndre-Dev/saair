import Image from "next/image";

import MotionSubmitButton from "@/components/motion/MotionSubmitButton";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { ctaCopy } from "@/constants";

const CTASection = () => {
  return (
    <ScrollReveal id="cta" className="bg-zinc-50 py-16">
      <div className="">
        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[820px] bg-[url('/energy.svg')] bg-cover bg-center p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-[rgba(8,25,42,0.72)]" />

              <div className="relative z-10 flex flex-col justify-between min-h-[740px]">
                {/* Top content */}
                <div>
                  <h2 className="text-[30px] md:text-[40px] xl:text-[48px] font-bold uppercase tracking-wide text-[#00804D]">
                    {ctaCopy.leftPanel.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-[18px] md:text-[20px] xl:text-[24px] font-bold leading-tight">
                    {ctaCopy.leftPanel.subtitle}
                  </p>
                  <p className="mt-8 max-w-xl text-[18px] md:text-[20px] xl:text-[24px] font-normal leading-8 text-zinc-100">
                    {ctaCopy.leftPanel.description}
                  </p>
                  <p className="mt-8 max-w-xl text-[18px] md:text-[20px] xl:text-[24px] font-normal leading-relaxed">
                    {ctaCopy.leftPanel.callout}
                  </p>
                </div>

                {/* Bottom note */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/recieve.svg"
                    alt="phone"
                    width={40}
                    height={40}
                  />
                  <p className="max-w-md text-[14px] md:text-base leading-7">
                    {ctaCopy.leftPanel.note}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#00804D0D] p-8 sm:p-10">
              <h3 className="text-[18px] md:text-[20px] xl:text-[24px] font-bold text-black">
                {ctaCopy.form.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[14px] md:text-basefont-normal leading-7 text-[#4C4C4C]">
                {ctaCopy.form.description}
              </p>

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder={ctaCopy.form.namePlaceholder}
                  className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder={ctaCopy.form.emailPlaceholder}
                  className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
                <select
                  aria-label={ctaCopy.form.serviceAriaLabel}
                  defaultValue=""
                  className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-700 focus:border-emerald-500 focus:outline-none"
                >
                  <option value="" disabled>
                    {ctaCopy.form.servicePlaceholder}
                  </option>
                  {ctaCopy.form.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <textarea
                  rows={5}
                  placeholder={ctaCopy.form.messagePlaceholder}
                  className="w-full resize-none rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
                <MotionSubmitButton className="mt-2 h-12 w-full cursor-pointer rounded-full bg-[#00804D] text-[14px] font-bold text-white transition-colors hover:bg-[#00804D]/80 md:text-base">
                  {ctaCopy.form.submitLabel}
                </MotionSubmitButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default CTASection;