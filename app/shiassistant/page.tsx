"use client";

import Image from "next/image";
import styles from "./shiassistant.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";

const sections = [
  {
    number: 1,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
  {
    number: 2,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
  {
    number: 3,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
  {
    number: 4,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
  {
    number: 5,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
  {
    number: 6,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
  {
    number: 7,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
  {
    number: 8,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
  {
    number: 9,
    title: "Lorem Ipsum",
    insights: [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль..",
    ],
  },
];

export default function MethodsPage() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Shi assistant</h1>

      <div className={styles.sliderWrapper}>
        <button ref={prevRef} className={styles.navButton}>
          <FaChevronLeft />
        </button>

        <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={1}
          centeredSlides
          spaceBetween={40}
          loop
          speed={600}
          scrollbar={{
            draggable: true,
            hide: false,
            snapOnRelease: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={styles.swiperContainer}
        >
          {sections.map((section, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.slideCard}>
                <div className={styles.cardHeader}>
                  <h3>
                    {section.number}. {section.title}
                  </h3>
                </div>
                <ul>
                  {section.insights.map((insight, j) => (
                    <li key={j}>{insight}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className={styles.navButton}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.frogImageWrapper}>
        <Image
          src="/shiassistant/monkey.webp"
          alt="Telefon Frog"
          width={300}
          height={300}
          className={styles.frogImage}
          priority
        />
      </div>
    </section>
  );
}
