import { create } from "zustand";

export const useGameStore = create((set) => ({
  state: "start", // start | playing | win | lose
  level: null,
  foundWords: [],
  score: 0,

  startGame: (levelData) =>
    set({
      state: "playing",
      level: levelData,
      foundWords: [],
      score: 0,
    }),

  addFoundWord: (word) =>
    set((state) => ({
      foundWords: [...state.foundWords, word],
      score: state.score + word.length * 10,
    })),

  winGame: () => set({ state: "win" }),
  loseGame: () => set({ state: "lose" }),
}));