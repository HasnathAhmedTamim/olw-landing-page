"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
];

const TOP_ROW_PADDING = "px-[clamp(16px,7vw,100px)] py-3 lg:h-22.25 lg:py-0";

function getDesktopLinkClass(isActive: boolean) {
    const base =
        "pb-1 text-sm leading-normal transition-all duration-200 lg:text-base";
    const active = "border-b-2 border-[#ED3C6A] font-bold text-[#ED3C6A]";
    const inactive = "text-[#1E1E1E] hover:text-[#ED3C6A]";

    return `${base} ${isActive ? active : inactive}`;
}

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
            <div className="w-full">
                <div className={`flex items-center justify-between ${TOP_ROW_PADDING}`}>

                    {/* Logo */}
                    <Link href="/" aria-label="Go to home" className="shrink-0">
                        <Image
                            src="/logos/gic.png"
                            alt="GIC Logo"
                            width={125}
                            height={45}
                            className="h-8 w-auto object-contain sm:h-9 lg:h-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden items-center gap-4 md:flex lg:gap-6">
                        {NAV_ITEMS.map((item) => {
                            const active = isActive(item.href);

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
                            className="hidden md:inline-flex items-center gap-2 rounded-[5px] bg-[#ED3C6A] px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                        >
                            <span>Schedule A Meeting</span>
                            <Image
                                src="/logos/Arrow.png"
                                alt="Arrow icon"
                                width={10}
                                height={9}
                            />
                        </Link>

                        {/* Hamburger */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden"
                            aria-label="Toggle menu"
                        >
                            <div className="space-y-1">
                                <span className="block h-[2px] w-6 bg-black"></span>
                                <span className="block h-[2px] w-6 bg-black"></span>
                                <span className="block h-[2px] w-6 bg-black"></span>
                            </div>
                        </button>

                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden border-t border-black/10">
                        <ul className="flex flex-col gap-4 px-[clamp(16px,7vw,100px)] py-4">
                            {NAV_ITEMS.map((item) => {
                                const active = isActive(item.href);

                                return (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={`block text-sm ${active
                                                    ? "text-[#ED3C6A] font-bold"
                                                    : "text-[#1E1E1E]"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}

                            {/* Mobile CTA */}
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="mt-2 inline-flex w-fit items-center gap-2 rounded-[5px] bg-[#ED3C6A] px-4 py-2 text-sm font-bold text-white"
                            >
                                Schedule A Meeting
                                <Image
                                    src="/logos/Arrow.png"
                                    alt="Arrow icon"
                                    width={10}
                                    height={9}
                                />
                            </Link>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}