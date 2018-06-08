import * as React from "react";

interface NoteProps {
    note: any;
}

interface NoteState {
}

export class Note extends React.Component<NoteProps, NoteState> {
    constructor(props: NoteProps) {
        super(props);
    }

    render() {
        return (
            <div className={"Header__root"}>

            </div>
        );
    }
}
