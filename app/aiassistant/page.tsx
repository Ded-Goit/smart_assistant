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

        <div className={styles.cards}>
          <Link href="/notes" className={styles.card}>
            <svg className={styles.cardicon} width="40" height="40">
              <use href="/icons/notes.svg"></use>
            </svg>

            <h2 className={`${styles.cardtitle} h2`}>AI-powered notes</h2>
            <p className={`${styles.cardtext} text16medium`}>
              You write short summaries or even upload text. AI automatically
              compresses, highlights key points or provides a summary. This is
              very useful for students as it saves time.
            </p>
          </Link>

          <Link href="/planner" className={styles.card}>
            <svg className={styles.cardicon} width="40" height="40">
              <use href="/icons/planer.svg"></use>
            </svg>

            <h2 className={`${styles.cardtitle} h2`}>
              AI-generated lesson plans
            </h2>
            <p className={`${styles.cardtext} text16medium`}>
              You write: ``I want to prepare for an English exam in 2 weeks.``
              AI generates a ready-made plan with tasks by day. It looks like a
              ``smart tutor in your pocket.``{" "}
            </p>
          </Link>
        </div>

        {/* === component img === */}
        <div className={styles.robot_img}>
          <Link href="/aiassistant/robot.webp" className={styles.component_img}>
            <Image
              src="/aiassistant/robot.webp"
              alt="component image"
              width={600}
              height={400}
              priority
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
