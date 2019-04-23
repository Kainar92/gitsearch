import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";

if (!sessionStorage.getItem("isFirstMounted")) {
  sessionStorage.setItem("isFirstMounted", "true");
}

ReactDOM.render(<Router />, document.querySelector("#root"));
