"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import styles from "./Header.module.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { logo, navLinks } from "@/constant/constant";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
  const pathname = usePathname();

  // секції для відслідковування
  const sectionIds = ["how-it-works", "features", "faq"];
  const activeSection = useActiveSection(sectionIds);

  // ❌ список сторінок, де ThemeSwitcher не потрібен
  const excludeTheme = [
    "/",
    "/login",
    "/register",
    "/calendar",
    "/resourcesnew",
  ];

  const showTheme = !excludeTheme.includes(pathname);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Logo" width={158} height={56} priority />
        </Link>

        <MobileMenu />
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            let isActive = false;

            if (link.href === "/") {
              // ✅ Home активний тільки якщо немає активної секції
              isActive = pathname === "/" && !activeSection;
            } else if (link.href.startsWith("#")) {
              // ✅ секції активні по скролу
              isActive = activeSection === link.href;
            } else {
              // ✅ інші сторінки (login/register/тощо)
              isActive = pathname === link.href;
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={styles.navLink}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.rightSection}>
          {showTheme && <ThemeSwitcher />}
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
