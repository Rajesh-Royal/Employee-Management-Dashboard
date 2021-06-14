import React from "react";

function ThemedSuspense({ className = "" }) {
  return (
    <div
      className={`flex justify-center p-6 overflow-hidden ${className}`}
      style={{ height: "90vh" }}>
      <div className="bid-ripple flex self-center">
        <div />
        <div />
      </div>
    </div>
  );
}

export default ThemedSuspense;
