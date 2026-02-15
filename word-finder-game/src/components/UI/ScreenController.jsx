import StartScreen from "./screens/StartScreen"
import WinScreen from "./screens/WinScreen"
import LoseScreen from "./screens/LoseScreen"
import PauseScreen from "./screens/PauseScreen"

export default function ScreenController({ gameState, onStart }) {
  switch (gameState) {
    case "start":
      return <StartScreen onStart={onStart} />
    case "won":
      return <WinScreen />
    case "lost":
      return <LoseScreen />
    case "paused":
      return <PauseScreen />
    default:
      return null
  }
}