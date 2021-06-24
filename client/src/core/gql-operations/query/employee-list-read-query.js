import { gql } from "@apollo/client";

export const EMPLOYEE_LIST_READ = gql`
  query employeeListRead {
    employeeListRead {
      _id
      firstName
      lastName
      email
      city
      ctc
      salary {
        employeeId
        _id
        salary {
          value
          meta_key
          meta_field_id
          type
        }
      }
    }
  }
`;
