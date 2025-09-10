"use client";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import Logo from "../Logo/logo";
import Logout from "../Logout/Logout";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <a href="" className={styles.mobile_menu_social_link}>
          {/* <svg className={styles.social_icon_desk} width="210" height="72">
              <use href="./images/icons.svg#icon-1"></use>
            </svg> */}
        </a>
      </div>
      <nav className={styles.menu}>
        <Link href="/" className={styles.active}>
          {/* <svg className={styles.social_icon_menu} width="20" height="22">
              <use href="./images/icons.svg#icon-Group"></use>
            </svg> */}
          Home
        </Link>
        <Link href="/calendar" className={styles.active}>
          {/* <svg className={styles.social_icon_menu} width="20" height="22">
              <use href="./images/icons.svg#icon-Vector"></use>
            </svg> */}
          Calendar
        </Link>
        <Link href="/resources" className={styles.active}>
          {/* <svg className={styles.social_icon_menu} width="20" height="22">
              <use href="./images/icons.svg#icon-Vector-1"></use>
            </svg> */}
          Resources
        </Link>
      </nav>
      <div className={styles.menu_bottom}>
        <Link href="/setting" className={styles.menu_bottom_a}>
          {/* <svg className={styles.social_icon_menu} width="20" height="22">
              <use href="./images/icons.svg#icon-Vector-2"></use>
            </svg> */}
          Setting
        </Link>
        {/* <a href="#">
           <svg className={styles.social_icon_menu} width="20" height="22">
              <use href="./images/icons.svg#icon-Group-1"></use>
            </svg> 
            Log out
          </a> */}
        <Logout />
      </div>
    </aside>
  );
}
