import { gql } from "@apollo/client";

export const EMPLOYEE_SALARY_UPDATE = gql`
  mutation employeeMetaSalaryUpdate($employeeId: ID!, $salary: [CustomEmployeeSalaryType!]!) {
    employeeMetaSalaryUpdate(employeeId: $employeeId, salary: $salary)
  }
`;
