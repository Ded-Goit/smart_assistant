import Image from "next/image";
import styles from "./features.module.css";

export default function FeaturesPage() {
  return (
    <>
      <section className={styles.features}>
        <div className={styles.imagesBlock}>
          <Image
            src="/features/features.png"
            alt="Foto page"
            width={1440}
            height={992}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>
    </>
  );
}
