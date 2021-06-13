import { gql } from "@apollo/client";

export const EMPLOYEE_SALARY_UPDATE = gql`
  mutation employeeSalaryUpdate(
    $employeeId: ID!
    $da: Float
    $pa: Float
    $hra: Float
    $epf: Float
    $pt: Float
    $basic: Float
  ) {
    employeeSalaryUpdate(
      employeeId: $employeeId
      da: $da
      pa: $pa
      hra: $hra
      epf: $epf
      pt: $pt
      basic: $basic
    )
  }
`;
