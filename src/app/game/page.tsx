"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { FinishScreen } from "@/components/game/FinishScreen/FinishScreen";
import { useGame } from "@/hooks/useGame";
import { GameBody } from "@/components/game/GameBody/GameBody";
import { Sidebar } from "@/components/game/Sidebar/Sidebarr";

export default function GamePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    money,
    state,
    reveal,
    question,
    correctIds,
    onTryAgain,
    onAnswerClick,
  } = useGame();

  if (state.status === "finished") {
    return <FinishScreen earned={state.earned} onTryAgain={onTryAgain} />;
  }

  if (!question) return null;

  return (
    <main className={styles.page}>
      <GameBody
        question={question}
        isLocked={state.status !== "question"}
        reveal={reveal}
        selectedAnswerIds={state.selectedAnswerIds}
        correctIds={correctIds}
        onAnswerClick={onAnswerClick}
        onOpenMenu={() => setIsSidebarOpen(true)}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        money={money}
        activeIndex={state.questionIndex}
      />
    </main>
  );
}
