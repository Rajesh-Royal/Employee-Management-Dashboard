import React from "react";
import { SectionHeading } from "../common/Typography";
import CreateEmployeeSalaryStructure from "../employee-salary-structure/components/CreateEmployeeSalaryStructure";
import AddNewEmployee from "../Employee/components/AddNewEmployee";

const EmployeeOperations = () => {
  return (
    <div className="flex items-center justify-between md:space-x-6 flex-wrap mt-3">
      <SectionHeading className="text-xl">Employee Salaries</SectionHeading>
      <div className="flex items-start space-x-6 flex-nowrap md:items-end">
        <AddNewEmployee />
        <CreateEmployeeSalaryStructure />
      </div>
    </div>
  );
};

export default EmployeeOperations;
