import Image from "next/image";
import styles from "./howitworks.module.css";
import FocussessionPage from "../Focussession/focussession";
import ProgressPage from "../Progressdashboard/progress";

export default function HowitworksPage() {
  return (
    <>
      <section id="how-it-works" className={styles.howitworks}>
        <div className={styles.imagesBlock}>
          <Image
            src="/howitworks/howitworks.png"
            alt="Foto page"
            width={1440}
            height={594}
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <FocussessionPage />
          <ProgressPage />
        </div>
      </section>
    </>
  );
}
