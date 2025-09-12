"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderMenu.module.css";
import { Menu, X } from "lucide-react";
import Logout from "../Logout/Logout";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div>
      {/* кнопка-бургер */}
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={
          hydrated ? (isOpen ? "Close menu" : "Open menu") : "Toggle menu"
        }
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* бекдроп */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* саме меню */}
      <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.menuNav}>
          {/* Центральні кнопки */}
          <Link
            href="/profile"
            className={styles.menuLink}
            onClick={() => setIsOpen(false)}
          >
            <Image src="/icons/home.svg" alt="Home" width={24} height={24} />
            Home
          </Link>

          <Link
            href="/calendar"
            className={styles.menuLink}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/icons/calendar.svg"
              alt="Calendar"
              width={24}
              height={24}
            />
            Calendar
          </Link>

          <Link
            href="/resources"
            className={styles.menuLink}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/icons/resources.svg"
              alt="Resources"
              width={24}
              height={24}
            />
            Resources
          </Link>

          <Link
            href="/aiassistant"
            className={styles.menuLink}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/icons/resources.svg"
              alt="AI Assistant"
              width={24}
              height={24}
            />
            AI Assistant
          </Link>
        </nav>

        {/* Нижні кнопки */}
        <div className={styles.authButtons}>
          <Link
            href="/setting"
            className={styles.menuLink}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/icons/setting.svg"
              alt="Setting"
              width={24}
              height={24}
            />
            Setting
          </Link>

          <Logout />
        </div>
      </div>
    </div>
  );
}
