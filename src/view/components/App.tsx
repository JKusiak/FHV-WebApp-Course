import React, { useState } from 'react';
import { Game } from "../../logic/Game";

let game = new Game();
let currentCard = game.getCurrentCard();

function App() {
  const [score, setScore] = useState(game.score);
  const [cardValue, setCardValue] = useState(currentCard.value);
  const [cardColor, setCardColor] = useState(currentCard.color);

  return (
    <div className="App">
      <div>{score}</div>
      <div>{cardValue}</div>
      <div>{cardColor}</div>
    </div>
  );
}

export default App;
