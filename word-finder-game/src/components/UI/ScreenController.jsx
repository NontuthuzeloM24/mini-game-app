import { useGameStore } from "../../store/useGameStore";
import StartScreen from "./screens/StartScreen";
import WinScreen from "./screens/WinScreen";
import LoseScreen from "./screens/LoseScreen";
import PauseScreen from "./screens/PauseScreen";
import GameContainer from "../Game/GameContainer";

export default function ScreenController() {
  const state = useGameStore((s) => s.state);

  if (state === "start") return <StartScreen />;
  if (state === "playing") return <GameContainer />;
  if (state === "win") return <WinScreen />;
  if (state === "lose") return <LoseScreen />;
  if (state === "pause") return <PauseScreen />;

  return null;
}