import * as React from "react";
import "./Message.css"
import {ChatMessage} from "../App";

interface MessageProps {
    message: ChatMessage;
    onDeleteClick: (messageId: string) => void;
    onEditClick: (messageId: string, newText: string) => void;
}

interface MessageState {
}

export class Message extends React.Component<MessageProps, MessageState> {
    constructor(props: MessageProps) {
        super(props);
    }

    handleEditClick = (id: string, oldText: string) => {
        const newText = prompt("Your new message:", oldText);
        if (newText !== null && newText.length > 0) {
            this.props.onEditClick(id, newText);
        }
    }

    handleDeleteClick = (id: string) => {
        if (confirm("Are you sure you want to delete this item?")) {
            this.props.onDeleteClick(id);
        }
    }

    getFormattedDateText(date: Date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    getFormattedTimeText(date: Date) {
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    render() {
        return (
            <div className={"Message__root"}>
                <div className={"Message__body"}>
                    <div className={"Message__initials"}>{this.props.message.createdBy}</div>
                    <div className={"Message__messageContainer"}>
                        <div className={"Message__triangle"}/>
                        <div className={"Message__content"}>
                            <div className={"Message__text"}>{this.props.message.text}</div>
                            <div
                                className={"Message__editIcon"}
                                onClick={() => this.handleEditClick(this.props.message.id, this.props.message.text)}
                            />
                            <div
                                className={"Message__XIcon"}
                                onClick={() => this.handleDeleteClick(this.props.message.id)}
                            />
                        </div>
                    </div>
                </div>
                <div className={"Message__footer"}>
                    {this.getFormattedDateText(this.props.message.createdAt)} {this.getFormattedTimeText(this.props.message.createdAt)}
                </div>
            </div>
        );
    }
}
