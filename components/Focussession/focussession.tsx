import Image from "next/image";
import styles from "./focussession.module.css";

export default function FocussessionPage() {
  return (
    <>
      <section className={styles.focussession}>
        <div className={styles.imagesBlock}>
          <Image
            src="/focussession/focussession.png"
            alt="Foto page"
            width={1440}
            height={497}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>
    </>
  );
}
