"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./faq.module.css";

const faqItems = [
  {
    question: "What is Statistics?",
    answer:
      "Statistics helps you track your tasks with charts and detailed reports, so you can analyze performance and improve productivity.",
  },
  {
    question: "How does Time Master help me stay focused?",
    answer:
      "Time Master helps manage distractions, plan weekly and quarterly, maintain motivation, and track accountability.",
  },
  {
    question: "How do I earn rewards in Rewards?",
    answer:
      "Complete all Pomodoro sessions for a task to earn points, level up, and celebrate your progress.",
  },
  {
    question: "Can I customize my task reports?",
    answer:
      "Yes! You can generate detailed reports for each task, view statistics by charts, and study performance to improve.",
  },
  {
    question: "Is this platform suitable for team use or just personal tasks?",
    answer:
      "It works for both individual users and teams who want to track tasks, performance, and motivation.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <h2 className={`${styles.faq__title} h2`}>faq</h2>
        <div className={styles.faq__box}>
          <div className={styles.faq__image}>
            <Image
              src="/faq/group_brainstorm_session.webp"
              alt="Group brainstorm session"
              width={575}
              height={575}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
          <ul className={styles.faq__list}>
            {faqItems.map((item, index) => (
              <li
                key={index}
                className={`${styles.faq__item} ${
                  openIndex === index ? styles.active : ""
                }`}
              >
                <div
                  className={styles["faq__item-box"]}
                  onClick={() => toggleItem(index)}
                >
                  <h3 className={`${styles["faq__item-title"]} text18medium`}>
                    {item.question}
                  </h3>
                  <svg
                    className={`${styles["faq__item-icon"]} ${
                      openIndex === index ? styles.rotate : ""
                    }`}
                  >
                    <use xlinkHref="sprite.svg#arrow"></use>
                  </svg>
                </div>
                <p
                  className={`${styles["faq__item-text"]} ${
                    openIndex === index ? styles.show : ""
                  } text16medium`}
                >
                  {item.answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
