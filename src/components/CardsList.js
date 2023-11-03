import { useReducer } from "react";
import heroesInit from "../heroes";
import Card from "./Card";

const initialState = {
  heroes: heroesInit,
  selectedCards: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "sort":
      const sortBy = action.payload;
      const sortedHeroes = [...state].sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
      return sortedHeroes;
    case "selectCard":
      const selectedCards = {
        ...state.selectedCards,
        [action.payload]: true,
      };
      return { ...state, selectedCards };
    default:
      return state;
  }
}

export default function CardsList({ onGameStart }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSort(e) {
    dispatch({ type: "sort", payload: e.target.value });
  }

  function selectCard(index) {
    dispatch({ type: "selectCard", payload: index });
  }

  return (
    <div className="cardsList">
      <button
        style={{ float: "right", fontSize: "40px", color: "red" }}
        onClick={onGameStart}
      >
        &times;
      </button>
      <h1 className="cardsTitle">Choose Heroes</h1>
      <select onChange={handleSort} className="sortCards">
        <option>Sort By</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
        <option value="speed">Speed</option>
      </select>
      <hr></hr>
      <div className="cards">
        {state.heroes.map((warrior, index) => (
          <Card
            key={index}
            warrior={warrior}
            onClick={() => selectCard(index)}
            disabled={!!state.selectedCards[index]}
          />
        ))}
      </div>
      ;
    </div>
  );
}
