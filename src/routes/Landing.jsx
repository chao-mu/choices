// Ours - Styles
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles["hero__title"]}>Choices</h1>
        <p>Create a visual novel or dating simulator.</p>
      </section>
    </main>
  );
}
