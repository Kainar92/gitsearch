import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";

// if (!sessionStorage.getItem("isMounted")) {
//   sessionStorage.setItem("isFirstMounted", true);
// } else {
//   sessionStorage.setItem("isFirstMounted", false);
// }

ReactDOM.render(<Router />, document.querySelector("#root"));
