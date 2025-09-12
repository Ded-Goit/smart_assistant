"use client";

import { motion } from "framer-motion";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Sidebar from "@/components/Sidebar/Sidebar";

import Filter from "@/components/Filter/Filter";

export default function ResourcesnewPage() {
  return (
    <>
      <section className={styles.register}>        
        <Sidebar />
        <div className={styles.mainBlock}>
          <div className={styles.header}></div>
          <Filter/>

        </div>
      </div>
    </section>
  );
}
