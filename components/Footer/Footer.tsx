"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {new Date().getFullYear()} НАЗВА САЙТУ |{" "}
        <Link href="/team" className={styles.link}>
          НАЗВА КОМАНДИ
        </Link>
      </p>
    </footer>
  );
}
