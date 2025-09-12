import Sidebar from "@/components/Sidebar/Sidebar";
import CalendarWithNotes from "@/components/CalendarWithNotes";
import ReduxProvider from "@/store/provider";
import styles from "./calendar.module.css";
import MobileHeader from "@/components/MobileHeader/MobileHeader";

export default function CalendarPage() {
  return (
    <ReduxProvider>
      <section className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <main className={styles.main}>
          <CalendarWithNotes />
        </main>
      </section>
    </ReduxProvider>
  );
}
