// app/about/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./about.module.css";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Заборона скролу та Esc
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isModalOpen]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>About</h1>

      {/* Top Block */}
      <div className={styles.row}>
        <div className={styles.colImage}>
          <Image
            src="/hero/monkey.webp"
            alt="Summary"
            width={600}
            height={400}
            className={styles.image}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className={styles.colText}>
          <p>
            Допомагати людям працювати усвідомлено, без вигорання і зайвого
            тиску. Продуктивність має бути не жорсткою, а здоровою — з повагою
            до власного ритму, енергії та життя поза роботою.
          </p>
          <blockquote className={styles.quote}>
            Нас надихнула книга «З’їж ту жабу» Браяна Трейсі та пошук балансу
            між ефективністю і самоповагою. Ми — команда ІТ-спеціалістів, які
            самі пройшли через багатозадачність, вигорання і хаос дедлайнів.
            Тому створили асистента, який не тисне, а підтримує. Не нав’язує
            ритм — а підлаштовується під твій.
          </blockquote>
          <p>
            Ми — команда ІТ-спеціалістів, які поєднують досвід у QA, UX-дизайні,
            аналітиці, автоматизації та продукт-менеджменті. Ми самі проходили
            шлях багатозадачності, дедлайнів і вигорання — тому створили
            платформу, яка підтримує здорову продуктивність і адаптується до
            твого ритму.
          </p>
          <ul className={styles.keyPoints}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>

      {/* Author Block */}
      <div className={styles.row}>
        <div className={styles.colText}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.colImage}>
          <Image
            src="/about/monkey.webp"
            alt="Summary"
            width={400}
            height={400}
            className={styles.imagep}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              ✖
            </button>
            <Image
              src="/about/monkey.webp"
              alt="Summary"
              width={1200}
              height={800}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
