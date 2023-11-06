// App.js
import React, { useReducer } from "react";
import Card from "./Card";
import ActionPanel from "./ActionPanel";
import heroesInit from "../heroes";
import CardsList from "./CardsList";

const initialState = {
  heroes: heroesInit,
  choosenHero: null,
  message: "",
};

function randomDamage(attack, defense) {
  let sum = attack + defense + 100;
  let randomDamage = Math.floor(Math.random() * sum);
  return randomDamage;
}

function reducer(state, action) {
  switch (action.type) {
    case "chooseHero":
      return { ...state, choosenHero: action.payload };

    case "resetHero":
      return { ...state, choosenHero: null };

    case "attack":
      return {
        ...state,
        message: `${state.choosenHero.name} attack and take ${randomDamage(
          state.choosenHero.attack,
          state.choosenHero.defense
        )} damage!`,
      };

    case "heal":
      return {
        ...state,
        choosenHero: {
          ...state.choosenHero,
          health: Math.min(400, state.choosenHero.health + action.payload),
        },
      };

    case "increase_attack":
      return {
        ...state,
        choosenHero: {
          ...state.choosenHero,
          attack: state.choosenHero.attack + action.payload,
        },
      };

    case "increase_defense":
      return {
        ...state,
        choosenHero: {
          ...state.choosenHero,
          defense: state.choosenHero.defense + action.payload,
        },
      };

    case "increase_speed":
      return {
        ...state,
        choosenHero: {
          ...state.choosenHero,
          speed: state.choosenHero.speed + action.payload,
        },
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChooseHero = (hero) => {
    dispatch({ type: "chooseHero", payload: hero });
  };

  return (
    <div>
      {state.choosenHero === null && <CardsList onChoose={handleChooseHero} />}

      {state.choosenHero != null && (
        <div style={{ textAlign: "center" }}>
          <button onClick={() => dispatch({ type: "resetHero" })}>Back</button>
          <Card warrior={state.choosenHero} />
          <p style={{ color: "red", fontWeight: "bolder" }}>{state.message}</p>
          <ActionPanel dispatch={dispatch} />
        </div>
      )}
    </div>
  );
}
