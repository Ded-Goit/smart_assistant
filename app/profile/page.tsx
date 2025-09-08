import Image from "next/image";
import styles from "./profile.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";
import MobileHeader from "@/components/MobileHeader/MobileHeader";

export default function ProfilePage() {
  return (
    <section className={styles.wrapper}>
      {/* Sidebar тільки на планшеті і вище */}
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      {/* Контентна частина */}
      <div className={styles.content}>
        <div className={styles.mobileheader}>
          <MobileHeader />
        </div>

        <h1 className={styles.profiletitle}>Profile</h1>
        <h2>Welcome back, Olivia</h2>
        <p>
          Track your progress and manage your tasks — add new ones or update
          existing to stay on track
        </p>

        {/* === component statistic === */}
        <div className={styles.four_cart}>
          <div className={styles.imagesBlock}>
            <Link href="/development" className={styles.component_img}>
              <Image
                src="/profile/weekly_activity.png"
                alt="component image"
                width={165}
                height={185}
                priority
              />
            </Link>
            <Link href="/development" className={styles.component_img}>
              <Image
                src="/profile/worked_this_week.png"
                alt="component image"
                width={165}
                height={185}
                priority
              />
            </Link>
            <Link href="/development" className={styles.component_img}>
              <Image
                src="/profile/progekt_worked.png"
                alt="component image"
                width={165}
                height={185}
                priority
              />
            </Link>
            <Link href="/development" className={styles.component_img}>
              <Image
                src="/profile/timer.png"
                alt="component image"
                width={165}
                height={185}
                priority
              />
            </Link>
          </div>
        </div>

        {/* === component progress === */}
        <h2>Tasks</h2>
        <div className={styles.three_progress}>
          <Link href="/development" className={styles.component_img}>
            <Image
              src="/profile/task_1.png"
              alt="component image"
              width={351}
              height={314}
              priority
            />
          </Link>
          <Link href="/development" className={styles.component_img}>
            <Image
              src="/profile/task_2.png"
              alt="component image"
              width={351}
              height={314}
              priority
            />
          </Link>
          <Link href="/development" className={styles.component_img}>
            <Image
              src="/profile/task_3.png"
              alt="component image"
              width={351}
              height={314}
              priority
            />
          </Link>
        </div>

        {/* === component task === */}
        <div className={styles.four_task}>
          <Link href="/development" className={styles.component_img}>
            {/* Мобільна картинка */}
            <Image
              src="/profile/task_mobile.png"
              alt="component image"
              width={352}
              height={521}
              priority
              className={styles.taskMobile}
            />

            {/* Десктопна картинка */}
            <Image
              src="/profile/task_desktop.png"
              alt="component image"
              width={600}
              height={400}
              priority
              className={styles.taskDesktop}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
