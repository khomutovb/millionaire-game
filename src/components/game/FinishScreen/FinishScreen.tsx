import { ScreenCard } from "@/components/game/ScreenCard/ScreenCard";

import { formatCurrency } from "@/utils/formatCurrency";

type Props = {
  earned: number;
  onTryAgain: () => void;
};

export function FinishScreen({ earned, onTryAgain }: Props) {
  return (
    <ScreenCard
      imageSrc="/hand-icon.svg"
      imageAlt="Result illustration"
      subtitle="Total score:"
      title={`${formatCurrency(earned)} earned`}
      action={{ kind: "button", onClick: onTryAgain, label: "Try again" }}
    />
  );
}
