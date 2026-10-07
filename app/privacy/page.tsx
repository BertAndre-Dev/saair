import type { Metadata } from "next";

import LegalPageShell from "@/components/legal/LegalPageShell";
import PrivacyNoticeContent from "@/sections/PrivacyNoticeContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Notice",
  description:
    "Privacy Notice for SAAIR Energy Limited — how we collect, use, and protect personal data in line with the NDPA.",
  path: "/privacy",
});

const PrivacyPage = () => {
  return (
    <LegalPageShell title="Privacy Notice">
      <PrivacyNoticeContent />
    </LegalPageShell>
  );
};

export default PrivacyPage;
