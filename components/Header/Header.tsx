"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import styles from "./Header.module.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { logoText, navLinks } from "@/constant/constant";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {logoText}
        </Link>

        <MobileMenu />
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.authButtons}>
            <Link href="/login" className={styles.loginBtn}>
              Log in
            </Link>
            <Link href="/register" className={styles.registerBtn}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
