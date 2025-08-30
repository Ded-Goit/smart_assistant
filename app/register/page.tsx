import Image from "next/image";
import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <>
      <section className={styles.register}>
        <div className={styles.imagesBlock}>
          <Image
            src="/register/register.png"
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
