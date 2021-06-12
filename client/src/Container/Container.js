import React from "react";

const Container = ({ children, backgroundColor = "", className = "" }) => {
  return (
    <div
      className={`max-w-7xl mx-auto main-container px-4 ${className}`}
      style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};

export default Container;
