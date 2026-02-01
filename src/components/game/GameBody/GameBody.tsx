import styles from "./GameBody.module.css";
import { QuestionTitle } from "@/components/game/QuestionTitle/QuestionTitle";
import { AnswersList } from "@/components/game/AnswersList/AnswersList";
import type { Question } from "@/game/types";
import { HeaderButton } from "../HeaderButton/HeaderButton";

export function GameBody({
  question,
  isLocked,
  reveal,
  selectedAnswerIds,
  correctIds,
  onAnswerClick,
  onOpenMenu,
}: {
  question: Question;
  isLocked: boolean;
  reveal: boolean;
  selectedAnswerIds: string[];
  correctIds: string[];
  onAnswerClick: (answerId: string) => void;
  onOpenMenu: () => void;
}) {
  return (
    <section className={styles.bodyGame}>
      <div className={styles.bodyContainer}>
        <HeaderButton
          onClick={onOpenMenu}
          ariaLabel="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#1c1c21"
              d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M5 17a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
            />
          </svg>
        </HeaderButton>

        <QuestionTitle text={question.text} />

        <AnswersList
          answers={question.answers}
          isLocked={isLocked}
          selectedAnswerIds={selectedAnswerIds}
          correctIds={correctIds}
          reveal={reveal}
          onAnswerClick={onAnswerClick}
        />
      </div>
    </section>
  );
}
