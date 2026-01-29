"use client";

import { useMemo, useState } from "react";

import { gameConfig } from "@/game/config";
import { answerQuestion, startGame } from "@/game/state";
import Image from "next/image";

export default function GamePage() {
  const { questions, money } = useMemo(() => gameConfig, []);
  const [state, setState] = useState(() => startGame());

  const question = questions[state.questionIndex];

  if (state.status === "finished") {
    return (
      <main>
        <div>
          <Image
            src="/hand-icon.svg"
            alt="Thumbs up illustration"
            width={624}
            height={367}
          />
        </div>
        <div>
          <p>Total score:</p>
          <p>${state.earned.toLocaleString()} earned</p>
          <button type="button" onClick={() => setState(startGame())}>
            Try again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h2>{question.text}</h2>
        <div>
          {question.answers.map((answer) => (
            <button
              key={answer.id}
              data-selected={state.selectedAnswerIds.includes(answer.id)}
              onClick={() =>
                setState(
                  answerQuestion({
                    state,
                    questions,
                    money,
                    answerId: answer.id,
                  }),
                )
              }
            >
              <span>{answer.id.toUpperCase()}</span> {answer.text}
            </button>
          ))}
        </div>
      </div>
      <div>
        {money.map((item) => (
          <div key={item}>${item.toLocaleString()}</div>
        ))}
      </div>
    </main>
  );
}
