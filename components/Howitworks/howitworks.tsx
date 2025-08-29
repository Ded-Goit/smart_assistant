import Image from "next/image";
import styles from "./howitworks.module.css";

export default function HowitworksPage() {
  return (
    <>
      <section className={styles.howitworks}>
        <div className={styles.imagesBlock}>
          <Image
            src="/howitworks/howitworks.png"
            alt="Foto page"
            width={1440}
            height={594}
            priority
          />
        </div>
      </section>
    </>
  );
}
