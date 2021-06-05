import { Deck } from "./Deck";

export class Game {
      deck: Deck;
      score: number;
      index: number = 0;
      
      constructor() {
            this.deck = new Deck();
            this.score = 0;
      }

      compareCards(bet: string) {
            let prevCardValue = parseInt(this.getCurrentCard().value);

            this.flipCard();

            let newCardValue = parseInt(this.getCurrentCard().value);

            if ((prevCardValue < newCardValue) && bet === "higher") {
                  this.score += 1;
            } else if ((prevCardValue > newCardValue) && bet === "lower") {
                  this.score += 1;
            }
      }


      getCurrentCard() {
            return this.deck.deck[this.index];
      }

      flipCard() {
            this.index += 1;
      }

      getScore() {
            return this.score;
      }

      isFinished(): boolean {
            if(!this.deck.deck[this.index + 1]) {
                  return true;
            }
            return false;
      }
}