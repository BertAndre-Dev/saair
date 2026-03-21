"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { appConfig, navLinks, navbarCtas } from "@/constants";

function isNavLinkActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const pillBase =
  "rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-4 md:py-2";
const pillInactive =
  "bg-emerald-100/50 text-emerald-900/90 hover:bg-emerald-100/70";
const pillActive =
  "bg-emerald-600/35 text-emerald-950 ring-1 ring-emerald-700/20 backdrop-blur-sm";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/15 bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-0 px-4 py-3 md:flex-row md:items-center md:justify-between xl:gap-4 md:py-4">
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5"
          aria-label={appConfig.siteName}
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full md:h-12 md:w-12">
            <Image
              src={appConfig.logoSrc}
              alt=""
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </span>
          <span className="text-[10px] font-semibold tracking-wide text-emerald-950 md:text-xs">
            {appConfig.brandWordmark}
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-2 md:flex lg:gap-3"
          aria-label={appConfig.a11y.navbarPrimary}
        >
          {navLinks.map((link) => {
            const active = isNavLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`${pillBase} ${active ? pillActive : pillInactive}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href={navbarCtas.primary.href}
            className="inline-flex items-center justify-center rounded-full bg-[#008148] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#008148]/90"
          >
            {navbarCtas.primary.label}
          </Link>
        </div>

        <nav
          className="flex flex-wrap items-center gap-2 md:hidden"
          aria-label={appConfig.a11y.navbarPrimary}
        >
          {navLinks.map((link) => {
            const active = isNavLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  active ? pillActive : pillInactive
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={navbarCtas.primary.href}
            className="rounded-full bg-[#008148] px-3 py-1.5 text-xs font-semibold text-white"
          >
            {navbarCtas.primary.label}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
