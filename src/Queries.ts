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