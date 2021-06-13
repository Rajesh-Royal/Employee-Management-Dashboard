import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { EMPLOYEE_LIST_READ } from "../../core/gql-operations/query/employee-list-read-query";
import EmployeeDetails from "./EmployeeDetails";
import Button from "../Button";

const EmployeeSalaryTable = (props) => {
  const { data, loading, startPolling, stopPolling } = useQuery(EMPLOYEE_LIST_READ);
  const [employeeSalaryData, setemployeeSalaryData] = useState(undefined);
  const [showSalaryForm, setShowSalaryForm] = useState(false);
  const [activeEmployee, setActiveEmployee] = useState(null);

  // stop polling as soon as data available
  useEffect(() => {
    startPolling(100);
    if (data?.employeeListRead) {
      stopPolling();
    }
    return () => {
      stopPolling();
    };
  }, [data, startPolling, stopPolling]);

  const toggleFormVisibility = () => {
    setShowSalaryForm(!showSalaryForm);
  };

  const currentEmployee = () => setActiveEmployee(null);

  const tableHeadings = ["Employee ID", "First Name", "Last Name", "CTC", "Salary", "Action"];
  return (
    <div
      className="flex flex-col mt-5 overflow-x-scroll xl:overflow-x-hidden"
      onClick={() => stopPolling()}>
      <table className="my-8 salary-table shadow overflow-hidden sm:rounded-lg ">
        <thead className="bg-gray-300">
          <tr className="text-left text-xs font-base text-gray-500 uppercase tracking-wider">
            {tableHeadings.map((heading, index) => {
              return (
                <th scope="col" className="px-6 py-3" key={heading}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!loading && data ? (
            data?.employeeListRead.map((employee, index) => {
              return (
                <tr
                  className={`bg-gray-100 text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-600 ${
                    index === activeEmployee ? "active-row" : ""
                  }`}
                  key={employee?._id}>
                  <td className=" px-7  py-4">{index + 1}</td>
                  <td className=" px-7  py-4">{employee.firstName}</td>
                  <td className=" px-7  py-4">{employee.lastName}</td>
                  <td className=" px-7  py-4">{employee.ctc}</td>
                  <td className=" px-7  py-4">{parseInt(employee.ctc / 12)}</td>
                  <td className=" px-7  py-4">
                    <Button
                      className="text-xs rounded-full"
                      onClick={(e) => {
                        setemployeeSalaryData(employee);
                        setShowSalaryForm(true);
                        setActiveEmployee(index);
                        console.log("index== ", index);
                        console.log("Active row == ", activeEmployee);
                      }}>
                      Details
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <React.Fragment>
              {tableHeadings?.map((heading) => {
                return (
                  <tr className="text-center animate-pulse bg-gray-200" key={heading}>
                    <td colSpan={tableHeadings?.length} className="h-10"></td>
                  </tr>
                );
              })}
            </React.Fragment>
          )}
        </tbody>
      </table>
      <EmployeeDetails
        employeeSalary={employeeSalaryData}
        {...props}
        show={showSalaryForm}
        toggleFormVisibility={toggleFormVisibility}
        currentEmployee={currentEmployee}
      />
    </div>
  );
};

export default EmployeeSalaryTable;
