import { gql } from "@apollo/client";

export const ADD_NEW_EMPLOYEE = gql`
  mutation employeeCreate(
    $firstName: String!
    $lastName: String
    $email: String!
    $city: String
    $ctc: Float!
  ) {
    employeeCreate(
      firstName: $firstName
      lastName: $lastName
      email: $email
      city: $city
      ctc: $ctc
    ) {
      _id
    }
  }
`;
