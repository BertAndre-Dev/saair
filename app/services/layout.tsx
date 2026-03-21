import type { Metadata } from "next";
import type { ReactNode } from "react";

import { appConfig } from "@/constants";

export const metadata: Metadata = {
  title: `Services | ${appConfig.siteName}`,
  description:
    "Explore SAAIR Energy services: renewable energy, oil & gas infrastructure, smart metering, EV infrastructure, and digital monitoring.",
};

const ServicesLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return children;
};

export default ServicesLayout;
