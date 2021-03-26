import { Observable } from "./observable";

export let messageCounter = new Observable();

export function addMsgDisplay() {
    const unreadMsgDisplay = document.createElement("div");
    unreadMsgDisplay.className = "messageCounter";
    document.body.appendChild(unreadMsgDisplay);

    navBarObserver();
    msgDisplayObserver();

    messageCounter.notify(messageCounter.value);
}

export function navBarObserver() {
    const navBarDisplay = document.querySelector(".allMessages");  

    const updateNavBar = (text: string) => {
        if (<unknown>text > 5) {
            navBarDisplay.textContent = `Messages(5+)`;
        } else if (<unknown>text <= 5 && <unknown>text > 0) {
            navBarDisplay.textContent = `Messages(${text})`;
        } else {
            navBarDisplay.textContent = `Messages`;
        }
    }
    messageCounter.subscribe(updateNavBar);   
}

export function msgDisplayObserver() {
    const unreadMsgDisplay = document.querySelector(".messageCounter");

    const updateMsgDisplay = (text: string) => {
        unreadMsgDisplay.textContent = `You have ${text} unread messages`;
        
        if (<unknown>text > 0) {
                unreadMsgDisplay.style.color = "#FF0000";
        } else {
                unreadMsgDisplay.style.color = "#000000";
        }
    }
    messageCounter.subscribe(updateMsgDisplay);
}

export function increaseMsgCounter() {
    messageCounter.value += 1;
    messageCounter.notify(messageCounter.value);
}

export function decreaseMsgCounter() {
    messageCounter.value -= 1;
    messageCounter.notify(messageCounter.value);
}   
