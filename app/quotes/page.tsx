import styles from "./quotes.module.css";

const quotes = [
  "«Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...»",
  "«Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...»",
  "«Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...»",
  "«Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...»",
  "«Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...»",
  "«Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...»",
];

export default function QuotesPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Lorem Ipsum</h1>
      {quotes.map((quote, idx) => (
        <blockquote key={idx} className={styles.quote}>
          {quote}
        </blockquote>
      ))}
    </section>
  );
}
