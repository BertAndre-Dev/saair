import type { Metadata } from "next";
import type { ReactNode } from "react";

import { appConfig } from "@/constants";

export const metadata: Metadata = {
  title: `Services | ${appConfig.siteName}`,
  description:
    "Explore SAAIR Energy services: gas supply, smart metering, energy audits, energy management, and site infrastructure.",
};

const ServicesLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return children;
};

export default ServicesLayout;
