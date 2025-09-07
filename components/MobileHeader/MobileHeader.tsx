import Image from "next/image";
import styles from "./MobileHeader.module.css";
import Logo from "../Logo/logo";

export default function MobileHeader() {
  return (
    <>
      <div>
        <Logo width={121} height={54} />
      </div>
      <div className={styles.imagesBlock}>
        <Image
          src="/mobileheader/nav_item_button.png"
          alt="Foto page"
          width={32}
          height={32}
          priority
        />
        <Image
          src="/mobileheader/sharp_magic.png"
          alt="Foto page"
          width={32}
          height={32}
          priority
        />
        <Image
          src="/mobileheader/user_avatar.png"
          alt="Foto page"
          width={32}
          height={32}
          priority
        />
        <Image
          src="/mobileheader/iconamoon_menu_burger.png"
          alt="Foto page"
          width={32}
          height={32}
          priority
        />
      </div>
    </>
  );
}
