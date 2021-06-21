import React from "react";
import { Helmet } from "react-helmet-async";
import EmployeeOperations from "../Components/employee-operations/EmployeeOperations";
import Employee from "../Components/Employee/Employee";
import Container from "../Container/Container";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Dashboard</title>
      </Helmet>
      <Container>
        <EmployeeOperations />
        <Employee />
      </Container>
    </React.Fragment>
  );
};

export default Home;
