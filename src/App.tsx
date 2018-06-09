import * as React from 'react';
import './App.css';
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

class App extends React.Component {
    constructor(props: {}) {
        super(props);

    }

    parseData(data: any): ChatMessage[] {
        const toReturn: ChatMessage[] = [];
        for (const datum of data) {
            toReturn.push({
                text: datum.text,
                id: datum.id,
                createdAt: new Date(datum.createdAt),
                createdBy: datum.createdBy
            })
        }

        return toReturn;
    }

    public render() {
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
                                <Body messages={parsedData}/>
                                <FooterWrapper/>
                            </div>
                        );
                    }}
                </Query>

            </ApolloProvider>

        );
    }
}

export default App;
