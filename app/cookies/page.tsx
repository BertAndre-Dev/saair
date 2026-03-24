import type { Metadata } from "next";

import LegalPageShell from "@/components/legal/LegalPageShell";
import { appConfig } from "@/constants";
import CookiePolicyContent from "@/sections/CookiePolicyContent";

export const metadata: Metadata = {
  title: `Cookie Notice & Policy | ${appConfig.siteName}`,
  description:
    "Cookie Notice and Cookie Policy for SAAIR Energy Limited — how we use cookies and how you can manage preferences.",
};

const CookiesPage = () => {
  return (
    <LegalPageShell title="Cookie Notice & Policy">
      <CookiePolicyContent />
    </LegalPageShell>
  );
};

export default CookiesPage;
