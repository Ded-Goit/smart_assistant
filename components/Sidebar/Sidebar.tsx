"use client";
import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Логотип зверху */}
      <div className={styles.logo}>
        <h2>Logo</h2>
      </div>

      {/* Центральні кнопки */}
      <nav className={styles.navCenter}>
        <Link href="/profile" className={styles.navButton}>
          Home
        </Link>
        <Link href="/calendar" className={styles.navButton}>
          Calendar
        </Link>
        <Link href="/resourcesnew" className={styles.navButton}>
          Resources
        </Link>
      </nav>

      {/* Нижні кнопки */}
      <div className={styles.navBottom}>
        <Link href="/setting" className={styles.navButton}>
          Setting
        </Link>
        <button className={styles.navButton} onClick={() => alert("Log out")}>
          Log out
        </button>
      </div>
    </aside>
  );
}
