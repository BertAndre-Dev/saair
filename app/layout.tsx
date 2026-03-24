import type { Metadata } from "next";
import CookieBanner from "@/components/legal/CookieBanner";
import PageTransition from "@/components/providers/PageTransition";
import { appConfig } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: appConfig.defaultMetadata.title,
  description: appConfig.defaultMetadata.description,
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <PageTransition>{children}</PageTransition>
        <CookieBanner />
      </body>
    </html>
  );
};

export default RootLayout;
