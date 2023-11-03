import { useReducer } from "react";

function randomHealthDamage() {
  let randomDamage = Math.trunc(Math.random() * 99);
  console.log(randomDamage);
  return randomDamage;
}

const initialState = {
  health: 100,
  stats: { attack: 0, defense: 0, speed: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case "attack":
      return {
        ...state,
        health: state.health - action.payload,
      };
    case "heal":
      return { ...state, health: state.health + action.payload };
    default:
      return state;
  }
}

function ActionPanel() {
  const [state, dispatch] = useReducer(reducer, initialState);

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

export default ActionPanel;
