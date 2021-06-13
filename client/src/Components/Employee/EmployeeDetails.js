import React, { useState, useEffect } from "react";
import { XCircle } from "react-feather";
import { useMutation } from "@apollo/client";

import FormInputBox from "./FormInputBox";
import { SectionHeadingSmall, SectionHeading } from "../Typography";
import Button from "../Button";
import { EMPLOYEE_SALARY_UPDATE } from "../../core/gql-operations/services/update-employee-salary";

const EmployeeDetails = (props) => {
  const salarydata = props?.employeeSalary?.salary;
  const [employeeSalaryUpdateMutation] = useMutation(EMPLOYEE_SALARY_UPDATE);

  const [salaryStructure, setSalaryStructure] = useState({});

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salarydata]);

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
            name="basicPay"
            type="number"
            ariaLabel="Basic Pay"
            value={salaryStructure?.basic}
            onChange={(e) =>
              setSalaryStructure({
                ...salaryStructure,
                basic: parseInt(e.target.value),
              })
            }
          />
          <FormInputBox
            label="Dearness Allowance"
            icon="₹"
            placeholder="$$"
            name="Dearness Allowance"
            type="number"
            ariaLabel="Dearness Allowance"
            value={salaryStructure?.da}
            onChange={(e) =>
              setSalaryStructure({
                ...salaryStructure,
                da: parseInt(e.target.value),
              })
            }
          />
          <FormInputBox
            label="Personal Allowance"
            icon="₹"
            placeholder="$$"
            name="Personal Allowance"
            type="number"
            ariaLabel="Personal Allowance"
            value={salaryStructure?.pa}
            onChange={(e) =>
              setSalaryStructure({
                ...salaryStructure,
                pa: parseInt(e.target.value),
              })
            }
          />
          <FormInputBox
            label="House Rent Allowance"
            icon="₹"
            placeholder="$$"
            name="House Rent Allowance"
            type="number"
            ariaLabel="House Rent Allowance"
            value={salaryStructure?.hra}
            onChange={(e) =>
              setSalaryStructure({
                ...salaryStructure,
                hra: parseInt(e.target.value),
              })
            }
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
            onChange={(e) =>
              setSalaryStructure({
                ...salaryStructure,
                pt: parseInt(e.target.value),
              })
            }
          />
          <FormInputBox
            label="Employee Provident Fund"
            ariaLabel="Employee Provident Fund"
            icon="₹"
            placeholder="$$"
            name="Employee Provident Fund"
            type="number"
            value={salaryStructure?.epf}
            onChange={(e) =>
              setSalaryStructure({
                ...salaryStructure,
                epf: parseInt(e.target.value),
              })
            }
          />
        </div>
      </div>
      <div className="flex justify-end items-center">
        <Button
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

export default EmployeeDetails;
