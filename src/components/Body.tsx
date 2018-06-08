import * as React from "react";
import "./Body.css"
import {ChatMessage} from "../App";
import {Message} from "./Message";

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

    render() {
        return (
            <div className={"Body__root"}>
                {this.props.messages.sort((message1, message2) => {
                    return message1.createdAt.getTime() - message2.createdAt.getTime();
                }).map(message => {
                    return (
                        <Message
                            message={message}
                            onDeleteClick={this.props.onDeleteClick}
                            onEditClick={this.props.onEditClick}
                            key={message.id}
                        />
                    );
                })}
            </div>
        );
    }
}
