import React, { useState } from 'react';
import styled from 'styled-components';
import { Game } from "../../logic/Game";
import { GlobalStyle } from '../styles/GlobalStyle';
import Card from './Card';
import NextButton from './NextButton';
import ScoreDiv from './ScoreDiv';


let game = new Game();

const ButtonWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`;


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
      <GlobalStyle/>
      <Card color={cardColor} value={cardValue}></Card>
      <ButtonWrapper>
        <NextButton disabled={isDisabled} onClick={() => moveToNext("higher")}>Higher</NextButton>
        <NextButton disabled={isDisabled} onClick={() => moveToNext("lower")}>Lower</NextButton>
      </ButtonWrapper>
      {!isDisabled && <ScoreDiv>Current score: {score}</ScoreDiv>}
      {isDisabled && <ScoreDiv>Game over, your final score is {score}</ScoreDiv>}
    </>
  );
}

export default App;
