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
            <div className="mx-auto flex h-22 w-full items-center justify-between px-6 lg:h-22.25 lg:max-w-360 lg:items-start lg:justify-start lg:px-0">
                <Link href="/" aria-label="Go to home" className="lg:ml-25 lg:mt-6">
                    <Image
                        src="/logos/Google-Logo.png"
                        alt="Google Logo"
                        width={125}
                        height={45}
                        className="object-contain"
                        loading="eager"
                    />
                </Link>

                <ul className="hidden items-center gap-6 lg:ml-52 lg:mt-6 lg:h-10.25 lg:flex">
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

                <div className="lg:ml-56.25 lg:mr-25 lg:mt-4.75">
                    <button
                        type="button"
                        className="inline-flex h-12.5 w-50.25 items-center justify-center gap-2.5 rounded-[5px] bg-[#ED3C6A] px-6 py-4.5"
                    >
                        <span className="whitespace-nowrap text-center text-[14px] font-bold leading-[100%] tracking-[0px] text-white">
                            Schedule A Meeting
                        </span>
                        <Image src="/logos/Arrow.png" alt="Arrow icon" width={10} height={9} />
                    </button>
                </div>
            </div>
        </nav>
    );
}