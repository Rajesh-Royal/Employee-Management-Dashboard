import React from "react";
import { Loader } from "react-feather";
import { projectTheme } from "../../Data/projectTheme";

const Button = ({ children, className = "", disabled, isLoading, ...buttonProps }) => {
  return (
    <button
      className={`py-2.5 px-5 rounded-md text-white font-medium relative focus:outline-none transition-all duration-75 ${className} ${
        disabled
          ? "bg-gray-200 cursor-not-allowed dark:text-gray-300"
          : `${projectTheme.background} hover:${projectTheme.background}`
      }`}
      {...buttonProps}
      disabled={disabled}>
      {children}
      {isLoading ? (
        <span className="absolute rounded-md w-full h-full top-0 right-0 bg-black bg-opacity-70 text-gray-200 flex justify-items-center items-center">
          <Loader className="w-full animate-spin duration-200" />
        </span>
      ) : null}
    </button>
  );
};

export default Button;
