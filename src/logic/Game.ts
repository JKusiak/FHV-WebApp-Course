import { action, observable, computed } from "mobx";
import { Deck } from "./Deck";

export class Game {
      @observable deck: Deck;
      @observable score: number;
      @observable index: number = 0;
      @observable isFinished: boolean = false;
      
      constructor() {
            this.deck = new Deck();
            this.score = 0;
      }

      @computed getCurrentCard() {
            return this.deck.deck[this.index];
      }

      @computed flipCard() {
            this.index += 1;
      }
      
      @action compareCards(bet: string) {
            let prevCardValue = parseInt(this.getCurrentCard().value);

            this.flipCard();

            let newCardValue = parseInt(this.getCurrentCard().value);
            console.log(this.getCurrentCard());

            if ((prevCardValue < newCardValue) && bet === "higher") {
                  this.score += 1;
            } else if ((prevCardValue > newCardValue) && bet === "lower") {
                  this.score += 1;
            }
            console.log(this.score);
      }

      @action checkIsFinished(): void {
            if(!this.deck.deck[this.index + 1]) {
                  this.isFinished = true;
            }
            this.isFinished = false;
      }
}