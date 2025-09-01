import Image from "next/image";
import styles from "./howitworks.module.css";
import FocussessionPage from "../Focussession/focussession";
import ProgressPage from "../Progressdashboard/progress";

export default function HowitworksPage() {
  return (
    <>

      <section className={styles.howitworks}>
        <div className={styles.container}>
          <h2 className={`${styles.howitworks__title} h2`}>How It Works?</h2>
          <div className={styles.howitworks__box}>
            <div className={styles["howitworks__box-image"]}>
              <Image
                src="/howitworks/desk_alarm_clock@2x.webp"
                alt="Alarm clock"
                width={513}
                height={513}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <div className={styles["howitworks__box-content"]}>
              <h3 className={`${styles["howitworks__box-title"]} h3`}>
                Manage time with ease
              </h3>
              <ul className={styles["howitworks__box-list"]}>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Plan your tasks with clear deadlines
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Organize and categorize your to-dos
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Set priorities to focus on what matters most
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Use focus sessions with built-in breaks
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Track progress and stay motivated every day
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.howitworks__box}>
            <div className={styles["howitworks__box-content"]}>
              <h3 className={`${styles["howitworks__box-title"]} h3`}>
                Focus sessions
              </h3>
              <ul className={styles["howitworks__box-list"]}>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Set a clear goal before you start
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Work in 25-minute deep focus blocks
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Take refreshing short breaks to recharge
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Stay on schedule and meet your deadlines
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Minimize distractions and keep concentration high
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Build consistency and boost productivity over time
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles["howitworks__box-image"]}>
              <Image
                src="/howitworks/desk_kanban_mouse@2x.webp"
                alt="Kanban mouse"
                width={513}
                height={513}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
          <div className={styles.howitworks__box}>
            <div className={styles["howitworks__box-image"]}>
              <Image
                src="/howitworks/desk_girl_managing_tasks@2x.webp"
                alt="Girl managing tasks"
                width={513}
                height={513}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <div className={styles["howitworks__box-content"]}>
              <h3 className={`${styles["howitworks__box-title"]} h3`}>
                Progress Dashboard
              </h3>
              <ul className={styles["howitworks__box-list"]}>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Track your tasks and monitor progress
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Visualize productivity with charts and insights
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Organize work by time, priority, and categories
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    See time spent and focus sessions for each task
                  </p>
                </li>
                <li className={styles["howitworks__box-item"]}>
                  <p className={`${styles["howitworks__box-text"]} text18`}>
                    Learn patterns, boost efficiency, and grow your skills
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.howitworks__bottom}>
            <p className={`${styles["howitworks__bottom-text"]} text24`}>
              Boost your productivity and reach your goals faster! Join now and
              start tracking your tasks like a pro.
            </p>
            <button className={`${styles["howitworks__bottom-btn"]} btnfullcolor`} type="button">
              Get Started
            </button>
          </div>

      <section id="how-it-works" className={styles.howitworks}>
        <div className={styles.imagesBlock}>
          <Image
            src="/howitworks/howitworks.png"
            alt="Foto page"
            width={1440}
            height={594}
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <FocussessionPage />
          <ProgressPage />

        </div>
      </section>
    </>
  );
}
