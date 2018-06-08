import * as React from 'react';
import './App.css';
import {Header} from "./components/Header";

import {Body} from "./components/Body";

import {Footer} from "./components/Footer";

import environment from "./RelayEnv";

export interface ChatMessage {
    id: string;
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
        };

        this.env = environment;
        this.loadMessages();
    }

    env: any;

    async loadMessages() {
        const dummyData: ChatMessage[] = [{
            id: "1",
            createdAt: new Date(),
            text: "Hello",
            createdBy: "YH"
        },
            {
                id: "2",
                createdAt: new Date(),
                text: "Hello2",
                createdBy: "YH"
            },{
                id: "1",
                createdAt: new Date(),
                text: "Hello",
                createdBy: "YH"
            },
            {
                id: "2",
                createdAt: new Date(),
                text: "Hello2",
                createdBy: "YH"
            },{
                id: "1",
                createdAt: new Date(),
                text: "Hello",
                createdBy: "YH"
            },
            {
                id: "2",
                createdAt: new Date(),
                text: "Hello2",
                createdBy: "YH"
            },{
                id: "1",
                createdAt: new Date(),
                text: "Hello",
                createdBy: "YH"
            },
            {
                id: "2",
                createdAt: new Date(),
                text: "Hello2",
                createdBy: "YH"
            },{
                id: "1",
                createdAt: new Date(),
                text: "Hello",
                createdBy: "YH"
            },
            {
                id: "2",
                createdAt: new Date(),
                text: "Hello2",
                createdBy: "YH"
            },{
                id: "1",
                createdAt: new Date(),
                text: "Hello",
                createdBy: "YH"
            },
            {
                id: "2",
                createdAt: new Date(),
                text: "Hello2",
                createdBy: "YH"
            }];
        setTimeout(() => {
            this.setState({messages: dummyData})
        }, 100);
    }

    onCreateMessage = (newText: string) => {

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
                <Body
                    onDeleteClick={() => {}}
                    onEditClick={() => {}}
                    messages={this.state.messages}/>
                <Footer onCreateMessage={this.onCreateMessage}/>
            </div>
        );
    }
}

export default App;
