import Image from "next/image";
import Link from "next/link";
import styles from "./ScreenCard.module.css";

type Action =
  | { kind: "link"; href: string; label: string }
  | { kind: "button"; onClick: () => void; label: string };

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  action: Action;
  withGradient?: boolean;
};

export function ScreenCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  action,
  withGradient,
}: Props) {
  return (
    <main className={`${styles.page} ${withGradient ? styles.gradient : ""}`}>
      <section className={styles.card}>
        <div className={styles.iconCard}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={624}
            height={367}
            loading="eager"
          />
        </div>

        <div className={styles.infoCard}>
          <div>
            {subtitle ? (
              <p className={styles.subtitle}>{subtitle}</p>
            ) : null}
            <h1 className={styles.title}>{title}</h1>
          </div>

          <div>
            {action.kind === "link" ? (
              <Link className={styles.primaryBtn} href={action.href}>
                {action.label}
              </Link>
            ) : (
              <button
                className={styles.primaryBtn}
                onClick={action.onClick}
                type="button"
              >
                {action.label}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
