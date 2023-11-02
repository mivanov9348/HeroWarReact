import heroesInit from "../heroes";
import Card from "./Card";

export default function CardsList() {
  return (
    <div className="cardsList">
      <h1 className="cardsTitle">Choose Player 1</h1>
      <hr></hr>
      <div className="cards">
        {heroesInit.map((warrior, index) => (
          <Card key={index} warrior={warrior} />
        ))}
      </div>
      ;
    </div>
  );
}
