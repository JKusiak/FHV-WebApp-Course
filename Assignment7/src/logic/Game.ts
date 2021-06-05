import { action, observable, computed, makeObservable } from "mobx";
import { Deck } from "./Deck";

export class Game {
      deck: Deck;
      @observable score: number;
      @observable index: number = 0;
      @observable isFinished: boolean = false;
      
      constructor() {
            this.deck = new Deck();
            this.score = 0;
            makeObservable(this);
      }

      flipCard() {
            this.index += 1;
      }

      @computed get getCurrentCard() {
            return this.deck.deck[this.index];
      }

      @action compareCards(bet: string) {
            let prevCardValue = parseInt(this.getCurrentCard.value);

            this.flipCard();

            let newCardValue = parseInt(this.getCurrentCard.value);

            if ((prevCardValue < newCardValue) && bet === "higher") {
                  this.score += 1;
            } else if ((prevCardValue > newCardValue) && bet === "lower") {
                  this.score += 1;
            }
         
      }

      @action checkIsFinished(): void {
            if(!this.deck.deck[this.index + 1]) {
                  this.isFinished = true;
            }
            this.isFinished = false;
      }
}