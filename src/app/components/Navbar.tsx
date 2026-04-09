// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
        { label: "Resources", href: "/resources" },
    ];

    return (
        <nav className="w-full border-b border-black/5 bg-white">
            <div className="w-full mx-auto flex h-22  items-center justify-between px-6 lg:px-10">
                <Link href="/" aria-label="Go to home">
                    <Image
                        src="/logos/Google-Logo.png"
                        alt="Google Logo"
                        width={125}
                        height={45}
                        className="object-contain"
                        loading="eager"
                    />
                </Link>

                <ul className="hidden items-center gap-6 lg:flex">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                aria-current={pathname === item.href ? "page" : undefined}
                                className={`align-middle text-[18px] leading-[150%] tracking-[0%] ${pathname === item.href
                                    ? "border-b-2 border-[#ED3C6A] pb-1 font-bold text-[#ED3C6A]"
                                    : "font-normal text-[#1E1E1E]"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button type="button" className="rounded-[5px] bg-[#ED3C6A] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90">
                    Schedule Meeting
                </button>
            </div>
        </nav>
    );
}