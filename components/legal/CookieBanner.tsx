"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  COOKIE_CONSENT_STORAGE_KEY,
  buildCookieConsentPayload,
  isCookieConsentValid,
  parseStoredCookieConsent,
  type CookieConsentChoice,
} from "@/lib/cookieConsent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      const parsed = parseStoredCookieConsent(raw);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(!isCookieConsentValid(parsed));
    } catch {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  const save = (choice: CookieConsentChoice) => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_STORAGE_KEY,
        buildCookieConsentPayload(choice),
      );
    } catch {
      /* ignore quota / private mode */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 md:px-6 md:pb-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div
        className="mx-auto max-w-4xl rounded-2xl border border-[rgba(0,128,77,0.2)] px-5 py-4 shadow-lg md:px-6 md:py-5"
        style={{
          backgroundColor: "rgba(0, 15, 35, 0.92)",
          backdropFilter: "blur(18px) saturate(160%)",
          WebkitBackdropFilter: "blur(18px) saturate(160%)",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.22)",
        }}
      >
        <p className="text-sm leading-6 text-white/95 md:text-[15px]">
          We use cookies to improve your experience and to understand how our
          site is used. Read our{" "}
          <Link
            href="/cookies"
            className="font-medium text-[#7dffc7] underline underline-offset-2 hover:text-white"
          >
            Cookie Notice &amp; Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-medium text-[#7dffc7] underline underline-offset-2 hover:text-white"
          >
            Privacy Notice
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => save("reject")}
            className="order-2 cursor-pointer rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:order-1"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => save("accept")}
            className="order-1 cursor-pointer rounded-full bg-[#00804D] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#00804D]/90 sm:order-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;