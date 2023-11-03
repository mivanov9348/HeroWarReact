import { useReducer } from "react";
import heroesInit from "../heroes";
import Card from "./Card";

function reducer(state, action) {
  switch (action.type) {
    case "sort":
      const sortBy = action.payload;
      const sortedHeroes = [...state].sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
      return sortedHeroes;
    default:
      return state;
  }
}

export default function CardsList() {
  const [state, dispatch] = useReducer(reducer, heroesInit);

  function handleSort(e) {
    dispatch({ type: "sort", payload: e.target.value });
  }

  return (
    <div className="cardsList">
      <h1 className="cardsTitle">Choose Heroes</h1>
      <select onChange={handleSort}>
        <option>Sort By</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
        <option value="speed">Speed</option>
      </select>
      <hr></hr>
      <div className="cards">
        {state.map((warrior, index) => (
          <Card key={index} warrior={warrior} />
        ))}
      </div>
      ;
    </div>
  );
}
