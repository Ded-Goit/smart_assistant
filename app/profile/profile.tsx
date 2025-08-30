import Image from "next/image";
import styles from "./profile.module.css";

export default function ProfilePage() {
  return (
    <>
      <section className={styles.profile}>
        <div className={styles.imagesBlock}>
          <Image
            src="/profile/profile.png"
            alt="Foto page"
            width={1148}
            height={960}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>
    </>
  );
}
