import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { CREATE_EMPLOYEE_SALARY_STRUCTURE_META_FIELD } from "../../../core/gql-operations/mutation/create-employee-salary-structure.mutation";
import Button from "../../common/Button";
import FormInputBox from "../../common/FormInputBox";
import { SectionHeading } from "../../common/Typography";

const AddNewSalaryFieldsElement = () => {
  const [createEmployeeSalaryStructure] = useMutation(CREATE_EMPLOYEE_SALARY_STRUCTURE_META_FIELD);

  const [salaryFields, setSalaryFields] = useState({
    salary_meta_key: "",
    field_name: "",
    type: "salary",
    disabled: false,
  });
  const [deductionFields, setDeductionFields] = useState({
    salary_meta_key: "",
    field_name: "",
    type: "deduction",
    disabled: false,
  });
  return (
    <React.Fragment>
      <SectionHeading className="pt-3 border-b mt-6">Add New Salary Fields</SectionHeading>
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 mt-6 relative">
        <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 pr-2 pb-6 sm:border-r sm:pr-5 border-gray-500">
          <SectionHeading className="pt-3 col-span-2">Salary Field</SectionHeading>
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
        <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 pr-2 pb-6">
          <SectionHeading className="pt-3 col-span-2">Deduction Field</SectionHeading>
          <FormInputBox
            label=""
            icon={null}
            placeholder="Deduction Field Name"
            name="field_name"
            type="text"
            ariaLabel="Deduction Field Name"
            textLeft={true}
            value={deductionFields?.field_name}
            onChange={(e) => {
              setDeductionFields({
                ...deductionFields,
                [e.target.name]: e.target.value,
                salary_meta_key: e.target.value.replace(" ", "_"),
              });
            }}
          />
          <div className="flex flex-col items-center justify-end mt-8 max-w-xs">
            <Button
              className=" w-full"
              onClick={() => {
                if (deductionFields.field_name === "" || deductionFields.field_name === null) {
                  toast.error("Please enter a value first");
                  return;
                }
                createEmployeeSalaryStructure({
                  variables: deductionFields,
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
      </div>
    </React.Fragment>
  );
};

export default AddNewSalaryFieldsElement;
