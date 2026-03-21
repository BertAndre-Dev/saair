import type { Metadata } from "next";

import { appConfig } from "@/constants";

export const metadata: Metadata = {
  title: `About us | ${appConfig.siteName}`,
  description:
    "Learn about SAAIR Energy—our mission, vision, values, and integrated energy solutions across emerging markets.",
};

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default AboutLayout;
