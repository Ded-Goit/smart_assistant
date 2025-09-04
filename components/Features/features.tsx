"use client";

import Image from "next/image";
import styles from "./features.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

import { features } from "./features.data"; // ✅ імпорт даних

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function FeaturesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={`${styles.features__title} h2`}>Features</h2>

        {isMobile ? (
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            scrollbar={{ draggable: true }}
            className={styles.featuresSwiper}
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.features__box}>
                  <h3 className={`${styles["features__box-title"]} h3`}>
                    {feature.title}
                  </h3>
                  <ul className={styles["features__box-list"]}>
                    {feature.points.map((p, i) => (
                      <li key={i} className={styles["features__list-item"]}>
                        <p
                          className={`${styles["features__item-text"]} text18medium`}
                        >
                          {p}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {feature.img && (
                    <div className={styles.imagesBlock}>
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        width={169}
                        height={200}
                        style={{ width: "100%", height: "auto" }}
                        priority
                      />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev">
              <FaChevronLeft />
            </div>
            <div className="swiper-button-next">
              <FaChevronRight />
            </div>
          </Swiper>
        ) : (
          <div className={styles.features__inner}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.features__box}>
                <h3 className={`${styles["features__box-title"]} h3`}>
                  {feature.title}
                </h3>
                <ul className={styles["features__box-list"]}>
                  {feature.points.map((p, i) => (
                    <li key={i} className={styles["features__list-item"]}>
                      <p
                        className={`${styles["features__item-text"]} text18medium`}
                      >
                        {p}
                      </p>
                    </li>
                  ))}
                </ul>
                {feature.img && (
                  <div className={styles.imagesBlock}>
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={169}
                      height={200}
                      style={{ width: "100%", height: "auto" }}
                      priority
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
