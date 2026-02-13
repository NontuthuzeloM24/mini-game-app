import { getLevels } from "../../../api/levels.api";
import { useGameStore } from "../../../store/useGameStore";

export default function StartScreen() {
  const startGame = useGameStore((s) => s.startGame);

  const handleStart = async () => {
    try {
      const levels = await getLevels();
      startGame(levels[0]);
    } catch (error) {
      console.error("Failed to fetch levels:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h1 className="text-3xl font-bold">Word Finder</h1>
      <button
        onClick={handleStart}
        className="px-6 py-3 bg-blue-600 rounded-lg"
      >
        Start Game
      </button>
    </div>
  );
}