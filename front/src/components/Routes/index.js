import React from "react";
import {
  BrowserRouter as Redirect,
  Router,
  Route,
  Switch,
} from "react-router-dom";
import Account from "../../pages/Account";
import Home from "../../pages/Home";
import Profil from "../../pages/Profile";

const index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profil" exact component={Profil} />
          <Route path="/mon-compte" exact component={Account} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default index;
