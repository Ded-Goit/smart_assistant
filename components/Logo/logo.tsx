
import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";

export default function Logo({ width = 160, height = 56 }) {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/icons/logo.svg"
        alt="Logo"
        width={width}
        height={height}
        priority
        className={styles.logoDefault}
      />
      <Image
        src="/icons/logo-gradient.svg"
        alt="Logo Gradient"
        width={width}
        height={height}
        priority
        className={styles.logoHover}
      />
    </Link>
  );
}