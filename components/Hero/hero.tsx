import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";

export default function HeroPage() {
  return (
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
            <Link
              href="/profile"
              className={`${styles.hero__btn} btnfullcolor`}
            >
              Start Now
            </Link>
          </div>

          {/* Зображення */}
          <Image
            className={styles.hero__image}
            src="/hero/desk_girl_at_kanban.webp"
            alt="Productivity illustration"
            width={537}
            height={739}
            priority
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 768px) 100vw, 537px"
          />
        </div>
      </div>
    </section>
  );
}
