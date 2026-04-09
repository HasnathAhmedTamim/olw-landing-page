"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" aria-label="Go to home" className={styles.logo}>
          <Image
            src="/logos/gic.png"
            alt="GIC Logo"
            width={125}
            height={45}
            priority
          />
        </Link>

        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" aria-label="Schedule a meeting" className={styles.cta}>
          <span className={styles.ctaText}>Schedule A Meeting</span>
          <Image src="/logos/Arrow.png" alt="Arrow icon" width={10} height={9} />
        </Link>
      </div>
    </nav>
  );
}
