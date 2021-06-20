import React from "react";
import { Helmet } from "react-helmet-async";
import EmployeeSalaryStructure from "../Components/employee-salary-structure/EmployeeSalaryStructure";
import AddNewEmployee from "../Components/Employee/components/AddNewEmployee";
import Employee from "../Components/Employee/Employee";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Dashboard</title>
      </Helmet>
      <AddNewEmployee />
      <EmployeeSalaryStructure />
      <Employee />
    </React.Fragment>
  );
};

export default Home;
