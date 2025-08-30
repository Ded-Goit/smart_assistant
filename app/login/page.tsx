import Image from "next/image";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <>
      <section className={styles.login}>
        <div className={styles.imagesBlock}>
          <Image
            src="/login/login.png"
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
