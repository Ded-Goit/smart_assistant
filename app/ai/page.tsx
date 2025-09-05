"use client";

import Image from "next/image";
import styles from "./ai.module.css";

import Link from "next/link";

export default function LoginPage() {
  return (
    <section className={styles.ai}>
      <div className={styles.imagesBlock}>
        <h2 className={`${styles.title} h2`}>UHJGJHGUIHOH</h2>
        <p className={`${styles.text} text24`}>
          Welcome back! Please enter your details.
        </p>
      </div>
      <Image
        src="/login/time_touch-gay.jpg"
        alt="Time touch gay"
        width={513}
        height={513}
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </section>
  );
}
