import { describe, it, expect } from "vitest";
import { startGame } from "./state";

describe("startGame", () => {
  it("sets status to question", () => {
    expect(startGame().status).toBe("question");
  });
});