import React, { useState } from 'react';
import { Game } from "../../logic/Game";
import Card from './Card';
import NextButton from './NextButton';

let game = new Game();

function App() {
  const [score, setScore] = useState(game.getScore());
  const [cardValue, setCardValue] = useState(game.getCurrentCard().value);
  const [cardColor, setCardColor] = useState(game.getCurrentCard().color);
  const [isDisabled, setIsDisabled] = useState(false);


  function moveToNext(bet: string) {
    if(!game.isFinished()) {
      game.compareCards(bet);
    } else {
      setIsDisabled(true);
    }

    setScore(game.getScore());
    setCardValue(game.getCurrentCard().value);
    setCardColor(game.getCurrentCard().color);
  }

  return (
    <>
      <Card color={cardColor} value={cardValue}></Card>
      {!isDisabled && <div>{score}</div>}
      <NextButton disabled={isDisabled} onClick={() => moveToNext("higher")}>Higher</NextButton>
      <NextButton disabled={isDisabled} onClick={() => moveToNext("lower")}>Lower</NextButton>
      {isDisabled && <p>Game over, your final score is {score}</p>}
    </>
  );
}

export default App;
