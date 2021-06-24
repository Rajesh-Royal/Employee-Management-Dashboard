import { gql } from "@apollo/client";

export const EMPLOYEE_READ = gql`
  query EmployeeRead($employeeId: ID!) {
    employeeRead(employeeId: $employeeId) {
      _id
      firstName
      lastName
      email
      city
      ctc
      salary {
        meta_field_id
        value
        meta_key
        type
      }
    }
  }
`;
