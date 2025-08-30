import Image from "next/image";
import styles from "./setting.module.css";

export default function SettingPage() {
  return (
    <>
      <section className={styles.setting}>
        <div className={styles.imagesBlock}>
          <Image
            src="/setting/setting.png"
            alt="Foto page"
            width={1148}
            height={1063}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>
    </>
  );
}
