import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import GlobalErrorBoundary from "../Components/global/GlobalErrorBoundary";
import ThemedSuspense from "../Components/global/ThemedSuspense";
import Container from "./Container";
import Routes from "../Routes/Routes";
import Header from "../Components/common/Header";
import ToastMessageContainer from "../Components/global/ToastContainer";

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
