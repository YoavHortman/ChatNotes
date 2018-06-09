import * as React from "react";
import {Footer} from "../components/Footer";
import {Mutation} from "react-apollo";
import {CREATE_MESSAGE, GET_ALL_MESSAGES} from "../Queries";


interface FooterWrapperProps {
}

interface FooterWrapperState {
}

export class FooterWrapper extends React.Component<FooterWrapperProps, FooterWrapperState> {
    constructor(props: FooterWrapperProps) {
        super(props);
    }


    handleCreateMessage = async (newMessage: String, createMessage: (options: any) => void) => {
        await createMessage({variables: {createdBy: "YH", text: newMessage}});
    }

    render() {
        return (
            <Mutation
                mutation={CREATE_MESSAGE}
                update={(cache, {data: {createMessage}}) => {
                    const allMessages = cache.readQuery({query: GET_ALL_MESSAGES});
                    if (allMessages === null) {
                        // This is here to make typescript happy (:
                        throw new Error("Should never happen");
                    }
                    cache.writeQuery({
                        query: GET_ALL_MESSAGES,
                        data: {allMessages: (allMessages as any).allMessages.concat([createMessage])}
                    });
                }}
            >
                {(createMessage) => (
                    <Footer onCreateMessage={(newMessage) => this.handleCreateMessage(newMessage, createMessage)}/>
                )}
            </Mutation>
        );
    }
}
