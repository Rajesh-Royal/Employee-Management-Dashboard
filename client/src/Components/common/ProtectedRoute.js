import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IS_USER_LOGGED_IN } from "../../core/gql-operations/mutation/is-user-logged-in";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isUserLoggedIn] = useMutation(IS_USER_LOGGED_IN);

  //   run effect on first load
  useEffect(() => {
    isUserLoggedIn({
      variables: {
        userId: "xyz",
      },
    })
      .then((data) => {
        setUserLoggedIn(true);
        setLoading(false);
      })
      .catch((error) => {
        setUserLoggedIn(false);
        setLoading(true);
      });
  }, [isUserLoggedIn]);

  return !loading ? (
    <Route
      {...rest}
      render={(props) =>
        userLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  ) : (
    ""
  );
};
