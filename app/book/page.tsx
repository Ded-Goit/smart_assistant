import Image from "next/image";
import styles from "./book.module.css";

export default function BookPage() {
  return (
    <section className={styles.book}>
      {/* Верхня частина */}
      <div className={styles.row}>
        <div className={styles.textBlock}>
          <h2>About the Author</h2>
          <p>
            Brian Tracy is a Canadian-American motivational speaker, author, and
            personal development expert. Born on January 5, 1944 in
            Charlottetown, Prince Edward Island, Canada.
          </p>
          <p>
            He founded Brian Tracy International in 1984 in Vancouver; today it
            is based in San Diego, California, and provides services in
            leadership, sales, goal orientation, strategy, creativity, and the
            psychology of success.
          </p>
          <p>
            Over the course of more than 30 years, he has written more than 80
            books, including the bestsellers <em>Eat That Frog!</em>,{" "}
            <em>No Excuses!</em>, and <em>The Psychology of Achievement</em>. He
            has conducted more than 5,000 seminars and spoken to more than 5
            million people in more than 55 countries.
          </p>
          <p>
            <strong>Education:</strong> University of Alberta (Canada). <br />
            <strong>Books:</strong> Over 80 publications. <em>Do it now!</em>{" "}
            sold 1.6 million copies and translated into 42 languages.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <Image
            src="/book/brian_tracy.webp"
            alt="Brian Tracy"
            width={800}
            height={800}
            className={styles.image}
          />
        </div>
      </div>

      {/* Нижня частина */}
      <div className={styles.row}>
        <div className={styles.imageBlock}>
          <Image
            src="/book/frog_end_book.webp"
            alt="Do It Now Book"
            width={800}
            height={800}
            className={styles.image}
          />
        </div>
        <div className={styles.textBlock}>
          <h2>Brief description</h2>
          <p>
            «To develop the habit of focusing and concentrating, you need to
            master three key qualities: decision, discipline, and determination»
          </p>
          <p>
            <em>Do It Now</em> is a practical guide to overcoming
            procrastination and building a habit of productivity. Brian Tracy
            presents 21 actionable methods to help readers:
          </p>
          <ul>
            <li>
              Develop the core traits of decision, discipline, and determination
            </li>
            <li>
              Tackle the most unpleasant but important task first—symbolized by
              the metaphorical « frog »
            </li>
            <li>
              Prioritize effectively, act quickly, and follow through with
              consistency
            </li>
            <li>
              Boost self-esteem and create lasting positive change through daily
              progress
            </li>
          </ul>
          <p>
            Tracy emphasizes that success comes from doing what matters
            most—especially when it`s uncomfortable. By consistently « eating
            the frog », you train your mind to stay focused, build momentum, and
            take control of your time.
          </p>
        </div>
      </div>
    </section>
  );
}
