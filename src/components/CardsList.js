import { useReducer } from "react";
import heroesInit from "../heroes";
import Card from "./Card";

const initialState = {
  heroes: heroesInit,
  selectedCards: {},
  chooseHeroes: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "sort":
      const sortBy = action.payload;
      const sortedHeroes = [...state.heroes].sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
      return { ...state, heroes: sortedHeroes };

    case "playerSelect":
      const newSelectedCards = { ...state.selectedCards };
      newSelectedCards[action.payload.index] = true; // assuming true represents a selected card
      return { ...state, selectedCards: newSelectedCards };

    default:
      return state;
  }
}

export default function CardsList({ onSelect }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function selectPlayerCard(card) {
    onSelect(card);
  }

  function handleSort(e) {
    dispatch({ type: "sort", payload: e.target.value });
  }

  return (
    <div className="cardsList">
      <button style={{ float: "right", fontSize: "40px", color: "red" }}>
        &times;
      </button>
      <h1 className="cardsTitle">Choose Heroes</h1>
      <select onChange={handleSort} className="sortCards">
        <option>Sort By</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
        <option value="speed">Speed</option>
      </select>
      <br />
      {!state.chooseHeroes && (
        <div>
          <button>Start</button>
          <button onClick={() => dispatch({ type: "changePlayers" })}>
            Change Players
          </button>
        </div>
      )}
      <hr></hr>
      <div className="cards">
        {state.heroes.map((warrior, index) => (
          <Card
            key={index}
            warrior={warrior}
            onClick={() => selectPlayerCard(warrior)}
            disabled={!!state.selectedCards[index]}
          />
        ))}
      </div>
      ;
    </div>
  );
}
