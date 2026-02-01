import styles from "./HeaderButton.module.css";

type HeaderButtonProps = {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export function HeaderButton({
  onClick,
  ariaLabel,
  children,
}: HeaderButtonProps) {
  return (
    <div className={styles.buttonContainer}>
      <button
        type="button"
        onClick={onClick}
        className={styles.button}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
}
