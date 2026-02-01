import styles from "./AnswerButton.module.css";

export function AnswerButton({
  id,
  text,
  disabled,
  isSelected,
  reveal,
  isCorrect,
  isWrong,
  onClick,
}: {
  id: string;
  text: string;
  disabled: boolean;
  isSelected: boolean;
  reveal: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      data-selected={isSelected}
      data-reveal={reveal}
      data-correct={reveal && isCorrect}
      data-wrong={reveal && isWrong}
      className={styles.answer}
      onClick={onClick}
    >
      <span className={styles.answerBg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 421 72"
        >
          <path stroke="#d0d0d8" d="M404 36h17M0 36h17" />
          <path
            fill="#fff"
            stroke="#d0d0d8"
            d="M49.012.5h322.976c3.619 0 7.027 1.703 9.199 4.598L404.374 36l-23.187 30.902a11.5 11.5 0 0 1-9.199 4.598H49.012a11.5 11.5 0 0 1-9.199-4.598L16.626 36 39.813 5.098A11.5 11.5 0 0 1 49.012.5Z"
          />
        </svg>
      </span>

      <div className={styles.answerText}>
        <span>{id.toUpperCase()}</span>
        {text}
      </div>
    </button>
  );
}
