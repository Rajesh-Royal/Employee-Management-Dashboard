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
        _id
        da
        pa
        hra
        epf
        pt
      }
    }
  }
`;
