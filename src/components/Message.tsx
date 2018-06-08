import * as React from "react";
import "./Message.css"
import {ChatMessage} from "../App";

interface MessageProps {
    message: ChatMessage;
    onDeleteClick: (messageId: string) => void;
    onEditClick: () => void;
}

interface MessageState {
}

export class Message extends React.Component<MessageProps, MessageState> {
    constructor(props: MessageProps) {
        super(props);
    }

    handleEditClick = () => {

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
                            <div className={"Message__editIcon"} onClick={this.handleEditClick}/>
                            <div className={"Message__XIcon"}
                                 onClick={() => this.props.onDeleteClick(this.props.message.id)}/>
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
