import Image from "next/image";
import styles from "./faq.module.css";

export default function FaqPage() {
  return (
    <>
      <section id="faq" className={styles.faq}>
        <div className={styles.imagesBlock}>
          <Image
            src="/faq/faq.png"
            alt="Foto page"
            width={1440}
            height={772}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>
    </>
  );
}
