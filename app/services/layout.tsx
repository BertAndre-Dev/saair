import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore SAAIR Energy services: industrial and commercial gas supply, smart metering and revenue recovery, energy audits, energy management, and site infrastructure.",
  path: "/services",
  image: "/service/gas.png",
  imageAlt: "SAAIR Energy services",
  keywords: [
    "energy services Nigeria",
    "gas supply",
    "smart metering",
    "energy audit",
    "energy management",
  ],
});

const ServicesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default ServicesLayout;
