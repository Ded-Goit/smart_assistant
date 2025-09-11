"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import Logo from "../Logo/logo";
import Logout from "../Logout/Logout";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Логотип зверху */}
      <Logo width={160} height={56} />

      {/* Центральні кнопки */}
      <nav className={styles.navCenter}>
        <Link href="/" className={styles.navButton}>
          <Image
            src="/icons/home.svg"
            alt="Home"
            width={24}
            height={24}
            className={styles.icon}
          />
          Home
        </Link>
        {/*---calendar---*/}
        <Link href="/calendar" className={styles.navButton}>
          <Image
            src="/icons/calendar.svg"
            alt="Calendar"
            width={24}
            height={24}
            className={styles.icon}
          />
          Calendar
        </Link>
        {/*---development---*/}
        <Link href="/resourcesnew" className={styles.navButton}>
          <Image
            src="/icons/resources.svg"
            alt="Resources"
            width={24}
            height={24}
            className={styles.icon}
          />
          Resources
        </Link>

        <Link href="/aiassistant" className={styles.navButton}>
          <Image
            src="/icons/resources.svg"
            alt="Resources"
            width={24}
            height={24}
            className={styles.icon}
          />
          AI Assistant
        </Link>
      </nav>

      {/* Нижні кнопки */}
      {/*---setting---*/}
      <div className={styles.navBottom}>
        <Link href="/setting" className={styles.navButton}>
          <Image
            src="/icons/setting.svg"
            alt="Setting"
            width={24}
            height={24}
            className={styles.icon}
          />
          Setting
        </Link>
        <Logout />
      </div>
    </aside>
  );
}
