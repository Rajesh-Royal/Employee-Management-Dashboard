import { gql } from "@apollo/client";

export const REMOVE_EMPLOYEE_SALARY_STRUCTURE = gql`
  mutation DeleteEmployeeSalaryStructureMetaField($fieldId: ID!) {
    DeleteEmployeeSalaryStructureMetaField(fieldId: $fieldId)
  }
`;
