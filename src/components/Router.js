import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import SelectedUser from "./SelectedUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/user/:id" component={SelectedUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
