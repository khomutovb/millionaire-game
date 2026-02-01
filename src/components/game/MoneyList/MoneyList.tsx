import styles from "./MoneyList.module.css";
import { MoneyItem } from "@/components/game/MoneyItem/MoneyItem";

export function MoneyList({
  money,
  activeIndex,
}: {
  money: number[];
  activeIndex: number;
}) {
  return (
    <div className={styles.moneyList}>
      {money.map((value, index) => {
        const state =
          index === activeIndex
            ? "active"
            : index < activeIndex
              ? "passed"
              : "inactive";

        return (
          <MoneyItem key={`${value}-${index}`} value={value} state={state} />
        );
      })}
    </div>
  );
}
