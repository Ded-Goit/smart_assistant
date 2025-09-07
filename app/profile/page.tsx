import Image from "next/image";
import styles from "./profile.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Logo from "@/components/Logo/logo";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <section className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.mobileheader}>
        <Logo width={121} height={54} />
        <div className={styles.imagesBlock}>
          <Image
            src="/mobileheader/nav_item_button.png"
            alt="button"
            width={32}
            height={32}
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <Image
            src="/mobileheader/sharp_magic.png"
            alt="button"
            width={32}
            height={32}
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <Image
            src="/mobileheader/user_avatar.png"
            alt="User avatar"
            width={32}
            height={32}
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <Image
            src="/mobileheader/menu_burger.svg"
            alt="button"
            width={32}
            height={32}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
      <h1>Profile</h1>
      <h2>Welcome back, Olivia</h2>
      <p>
        Track your progress and manage your tasks — add new ones or update
        existing to stay on track
      </p>

      {/* === component statistic === */}
      <div className={styles.four_cart}>
        <div className={styles.imagesBlock}>
          <Link href="#" className={styles.component_img}>
            <Image
              src="/profile/weekly_activity.png"
              alt="component image"
              width={165}
              height={185}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Link>
          <Link href="#" className={styles.component_img}>
            <Image
              src="/profile/worked_this_week.png"
              alt="component image"
              width={165}
              height={185}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Link>
          <Link href="#" className={styles.component_img}>
            <Image
              src="/profile/progekt_worked.png"
              alt="component image"
              width={165}
              height={185}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Link>
          <Link href="#" className={styles.component_img}>
            <Image
              src="/profile/timer.png"
              alt="component image"
              width={165}
              height={185}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Link>
        </div>
      </div>
      {/* === component progress === */}
      <div className={styles.three_progress}>
        <Link href="#" className={styles.component_img}>
          <Image
            src="/profile/task_1.png"
            alt="component image"
            width={351}
            height={314}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Link>
        <Link href="#" className={styles.component_img}>
          <Image
            src="/profile/task_2.png"
            alt="component image"
            width={351}
            height={314}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Link>
        <Link href="#" className={styles.component_img}>
          <Image
            src="/profile/task_3.png"
            alt="component image"
            width={351}
            height={314}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Link>
      </div>
      {/* === component task === */}
      <div className={styles.four_task}>
        <Link href="#" className={styles.component_img}>
          {" "}
          <Image
            src="/profile/tasc_mobile.png"
            alt="component image"
            width={352}
            height={521}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Link>
      </div>
    </section>
  );
}
