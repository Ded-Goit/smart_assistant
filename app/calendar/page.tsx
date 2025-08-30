import Image from "next/image";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./calendar.module.css";

export default function CalendarPage() {
  return (
    <section className={styles.wrapper}>
      <Sidebar />

      <div className={styles.imagesBlock}>
        <Image
          src="/calendar/calendar.png"
          alt="Calendar page"
          width={1440}
          height={1059}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
    </section>
  );
}
