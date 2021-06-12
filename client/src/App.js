import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Layout from "./Container/Layout";

function App(props) {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Layout />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
