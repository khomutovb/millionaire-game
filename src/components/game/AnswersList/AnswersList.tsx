import type { Question } from "@/game/types";
import { AnswerButton } from "@/components/game/AnswerButton/AnswerButton";
import styles from "./AnswersList.module.css";

export function AnswersList({
  answers,
  isLocked,
  selectedAnswerIds,
  correctIds,
  reveal,
  onAnswerClick,
}: {
  answers: Question["answers"];
  isLocked: boolean;
  selectedAnswerIds: string[];
  correctIds: string[];
  reveal: boolean;
  onAnswerClick: (answerId: string) => void;
}) {
  return (
    <div className={styles.answers}>
      {answers.map((answer) => (
        <AnswerButton
          key={answer.id}
          id={answer.id}
          text={answer.text}
          disabled={isLocked}
          isSelected={selectedAnswerIds.includes(answer.id)}
          reveal={reveal}
          isCorrect={correctIds.includes(answer.id)}
          isWrong={
            selectedAnswerIds.includes(answer.id) &&
            !correctIds.includes(answer.id)
          }
          onClick={() => onAnswerClick(answer.id)}
        />
      ))}
    </div>
  );
}
