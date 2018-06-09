import * as React from "react";
import * as renderer from "react-test-renderer";
import {Body} from "./Body";
import {client} from "../ApolloClient";
import {ApolloProvider} from "react-apollo";

it('Should render an empty page', () => {
    const tree = renderer
        .create(<ApolloProvider client={client}>
            <Body
                messages={[]}
            />
        </ApolloProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Should render the entire list', () => {
    const message1 = {
        text: "Hello!",
        id: "1",
        createdAt: new Date(2012, 11, 25, 5, 53),
        createdBy: "YH"
    };
    const message3 = {
        text: "Test!",
        id: "2",
        createdAt: new Date(2012, 11, 25, 5, 53),
        createdBy: "YH"
    };
    const message2 = {
        text: "Test1!",
        id: "3",
        createdAt: new Date(2012, 11, 25, 5, 53),
        createdBy: "YH"
    };
    const tree = renderer
        .create(<ApolloProvider client={client}>
            <Body
                messages={[message1, message3, message2]}
            />
        </ApolloProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});