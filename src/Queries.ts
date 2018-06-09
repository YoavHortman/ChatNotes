import gql from "graphql-tag";

export const GET_ALL_MESSAGES = gql`
   {
       allMessages {
           id
           text
           createdAt
           createdBy
       }
   }
`;

export const CREATE_MESSAGE = gql`
      mutation ($createdBy: String! $text: String!) {
        createMessage(createdBy: $createdBy text: $text) {
          id
          text
          createdBy
          createdAt
        }
      }
`;

export const DELETE_MESSAGE = gql`
      mutation($id: ID!) {
          deleteMessage(id: $id) {
            id
          }
        }
`;

export const UPDATE_MESSAGE = gql`
      mutation ($id: ID! $text: String!)
      {
        updateMessage(id: $id text: $text) {
            id
            text
        }
      }
`;