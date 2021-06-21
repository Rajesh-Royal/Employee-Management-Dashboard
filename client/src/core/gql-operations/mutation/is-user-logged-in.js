import { gql } from "@apollo/client";

export const IS_USER_LOGGED_IN = gql`
  mutation isUserLogin($userId: String!) {
    isUserLogin(userId: $userId)
  }
`;
