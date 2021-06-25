/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { XCircle } from "react-feather";
import { toast } from "react-toastify";
import { EMPLOYEE_SALARY_UPDATE } from "../../../core/gql-operations/mutation/update-employee-salary.mutation";
import { projectTheme } from "../../../Data/projectTheme";
import { makeWords, reduceSingleLevelObject } from "../../../utility/UtilityFunctions";
import Button from "../../common/Button";
import FormInputBox from "../../common/FormInputBox";
import { SectionHeading, SectionHeadingSmall } from "../../common/Typography";

const EmployeeSalaryDetailsForm = (props) => {
  if (!props?.employeeSalary?.salary?.salary) {
    return null;
  }

  const salarydata = props?.employeeSalary?.salary?.salary;
  const salaryPerMonth = parseInt(props?.employeeSalary?.ctc / 12);

  const [employeeSalaryUpdateMutation] = useMutation(EMPLOYEE_SALARY_UPDATE);

  const [salaryStructure, setSalaryStructure] = useState({});
  const [netCalculatedSalary, setNetCalculatedSalary] = useState(0);
  const [salaryMaxError, setSalaryMaxError] = useState(false);
  const [requestLoading, setRequestLoading] = useState(false);

  useEffect(() => {
    if (salarydata) {
      setSalaryStructure({
        ...salaryStructure,
        ...salarydata,
      });
    }

    setNetCalculatedSalary(reduceSingleLevelObject(salaryStructure));
    if (netCalculatedSalary > salaryPerMonth) {
      setSalaryMaxError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salarydata]);
  // console.log(salaryStructure);

  //   update state on Input change
  const onSalaryStructureDataChange = (e, index) => {
    setSalaryStructure((prevState) => {
      return {
        ...prevState,
        [index]: { ...prevState[index], value: parseInt(e.target.value) || 0 },
      };
    });
  };
  // set net calculated salary logic on salarystructure change
  // useEffect as callback function of setState
  useEffect(() => {
    setNetCalculatedSalary(reduceSingleLevelObject(salaryStructure));
  }, [salaryStructure]);

  useEffect(() => {
    netCalculatedSalary > salaryPerMonth ? setSalaryMaxError(true) : setSalaryMaxError(false);
  }, [netCalculatedSalary, salaryPerMonth]);

  return (
    <form
      className={`shadow-md border border-gray-100 p-6 bg-gray-50 dark:bg-gray-600 dark:border-gray-600 m-1 mb-8 relative ${
        !props.show ? "hidden" : null
      }`}
      onClick={(e) => e.preventDefault()}>
      <button
        className="absolute right-2 -mt-12 focus:outline-none"
        onClick={() => {
          props?.toggleFormVisibility();
          props?.currentEmployee();
        }}>
        <XCircle className={`mt-8 w-8 h-8 ${projectTheme.closeXButtonColor}`} aria-hidden="true" />
      </button>
      <SectionHeading>Employee salary structure</SectionHeading>
      <div className="flex justify-start flex-wrap md:space-x-24 mt-5">
        {/* Employee salary section */}
        <div className="salary w-full md:w-1/3">
          <SectionHeadingSmall className={`${projectTheme.textColor} border-b`}>
            Salary
          </SectionHeadingSmall>
          {Object.values(salaryStructure).length > 0
            ? Object.values(salaryStructure)?.map((salary, index) => {
                if (salary?.type === "salary") {
                  return (
                    <FormInputBox
                      key={salary?.meta_field_id}
                      id={salary?.meta_field_id}
                      data-salarytype="salary"
                      label={makeWords(salary?.meta_key)}
                      icon="₹"
                      placeholder="$$"
                      name={salary?.meta_key}
                      type="number"
                      ariaLabel={salary?.meta_key}
                      value={salary?.value}
                      onChange={(e) => onSalaryStructureDataChange(e, index)}
                    />
                  );
                } else {
                  return null;
                }
              })
            : null}
        </div>
        {/* employee Deduction Section */}
        <div className="deduction w-full md:w-1/3 mt-8 md:mt-0">
          <SectionHeadingSmall className={`${projectTheme.textColor} border-b`}>
            Deductions
          </SectionHeadingSmall>
          {Object.values(salaryStructure).length > 0
            ? Object.values(salaryStructure)?.map((salary, index) => {
                if (salary?.type === "deduction") {
                  return (
                    <FormInputBox
                      key={salary?.meta_field_id}
                      id={salary?.meta_field_id}
                      data-salarytype="deduction"
                      label={makeWords(salary?.meta_key)}
                      icon="₹"
                      placeholder="$$"
                      name={salary?.meta_key}
                      type="number"
                      ariaLabel={salary?.meta_key}
                      value={salary?.value}
                      onChange={(e) => onSalaryStructureDataChange(e, index)}
                    />
                  );
                } else {
                  return null;
                }
              })
            : null}
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="dark:text-gray-200">
          Total salary:{" "}
          <strong className={`${salaryMaxError ? "text-red-700" : projectTheme.textColor}`}>
            {netCalculatedSalary}
          </strong>
        </p>
        <Button
          disabled={salaryMaxError}
          onClick={() => {
            employeeSalaryUpdateMutation({
              variables: {
                employeeId: props?.employeeSalary?._id,
                salary: Object.values(salaryStructure)?.map((salary) => salary),
              },
              refetchQueries: ["employeeListRead"],
              // eslint-disable-next-line prettier/prettier
            }).then((res) => {
                setRequestLoading(true);
                if (res.data?.employeeMetaSalaryUpdate) {
                  setRequestLoading(false);
                  toast.success("Salary Updated successfully");
                } else {
                  setRequestLoading(false);
                  toast.info("Salary already exist");
                }
                // eslint-disable-next-line prettier/prettier
              }).catch((error) => {
                setRequestLoading(false);
                toast.error(error?.message);
              });
          }}
          isLoading={requestLoading}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default EmployeeSalaryDetailsForm;
