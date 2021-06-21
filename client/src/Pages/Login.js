import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Components/common/Button";
import FormInputBox from "../Components/common/FormInputBox";
import { USER_LOGIN } from "../core/gql-operations/mutation/user-login-mutation";

const Login = () => {
  const [loginUser] = useMutation(USER_LOGIN);
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const onInputChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  return (
    <div className={"w-screen h-screen overflow-hidden bg-gray-700"}>
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          style={{ height: "500px" }}>
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
              <div className="w-full mt-4">
                <form className="form-horizontal w-3/4 mx-auto">
                  <div className="flex flex-col mt-4">
                    <FormInputBox
                      label=""
                      icon={null}
                      placeholder="Username"
                      name="username"
                      type="text"
                      textLeft={true}
                      ariaLabel="username"
                      value={userCredentials?.username}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="flex flex-col -mt-4">
                    <FormInputBox
                      label=""
                      icon={null}
                      placeholder="Password"
                      name="password"
                      type="password"
                      textLeft={true}
                      ariaLabel="password"
                      value={userCredentials?.password}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      className="mr-2 text-gray-500"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-500">
                      Remember Me
                    </label>
                  </div>
                  <div className="flex flex-col mt-8">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        loginUser({
                          variables: userCredentials,
                        })
                          .then((data) => {
                            localStorage.setItem("employeeToken", data?.data?.LoginUser?.token);
                            toast.success(`User ${userCredentials?.username}  Logged In`);
                            history.push("/dashboard");
                          })
                          .catch((error) => {
                            toast.error(error.message);
                          });
                      }}>
                      Login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between mt-4">
              <Link
                className="no-underline hover:underline text-gray-400 text-xs"
                to="/auth/forgot-password">
                Reset Password?
              </Link>
              <Link
                className="no-underline hover:underline text-gray-400 text-xs"
                to="/auth/signup">
                SignUP
              </Link>
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

export default Login;
