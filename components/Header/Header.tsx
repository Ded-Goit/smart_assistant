"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import styles from "./Header.module.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { navLinks } from "@/constant/constant";
//import Image from "next/image";
import Logo from "../Logo/logo";

export default function Header() {
  const pathname = usePathname();

  // ❌ список сторінок, де ThemeSwitcher не потрібен
  const excludeTheme = [
    "/",
    "/login",
    "/register",
    "/calendar",
    "/resourcesnew",
  ];

  // якщо поточний шлях у списку — не показуємо
  const showTheme = !excludeTheme.includes(pathname);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo width={160} height={56} />

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
          {showTheme && <ThemeSwitcher />}
          <div className={styles.authButtons}>
            <Link href="/login" className={styles.loginBtn}>
              Log In
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
