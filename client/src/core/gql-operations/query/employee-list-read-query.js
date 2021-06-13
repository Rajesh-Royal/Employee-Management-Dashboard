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
        _id
        da
        pa
        hra
        pt
        epf
        basic
      }
    }
  }
`;
