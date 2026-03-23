"use client";

import Image from "next/image";
import { useState } from "react";

import MotionSubmitButton from "@/components/motion/MotionSubmitButton";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { ctaCopy } from "@/constants";

const initialForm = { name: "", email: "", service: "", message: "" };

const CTASection = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <ScrollReveal id="cta" className="bg-zinc-50 py-16">
      <div className="">
        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* ── Left Panel ── */}
            <div className="relative min-h-[620px] bg-[url('/energy.svg')] bg-cover bg-center p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-[rgba(8,25,42,0.72)]" />

              <div className="relative z-10 flex flex-col justify-between min-h-[740px]">
                <div>
                  <h2 className="text-[30px] md:text-[40px] font-bold uppercase tracking-wide text-[#00804D]">
                    {ctaCopy.leftPanel.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base md:text-[18px] font-bold leading-tight">
                    {ctaCopy.leftPanel.subtitle}
                  </p>
                  <p className="mt-8 max-w-xl text-base md:text-[18px] font-normal leading-8 text-zinc-100">
                    {ctaCopy.leftPanel.description}
                  </p>
                  <p className="mt-8 max-w-xl text-base md:text-[18px] font-normal leading-relaxed">
                    {ctaCopy.leftPanel.callout}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Image src="/recieve.svg" alt="phone" width={40} height={40} />
                  <p className="max-w-md text-[14px] md:text-base leading-7">
                    {ctaCopy.leftPanel.note}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right Panel / Form ── */}
            <div className="bg-[#00804D0D] p-8 sm:p-10">
              <h3 className="text-base md:text-[18px] font-bold text-black">
                {ctaCopy.form.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[14px] md:text-base font-normal leading-7 text-[#4C4C4C]">
                {ctaCopy.form.description}
              </p>

              {/* ── Success Message ── */}
              {status === "success" && (
                <div className="mt-8 rounded-md bg-emerald-50 border border-emerald-200 px-4 py-4 text-emerald-700 text-sm font-medium">
                  ✅ Your request has been sent! We&apos;ll be in touch shortly.
                </div>
              )}

              {/* ── Error Message ── */}
              {status === "error" && (
                <div className="mt-8 rounded-md bg-red-50 border border-red-200 px-4 py-4 text-red-600 text-sm font-medium">
                  ❌ {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={ctaCopy.form.namePlaceholder}
                  required
                  className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={ctaCopy.form.emailPlaceholder}
                  required
                  className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  aria-label={ctaCopy.form.serviceAriaLabel}
                  required
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
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder={ctaCopy.form.messagePlaceholder}
                  required
                  className="w-full resize-none rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
                <MotionSubmitButton
                  disabled={status === "loading"}
                  className="mt-2 h-12 w-full cursor-pointer rounded-full bg-[#00804D] text-[14px] font-bold text-white transition-colors hover:bg-[#00804D]/80 md:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : ctaCopy.form.submitLabel}
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