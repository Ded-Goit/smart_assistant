"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navMobileLinks } from "@/constant/constant";
import styles from "./MobileMenu.module.css";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className={styles.mobileMenu}>
      {/* Кнопка відкриття/закриття */}
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={
          hydrated ? (isOpen ? "Close menu" : "Open menu") : "Toggle menu"
        }
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Бекдроп */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Меню */}
      <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.menuNav}>
          {navMobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.menuLink}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className={styles.authButtons}>
            <Link
              href="/login"
              className={styles.loginBtn}
              onClick={() => setIsOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className={styles.registerBtn}
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
