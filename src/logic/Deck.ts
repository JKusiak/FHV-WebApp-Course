import { action, makeObservable, observable } from "mobx";
import { Card } from "./Card";
import { Color } from "./Color";
import { Figure } from "./Figure";

export class Deck {
        @observable deck: Array<Card>;

        constructor() {
                this.deck = [];

                const figures = Object.values(Figure);
                const colors = Object.values(Color);

                colors.forEach((color) => {
                        figures.forEach((figure) => {
                                let nextCard = new Card(figure, color);
                                this.deck.push(nextCard);
                        })
                })

                this.shuffle();
                makeObservable(this);
        }

        @action shuffle() {
                for (let i = this.deck.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * i);
                        let temp = this.deck[i];
                        this.deck[i] = this.deck[j];
                        this.deck[j] = temp;
                    }
        }
}