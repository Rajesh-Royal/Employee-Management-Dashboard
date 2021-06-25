import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Container/Layout";

function App(props) {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Router>
          <Switch>
            <Layout props={props} />
          </Switch>
        </Router>
      </HelmetProvider>
    </React.Fragment>
  );
}

export default App;
