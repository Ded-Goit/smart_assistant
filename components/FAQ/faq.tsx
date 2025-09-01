import Image from "next/image";
import styles from "./faq.module.css";

export default function FaqPage() {
  return (
    <>
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2 className={`${styles.faq__title} h2`}>faq</h2>
          <div className={styles.faq__box}>
            <div className={styles["faq__box-images"]}>
              <Image
                src="/faq/desk_group_brainstorm_session@2x.webp"
                alt="Group brainstorm session"
                width={575}
                height={575}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <ul className={styles.faq__list}>
              <li className={styles.faq__item}>
                <div className={styles["faq__item-box"]}>
                  <h3 className={`${styles["faq__item-title"]} text18medium`}>
                    What is Statistics?
                  </h3>
                  <svg className={styles["faq__item-icon"]}>
                    <use xlinkHref="sprite.svg#arrow"></use>
                  </svg>
                </div>
                <p className={styles["faq__item-text"]}>
                  Statistics helps you track your tasks with charts and detailed
                  reports, so you can analyze performance and improve
                  productivity.
                </p>
              </li>
              <li className={styles.faq__item}>
                <div className={styles["faq__item-box"]}>
                  <h3 className={`${styles["faq__item-title"]} text18medium`}>
                    How does Time Master help me stay focused?
                  </h3>
                  <svg className={styles["faq__item-icon"]}>
                    <use xlinkHref="sprite.svg#arrow"></use>
                  </svg>
                </div>
                <p className={styles["faq__item-text"]}>
                  Time Master helps manage distractions, plan weekly and
                  quarterly, maintain motivation, and track accountability.
                </p>
              </li>
              <li className={styles.faq__item}>
                <div className={styles["faq__item-box"]}>
                  <h3 className={`${styles["faq__item-title"]} text18medium`}>
                    How do I earn rewards in Rewards?
                  </h3>
                  <svg className={styles["faq__item-icon"]}>
                    <use xlinkHref="sprite.svg#arrow"></use>
                  </svg>
                </div>
                <p className={styles["faq__item-text"]}>
                  Complete all Pomodoro sessions for a task to earn points,
                  level up, and celebrate your progress.
                </p>
              </li>
              <li className={styles.faq__item}>
                <div className={styles["faq__item-box"]}>
                  <h3 className={`${styles["faq__item-title"]} text18medium`}>
                    Can I customize my task reports?
                  </h3>
                  <svg className={styles["faq__item-icon"]}>
                    <use xlinkHref="sprite.svg#arrow"></use>
                  </svg>
                </div>
                <p className={styles["faq__item-text"]}>
                  Yes! You can generate detailed reports for each task, view
                  statistics by charts, and study performance to improve.
                </p>
              </li>
              <li className={styles.faq__item}>
                <div className={styles["faq__item-box"]}>
                  <h3 className={`${styles["faq__item-title"]} text18medium`}>
                    Is this platform suitable for team use or just personal
                    tasks?
                  </h3>
                  <svg className={styles["faq__item-icon"]}>
                    <use xlinkHref="sprite.svg#arrow"></use>
                  </svg>
                </div>
                <p className={styles["faq__item-text"]}>
                  It works for both individual users and teams who want to track
                  tasks, performance, and motivation.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
