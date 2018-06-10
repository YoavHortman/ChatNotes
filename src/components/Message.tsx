import * as React from "react";
import "./Message.css"
import {ChatMessage} from "../App";
import {DELETE_MESSAGE, GET_ALL_MESSAGES, UPDATE_MESSAGE} from "../Queries";
import {Mutation} from "react-apollo";

interface MessageProps {
    message: ChatMessage;
}

interface MessageState {
}

export class Message extends React.Component<MessageProps, MessageState> {
    constructor(props: MessageProps) {
        super(props);
    }

    handleEditClick = (id: string, oldText: string, editMessage: (options: any) => void) => {
        const newText = prompt("Your new message:", oldText);
        if (newText !== null && newText.length > 0 && newText !== oldText) {
            editMessage({variables: {id: id, text: newText}})
        }
    }

    handleDeleteClick = (id: string, deleteMessage: (options: any) => void) => {
        if (confirm("Are you sure you want to delete this item?")) {
            deleteMessage({id, variables: {id: id}})
        }
    }

    getFormattedDateText(date: Date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    getFormattedTimeText(date: Date) {
        let minutes: string = date.getMinutes().toString();
        if (minutes.length === 1) {
            minutes = "0" + minutes
        }
        return `${date.getHours()}:${minutes}`;
    }

    render() {
        return (
            <div className={"Message__root"}>
                <div className={"Message__body"}>
                    <div className={"Message__initials"}>{this.props.message.createdBy}</div>
                    <div className={"Message__messageContainer"}>
                        <div className={"Message__triangle"}/>
                        <div className={"Message__content"}>
                            <div className={"Message__text"}>{this.props.message.text}</div>
                            <div className={"Message__iconContainer"}>
                                {this.renderEditIcon()}
                                {this.renderXIcon()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"Message__footer"}>
                    {this.getFormattedDateText(this.props.message.createdAt)} {this.getFormattedTimeText(this.props.message.createdAt)}
                </div>
            </div>
        );
    }

    renderEditIcon() {
        return (
            <Mutation mutation={UPDATE_MESSAGE}>
                {(EDIT_MESSAGE) => (
                    <div
                        className={"Message__editIcon"}
                        onClick={() => this.handleEditClick(this.props.message.id, this.props.message.text, EDIT_MESSAGE)}
                    />)
                }
            </Mutation>
        );
    }

    renderXIcon() {
        return (
            <Mutation
                mutation={DELETE_MESSAGE}
                update={(cache, {data: {deleteMessage}}) => {
                    const allMessages = cache.readQuery({query: GET_ALL_MESSAGES});
                    if (allMessages === null) {
                        // This is here to make typescript happy (:
                        throw new Error("Should never happen");
                    }
                    cache.writeQuery({
                        query: GET_ALL_MESSAGES,
                        data: {allMessages: (allMessages as any).allMessages.filter((m: ChatMessage) => m.id !== deleteMessage.id)}
                    });
                }}
            >
                {(deleteMessage) => (
                    <div
                        className={"Message__XIcon"}
                        onClick={() => this.handleDeleteClick(this.props.message.id, deleteMessage)}
                    />)
                }
            </Mutation>
        );
    }
}
