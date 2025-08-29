"use client";

import styles from "./tools.module.css";
import Image from "next/image";

export default function ToolsPage() {
  const tools = [
    {
      title: "The 80/20 rule",
      link: "https://asana.com/resources/pareto-principle-80-20-rule",
    },
    {
      title: "Pomodoro Timer",
      link: "https://pomodoro-tracker.com/?lang=en",
    },
    {
      title: "Daily planning in the evening",
      link: "https://www.microsoft.com/uk-ua/microsoft-365/microsoft-to-do-list-app",
    },
    {
      title: "Priority matrix (important/urgent)",
      link: "https://experience.dropbox.com/uk-ua/resources/eisenhower-matrix",
    },
    {
      title:
        "Create, share and collaboratively work on mind maps with MindMeister, the leading online mind mapping software. Includes apps for iPhone, iPad and Android.",
      link: "https://www.mindmeister.com/",
    },
    {
      title:
        "Boost efficiency both in work and life. Millions of people love it. ",
      link: "https://www.xmind.net/",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Tools</h1>
      <div className={styles.grid}>
        {tools.map((res, idx) => (
          <a
            key={idx}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={styles.content}>
              <h2>{res.title}</h2>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.frogBlock}>
        <Image
          src="/tools/tools.webp"
          alt="Tools background"
          width={800} // реальний розмір або приблизний
          height={500}
          className={styles.bgImage}
        />
        <Image
          src="/tools/dzen_frog.webp"
          alt="Zen frog"
          width={200} // розмір для вкладки
          height={200}
          className={styles.centerImage}
        />
      </div>
    </section>
  );
}
