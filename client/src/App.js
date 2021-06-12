import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./Container/Layout";

function App(props) {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Router>
          <Switch>
            <Layout />
          </Switch>
        </Router>
      </HelmetProvider>
    </React.Fragment>
  );
}

export default App;
