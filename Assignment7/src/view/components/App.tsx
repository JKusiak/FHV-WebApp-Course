import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Game } from "../../logic/Game";
import Card from './Card';
import NextButton from './NextButton';
import ScoreDiv from './ScoreDiv';
import { observer } from 'mobx-react-lite';
import { autorun } from 'mobx';


let game = new Game();


autorun(() => {console.log(
  "Current card: "
  + game.getCurrentCard.value
  + " of "
  + game.getCurrentCard.color)
});

  autorun(() => {console.log(
    "Point gained! Current score: "
    + game.score)
  });


const App = () => {

  return (
    <>
      <GlobalStyle/>
      <Card color={game.getCurrentCard.color} value={game.getCurrentCard.value}></Card>
      <ButtonWrapper>
        <NextButton disabled={game.isFinished} onClick={() => game.compareCards("higher")}>Higher</NextButton>
        <NextButton disabled={game.isFinished} onClick={() => game.compareCards("lower")}>Lower</NextButton>
      </ButtonWrapper>
      {!game.isFinished && <ScoreDiv>Current score: {game.score}</ScoreDiv>}
      {game.isFinished && <ScoreDiv>Game over, your final score is {game.score}</ScoreDiv>}
    </>
  );
}; 


const ButtonWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`;

export default observer(App);

