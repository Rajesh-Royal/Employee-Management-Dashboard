import React from "react";
import { projectTheme } from "../../Data/projectTheme";

function ThemedSuspense({ className = "" }) {
  return (
    <div
      className={`flex justify-center p-6 overflow-hidden ${className}`}
      style={{ height: "90vh" }}>
      <div className="bid-ripple flex self-center">
        <div className={projectTheme.borderColor} />
        <div className={projectTheme.borderColor} />
      </div>
    </div>
  );
}

export default ThemedSuspense;
