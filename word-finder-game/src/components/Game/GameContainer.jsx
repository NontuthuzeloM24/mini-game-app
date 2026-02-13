import { useGameStore } from "../../store/useGameStore";
import Header from "../UI/Header";
import CrosswordGrid from "./CrosswordGrid";
import LetterWheel from "./LetterWheel";
import ConnectionLine from "./ConnectionLine";

export default function GameContainer() {
  const level = useGameStore((s) => s.level);

  if (!level) return null;

  return (
    <div className="flex flex-col items-center h-full p-6 gap-6">
      <Header />

      <CrosswordGrid words={level.words} />

      <div className="relative">
        <LetterWheel letters={level.letters} />
        <ConnectionLine />
      </div>
    </div>
  );
}