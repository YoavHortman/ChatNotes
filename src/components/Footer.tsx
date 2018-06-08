import * as React from "react";
import "./Footer.css"


interface FooterProps {
    onCreateMessage: (messageText: string) => void;
}

interface FooterState {
    text: string | undefined;
}

export class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {
            text: undefined
        }
    }

    handleTextChange(newVal: string) {
        this.setState({text: newVal});
    }

    handleKeyPress(key: string) {
        if (key === "Enter") {
            if (this.state.text !== undefined && this.state.text.length > 0) {
                this.props.onCreateMessage(this.state.text);
            }
        }
    }


    render() {
        return (
            <div className={"Footer__root"}>
                <input
                    type={"text"}
                    value={this.state.text}
                    onChange={(e) => this.handleTextChange(e.target.value)}
                    onKeyPress={(e) => this.handleKeyPress(e.key)}
                    placeholder={"Enter your message..."}
                    className={"Footer__input"}
                />
            </div>
        );
    }
}
