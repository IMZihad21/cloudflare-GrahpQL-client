import { gql } from "@apollo/client";

export const GET_ALL_OPEN_USERS = gql`
  query RootQueryType {
    getAllOpenUsers {
      name
      email
    }
  }
`;

export const GET_ALL_USERS = gql`
  query RootQueryType {
    getAllUsers {
      name
      email
    }
  }
`;

export const GET_USERS = gql`
  query GetViewer {
    viewer {
      username
      email
    }
  }
`;
