export class Message {
    messageTitle: string;
    messageBody: string;
    isRead: boolean;

    constructor (msgTitle: string, msgBody: string, isRead: boolean) {
        this.messageTitle = msgTitle;
        this.messageBody = msgBody;
        this.isRead = isRead;
    }
}
