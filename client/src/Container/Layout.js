import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import GlobalErrorBoundary from "../Components/GlobalErrorBoundary";
import ThemedSuspense from "../Components/ThemedSuspense";
import Container from "./Container";
import Routes from "../Routes/Routes";
import Header from "../Components/Header";
import ToastMessageContainer from "../Components/ToastContainer";

const Page404 = lazy(() => import("../Pages/404"));

function Layout() {
  return (
    <React.Fragment>
      <ToastMessageContainer />
      <Header />
      <Container>
        <GlobalErrorBoundary>
          <Suspense fallback={<ThemedSuspense className="mt-5" />}>
            <Switch>
              {Routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact
                    path={route.path}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect exact from="/" to="/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </GlobalErrorBoundary>
      </Container>
    </React.Fragment>
  );
}

export default Layout;
