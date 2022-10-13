import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation Mutation($name: String, $email: String, $password: String) {
    signup(name: $name, email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const SIGN_IN = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      payload
    }
  }
`;

export const REFRESH_ACCESS = gql`
  mutation RefreshToken {
    refreshToken {
      payload
    }
  }
`;
