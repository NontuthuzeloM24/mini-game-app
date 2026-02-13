import { useEffect } from "react";
import { getLevels } from "./api/levels.api";

function App() {
  useEffect(() => {
    getLevels()
      .then(data => console.log("Levels:", data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-900 text-white flex items-center justify-center">
      Word Finder Game
    </div>
  );
}

export default App;

