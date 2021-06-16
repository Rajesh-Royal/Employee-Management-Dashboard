import React, { useEffect, useState, useCallback } from "react";
import { useQuery } from "@apollo/client";

import { EMPLOYEE_LIST_READ } from "../../core/gql-operations/query/employee-list-read-query";
import EmployeeSalaryDetailsForm from "./components/EmployeeSalaryDetailsForm";
import TablePagination from "../common/TablePagination";
import EmployeeSalaryListTable from "./components/EmployeeSalaryListTable";

const Employee = (props) => {
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

  // toggle the visibility of the user salary edit form
  const toggleFormVisibility = useCallback(() => {
    setShowSalaryForm(!showSalaryForm);
  }, [showSalaryForm]);
  // const toggleFormVisibility = () => {
  //   setShowSalaryForm(!showSalaryForm);
  // };
  // change salarytable form data
  const changeEmployeeSalaryDetails = (employee, index) => {
    setemployeeSalaryData(employee);
    setShowSalaryForm(true);
    setActiveEmployee(index);
  };

  // set active employees to change row bg in table
  const currentEmployee = () => setActiveEmployee(null);

  return (
    <React.Fragment>
      <EmployeeSalaryListTable
        changeEmployeeSalaryDetails={changeEmployeeSalaryDetails}
        currentEmployees={currentEmployees}
        activeEmployee={activeEmployee}
        data={data}
        loading={loading}
      />
      <TablePagination
        employeesPerPage={employeesPerPage}
        totalEmployees={employees?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {showSalaryForm ? (
        <EmployeeSalaryDetailsForm
          employeeSalary={employeeSalaryData}
          {...props}
          show={showSalaryForm}
          toggleFormVisibility={toggleFormVisibility}
          currentEmployee={currentEmployee}
        />
      ) : null}
    </React.Fragment>
  );
};

export default Employee;
