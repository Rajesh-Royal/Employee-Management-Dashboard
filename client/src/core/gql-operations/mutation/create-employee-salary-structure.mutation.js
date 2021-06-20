import { gql } from "@apollo/client";

export const CREATE_EMPLOYEE_SALARY_STRUCTURE_META_FIELD = gql`
  mutation CreateEmployeeSalaryStructureMetaField(
    $salary_meta_key: String!
    $type: String!
    $disabled: Boolean!
    $field_name: String!
  ) {
    CreateEmployeeSalaryStructureMetaField(
      salary_meta_key: $salary_meta_key
      type: $type
      disabled: $disabled
      field_name: $field_name
    ) {
      _id
    }
  }
`;
