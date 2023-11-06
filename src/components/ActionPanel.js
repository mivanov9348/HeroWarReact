// ActionPanel.js
import React from "react";

export default function ActionPanel({ dispatch }) {
  return (
    <div className="control-panel">
      <button
        onClick={() =>
          dispatch({ type: "attack", payload: randomHealthDamage() })
        }
      >
        Attack
      </button>
      <button onClick={() => dispatch({ type: "heal", payload: 10 })}>
        Heal
      </button>
      <button onClick={() => dispatch({ type: "increase_attack", payload: 1 })}>
        Increase Attack
      </button>
      <button
        onClick={() => dispatch({ type: "increase_defense", payload: 1 })}
      >
        Increase Defense
      </button>
      <button onClick={() => dispatch({ type: "increase_speed", payload: 1 })}>
        Increase Speed
      </button>
    </div>
  );
}

function randomHealthDamage() {
  return Math.floor(Math.random() * 99);
}
