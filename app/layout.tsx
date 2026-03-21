import type { Metadata } from "next";

import { appConfig } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: appConfig.defaultMetadata.title,
  description: appConfig.defaultMetadata.description,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
};

export default RootLayout;
