import type { Question } from "./types";

export type GameState = {
  status: "idle" | "question" | "checking" | "finished";
  questionIndex: number;
  earned: number;
  selectedAnswerIds: string[];
  lastAnswerCorrect?: boolean;
};

export const initialGameState: GameState = {
  status: "idle",
  questionIndex: 0,
  earned: 0,
  selectedAnswerIds: [],
};

export function startGame(): GameState {
  return { ...initialGameState, status: "question" };
}

export function answerQuestion(params: {
  state: GameState;
  questions: Question[];
  money: number[];
  answerId: string;
}): GameState {
  const { state, questions, answerId } = params;

  const question = questions[state.questionIndex];
  if (!question) return { ...state, status: "finished" };

  if (state.status !== "question") return state;

  const correctIds = question.answers
    .filter((answer) => answer.isCorrect)
    .map((answer) => answer.id);

  const isSelected = state.selectedAnswerIds.includes(answerId);

  const nextSelectedAnswerIds = isSelected
    ? state.selectedAnswerIds.filter((id) => id !== answerId)
    : [...state.selectedAnswerIds, answerId];

  if (nextSelectedAnswerIds.length !== correctIds.length) {
    return { ...state, selectedAnswerIds: nextSelectedAnswerIds };
  }

  const isCorrect = correctIds.every((id) =>
    nextSelectedAnswerIds.includes(id),
  );

  return {
    ...state,
    selectedAnswerIds: nextSelectedAnswerIds,
    status: "checking",
    lastAnswerCorrect: isCorrect,
  };
}
