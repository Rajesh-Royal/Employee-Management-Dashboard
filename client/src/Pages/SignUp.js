import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Components/common/Button";
import FormInputBox from "../Components/common/FormInputBox";
import { USER_SIGNUP } from "../core/gql-operations/mutation/user-signup-mutation";

const SignUp = () => {
  const [signupUser] = useMutation(USER_SIGNUP);
  const [requestLoading, setRequestLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });
  const onInputChange = (e) => {
    if (e.target.name === "mobile") {
      console.log("updating");
      setUserCredentials({
        ...userCredentials,
        [e.target.name]: parseInt(e.target.value) || "",
      });
      return;
    }
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  return (
    <div className={"w-screen h-screen overflow-hidden bg-gray-700"}>
      <Helmet>
        <title>Signup - Employee Dashboard</title>
      </Helmet>
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
                  <div className="flex flex-col -mt-4">
                    <FormInputBox
                      label=""
                      icon={null}
                      placeholder="Email"
                      name="email"
                      type="email"
                      textLeft={true}
                      ariaLabel="email"
                      value={userCredentials?.email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="flex flex-col -mt-4">
                    <FormInputBox
                      label=""
                      icon={null}
                      placeholder="Mobile"
                      name="mobile"
                      type="number"
                      textLeft={true}
                      ariaLabel="mobile"
                      value={userCredentials?.mobile}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setRequestLoading(true);
                        signupUser({
                          variables: userCredentials,
                        })
                          .then((data) => {
                            toast.success(`Registered new user ${userCredentials?.username}`);
                            setRequestLoading(false);
                            history.push("/auth/login");
                            return data;
                          })
                          .catch((error) => {
                            if (
                              error?.graphQLErrors[0]?.extensions?.exception?.response?.message
                                ?.length > 0
                            ) {
                              error?.graphQLErrors[0]?.extensions?.exception?.response?.message?.forEach(
                                (message) => {
                                  toast.error(message, { autoClose: 7000 });
                                }
                              );
                              setRequestLoading(false);
                            } else {
                              toast.error(
                                `${error.message}. Data validation failed, please check your input data`,
                                { autoClose: 7000 }
                              );
                              setRequestLoading(false);
                            }

                            return error;
                          });
                      }}
                      isLoading={requestLoading}>
                      Signup
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between mt-4">
              <Link className="no-underline hover:underline text-gray-400 text-xs" to="/auth/login">
                Login
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

export default SignUp;
