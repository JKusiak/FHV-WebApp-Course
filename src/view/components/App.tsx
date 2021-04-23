import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Game } from "../../logic/Game";
import Card from './Card';
import NextButton from './NextButton';
import ScoreDiv from './ScoreDiv';
import { observer } from 'mobx-react-lite';
import { autorun } from 'mobx';

const ButtonWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`;

let game = new Game();

autorun(() => {console.log(game.isFinished)});

autorun(() => {console.log(game.deck)});

export const App = observer(() => {
  // const [score, setScore] = useState(game.getScore());
  // const [cardValue, setCardValue] = useState(game.getCurrentCard().value);
  // const [cardColor, setCardColor] = useState(game.getCurrentCard().color);
  // const [isDisabled, setIsDisabled] = useState(false);


  // function moveToNext(bet: string) {
  //   if(!game.isFinished) {
  //     game.compareCards(bet);
    // } else {

    // }

    // setScore(game.getScore());
    // setCardValue(game.getCurrentCard().value);
    // setCardColor(game.getCurrentCard().color);
  // }

  return (
    <>
      <GlobalStyle/>
      <Card color={game.getCurrentCard().color} value={game.getCurrentCard().value}></Card>
      <ButtonWrapper>
        <NextButton disabled={game.isFinished} onClick={() => game.compareCards("higher")}>Higher</NextButton>
        <NextButton disabled={game.isFinished} onClick={() => game.compareCards("lower")}>Lower</NextButton>
      </ButtonWrapper>
      {!game.isFinished && <ScoreDiv>Current score: {game.score}</ScoreDiv>}
      {game.isFinished && <ScoreDiv>Game over, your final score is {game.score}</ScoreDiv>}
    </>
  );
})


