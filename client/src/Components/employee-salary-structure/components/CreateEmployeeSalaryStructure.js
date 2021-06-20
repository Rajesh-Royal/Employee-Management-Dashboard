import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { DollarSign, XCircle } from "react-feather";
import { toast } from "react-toastify";
import { CREATE_EMPLOYEE_SALARY_STRUCTURE_META_FIELD } from "../../../core/gql-operations/mutation/create-employee-salary-structure.mutation";
import { READ_EMPLOYEE_SALARY_STRUCTURE } from "../../../core/gql-operations/query/read-employee-salary-structure-query";
import { projectTheme } from "../../../Data/projectTheme";
import { capitalize } from "../../../utility/UtilityFunctions";
import Button from "../../common/Button";
import FormInputBox from "../../common/FormInputBox";
import { SectionHeading } from "../../common/Typography";

const CreateEmployeeSalaryStructure = () => {
  const { data: EmployeeSalaryStructureData, loading: SalaryStructureLoading } = useQuery(
    READ_EMPLOYEE_SALARY_STRUCTURE
  );
  const [createEmployeeSalaryStructure] = useMutation(CREATE_EMPLOYEE_SALARY_STRUCTURE_META_FIELD);

  const [salaryFields, setSalaryFields] = useState({
    salary_meta_key: "",
    field_name: "",
    type: "number",
    disabled: false,
  });

  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="shadow-md border border-gray-100 p-6 bg-gray-50 dark:bg-gray-600 dark:border-gray-600 max-w-3xl relative">
      <button className="absolute right-2 -mt-12 focus:outline-none">
        <XCircle className={`mt-8 w-8 h-8 ${projectTheme.closeXButtonColor}`} aria-hidden="true" />
      </button>
      <SectionHeading>Employee Salary Structure</SectionHeading>
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
        {!SalaryStructureLoading && EmployeeSalaryStructureData
          ? EmployeeSalaryStructureData?.getEmployeeSalaryStructureMetaFields?.map(
              (salaryField) => {
                return (
                  <FormInputBox
                    key={salaryField?._id}
                    label={capitalize(salaryField?.field_name)}
                    icon={<DollarSign />}
                    placeholder={capitalize(salaryField?.field_name)}
                    name={capitalize(salaryField?.field_name)}
                    type={salaryField?.type.toLowerCase()}
                    ariaLabel={capitalize(salaryField?.field_name)}
                    value={salaryField?.field_name}
                    onChange={(e) => {}}
                  />
                );
              }
            )
          : null}
      </div>
      <SectionHeading className="border-t mt-8 pt-6">Add a New Salary Field</SectionHeading>
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
        <FormInputBox
          label=""
          icon={null}
          placeholder="Salary Field Name"
          name="field_name"
          type="text"
          ariaLabel="Salary Field Name"
          textLeft={true}
          value={salaryFields?.field_name}
          onChange={(e) => {
            console.log(salaryFields);
            setSalaryFields({
              ...salaryFields,
              [e.target.name]: e.target.value,
              salary_meta_key: e.target.value.replace(" ", "_"),
            });
          }}
        />
        <div className="flex flex-col items-center justify-end mt-8 max-w-xs">
          <Button
            className=" w-full"
            onClick={() => {
              if (salaryFields.field_name === "" || salaryFields.field_name === null) {
                toast.error("Please enter a value first");
                return;
              }
              createEmployeeSalaryStructure({
                variables: salaryFields,
                refetchQueries: ["getEmployeeSalaryStructureMetaFields"],
              })
                .then((data) => {
                  toast.success(`☑ New Field ${salaryFields.field_name} added`);
                })
                .catch((error) => {
                  toast.error(error?.message?.split(" ").slice(4).join(" ") || "Error");
                });
            }}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateEmployeeSalaryStructure;
