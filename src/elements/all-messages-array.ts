import { Message } from './message';
import { decreaseMsgCounter, increaseMsgCounter, messageCounter} from './message-counter';
import { updateNavBar } from './navigation-bar';

let allMessages = JSON.parse(localStorage.getItem('allmessages') || '[]');

export function addMessagesArray() {
    localStorage.clear();

    if (allMessages.length > 0) {
        for (let msgNumber in allMessages) {
            const messageDisplay = document.createElement('div');
            messageDisplay.className = 'messageDisplay';
            messageDisplay.id = `${msgNumber}`;
    
            const messageTitle = document.createElement('p');
            messageTitle.textContent = allMessages[msgNumber].messageTitle.toString();
    
            const messageBody = document.createElement('p');
            messageBody.textContent = allMessages[msgNumber].messageBody.toString();
            messageBody.style.display = "none";
            
            const messageStatus = document.createElement('p');
            messageStatus.textContent = allMessages[msgNumber].isRead.toString();
            messageStatus.style.display = "none";
    
            if (!allMessages[msgNumber].isRead){
                messageDisplay.style.backgroundColor = '#EAF3FA';
                increaseMsgCounter();
            } else {
                messageDisplay.style.backgroundColor = '#FFFFFF';
            }
    
            document.body.appendChild(messageDisplay);
            messageDisplay.appendChild(messageTitle);
            messageDisplay.appendChild(messageBody);
            messageDisplay.appendChild(messageStatus);
        } 
    } else {
        const messageNothing = document.createElement('div');
        messageNothing.textContent = "Nothing here yet";
        document.body.appendChild(messageNothing);
    }
    
}

export function addNewMessage(newMessage: Message) {    
    allMessages.push(newMessage);
    localStorage.setItem('allmessages', JSON.stringify(allMessages));
    updateNavBar();
}

export function addListeners() {
    document.querySelectorAll<HTMLElement>('.messageDisplay').forEach(element => {
        element.addEventListener('click', event => {
            let body = element.children[1];
            
            if (body.style.display === 'none') {
                // body.style = window.getComputedStyle(document.querySelector('.messageDisplay'));
                body.style.display = 'block';
            } else if (body.style.display === 'block') {
                body.style.display = 'none';
            }

            if (!allMessages[element.getAttribute('id')].isRead) {
                allMessages[element.getAttribute('id')].isRead = true;
                element.style.backgroundColor = '#FFFFFF';
                decreaseMsgCounter();
                localStorage.setItem('allmessages', JSON.stringify(allMessages));
            } 
        })
    });
}