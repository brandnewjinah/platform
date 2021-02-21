import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import Home from "./pages/Home/Home";
import Create from "./pages/Profile/Create";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/create" component={Create} />
      </Switch>
    </Router>
  );
};

export default Routes;
