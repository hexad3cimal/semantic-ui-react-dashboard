import React, { Component } from "react";
import ReactDOM from "react-dom";
import dashboardRoutes from "../../routes/dashboard";
import { Switch, Route, Redirect } from "react-router-dom";

const switchRoutes = (
    <Switch>
      {dashboardRoutes.map((prop, key) => {
        if (prop.redirect)
          return <Redirect from={prop.path} to={prop.to} key={key} />;
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  );
class DashboardContainer extends Component {

  constructor() {
    super();
  }

  render() {
        return (<p>Works</p>)
  }
}

export default DashboardContainer;