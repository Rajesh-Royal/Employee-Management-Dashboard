import React from "react";
import { Helmet } from "react-helmet-async";
import EmployeeOperations from "../Components/employee-operations/EmployeeOperations";
import Employee from "../Components/Employee/Employee";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Dashboard</title>
      </Helmet>
      <EmployeeOperations />
      <Employee />
    </React.Fragment>
  );
};

export default Home;
