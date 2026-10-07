import type { Metadata } from "next";
import type { ReactNode } from "react";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Products",
  description:
    "SAAIR Energy smart electricity and gas meters for utilities and operators — real-time data, prepaid capability, and remote monitoring.",
  path: "/products/smart-meters",
  image: "/meter/meter1.png",
  imageAlt: "SAAIR Energy smart meters",
  keywords: [
    "smart electricity meters",
    "smart gas meters",
    "prepaid meters Nigeria",
    "STS metering",
  ],
});

const ProductsLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return children;
};

export default ProductsLayout;
