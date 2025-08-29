"use client";

import { useEffect, useState } from "react";
import styles from "./checklist.module.css";
import confetti from "canvas-confetti";

const checklistData = [
  {
    title: "1. Morning start (8:00 - 9:00)",
    tasks: [
      "Wake up without your phone in bed",
      "Drink a glass of water",
      "5 min - short warm-up or exercise",
      "10 min - meditation / breathing / silence",
      "Light nutritious meal",
      "10 min - plan the day: 1-3 main goals (MIT)",
      "View tasks in to-do / tracker",
      "Allocate clear blocks of time (timeboxing)",
    ],
  },
  {
    title: "2. First focus block (9:00 - 11:00)",
    subtitle: "🎯 Focus: the main task of the day",
    tasks: [
      "Set a timer (2-4 Pomodoros of 25 min each)",
      "After each ``pomodoro`` — 5 min rest",
      "After the 4th — 15-20 min long break",
    ],
  },
  {
    title: "3. Break for unloading (11:00 - 11:30)",
    tasks: ["Walk or gymnastics", "Postpone phone", "Light snack / water"],
  },
  {
    title: "4. Second focus block (11:30 - 13:00)",
    subtitle: "🎯 Task #2 (MIT #2 or small tasks)",
    tasks: ["2-3 Pomodoro", "5-minute breaks", "Minimum social media/messages"],
  },
  {
    title: "5. Lunch and digital detox (13:00 - 14:00)",
    tasks: [
      "Full lunch",
      "Walk or silence",
      "No screens (phone on 'do not disturb' mode)",
    ],
  },
  {
    title: "6. Third block - light / technical tasks (14:00 - 16:00)",
    subtitle: "🎯 Letters, reports, routine",
    tasks: [
      "Do the most in 90 minutes",
      "Every 30-40 minutes - 5 minute break",
    ],
  },
  {
    title: "7. Restorative break (16:00 - 16:30)",
    tasks: [
      "Warm drink, fresh air",
      "Notes in the journal (did the day go according to plan?)",
      "5 min eye rest (20-20-20 method)",
    ],
  },
  {
    title: "8. Closing block (16:30 - 18:00)",
    subtitle: "🎯 Summing up / small tasks",
    tasks: [
      "Check email",
      "Prepare a list of tasks for tomorrow",
      "End the workday on time",
      "Close the laptop / turn off notifications",
    ],
  },
  {
    title: "9. Evening departure from work (after 18:00)",
    tasks: [
      "No checking email after 18:30",
      "Minimum screens 1 hour before bedtime",
      "10 min - gratitude / summarizing the day",
      "Plan a pleasant activity (reading, walk, movie)",
    ],
  },
];

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("checklist");
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(checked));
  }, [checked]);

  const toggle = (key: string) => {
    const audio = new Audio(
      checked[key] ? "/sounds/uncheck.wav" : "/sounds/check.wav"
    );
    audio.play();
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const total = checklistData.reduce(
    (acc, block) => acc + block.tasks.length,
    0
  );
  const completed = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completed / total) * 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedProgress((prev) => {
        if (prev < progress) return prev + 1;
        if (prev > progress) return prev - 1;
        return prev;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.3 },
      });
    }
  }, [progress]);

  const getGradient = (value: number) => {
    if (value < 30) return "linear-gradient(to right, #f44336, #ff9800)";
    if (value < 70) return "linear-gradient(to right, #ff9800, #ffeb3b)";
    return "linear-gradient(to right, #4caf50, #8bc34a)";
  };

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>📝 Daily Checklist</h1>

      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{
            width: `${progress}%`,
            background: getGradient(progress),
          }}
        ></div>
        <span className={styles.progressText}>
          {displayedProgress}% completed
        </span>
      </div>

      {checklistData.map((block, blockIdx) => (
        <div key={blockIdx} className={styles.block}>
          <h2 className={styles.title}>{block.title}</h2>
          {block.subtitle && (
            <h3 className={styles.subtitle}>{block.subtitle}</h3>
          )}
          <ul className={styles.list}>
            {block.tasks.map((task, taskIdx) => {
              const key = `${blockIdx}-${taskIdx}`;
              const isChecked = !!checked[key];
              return (
                <li
                  key={key}
                  className={`${styles.item} ${isChecked ? styles.done : ""}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(key)}
                    />
                    <span>{task}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
