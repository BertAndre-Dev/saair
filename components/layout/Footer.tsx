import Image from "next/image";
import Link from "next/link";

import { appConfig, footerCopy } from "@/constants";

const footerLinkClass =
  "text-base xl:text-[18px] font-normal text-white hover:text-gray-300 cursor-pointer";

function FooterLink({
  href,
  label,
}: Readonly<{ href: string; label: string }>) {
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={footerLinkClass}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={footerLinkClass}>
      {label}
    </Link>
  );
}

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#00804D]">
      <div className="mx-auto w-full max-w-7xl px-8 py-4">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.svg" alt={appConfig.siteName} width={150} height={150} />
        </Link>
        <p className="max-w-sm text-base xl:text-[18px] font-normal text-white">
          {footerCopy.logoTagline}
        </p>
      </div>
      <div className="mx-auto w-full max-w-7xl px-8 py-9">
        <nav
          className="flex flex-wrap justify-between gap-4"
          aria-label={footerCopy.a11y.footerNav}
        >
          {footerCopy.columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <div className="text-base xl:text-[18px] font-bold text-white">
                {column.title}
              </div>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 pt-3">
          <div className="text-base xl:text-[18px] font-normal text-white">
            {footerCopy.legal.prefix} {year} {footerCopy.legal.suffix}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
