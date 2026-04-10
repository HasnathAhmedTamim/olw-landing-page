"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../common/button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

const TOP_ROW_PADDING = "px-4 py-5 md:px-8 lg:px-16 xl:px-25";

function getDesktopLinkClass(isActive: boolean) {
  const base =
    "text-lg no-underline underline-offset-8 transition-all duration-150 ease-in-out";
  const active =
    "font-bold text-(--color-accent) visited:text-(--color-accent) underline decoration-(--color-accent)";
  const inactive =
    "font-normal text-(--color-nav-text) visited:text-(--color-nav-text) hover:text-(--color-accent) hover:font-bold hover:underline hover:decoration-(--color-accent)";

  return `${base} ${isActive ? active : inactive}`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const hasActiveNavItem = NAV_ITEMS.some((item) => isActive(item.href));

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="w-full">
        <div className={`flex items-center justify-between ${TOP_ROW_PADDING}`}>

          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to home"
            className="shrink-0"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logos/google_logo.svg"
              alt="Google Logo"
              width={125}
              height={45}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = hasActiveNavItem && isActive(item.href);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={getDesktopLinkClass(active)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Desktop CTA */}
            <Link
              href="/contact"
              aria-label="Schedule a meeting"
              className="hidden md:inline-flex"
            >
              <Button
                type="base"
                element="span"
                verticalPadding="py-[13.5px]"
                horizontalPadding="px-[22px]"
                className="gap-2 text-sm font-bold transition-opacity hover:opacity-90"
              >
                <span>Schedule A Meeting</span>
                <Image
                  src="/logos/Arrow.png"
                  alt="Arrow icon"
                  width={10}
                  height={9}
                />
              </Button>
            </Link>

            {/* Hamburger */}
            {open ? (
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 text-(--color-nav-text) transition-colors hover:bg-black/5 md:hidden"
                aria-label="Close menu"
                aria-expanded="true"
                aria-controls="mobile-navigation"
              >
                <FiX size={20} aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 text-(--color-nav-text) transition-colors hover:bg-black/5 md:hidden"
                aria-label="Open menu"
                aria-expanded="false"
                aria-controls="mobile-navigation"
              >
                <FiMenu size={20} aria-hidden="true" />
              </button>
            )}

          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div id="mobile-navigation" className="md:hidden border-t border-black/10">
            <ul className="flex flex-col gap-4 px-4 py-4">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block text-sm ${active
                        ? "text-(--color-accent) visited:text-(--color-accent) font-bold"
                        : "text-(--color-nav-text) visited:text-(--color-nav-text)"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile CTA */}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  <Button
                    type="base"
                    element="span"
                    verticalPadding="py-[13.5px]"
                    horizontalPadding="px-[22px]"
                    className="mt-2 w-fit gap-2 text-sm font-bold"
                  >
                    Schedule A Meeting
                    <Image
                      src="/logos/Arrow.png"
                      alt="Arrow icon"
                      width={10}
                      height={9}
                    />
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}