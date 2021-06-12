import React from "react";
import ThemedSuspense from "../Components/ThemedSuspense";

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Dashboard</title>
      </Helmet>
    </React.Fragment>
  );
};

export default Home;
