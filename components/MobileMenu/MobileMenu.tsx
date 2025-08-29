"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./MobileMenu.module.css";
import { navLinks } from "@/constant/constant";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button className={styles.burger} onClick={() => setOpen(true)}>
        ☰
      </button>
      {open && (
        <div className={styles.overlay}>
          <button className={styles.close} onClick={() => setOpen(false)}>
            x
          </button>
          <nav className={styles.nav}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`${styles.link} ${
                  pathname === href ? styles.active : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
