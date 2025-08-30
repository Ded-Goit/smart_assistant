import Image from "next/image";
import styles from "./profile.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function ProfilePage() {
  return (
    <section className={styles.wrapper}>
      <Sidebar />

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
  );
}
