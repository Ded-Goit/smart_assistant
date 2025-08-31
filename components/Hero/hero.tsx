import Image from "next/image";
import styles from "./hero.module.css";

export default function HeroPage() {
  return (
<<<<<<< HEAD
    <>
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <h1 className={`${styles.hero__title}`}>
            Your smart productivity partner
          </h1>
          <p className={`${styles.hero__text} text 24`}>
            Track your tasks, manage your time, and boost productivity with
            powerful tools designed for students and professionals.
          </p>
          <button className={`${styles.hero__btn} btnfullcolor`} type="button">
            Start Now
          </button>
        </div>
        <div className={styles.hero__image}>
          <Image
            src="/hero/desk_girl_at_kanban@2x.webp"
            alt="Girl at kanban"
            width={537}
            height={480}
            // style={{ width: "100%", height: "auto" }}
=======
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.hero__container}>
            {/* Заголовок */}
            <h1 className={`${styles.hero__title} h1`}>
              Your smart productivity partner
            </h1>

            {/* Текст */}
            <p className={`${styles.hero__text} text24`}>
              Track your tasks, manage your time, and boost productivity with
              powerful tools designed for students and professionals.
            </p>

            {/* Кнопка */}
            <button
              className={`${styles.hero__btn} btnfullcolor`}
              type="button"
            >
              Start Now
            </button>
          </div>

          {/* Зображення */}
          <Image
            className={styles.hero__image}
            src="/hero/desk_girl_at_kanban.webp"
            alt="Productivity illustration"
            width={537}
            height={739}
>>>>>>> origin/main
            priority
            sizes="(max-width: 768px) 100vw, 537px"
          />
        </div>
      </div>
    </section>
  );
}
