import React from "react";
import { projectTheme } from "../../Data/projectTheme";

const Button = ({ children, className = "", disabled, ...buttonProps }) => {
  return (
    <button
      className={`py-2.5 px-5 rounded-md text-white font-medium focus:outline-none transition-all duration-75 ${className} ${
        disabled
          ? "bg-gray-200 cursor-not-allowed"
          : `${projectTheme.background} hover:${projectTheme.background}`
      }`}
      {...buttonProps}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
