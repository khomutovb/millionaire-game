import styles from "./MoneyItem.module.css";

import { formatCurrency } from "@/utils/formatCurrency";

type MoneyItemState = "inactive" | "active" | "passed";

export function MoneyItem({
  value,
  state,
}: {
  value: number;
  state: MoneyItemState;
}) {
  const formatted = formatCurrency(value);
  return (
    <div
      className={`${styles.moneyItem} ${styles[state] ? styles[state] : ""}`}
    >
      <span className={styles.moneyItemBg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 376 40"
        >
          <path
            fill="#fff"
            stroke="#d0d0d8"
            d="M90.287.5h195.426a11.5 11.5 0 0 1 8.835 4.138L307.349 20l-12.801 15.362a11.5 11.5 0 0 1-8.835 4.138H90.287c-3.413 0-6.65-1.516-8.835-4.138L68.65 20 81.452 4.638A11.5 11.5 0 0 1 89.968.505z"
          />
        </svg>
      </span>
      <p className={styles.moneyText}>{formatted}</p>
    </div>
  );
}
