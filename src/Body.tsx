import * as React from "react";
import "./Body.css"
import {ChatMessage} from "./App";

interface BodyProps {
    messages: ChatMessage[];
}

interface BodyState {
}

export class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
    }

    render() {
        return (
            <div className={"Body__root"}>
                {this.props.messages.map(message => {
                    return message.text;
                })}
            </div>
        );
    }
}
