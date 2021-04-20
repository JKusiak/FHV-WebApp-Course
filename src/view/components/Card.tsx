import React from 'react';
import { FC } from 'react';
import club from "../resources/club.png";
import spade from "../resources/spade.png";
import diamond from "../resources/diamond.png";
import heart from "../resources/heart.png";

interface CardProps {
      color: string;
      value: string;
}

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
            <div>
                  <span>{cardValue}</span>
                  <img src={cardImage} alt=""/>
            </div>
      );
}

export default Card;