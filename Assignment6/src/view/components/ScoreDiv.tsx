import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

const StyledScore = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      margin-top: 2em;
`;

interface ScoreProps {
      // why does it have to be declared even without children element to work?
}

const ScoreDiv:FC<ScoreProps> = (props) => {

      return (
            <StyledScore>{props.children}</StyledScore>
      );
}

export default ScoreDiv;