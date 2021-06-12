import React from "react";

const Button = ({ children, className = "", ...buttonProps }) => {
  return (
    <button
      className={`py-2.5 px-5 bg-purple-500 rounded-md text-white font-medium focus:outline-none hover:bg-purple-600 transition-all duration-75 ${className}`}
      {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
