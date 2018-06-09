import * as React from "react";
import * as renderer from "react-test-renderer";
import {Message} from "./Message";
import {ApolloProvider} from "react-apollo";
import {client} from "../ApolloClient";

it('should load', () => {
    const tree = renderer
        .create(
            <ApolloProvider client={client}>
                <Message message={{
                    text: "Hello!",
                    id: "1",
                    createdAt: new Date(),
                    createdBy: "YH"
                }
                }/>
            </ApolloProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});