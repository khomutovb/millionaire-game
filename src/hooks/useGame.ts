"use client";

import { useState } from "react";
import { gameConfig } from "@/game/config";
import { answerQuestion, startGame } from "@/game/state";
import { useCheckingFlow } from "./useCheckingFlow";

export function useGame() {
  const { questions, money } = gameConfig;

  const [state, setState] = useState(() => startGame());
  const [reveal, setReveal] = useState(false);

  const question = questions[state.questionIndex];

  const correctIds = question
    ? question.answers
        .filter((answer) => answer.isCorrect)
        .map((answer) => answer.id)
    : [];

  useCheckingFlow({ state, money, questions, setReveal, setState });

  const onTryAgain = () => {
    setReveal(false);
    setState(startGame());
  };

  const onAnswerClick = (answerId: string) => {
    setState((prev) =>
      answerQuestion({ state: prev, questions, money, answerId }),
    );
  };

  return {
    money,
    state,
    reveal,
    question,
    correctIds,
    onTryAgain,
    onAnswerClick,
  };
}
