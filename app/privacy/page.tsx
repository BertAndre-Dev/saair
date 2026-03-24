import type { Metadata } from "next";

import LegalPageShell from "@/components/legal/LegalPageShell";
import { appConfig } from "@/constants";
import PrivacyNoticeContent from "@/sections/PrivacyNoticeContent";

export const metadata: Metadata = {
  title: `Privacy Notice | ${appConfig.siteName}`,
  description:
    "Privacy Notice for SAAIR Energy Limited — how we collect, use, and protect personal data in line with the NDPA.",
};

const PrivacyPage = () => {
  return (
    <LegalPageShell title="Privacy Notice">
      <PrivacyNoticeContent />
    </LegalPageShell>
  );
};

export default PrivacyPage;
