import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user/:id" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;
