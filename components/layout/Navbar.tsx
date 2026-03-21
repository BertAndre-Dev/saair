"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

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

/** Split open/closed wrappers so `aria-hidden` is a string literal (Edge Tools / a11y linters). */
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
      className={`absolute left-0 top-0 flex h-full w-[min(88vw,20rem)] flex-col rounded-tr-4xl bg-slate-50 pb-6 pt-24 shadow-xl transition-transform duration-300 ease-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      <div className="flex flex-1 flex-col px-6 pb-4">
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
          className="mt-10 flex flex-1 flex-col items-center gap-1"
          aria-label={appConfig.a11y.navbarPrimary}
        >
          {navLinks.map((link) => {
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

        <Link
          href={navbarCtas.primary.href}
          onClick={closeMenu}
          className="mt-auto flex w-full max-w-[220px] items-center justify-center self-center rounded-full bg-[#008148] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#008148]/90"
        >
          {navbarCtas.primary.label}
        </Link>
      </div>
    </div>
  );

  if (menuOpen) {
    return (
      <div
        className="fixed inset-0 z-50 lg:hidden pointer-events-auto"
        aria-hidden="false"
      >
        {overlay}
        {panel}
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden pointer-events-none"
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
      <header className="fixed left-0 right-0 top-0 z-60 bg-transparent">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 md:px-8 xl:px-0 py-3 lg:py-4">
          <Link
            href="/"
            className={`flex flex-col items-center gap-0.5${
              menuOpen ? " max-lg:hidden" : ""
            }`}
            aria-label={appConfig.siteName}
            onClick={closeMenu}
          >
            {/* ✅ Fixed: consistent square container, object-contain to avoid distortion */}
            <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
              <Image
                src={appConfig.logoSrc}
                alt=""
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 64px, 60px"
                priority
              />
            </span>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-2 lg:flex lg:gap-3"
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

          <div className="hidden lg:block">
            <Link
              href={navbarCtas.primary.href}
              className="inline-flex items-center justify-center rounded-full bg-[#008148] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#008148]/90"
            >
              {navbarCtas.primary.label}
            </Link>
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
      </header>

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