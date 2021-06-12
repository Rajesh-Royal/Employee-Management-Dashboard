import React from "react";
import { XOctagon } from "react-feather";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>404</title>
      </Helmet>
      <XOctagon className="mt-8 w-12 h-12 text-purple-500" aria-hidden="true" />
      <h1 className="dark:text-gray-200 text-gray-700 text-6xl font-semibold">404</h1>
      <p className="dark:text-gray-300 text-gray-700">
        Page not found.{" "}
        <button
          type="button"
          className="dark:text-green-400 text-purple-500 hover:underline"
          onClick={() => history.goBack()}>
          Go back
        </button>
        .
      </p>
    </div>
  );
};

export default Page404;
