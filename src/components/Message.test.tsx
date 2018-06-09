import * as React from "react";
import * as renderer from "react-test-renderer";
import {Message} from "./Message";
import {ApolloProvider} from "react-apollo";
import {client} from "../ApolloClient";

it('Should render message', () => {
    const message = {
        text: "Hello!",
        id: "1",
        createdAt: new Date(2012, 11, 25, 5, 53),
        createdBy: "YH"
    };


    const tree = renderer
        .create(
            <ApolloProvider client={client}>
                <Message message={message}/>
            </ApolloProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});