import * as React from "react";

interface HeaderProps {
    noteCount: number;
}

interface HeaderState {
}

export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className={"Header__root"}>
                {this.props.noteCount} {this.props.noteCount === 1 ? "item" : "items"}
            </div>
        );
    }
}
