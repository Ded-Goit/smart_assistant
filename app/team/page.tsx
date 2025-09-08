"use client";

import Image from "next/image";
import styles from "./team.module.css";
import { useEffect, useRef, useState } from "react";
import {
  RiLinkedinFill,
  RiTelegramFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterXFill,
} from "react-icons/ri";

const team = [
  {
    name: "Iryna Ielkina",
    interests:
      "Testing new recipes as a way of self-expression and checking one's culinary skills.",
    photo: "/team/iryna_ielkina.webp",
    hobby: "Travel and new cultures",
    email: "ielkinairinka@gmail.com",
    socials: {
      linkedin: "http://www.linkedin.com/in/iryna-ielkina-263596262",
      telegram: "https://web.telegram.org/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "DED",
    interests:
      "Deepening my expertise in IT and staying immersed in the digital world",
    photo: "/team/DEDda.webp",
    hobby: "Gardening and coding - nurturing both plants and programs",
    email: "mgm.agro04@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/andrii-ded-romanov/",
      telegram: "https://web.telegram.org/a/#1078273912",
      youtube: "http://www.youtube.com/@DED_8_8_8_8_8",
      instagram: "https://www.instagram.com/panna_agnes?igsh=ZHM3cG55NHB4YWJr",
      facebook: "https://www.facebook.com/bzhenchakivska?locale=uk_UA",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Olena Lytvynenko",
    interests: "website design",
    photo: "/team/olena_lytvynenko.webp",
    hobby: "UX/UI Designer",
    email: "8888888@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/",
      telegram: "https://web.telegram.org/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
];
export default function TeamPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;
    container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const speed = 0.1 + index * 0.02;
          card.style.transform = `translateY(${scrollY * speed}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.headingMain}>НАЗВА КОМАНДИ</h1>

      <h2 className={`${styles.heading} ${styles.headingSub} ${styles.delay2}`}>
        With Ukraine in our hearts. With data in our hands.
      </h2>

      <h3
        className={`${styles.heading} ${styles.headingDesc} ${styles.delay3}`}
      >
        СЛОГАН Team from Ukraine that proves: deep analysis is power. We work on
        real problems to change the world with the help of data.
      </h3>
      <div className={styles.teamGrid} ref={scrollRef}>
        {team.map((member, i) => (
          <div
            key={i}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className={styles.card}
            style={{ "--index": i } as React.CSSProperties}
            // 3D-поворот при русі миші
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const rotateX = -(y / rect.height - 0.5) * 10;
              const rotateY = (x / rect.width - 0.5) * 10;
              card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              card.style.transform = "rotateX(0) rotateY(0)";
            }}
          >
            <div className={styles.cardContent}>
              <Image
                src={member.photo}
                alt={member.name}
                width={140}
                height={140}
                className={styles.photo}
                priority={i === 0}
              />
              <h3>
                {member.email ? (
                  <a
                    href={`mailto:${member.email}?subject=Hello ${member.name}`}
                    className={styles.emailLink}
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
              </h3>
              <p>
                <strong>Interests:</strong> {member.interests}
              </p>
              <p>
                <strong>Hobbies:</strong> {member.hobby}
              </p>
            </div>
            <div className={styles.socials}>
              {member.socials?.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  data-tooltip="Send email"
                >
                  <RiLinkedinFill />
                </a>
              )}
              {member.socials?.telegram && (
                <a
                  href={member.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiTelegramFill />
                </a>
              )}
              {member.socials?.youtube && (
                <a
                  href={member.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiYoutubeFill />
                </a>
              )}
              {member.socials?.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiInstagramFill />
                </a>
              )}
              {member.socials?.facebook && (
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiFacebookFill />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {team.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              activeIndex === i ? styles.active : ""
            }`}
            onClick={() => scrollToIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
