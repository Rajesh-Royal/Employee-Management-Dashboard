import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/global-css/tailwind.css";
import ApolloGqlClient from "./core/service/apollo.gql.service";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloGqlClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
