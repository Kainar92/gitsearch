import React from "react";
import "../css/style.css";

const Spinner = ({ type }) => {
  return (
    <div className={type === "centered" ? "for-selected" : "spinner"}>
      <div
        className="spinner-loader spinner-border text-primary"
        role="status"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Spinner;
