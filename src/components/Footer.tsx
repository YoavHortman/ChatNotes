import * as React from "react";
import "./Footer.css"


interface FooterProps {
    onCreateMessage: (messageText: string) => void;
}

interface FooterState {
    text: string | null;
    errMessage: string | null;
}

export class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {
            text:  null,
            errMessage: null
        }
    }

    handleTextChange(newVal: string) {
        this.setState({text: newVal, errMessage: null});
    }

    handleKeyPress(key: string) {
        if (key === "Enter") {
            if (this.state.text !== null && this.state.text.length > 0) {
                this.props.onCreateMessage(this.state.text);
                this.setState({text: null})
            } else {
                console.log("no input");
                this.setState({errMessage: "No input.."})
            }
        }
    }


    render() {
        return (
            <div className={"Footer__root"}>
                <input
                    type={"text"}
                    value={this.state.text === null ? "" : this.state.text}
                    onChange={(e) => this.handleTextChange(e.target.value)}
                    onKeyPress={(e) => this.handleKeyPress(e.key)}
                    placeholder={"Enter your message..."}
                    className={"Footer__input"}
                />
                {this.state.errMessage === null ? null :
                    <div className={"Footer_err"}>
                        {this.state.errMessage}
                    </div>
                }

            </div>
        );
    }
}
