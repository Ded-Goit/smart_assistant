import Image from "next/image";
import styles from "./progress.module.css";

export default function ProgressPage() {
  return (
    <>
      <section className={styles.progressdashboard}>
        <div className={styles.imagesBlock}>
          <Image
            src="/progressdashboard/progressdashboard.png"
            alt="Foto page"
            width={1440}
            height={709}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>
    </>
  );
}
