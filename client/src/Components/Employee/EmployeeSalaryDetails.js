import React, { useState, useEffect } from "react";
import { XCircle } from "react-feather";
import { useMutation } from "@apollo/client";

import FormInputBox from "./FormInputBox";
import { SectionHeadingSmall, SectionHeading } from "../Typography";
import Button from "../Button";
import { EMPLOYEE_SALARY_UPDATE } from "../../core/gql-operations/mutation/update-employee-salary.mutation";
import { reduceSingleLevelObject } from "../../utility/UtilityFunctions";

const EmployeeSalaryDetails = (props) => {
  const salarydata = props?.employeeSalary?.salary;
  const salaryPerMonth = parseInt(props?.employeeSalary?.ctc / 12);

  const [employeeSalaryUpdateMutation] = useMutation(EMPLOYEE_SALARY_UPDATE);

  const [salaryStructure, setSalaryStructure] = useState({});
  const [netCalculatedSalary, setNetCalculatedSalary] = useState(0);
  const [salaryMaxError, setSalaryMaxError] = useState(false);

  useEffect(() => {
    if (salarydata) {
      setSalaryStructure({
        ...salaryStructure,
        basic: salarydata?.basic,
        da: salarydata?.da,
        pa: salarydata?.pa,
        hra: salarydata?.hra,
        pt: salarydata?.pt,
        epf: salarydata?.epf,
      });
    } else {
      setSalaryStructure({
        ...salaryStructure,
        basic: 0,
        da: 0,
        pa: 0,
        hra: 0,
        pt: 0,
        epf: 0,
      });
    }

    setNetCalculatedSalary(reduceSingleLevelObject(salaryStructure));
    if (netCalculatedSalary > salaryPerMonth) {
      setSalaryMaxError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salarydata]);

  //   update state on Input change
  const onSalaryStructureDataChange = (e) => {
    setSalaryStructure({
      ...salaryStructure,
      [e.target.name]: parseInt(e.target.value) || 0,
    });
  };
  // set net calculated salary logic on salarystructure change
  // useEffect as callback function of setState
  useEffect(() => {
    setNetCalculatedSalary(reduceSingleLevelObject(salaryStructure));
  }, [salaryStructure]);

  useEffect(() => {
    netCalculatedSalary > salaryPerMonth ? setSalaryMaxError(true) : setSalaryMaxError(false);
  }, [netCalculatedSalary]);

  return (
    <form
      className={`shadow-md border border-gray-100 p-6 bg-gray-50 m-1 mb-8 relative ${
        !props.show ? "hidden" : null
      }`}
      onClick={(e) => e.preventDefault()}>
      <button
        className="absolute right-2 -mt-12 focus:outline-none"
        onClick={() => {
          props?.toggleFormVisibility();
          props?.currentEmployee();
        }}>
        <XCircle className="mt-8 w-8 h-8 text-purple-400" aria-hidden="true" />
      </button>
      <SectionHeading>Employee salary structure</SectionHeading>
      <div className="flex justify-start flex-wrap md:space-x-24">
        {/* Employee salary section */}
        <div className="salary w-full md:w-1/3">
          <SectionHeadingSmall className="text-purple-500 border-b">Salary</SectionHeadingSmall>
          <FormInputBox
            label="Basic Pay"
            icon="₹"
            placeholder="$$"
            name="basic"
            type="number"
            ariaLabel="Basic Pay"
            value={salaryStructure?.basic}
            onChange={(e) => onSalaryStructureDataChange(e)}
          />
          <FormInputBox
            label="Dearness Allowance"
            icon="₹"
            placeholder="$$"
            name="da"
            type="number"
            ariaLabel="Dearness Allowance"
            value={salaryStructure?.da}
            onChange={(e) => onSalaryStructureDataChange(e)}
          />
          <FormInputBox
            label="Personal Allowance"
            icon="₹"
            placeholder="$$"
            name="pa"
            type="number"
            ariaLabel="Personal Allowance"
            value={salaryStructure?.pa}
            onChange={(e) => onSalaryStructureDataChange(e)}
          />
          <FormInputBox
            label="House Rent Allowance"
            icon="₹"
            placeholder="$$"
            name="hra"
            type="number"
            ariaLabel="House Rent Allowance"
            value={salaryStructure?.hra}
            onChange={(e) => onSalaryStructureDataChange(e)}
          />
        </div>
        {/* employee Deduction Section */}
        <div className="deduction w-full md:w-1/3 mt-8 md:mt-0">
          <SectionHeadingSmall className="text-purple-500 border-b">Deductions</SectionHeadingSmall>
          <FormInputBox
            label="Professional Tax"
            ariaLabel="Professional Tax"
            icon="₹"
            placeholder="$$"
            name="pt"
            type="number"
            value={salaryStructure?.pt}
            onChange={(e) => onSalaryStructureDataChange(e)}
          />
          <FormInputBox
            label="Employee Provident Fund"
            ariaLabel="Employee Provident Fund"
            icon="₹"
            placeholder="$$"
            name="epf"
            type="number"
            value={salaryStructure?.epf}
            onChange={(e) => onSalaryStructureDataChange(e)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p>
          Total salary:{" "}
          <strong className={`${salaryMaxError ? "text-red-700" : "text-purple-500"}`}>
            {netCalculatedSalary}
          </strong>
        </p>
        <Button
          disabled={salaryMaxError}
          onClick={() => {
            employeeSalaryUpdateMutation({
              variables: {
                employeeId: props?.employeeSalary?._id,
                ...salaryStructure,
              },
              refetchQueries: ["employeeListRead"],
            })
              .then((res) => console.log(res))
              .catch((error) => console.log(error?.message));
          }}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default EmployeeSalaryDetails;
