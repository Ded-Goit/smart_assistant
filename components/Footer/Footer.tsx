"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import { logo, navLinks } from "@/constant/constant";
import {
  RiLinkedinFill,
  RiTelegramFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";
import { subscribe } from "@/constant/constant";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <Link href="/" className={styles.logo}>
            <Image src={logo} alt="Logo" width={158} height={56} priority />
          </Link>
        </div>

        {/* Навігація */}
        <div className={styles.nav_inner}>
          <p className={`${styles.subtitle} text18medium`}>Navigation</p>
          <nav className={styles.footernav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={styles.navlink}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div className={styles.polisy_inner}>
          <p className={`${styles.subtitle} text18medium`}>Legal</p>
          <ul className={styles.legalnav}>
            <Link href="/terms-and-conditions" className={styles.linkpolicy}>
              Terms
            </Link>
            <Link href="/privacy-policy" className={styles.linkpolicy}>
              Privacy Policy
            </Link>
            <Link href="/cookies-policy" className={styles.linkpolicy}>
              Cookies
            </Link>
          </ul>
        </div>

        {/* Соцмережі */}
        <div className={styles.socials_inner}>
          <p className={`${styles.subtitle} text18medium`}>Subscribe</p>
          <div className={styles.socials}>
            {subscribe.linkedin && (
              <a
                href={subscribe.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <RiLinkedinFill />
              </a>
            )}
            {subscribe.telegram && (
              <a
                href={subscribe.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <RiTelegramFill />
              </a>
            )}
            {subscribe.instagram && (
              <a
                href={subscribe.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <RiInstagramFill />
              </a>
            )}
            {subscribe.facebook && (
              <a
                href={subscribe.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <RiFacebookFill />
              </a>
            )}
            {subscribe.youtube && (
              <a
                href={subscribe.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <RiYoutubeFill />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Підвал */}
      <div className={styles.developer_inner}>
        <p className={`${styles.text} .text14`}>
          &copy; {new Date().getFullYear()} НАЗВА САЙТУ |{" "}
          <Link href="/team" className={`${styles.link} .text14`}>
            НАЗВА КОМАНДИ
          </Link>
        </p>
      </div>
    </footer>
  );
}
