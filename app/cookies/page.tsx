import type { Metadata } from "next";

import LegalPageShell from "@/components/legal/LegalPageShell";
import CookiePolicyContent from "@/sections/CookiePolicyContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Notice & Policy",
  description:
    "Cookie Notice and Cookie Policy for SAAIR Energy Limited — how we use cookies and how you can manage preferences.",
  path: "/cookies",
});

const CookiesPage = () => {
  return (
    <LegalPageShell title="Cookie Notice & Policy">
      <CookiePolicyContent />
    </LegalPageShell>
  );
};

export default CookiesPage;
