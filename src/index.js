import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

if (!sessionStorage.getItem("isMountedFirstTime")) {
  sessionStorage.setItem("isMountedFirstTime", "true");
}

ReactDOM.render(<App />, document.querySelector("#root"));
