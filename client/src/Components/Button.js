import React from "react";

const Button = ({ children, className = "", disabled, ...buttonProps }) => {
  return (
    <button
      className={`py-2.5 px-5 rounded-md text-white font-medium focus:outline-none transition-all duration-75 ${className} ${
        disabled ? "bg-gray-200 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600 "
      }`}
      {...buttonProps}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
