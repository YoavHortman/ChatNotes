import * as React from "react";
import "./Body.css"
import {ChatMessage} from "../App";

interface BodyProps {
    messages: ChatMessage[];
    onDeleteClick: (messageId: string) => void;
    onEditClick: () => void;
}

interface BodyState {
}

export class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
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
            <div className={"Body__root"}>
                {this.props.messages.sort((message1, message2) => {
                    return message1.createdAt.getTime() - message2.createdAt.getTime();
                }).map(message => {
                    return (<div className={"Body__messageRoot"} key={message.id}>
                        <div className={"Body__messageBody"}>
                            <div className={"Body__messageInitialsContainer"}>
                                {message.createdBy}
                            </div>
                            <div className={"Body__messageContainer"}>
                                <div>{message.text}</div>
                                <div className={"Body__editIcon"} onClick={this.handleEditClick}/>
                                <div className={"Body__XIcon"} onClick={() => this.props.onDeleteClick(message.id)}/>
                            </div>
                        </div>
                        <div className={"Body__messageDataContainer"}>
                            {this.getFormattedDateText(message.createdAt)} {this.getFormattedTimeText(message.createdAt)}
                        </div>
                    </div>);
                })}
            </div>
        );
    }
}
