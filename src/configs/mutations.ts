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
  mutation Mutation($email: String, $password: String) {
    signin(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const REFRESH_ACCESS = gql`
  mutation Mutation($refreshToken: String) {
    RefreshAccess(refreshToken: $refreshToken)
  }
`;
