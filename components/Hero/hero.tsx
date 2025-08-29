import Image from "next/image";
import styles from "./hero.module.css";

export default function HeroPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.imagesBlock}>
          <Image
            src="/hero/hero.png"
            alt="Foto page"
            width={1440}
            height={739}
            priority
          />
        </div>
      </section>
    </>
  );
}
