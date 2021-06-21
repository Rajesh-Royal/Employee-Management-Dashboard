import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation LoginUser($username: String!, $password: String!) {
    LoginUser(username: $username, password: $password) {
      userId
      token
    }
  }
`;
