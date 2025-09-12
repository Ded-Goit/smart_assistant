import Image from "next/image";
import styles from "./resourcesnew.module.css";
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
      </section>
    </>
  );
}
