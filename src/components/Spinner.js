import React from "react";
import "./index.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <div
        className="spinner-loader spinner-border text-primary"
        role="status"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Spinner;
