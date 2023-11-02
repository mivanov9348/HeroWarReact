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

export default function Card({ warrior }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <div class="card">
        <div class="card-header">
          <img
            src={`./images/${warrior.image}`}
            alt="hero"
            clasName="hero-image"
          />
        </div>
        <div class="card-body">
          <h1 class="hero-name">{warrior.name}</h1>
          <div class="health-bar-container">
            <div class="health-bar" style={{ width: state.health + "%" }}>
              {state.health} 🩸
            </div>
          </div>
          <div class="stats">
            <div class="stat-item">
              <span className="stat-value">⚔: {warrior.attack} </span>
            </div>
            <div class="stat-item">
              <span className="stat-value">🛡: {warrior.defense} </span>
            </div>
            <div class="stat-item">
              <span className="stat-value">💨: {warrior.speed} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
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
  <button
    onClick={() => dispatch({ type: "increase_attack", payload: 1 })}
  >
    Increase Attack
  </button>
  <button
    onClick={() => dispatch({ type: "increase_defense", payload: 1 })}
  >
    Increase Defense
  </button>
  <button
    onClick={() => dispatch({ type: "increase_speed", payload: 1 })}
  >
    Increase Speed
  </button>
</div>*/
