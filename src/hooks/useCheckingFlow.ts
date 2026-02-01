import { useEffect } from "react";
import type { GameState } from "@/game/state";
import type { Question } from "@/game/types";

type Params = {
  state: GameState;
  money: number[];
  questions: Question[];
  setReveal: (v: boolean) => void;
  setState: React.Dispatch<React.SetStateAction<GameState>>;
};

export function useCheckingFlow({
  state,
  money,
  questions,
  setReveal,
  setState,
}: Params) {
  useEffect(() => {
    if (state.status !== "checking") return;

    const timeoutReveal = setTimeout(() => setReveal(true), 1000);

    const timeoutStatusCheck = setTimeout(() => {
      if (!state.lastAnswerCorrect) {
        setState((prev) => ({ ...prev, status: "finished" }));
        return;
      }

      setState((prev) => {
        const nextQuestionIndex = prev.questionIndex + 1;
        const nextEarned = money[prev.questionIndex] ?? prev.earned;
        const hasNextQuestion = Boolean(questions[nextQuestionIndex]);

        return {
          ...prev,
          questionIndex: nextQuestionIndex,
          earned: nextEarned,
          selectedAnswerIds: [],
          lastAnswerCorrect: undefined,
          status: hasNextQuestion ? "question" : "finished",
        };
      });

      setReveal(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutReveal);
      clearTimeout(timeoutStatusCheck);
    };
  }, [
    state.status,
    state.lastAnswerCorrect,
    money,
    questions,
    setReveal,
    setState,
  ]);
}
