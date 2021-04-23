import { observable } from "mobx";

export class Card {
        @observable value: string;
        @observable color: string;

        constructor(val: string, color: string) {
                this.value = val;
                this.color = color;
        }
}