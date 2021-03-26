import { addNewMessage } from "./all-messages-array";
import { Message } from "./message";

export function addMessageForm() {
    const messageForm = document.createElement("form");
    messageForm.id = "messageform";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.name = "Message title";

    const bodyLabel = document.createElement("label");
    bodyLabel.textContent = "Message";

    const bodyInput = document.createElement("input");
    bodyInput.type = "text";
    bodyInput.name = "Message body";

    const submitButton = document.createElement("button");
    submitButton.textContent = "Send";

    document.body.appendChild(messageForm);
    messageForm.appendChild(titleLabel);
    messageForm.appendChild(titleInput);
    messageForm.appendChild(bodyLabel);
    messageForm.appendChild(bodyInput); 
    messageForm.appendChild(submitButton);

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(messageForm);

        const newMessage = new Message(formData.get("Message title").toString(),
                                        formData.get("Message body").toString(),
                                        false);

        addNewMessage(newMessage);
        messageForm.reset();
    })
}