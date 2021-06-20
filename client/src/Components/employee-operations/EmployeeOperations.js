import React from "react";
import { SectionHeading } from "../common/Typography";
import CreateEmployeeSalaryStructure from "../employee-salary-structure/components/CreateEmployeeSalaryStructure";
import AddNewEmployee from "../Employee/components/AddNewEmployee";

const EmployeeOperations = () => {
  return (
    <div className="flex items-center justify-between space-x-6 flex-wrap">
      <SectionHeading className="text-xl">Employee Salaries</SectionHeading>
      <div className="flex items-center space-x-6 flex-wrap">
        <AddNewEmployee />
        <CreateEmployeeSalaryStructure />
      </div>
    </div>
  );
};

export default EmployeeOperations;
