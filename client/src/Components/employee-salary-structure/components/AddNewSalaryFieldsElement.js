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
  const [salaryRequestLoading, setSalaryRequestLoading] = useState(false);
  const [deductionRequestLoading, setDeductionRequestLoading] = useState(false);

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
                salary_meta_key: e.target.value.split(" ").join("_"),
              });
            }}
          />
          <div className="flex flex-col items-center justify-end mt-8 max-w-xs">
            <Button
              className=" w-full"
              onClick={() => {
                setSalaryRequestLoading(true);
                if (salaryFields.field_name === "" || salaryFields.field_name === null) {
                  toast.error("Please enter a value first");
                  setSalaryRequestLoading(false);
                  return;
                }
                createEmployeeSalaryStructure({
                  variables: salaryFields,
                  refetchQueries: ["getEmployeeSalaryStructureMetaFields", "employeeListRead"],
                })
                  .then((data) => {
                    console.log(data);
                    toast.success(`☑ New Field ${salaryFields.field_name} added`);
                    setSalaryRequestLoading(false);
                  })
                  .catch((error) => {
                    toast.error(error?.message?.split(" ").slice(4).join(" ") || "Error");
                    setSalaryRequestLoading(false);
                  });
              }}
              isLoading={salaryRequestLoading}>
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
                setDeductionRequestLoading(true);
                if (deductionFields.field_name === "" || deductionFields.field_name === null) {
                  toast.error("Please enter a value first");
                  setDeductionRequestLoading(false);
                  return;
                }
                createEmployeeSalaryStructure({
                  variables: deductionFields,
                  refetchQueries: ["getEmployeeSalaryStructureMetaFields", "employeeListRead"],
                })
                  .then((data) => {
                    toast.success(`☑ New Field ${deductionFields.field_name} added`);
                    setDeductionRequestLoading(false);
                  })
                  .catch((error) => {
                    toast.error(error?.message?.split(" ").slice(4).join(" ") || "Error");
                    setDeductionRequestLoading(false);
                  });
              }}
              isLoading={deductionRequestLoading}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddNewSalaryFieldsElement;
