import React from "react";

export const SectionHeading = ({ children, className = "" }) => {
  return <h2 className={`text-lg font-medium text-gray-500 ${className}`}>{children}</h2>;
};

export const SectionHeadingSmall = ({ children, className }) => {
  return <h3 className={`text-lg font-medium text-gray-500 mb-5 ${className}`}>{children}</h3>;
};
