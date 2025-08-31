"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import styles from "./MobileMenu.module.css";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mobileMenu}>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className={styles.menuOverlay}>
          <nav className={styles.menuNav}>
            {navLinks.map((link) => (
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
      )}
    </div>
  );
}
