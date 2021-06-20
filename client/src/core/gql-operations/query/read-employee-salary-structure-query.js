import { gql } from "@apollo/client";

export const READ_EMPLOYEE_SALARY_STRUCTURE = gql`
  query getEmployeeSalaryStructureMetaFields {
    getEmployeeSalaryStructureMetaFields {
      _id
      salary_meta_key
      type
      disabled
      field_name
    }
  }
`;
