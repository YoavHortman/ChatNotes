import * as React from 'react';
import './App.css';
// import {Header} from "./components/Header";
//
// import {Body} from "./components/Body";
//
// import {Footer} from "./components/Footer";

import {ApolloProvider, Query} from "react-apollo";
import {client} from "./ApolloClient";
import {Body} from "./components/Body";
import {Header} from "./components/Header";
import {FooterWrapper} from "./wrappers/FooterWrapper";
import {GET_ALL_MESSAGES} from "./Queries";


export interface ChatMessage {
    id: string;
    createdAt: Date;
    text: string
    createdBy: string
}

interface AppState {
    messages: ChatMessage[] | "LOADING";
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            messages: "LOADING"
        };

        this.loadMessages();
    }

    async loadMessages() {
        const dummyData: ChatMessage[] = [
            {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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

    parseData(data: any): ChatMessage[] {
        const toReturn: ChatMessage[] = [];
        for (const datum of data) {
            toReturn.push({ text: datum.text, id: datum.id, createdAt: new Date(datum.createdAt), createdBy: datum.createdBy})
        }

        return toReturn;
    }

    public render() {
        // if (this.state.messages === "LOADING") {
        //     // TODO prolly should use better UI
        //     return <div>Loading...</div>
        // }

        return (
            <ApolloProvider client={client}>
                <Query
                    query={GET_ALL_MESSAGES}
                >
                    {({loading, error, data}) => {
                        if (loading) {
                            return <p>Loading...</p>;
                        }
                        if (error) {
                            console.log(error);
                            return <p>Error with the database :(</p>;
                        }
                        const parsedData = this.parseData(data.allMessages);
                        return (
                            <div className={"App__root"}>
                            <Header noteCount={parsedData.length}/>
                            <Body
                                onDeleteClick={() => {
                                }}
                                onEditClick={() => {
                                }}
                                messages={parsedData}/>
                            <FooterWrapper />
                        </div>
                        );
                    }}
                </Query>

            </ApolloProvider>

        );
    }
}

export default App;
