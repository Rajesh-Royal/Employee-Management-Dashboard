import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Header from "../Components/common/Header";
import { ProtectedRoute } from "../Components/common/ProtectedRoute";
import GlobalErrorBoundary from "../Components/global/GlobalErrorBoundary";
import ThemedSuspense from "../Components/global/ThemedSuspense";
import ToastMessageContainer from "../Components/global/ToastContainer";
import { adminRoutes, userRoutes } from "../Routes/Routes";

const Page404 = lazy(() => import("../Pages/404"));

function Layout(props) {
  let location = useLocation();
  return (
    <React.Fragment>
      <ToastMessageContainer />
      {location.pathname !== "/auth/login" && location.pathname !== "/auth/signup" ? (
        <Header />
      ) : null}
      <GlobalErrorBoundary>
        <Suspense fallback={<ThemedSuspense className="mt-5" />}>
          <Switch>
            {/* admin routes private */}
            {userRoutes.map((route, i) => {
              return route.component ? (
                <Route
                  key={i}
                  exact
                  path={route.path}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            {/* user routes public */}
            {adminRoutes.map((route, i) => {
              return route.component ? (
                <ProtectedRoute
                  key={i}
                  exact
                  path={route.path}
                  component={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            <Redirect exact from="/" to="/dashboard" />
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </GlobalErrorBoundary>
    </React.Fragment>
  );
}

export default Layout;
