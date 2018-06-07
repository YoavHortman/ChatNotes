import * as React from "react";

interface FooterProps {
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

    render() {
        return (
            <div className={"Footer__root"}>
                <input
                    type={"text"}
                    value={this.state.text}
                    onChange={(e) => this.handleTextChange(e.target.value)}
                />
            </div>
        );
    }
}
