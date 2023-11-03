import { useState } from "react";
import CardsList from "./CardsList";
import StartScreen from "./StartScreen";

export default function App() {
  const [newGame, setNewGame] = useState(false);

  return (
    <div>
      {!newGame && (
        <div className="startScreen">
          <StartScreen onGameStart={() => setNewGame(true)} />
        </div>
      )}
      {newGame && <CardsList onGameStart={() => setNewGame(false)} />}
    </div>
  );
}
