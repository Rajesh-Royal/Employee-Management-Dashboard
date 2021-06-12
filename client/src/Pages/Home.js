import React from "react";

import { Helmet } from "react-helmet-async";
import EmployeeSalaryTable from "../Components/Employee/EmployeeSalaryTable";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Dashboard</title>
      </Helmet>
      <EmployeeSalaryTable />
    </React.Fragment>
  );
};

export default Home;
