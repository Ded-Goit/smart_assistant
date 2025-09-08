import Image from "next/image";
import styles from "./MobileHeader.module.css";
import Logo from "../Logo/logo";

export default function MobileHeader() {
  return (
    <header className={styles.header}>
      {/* Лого тільки на мобільних */}
      <div className={styles.logo}>
        <Logo width={121} height={54} />
      </div>

      {/* Іконки завжди відображаються */}
      <div className={styles.icons}>
        <Image
          src="/mobileheader/nav_item_button.png"
          alt="Nav"
          width={32}
          height={32}
          priority
        />
        <Image
          src="/mobileheader/sharp_magic.png"
          alt="Magic"
          width={32}
          height={32}
          priority
        />
        <Image
          src="/mobileheader/user_avatar.png"
          alt="User"
          width={32}
          height={32}
          priority
        />
        <Image
          src="/mobileheader/iconamoon_menu_burger.png"
          alt="Menu"
          width={32}
          height={32}
          priority
        />
      </div>
    </header>
  );
}
