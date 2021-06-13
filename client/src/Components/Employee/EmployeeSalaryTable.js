import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { EMPLOYEE_LIST_READ } from "../../core/gql-operations/query/employee-list-read-query";
import EmployeeSalaryDetails from "./EmployeeSalaryDetails";
import Button from "../Button";
import EmployeeTablePagination from "../EmployeeTablePagination";
import AddNewEmployee from "./AddNewEmployee";

const EmployeeSalaryTable = (props) => {
  const { data, loading, startPolling, stopPolling } = useQuery(EMPLOYEE_LIST_READ);

  const [employeeSalaryData, setemployeeSalaryData] = useState(undefined);
  const [showSalaryForm, setShowSalaryForm] = useState(false);
  const [activeEmployee, setActiveEmployee] = useState(null);

  // stop polling as soon as data available
  useEffect(() => {
    startPolling(10000);
    if (data?.employeeListRead) {
      stopPolling();
    }
    return () => {
      stopPolling();
    };
  }, [data, startPolling, stopPolling]);

  // employee table pagination logic
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  // set initial employees in list
  useEffect(() => {
    if (data?.employeeListRead) setEmployees(data?.employeeListRead);
  }, [data]);

  // slice customers data for paging
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees?.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleFormVisibility = () => {
    setShowSalaryForm(!showSalaryForm);
  };

  // set active employees to change row bg in table
  const currentEmployee = () => setActiveEmployee(null);

  const tableHeadings = [
    "Employee ID",
    "First Name",
    "Last Name",
    "city",
    "CTC",
    "Salary/Month",
    "Action",
  ];
  return (
    <React.Fragment>
      <AddNewEmployee />
      <div
        className="flex flex-col overflow-x-scroll xl:overflow-x-hidden my-3"
        onClick={() => stopPolling()}>
        <table className="salary-table shadow overflow-hidden sm:rounded-lg ">
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
              currentEmployees.map((employee, index) => {
                return (
                  <tr
                    className={`bg-gray-100 text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-600 ${
                      index === activeEmployee ? "active-row" : ""
                    }`}
                    key={employee?._id}>
                    <td className=" px-7  py-4">{index + 1}</td>
                    <td className=" px-7  py-4">{employee?.firstName}</td>
                    <td className=" px-7  py-4">{employee?.lastName}</td>
                    <td className=" px-7  py-4">{employee?.city}</td>
                    <td className=" px-7  py-4">{employee?.ctc}</td>
                    <td className=" px-7  py-4">{(employee?.ctc / 12).toFixed(3)}</td>
                    <td className=" px-7  py-4">
                      <Button
                        className="text-xs rounded-full"
                        onClick={(e) => {
                          setemployeeSalaryData(employee);
                          setShowSalaryForm(true);
                          setActiveEmployee(index);
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
        <EmployeeTablePagination
          employeesPerPage={employeesPerPage}
          totalEmployees={employees?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <EmployeeSalaryDetails
          employeeSalary={employeeSalaryData}
          {...props}
          show={showSalaryForm}
          toggleFormVisibility={toggleFormVisibility}
          currentEmployee={currentEmployee}
        />
      </div>
    </React.Fragment>
  );
};

export default EmployeeSalaryTable;
