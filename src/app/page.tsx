import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.iconCard}>
          <Image
            src="/hand-icon.svg"
            alt="Thumbs up illustration"
            width={624}
            height={367}
          />
        </div>
        <div className={styles.infoCard}>
          <h1 className={styles.title}>Who wants to be a millionaire?</h1>
          <Link className={styles.primaryBtn} href="/game">
            Start
          </Link>
        </div>
      </section>
    </main>
  );
}
