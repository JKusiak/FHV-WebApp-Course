import React from 'react';
import { FC } from 'react';
import club from "../resources/club.png";
import spade from "../resources/spade.png";
import diamond from "../resources/diamond.png";
import heart from "../resources/heart.png";
import styled from 'styled-components';

interface CardProps {
      color: string;
      value: string;
}

const StyledCardValue = styled.span`
      font-size: 175px;
      font-weight: 600;
      margin-right: 0.1em;
`;

const StyledCardColor = styled.img`
      max-width: 140px;
`;

const CardWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`;

const Card:FC<CardProps> = (props) => {
     
      let cardImage;
      let cardValue;

      switch(props.color) {
            case "Clubs":
                  cardImage = club;
                  break;
            case "Spades":
                  cardImage = spade;
                  break;
            case "Hearts":
                  cardImage = heart;
                  break;
            case "Diamonds":
                  cardImage = diamond;
                  break;
      }

      switch(props.value) {
            case "11":
                  cardValue = "J";
                  break;
            case "12":
                  cardValue = "Q";
                  break;
            case "13":
                  cardValue = "K";
                  break;
            case "1":
                  cardValue = "A";
                  break;
            default:
                  cardValue = props.value;
                  break;
      }

      return (
            <CardWrapper className="Card">
                  <StyledCardValue>{cardValue}</StyledCardValue>
                  <StyledCardColor src={cardImage} alt=""/>
            </CardWrapper>
      );
}

export default Card;