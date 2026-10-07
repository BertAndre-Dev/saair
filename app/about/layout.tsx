import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About us",
  description:
    "Learn about SAAIR Energy — our mission, vision, values, and integrated energy infrastructure and technology solutions across Nigeria and emerging markets.",
  path: "/about",
  image: "/who.svg",
  imageAlt: "SAAIR Energy about us",
  keywords: [
    "about SAAIR Energy",
    "energy company Nigeria",
    "energy infrastructure Africa",
  ],
});

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default AboutLayout;
