import * as React from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

export interface ChatMessage {
    id: number
    createdAt: Date;
    text: string
    createdBy: string
}

interface AppState {
    messages: ChatMessage[] | null;
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            messages: null
        }

        this.loadMessages()
    }

    async loadMessages() {
        // TODO
    }

    onCreateMessage(newText: string) {

    }

    onEditMessage(messageId: number, newText: string) {

    }

    onDeleteMessage(messageId: number) {

    }

    public render() {
        if (this.state.messages === null) {
            return <div>Loading...</div>
        }

        return (
            <div className={"App__root"}>
                <Header noteCount={this.state.messages.length}/>
                <Body messages={this.state.messages}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
