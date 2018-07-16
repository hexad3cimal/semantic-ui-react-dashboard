import React, { Component } from "react";
import Button from "../view/button.jsx"
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
    this.state = {
      'yellowBtn' : {'type':'yellow','size':'tiny', 'text':'Yellow'},
      'primary' : {'type':'primary', 'text':'Primary'}
    }
  }

  render() {
        
        const {yellowBtn, primary} = this.state
        return (
          <div className="ui two column grid">
            <div className="three wide column">
            </div>
            <div className="nine wide column">
            <div className="ui divider"></div>
              <Button props = {yellowBtn} />
              <Button props = {primary} />
            </div>
          </div>
        )
  }
}

export default DashboardContainer;