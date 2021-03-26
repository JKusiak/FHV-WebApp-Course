import { addNewMessage } from "./all-messages-array";
import { Message } from "./message";

export function addMessageForm() {
    const formWrapper = document.createElement("div");
    formWrapper.className = "formWrapper";
    
    const messageForm = document.createElement("form");
    messageForm.id = "messageform";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.name = "messageTitle";
    titleInput.placeholder = "Title";

    const bodyInput = document.createElement("input");
    bodyInput.type = "text";
    bodyInput.name = "messageBody";
    bodyInput.placeholder = "Message";

    const submitButton = document.createElement("button");
    submitButton.id = "submitMessageBtn";
    submitButton.textContent = "Send";

    document.body.appendChild(formWrapper);
    formWrapper.appendChild(messageForm);
    messageForm.appendChild(titleInput);
    messageForm.appendChild(bodyInput); 
    messageForm.appendChild(submitButton);

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(messageForm);

        const newMessage = new Message(formData.get("messageTitle").toString(),
                                        formData.get("messageBody").toString(),
                                        false);

        addNewMessage(newMessage);
        messageForm.reset();
    })
}