import { useEffect, useState } from "react";
import CrosswordGrid from "./CrosswordGrid";
import LetterWheel from "./LetterWheel";
import ConnectionLine from "./ConnectionLine";

import StartScreen from "../UI/screens/StartScreen";
import WinScreen from "../UI/screens/WinScreen";
import LoseScreen from "../UI/screens/LoseScreen";
import PauseScreen from "../UI/screens/PauseScreen";

import Header from "../UI/Header";
import Feedback from "../UI/Feedback";

export default function GameContainer() {
  const [gameState, setGameState] = useState("start"); 
  // start | playing | paused | won | lost

  const [puzzle, setPuzzle] = useState(null);
  const [selectedLetters, setSelectedLetters] = useState([]);

  useEffect(() => {
    if (gameState === "playing") {
      fetchPuzzle();
    }
  }, [gameState]);

  async function fetchPuzzle() {
    try {
      const response = await fetch("http://localhost:3000/api/puzzle");
      const data = await response.json();
      setPuzzle(data);
    } catch (error) {
      console.error("Failed to fetch puzzle:", error);
    }
  }

  function startGame() {
    setGameState("playing");
  }

  function pauseGame() {
    setGameState("paused");
  }

  function resumeGame() {
    setGameState("playing");
  }

  function winGame() {
    setGameState("won");
  }

  function loseGame() {
    setGameState("lost");
  }

  return (
    <div>
      <Header />

      {gameState === "start" && <StartScreen onStart={startGame} />}
      {gameState === "paused" && <PauseScreen onResume={resumeGame} />}
      {gameState === "won" && <WinScreen />}
      {gameState === "lost" && <LoseScreen />}

      {gameState === "playing" && puzzle && (
        <>
          <CrosswordGrid words={puzzle.words} />
          <LetterWheel
            letters={puzzle.letters}
            selectedLetters={selectedLetters}
            setSelectedLetters={setSelectedLetters}
          />
          <ConnectionLine selectedLetters={selectedLetters} />
          <Feedback />
        </>
      )}
    </div>
  );
}