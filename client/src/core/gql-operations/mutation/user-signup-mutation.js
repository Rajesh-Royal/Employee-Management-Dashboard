import { gql } from "@apollo/client";

export const USER_SIGNUP = gql`
  mutation RegisterUser($username: String!, $password: String, $email: String!, $mobile: String) {
    RegisterUser(username: $username, password: $password, email: $email, mobile: $mobile) {
      _id
      email
      username
      mobile
    }
  }
`;
