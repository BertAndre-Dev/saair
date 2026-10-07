"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

import {
  buttonWhileHover,
  buttonWhileTap,
  easeNatural,
} from "@/lib/animations";
import { appConfig, navLinks, navbarCtas, serviceCards } from "@/constants";

const MotionLink = motion(Link);

function isNavLinkActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isServicesActive(pathname: string): boolean {
  return pathname === "/services" || pathname.startsWith("/services/");
}

const pillBase =
  "rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-4 md:py-2";
const pillInactive = "bg-[#00814E1A] text-white hover:bg-[#00814E33]";
const pillActive = "bg-[#00814E33] text-white";

const navShellVariants = { rest: {}, hover: {} } as const;

const serviceLinks = serviceCards.map((card) => ({
  href: `/services/${card.slug}`,
  label: card.title,
  number: card.number,
}));

function Chevron({ open }: Readonly<{ open: boolean }>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 8"
      className={`ml-1.5 h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
    >
      <path
        d="M1 1.5 6 6.5 11 1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServicesDropdown({
  pathname,
  reduced,
}: Readonly<{
  pathname: string;
  reduced: boolean | null;
}>) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const menuId = useId();
  const active = isServicesActive(pathname);

  const clearClose = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearClose();
    setOpen(true);
  }, [clearClose]);

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  }, [clearClose]);

  const closeMenu = useCallback(() => {
    clearClose();
    setOpen(false);
  }, [clearClose]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const onPointer = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) closeMenu();
    };
    globalThis.addEventListener("keydown", onKey);
    globalThis.addEventListener("mousedown", onPointer);
    return () => {
      globalThis.removeEventListener("keydown", onKey);
      globalThis.removeEventListener("mousedown", onPointer);
    };
  }, [open, closeMenu]);

  useEffect(() => () => clearClose(), [clearClose]);

  const onTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMenu();
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={`${pillBase} relative inline-flex items-center justify-center overflow-hidden ${
          active || open ? pillActive : pillInactive
        }`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => (open ? closeMenu() : openMenu())}
        onFocus={openMenu}
        onKeyDown={onTriggerKeyDown}
      >
        <span className="relative z-10">Services</span>
        <Chevron open={open} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            aria-label="Services"
            className="absolute left-1/2 top-[calc(100%+0.65rem)] z-50 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#001A2E] p-2 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55)]"
            initial={reduced ? false : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 6, scale: 0.98 }}
            transition={
              reduced
                ? { duration: 0.01 }
                : { type: "spring", bounce: 0, duration: 0.28 }
            }
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <div className="flex flex-col gap-0.5">
              {serviceLinks.map((item) => {
                const itemActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={closeMenu}
                    className={`flex items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      itemActive
                        ? "bg-[#008148]/25 text-white"
                        : "text-white/90 hover:bg-white/8 hover:text-white"
                    }`}
                    aria-current={itemActive ? "page" : undefined}
                  >
                    <span className="mt-0.5 text-xs font-semibold tracking-wide text-[#4ADE80]">
                      {item.number}
                    </span>
                    <span className="text-sm font-medium leading-snug">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-1 border-t border-white/10 pt-1">
              <Link
                href="/services"
                role="menuitem"
                onClick={closeMenu}
                className={`block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                  pathname === "/services"
                    ? "bg-[#008148]/25 text-white"
                    : "text-[#4ADE80] hover:bg-white/8"
                }`}
              >
                View all services
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function MobileServicesBlock({
  pathname,
  closeMenu,
}: Readonly<{
  pathname: string;
  closeMenu: () => void;
}>) {
  const [open, setOpen] = useState(isServicesActive(pathname));
  const panelId = useId();
  const active = isServicesActive(pathname);

  return (
    <div className="w-full max-w-[220px]">
      <button
        type="button"
        className={`flex w-full items-center justify-center gap-1 rounded-full px-5 py-3 text-center text-base font-medium transition-colors ${
          active ? "text-[#008148]" : "text-neutral-800 hover:bg-white/80"
        }`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
      >
        Services
        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.28 }}
          >
            <div className="mt-1 flex flex-col gap-1 rounded-2xl bg-white/55 p-2">
              {serviceLinks.map((item) => {
                const itemActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium leading-snug transition-colors ${
                      itemActive
                        ? "bg-[#008148]/15 text-[#008148]"
                        : "text-neutral-800 hover:bg-white"
                    }`}
                    aria-current={itemActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/services"
                onClick={closeMenu}
                className={`rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                  pathname === "/services"
                    ? "bg-[#008148]/15 text-[#008148]"
                    : "text-[#008148] hover:bg-white"
                }`}
              >
                View all services
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function MobileNavDrawer({
  menuOpen,
  panelId,
  pathname,
  closeMenu,
}: Readonly<{
  menuOpen: boolean;
  panelId: string;
  pathname: string;
  closeMenu: () => void;
}>) {
  const overlay = (
    <button
      type="button"
      className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
        menuOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeMenu}
      aria-label="Close menu"
      tabIndex={menuOpen ? 0 : -1}
    />
  );

  const panel = (
    <div
      id={panelId}
      className={`absolute left-0 top-0 flex h-full w-[min(88vw,20rem)] flex-col rounded-tr-4xl bg-green-200 pb-6 pt-6 md:pt-24 shadow-xl transition-transform duration-300 ease-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      <div className="flex flex-1 flex-col md:px-6 pb-4">
        <Link
          href="/"
          className="mx-auto flex flex-col items-center gap-1"
          onClick={closeMenu}
        >
          <span className="relative h-22 w-22 overflow-hidden rounded-full">
            <Image
              src={appConfig.logoSrc2}
              alt=""
              fill
              className="object-contain"
              sizes="48px"
            />
          </span>
        </Link>

        <nav
          className="mt-10 flex flex-1 flex-col items-center gap-6 md:gap-1"
          aria-label={appConfig.a11y.navbarPrimary}
        >
          {navLinks.map((link) => {
            if (link.href === "/services") {
              return (
                <MobileServicesBlock
                  key={link.href + link.label}
                  pathname={pathname}
                  closeMenu={closeMenu}
                />
              );
            }

            const active = isNavLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={closeMenu}
                className={`w-full max-w-[220px] rounded-full px-5 py-3 text-center text-base font-medium transition-colors ${
                  active
                    ? "text-[#008148]"
                    : "text-neutral-800 hover:bg-white/80"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <MotionLink
          href={navbarCtas.primary.href}
          onClick={closeMenu}
          className="mt-auto flex w-full max-w-[220px] items-center justify-center self-center rounded-full bg-[#008148] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#008148]/90"
          whileHover={buttonWhileHover}
          whileTap={buttonWhileTap}
        >
          {navbarCtas.primary.label}
        </MotionLink>
      </div>
    </div>
  );

  if (menuOpen) {
    return (
      <div
        className="pointer-events-auto fixed inset-0 z-50 lg:hidden"
        aria-hidden="false"
      >
        {overlay}
        {panel}
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 lg:hidden"
      aria-hidden="true"
    >
      {overlay}
      {panel}
    </div>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const reduced = useReducedMotion();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full border-b border-[#00804D]/15 bg-[#001226] shadow-[0_4px_32px_rgba(0,0,0,0.18)] transition-all duration-500 ease-in-out"
        initial={reduced ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeNatural }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 md:px-8 xl:px-0 pt-2">
          <Link
            href="/"
            className={`flex flex-col items-center gap-0.5${
              menuOpen ? " max-lg:hidden" : ""
            }`}
            aria-label={appConfig.siteName}
            onClick={closeMenu}
          >
            <span className="relative h-20 w-32 shrink-0 overflow-hidden rounded-full">
              <Image
                src={appConfig.logoSrc}
                alt=""
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 128px, 120px"
                priority
              />
            </span>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-2 lg:flex lg:gap-3"
            aria-label={appConfig.a11y.navbarPrimary}
          >
            {navLinks.map((link) => {
              if (link.href === "/services") {
                return (
                  <ServicesDropdown
                    key={link.href + link.label}
                    pathname={pathname}
                    reduced={reduced}
                  />
                );
              }

              const active = isNavLinkActive(pathname, link.href);
              return (
                <MotionLink
                  key={link.href + link.label}
                  href={link.href}
                  className={`${pillBase} relative inline-flex flex-col items-center justify-center overflow-hidden ${active ? pillActive : pillInactive}`}
                  aria-current={active ? "page" : undefined}
                  initial="rest"
                  whileHover="hover"
                  animate={active ? "hover" : "rest"}
                  variants={navShellVariants}
                >
                  <span className="relative z-10">{link.label}</span>
                </MotionLink>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <MotionLink
              href={navbarCtas.primary.href}
              className="inline-flex items-center justify-center rounded-full bg-[#008148] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#008148]/90"
              whileHover={reduced ? undefined : buttonWhileHover}
              whileTap={reduced ? undefined : buttonWhileTap}
            >
              {navbarCtas.primary.label}
            </MotionLink>
          </div>

          <div className="lg:hidden">
            {menuOpen ? (
              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                onClick={() => setMenuOpen(false)}
                aria-expanded="true"
                aria-controls={panelId}
                aria-label="Close menu"
              >
                <Image
                  src="/close.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                onClick={() => setMenuOpen(true)}
                aria-expanded="false"
                aria-controls={panelId}
                aria-label="Open menu"
              >
                <Image
                  src="/hamburger.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px]"
                />
              </button>
            )}
          </div>
        </div>
      </motion.header>

      <MobileNavDrawer
        menuOpen={menuOpen}
        panelId={panelId}
        pathname={pathname}
        closeMenu={closeMenu}
      />
    </>
  );
};

export default Navbar;
