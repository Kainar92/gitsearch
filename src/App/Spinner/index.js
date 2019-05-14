import React from "react";

import "./style.css";

const Spinner = ({ type }) => {
  return (
    <div
      className={type === "centered" ? "user-profile-style" : "user-list-style"}
    >
      <div
        className="spinner-loader spinner-border text-primary"
        role="status"
      />
    </div>
  );
};

export default Spinner;
