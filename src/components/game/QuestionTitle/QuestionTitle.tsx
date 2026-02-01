import styles from "./QuestionTitle.module.css";

export function QuestionTitle({ text }: { text: string }) {
  return <h2 className={styles.title}>{text}</h2>;
}
