import Image from "next/image";
import styles from "./resourcesnew.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function ResourcesnewPage() {
  return (
    <>
      <section className={styles.register}>
        <Sidebar />
        <div className={styles.imagesBlock}>
          <Image
            src="/resourcesnew/resourcesnew.png"
            alt="Foto page"
            width={1440}
            height={960}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>
    </>
  );
}
