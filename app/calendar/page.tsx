import Image from "next/image";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./calendar.module.css";

export default function CalendarPage() {
  return (
    <section className={styles.wrapper}>
      <Sidebar />

      <div className={styles.imagesBlock}>
        <Image
          src="/calendar/r1x.png"
          alt="Calendar page"
          width={140}
          height={100}
          // style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
      <p>dskjfapsodhufj</p>
    </section>
  );
}
