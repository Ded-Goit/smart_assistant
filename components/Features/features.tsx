import Image from "next/image";
import styles from "./features.module.css";

export default function FeaturesPage() {
  return (
    <>
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={`${styles.features__title} h2`}>Features</h2>
          <div className={styles.features__inner}>
            <div className={styles.features__box}>
              <h3 className={`${styles["features__box-title"]} h3`}>
                Timeline
              </h3>
              <ul className={styles["features__box-list"]}>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Stay focused and manage distractions effectively
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Plan your week and quarters with clarity
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Keep motivation high throughout your journey
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Build accountability and track real progress
                  </p>
                </li>
              </ul>
              <div className={styles.imagesBlock}>
                <Image
                  src="/features/desk_focused_worker@2x.webp"
                  alt="Focused worker"
                  width={169}
                  height={205}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
            <div className={styles.features__box}>
              <div>
                <h3 className={`${styles["features__box-title"]} h3`}>
                  Smart Priorities
                </h3>
                <ul className={styles["features__box-list"]}>
                  <li className={styles["features__list-item"]}>
                    <p
                      className={`${styles["features__item-text"]} text18medium`}
                    >
                      Mark priorities with clear color-coded flags
                    </p>
                  </li>
                  <li className={styles["features__list-item"]}>
                    <p
                      className={`${styles["features__item-text"]} text18medium`}
                    >
                      Focus on what’s urgent and important first
                    </p>
                  </li>
                  <li className={styles["features__list-item"]}>
                    <p
                      className={`${styles["features__item-text"]} text18medium`}
                    >
                      Stay on track and complete high-value tasks efficiently
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.imagesBlock}>
                <Image
                  src="/features/desk_mountain_flag_boy@2x.webp"
                  alt="Mountain flag boy"
                  width={169}
                  height={184}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
            <div className={styles.features__box}>
              <h3 className={`${styles["features__box-title"]} h3`}>
                Task Alerts
              </h3>
              <ul className={styles["features__box-list"]}>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Get notified about tasks by due date and time
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Receive alerts a few minutes before your task starts
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Set custom reminders to stay on schedule Never miss an
                    important deadline again
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Never miss an important deadline again
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.features__box}>
              <h3 className={`${styles["features__box-title"]} h3`}>
                Statistics
              </h3>
              <ul className={styles["features__box-list"]}>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    View task stats with histograms and pie charts
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Analyze performance and improve efficiency Get detailed
                    reports for each task
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Get detailed reports for each task
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.features__box}>
              <div>
                <h3 className={`${styles["features__box-title"]} h3`}>
                  Time Master
                </h3>
                <ul className={styles["features__box-list"]}>
                  <li className={styles["features__list-item"]}>
                    <p
                      className={`${styles["features__item-text"]} text18medium`}
                    >
                      Stay focused and minimize distractions
                    </p>
                  </li>
                  <li className={styles["features__list-item"]}>
                    <p
                      className={`${styles["features__item-text"]} text18medium`}
                    >
                      Plan effectively weekly and quarterly
                    </p>
                  </li>
                  <li className={styles["features__list-item"]}>
                    <p
                      className={`${styles["features__item-text"]} text18medium`}
                    >
                      Boost motivation and consistency
                    </p>
                  </li>
                  <li className={styles["features__list-item"]}>
                    <p
                      className={`${styles["features__item-text"]} text18medium`}
                    >
                      Track progress and stay accountable
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles["features__box-image"]}>
                <Image
                  src="/features/desk_girl_with_calendar@2x.webp"
                  alt="Mountain flag boy"
                  width={169}
                  height={155}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
            <div className={styles.features__box}>
              <h3 className={`${styles["features__box-title"]} h3`}>Rewards</h3>
              <ul className={styles["features__box-list"]}>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Earn points when all Pomodoro sessions are completed
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Level up after finishing tasks for extra motivation
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <p
                    className={`${styles["features__item-text"]} text18medium`}
                  >
                    Celebrate achievements and stay encouraged
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
