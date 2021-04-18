import { Card } from "./Card";
import { Color } from "./Color";
import { Figure } from "./Figure";

export class Deck {
        deck: Array<Card>;

        constructor() {
                this.deck = [];

                for (let color in Object.values(Color)) {
                        for (let figure in Object.values(Figure)) {
                                let nextCard = new Card(figure, color);
                                this.deck.push(nextCard);
                        }
                }

                this.shuffle();
        }

        shuffle() {
                for (let i = this.deck.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * i);
                        let temp = this.deck[i];
                        this.deck[i] = this.deck[j];
                        this.deck[j] = temp;
                    }
        }
}