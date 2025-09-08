import Image from "next/image";
import styles from "./ai.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";
import MobileHeader from "@/components/MobileHeader/MobileHeader";

export default function AiPage() {
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

        <h1 className={styles.profiletitle}>AI Assistant</h1>
        <p>
          An AI assistant in a time management app helps users plan their day
          more efficiently: it analyzes tasks, priorities, and deadlines,
          offering an optimized schedule and reminders. It`s a personal
          assistant that saves time and reduces the stress of planning.
        </p>

        {/* === component task === */}
        <div className={styles.four_cart}>
          <div className={styles.imagesBlock}>
            {/*notes*/}
            <Link href="/development" className={styles.component_img}>
              <Image
                src="/profile/weekly_activity.png"
                alt="component image"
                width={165}
                height={185}
                priority
              />
            </Link>
            {/*planer*/}
            <Link href="/development" className={styles.component_img}>
              <Image
                src="/profile/worked_this_week.png"
                alt="component image"
                width={165}
                height={185}
                priority
              />
            </Link>
          </div>
        </div>

        {/* === component img === */}
        <div className={styles.four_img}>
          <Link href="/aiassistant/robot.webp" className={styles.component_img}>
            {/* Мобільна картинка */}
            <Image
              src="/profile/task_mobile.png"
              alt="My AI Assistant"
              width={352}
              height={521}
              priority
              className={styles.taskMobile}
            />

            {/* Десктопна картинка */}
            <Image
              src="/aiassistant/robot.webp"
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
