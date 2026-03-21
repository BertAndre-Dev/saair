import Image from "next/image";
import Link from "next/link";

import { appConfig, navLinks, navbarCtas } from "@/constants";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/15 bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-0 px-4 py-3 md:flex-row md:items-center md:justify-between xl:gap-4 md:py-4">
        <Link
          href="/"
          className=""
          aria-label={appConfig.siteName}
        >
            <Image
              src={appConfig.logoSrc}
              alt=""
              fill
              className="object-cover h-11 w-11"
              priority
            />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-2 md:flex lg:gap-3"
          aria-label={appConfig.a11y.navbarPrimary}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="rounded-full bg-white/25 px-4 py-2 text-sm font-medium text-emerald-900/90 transition-colors hover:bg-white/40"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href={navbarCtas.primary.href}
            className="inline-flex items-center justify-center rounded-full bg-[#0d5c3d] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d5c3d]/90"
          >
            {navbarCtas.primary.label}
          </Link>
        </div>

        <nav
          className="flex flex-wrap items-center gap-2 md:hidden"
          aria-label={appConfig.a11y.navbarPrimary}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="rounded-full bg-white/25 px-3 py-1.5 text-xs font-medium text-emerald-900/90"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={navbarCtas.primary.href}
            className="rounded-full bg-[#0d5c3d] px-3 py-1.5 text-xs font-semibold text-white"
          >
            {navbarCtas.primary.label}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
