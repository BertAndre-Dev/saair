  import Image from "next/image";
  import Link from "next/link";
  import { Facebook, Instagram, Linkedin } from "lucide-react";

  import { appConfig, footerCopy } from "@/constants";

  const footerLinkClass =
    "text-base font-normal leading-8 text-white/90 hover:text-white";
  const headingClass = "text-[24px] font-semibold text-white md:text-[28px]";

  const socialIconByName = {
    instagram: Instagram,
    linkedin: Linkedin,
    facebook: Facebook,
  } as const;

  function getSocialIcon(icon: string) {
    if (icon === "instagram") return socialIconByName.instagram;
    if (icon === "linkedin") return socialIconByName.linkedin;
    return socialIconByName.facebook;
  }

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
      <footer className="relative overflow-hidden bg-[#00804D]">

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-8 pt-8 md:px-8">
          <Link href="/" className="inline-block pt-4">
            <Image src="/logo.svg" alt={appConfig.siteName} width={160} height={60} />
          </Link>
          <p className="max-w-sm text-base text-[18px] font-normal leading-8 text-white/90">
            {footerCopy.logoTagline}
          </p>

          <nav
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 mb-6"
            aria-label={footerCopy.a11y.footerNav}
          >
            {footerCopy.columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className={headingClass}>{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      <FooterLink href={link.href} label={link.label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-3">
              <h3 className={headingClass}>{footerCopy.contact.title}</h3>
              <p className="max-w-md text-base leading-8 text-white/90">
                {footerCopy.contact.address}
              </p>
              <p className="text-base leading-8 text-white/90">
                Email:{" "}
                <a href={`mailto:${footerCopy.contact.email}`} className="hover:text-white">
                  {footerCopy.contact.email}
                </a>
              </p>
              <p className="text-base leading-8 text-white/90">
                Phone:{" "}
                <a href={`tel:${footerCopy.contact.phone.replaceAll(" ", "")}`} className="hover:text-white">
                  {footerCopy.contact.phone}
                </a>
              </p>
              <div className="flex items-center gap-3 pt-1">
                {footerCopy.socials.map((social) => {
                  const Icon = getSocialIcon(social.icon);
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#001F3F]"
                    >
                      <Icon size={18} strokeWidth={2.2} />
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

            <div className="text-center text-base font-normal text-white/90 pt-6 pb-6">
              {footerCopy.legal.prefix} {year} {footerCopy.legal.suffix}
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
