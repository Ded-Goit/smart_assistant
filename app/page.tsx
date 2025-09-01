//import Image from "next/image";
import styles from "./page.module.css";
import FaqPage from "@/components/FAQ/faq";
import FeaturesPage from "@/components/Features/features";
import HeroPage from "@/components/Hero/hero";
import HowitworksPage from "@/components/Howitworks/howitworks";
import FocussessionPage from "@/components/Focussession/focussession";
import ProgressPage from "@/components/Progressdashboard/progress";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <HeroPage />
        <HowitworksPage />
        <FeaturesPage />
        <FaqPage />
      </section>
    </>
  );
}
