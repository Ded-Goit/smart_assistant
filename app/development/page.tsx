"use client";

import { motion } from "framer-motion";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Logo from "@/components/Logo/logo";
import styles from "./development.module.css";

export default function DevelopmentPage() {
  return (
    <div className={styles.wrapper}>
      {/* Анімований фон */}
      <div className={styles.gradientBg} />

      {/* Частинки */}
      <div className={styles.particles}>
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className={styles.particle} />
        ))}
      </div>

      {/* Хедер */}
      <header className={styles.header}>
        <Logo />
        <ThemeSwitcher />
      </header>

      {/* Основна секція */}
      <main className={styles.main}>
        <motion.h1
          className="h1"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚧 Page in Development
        </motion.h1>

        <motion.p
          className="text18"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          We're working hard to bring this page to life. Stay tuned for updates
          soon!
        </motion.p>

        <motion.div
          className={styles.loader}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </main>

      {/* Футер */}
      <footer className={styles.footer}>
        <p className="text14">© {new Date().getFullYear()} Smart Assistant</p>
      </footer>
    </div>
  );
}
