import React from "react";
import { Link } from "react-router-dom";
import { projectTheme } from "../Data/projectTheme";

const SignUp = () => {
  return (
    <div className={"w-screen h-screen overflow-hidden bg-gray-700"}>
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          style={{ height: "500px" }}>
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Sign Up</h1>
              <div className="w-full mt-4">
                <form className="form-horizontal w-3/4 mx-auto" autoComplete="off">
                  <div className="flex flex-col mt-4">
                    <input
                      id="username"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400 focus:outline-none appearance-none"
                      name="username"
                      placeholder="Username"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400 focus:outline-none appearance-none"
                      name="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="flex flex-col mt-4">
                    <input
                      id="mobile"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400 focus:outline-none appearance-none"
                      name="mobile"
                      placeholder="Mobile"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400 focus:outline-none appearance-none"
                      name="password"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <button
                      className={`${projectTheme?.background} hover:bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded focus:outline-none`}
                      onClick={(e) => e.preventDefault()}>
                      Signup
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <Link
                    className="no-underline hover:underline text-blue-dark text-xs"
                    to="/auth/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
