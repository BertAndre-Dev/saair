import type { Metadata } from "next";
import type { ReactNode } from "react";

import { appConfig } from "@/constants";

export const metadata: Metadata = {
  title: `Products | ${appConfig.siteName}`,
  description:
    "SAAIR Energy smart metering solutions for electricity and gas networks.",
};

const ProductsLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return children;
};

export default ProductsLayout;
