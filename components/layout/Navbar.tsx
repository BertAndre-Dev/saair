import Link from "next/link";

import Button from "@/components/ui/Button";
import { navLinks, navbarCtas, appConfig } from "@/constants";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/15 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          aria-label={appConfig.siteName}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
            {appConfig.siteName[0]}
          </span>
          <span>{appConfig.siteName}</span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label={appConfig.a11y.navbarPrimary}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={navbarCtas.primary.href}>{navbarCtas.primary.label}</Button>
        </div>

        <div className="md:hidden">
          <Link
            href={navbarCtas.primary.href}
            className="text-sm font-medium text-zinc-900 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
          >
            {navbarCtas.primary.label}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

