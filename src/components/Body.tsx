import * as React from "react";
import "./Body.css"
import {ChatMessage} from "../App";
import {Message} from "./Message";

interface BodyProps {
    messages: ChatMessage[];
}

interface BodyState {
}

export class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
    }

    componentDidMount() {
        this.scrollBottom();
    }

    componentDidUpdate(prevProps: BodyProps) {
        if (this.props.messages.length > prevProps.messages.length)
            this.scrollBottom();
    }

    scrollBottom() {
        if (this.body !== null) {
            this.body.scrollTop = this.body.scrollHeight;
        }
    }

    private body: HTMLElement | null;

    render() {
        return (
            <div
                className={"Body__root"}
                ref={(e) => this.body = e}
            >
                {/*This div makes it so the order is not flipped (cause of column-reverse in the CSS)*/}
                <div>
                    {this.props.messages.sort((message1, message2) => {
                        return message1.createdAt.getTime() - message2.createdAt.getTime();
                    }).map(message => {
                        return (
                            <Message
                                message={message}
                                key={message.id}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
