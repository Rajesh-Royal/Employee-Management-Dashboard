import React from "react";

import { Helmet } from "react-helmet-async";
import Employee from "../Components/Employee/Employee";
import AddNewEmployee from "../Components/Employee/components/AddNewEmployee";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Dashboard</title>
      </Helmet>
      <AddNewEmployee />
      <Employee />
    </React.Fragment>
  );
};

export default Home;
