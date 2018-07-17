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
      'primary' : {'type':'primary', 'text':'Primary'},
      'icon' : {'text':'Icon', 'icon' : true, 'iconClass':'heart'},
      'labeledIcon' : {'text':'Labeled Icon', 'icon' : true, 'labeled' :true, 'iconClass':'heart'},
      'dropdown': {'text':'Dropdown','dropdown':true, 'dropdownValues': ["Test 1", "Test 2"]}
    }
  }

  render() {
        
        const {yellowBtn, primary, icon, labeledIcon, dropdown } = this.state
        return (
          <div className="ui two column grid">
            <div className="three wide column">
            </div>
            <div className="nine wide column">
            <h1>Buttons</h1>
            <div className="ui divider"></div>
              <Button props = {yellowBtn} />
              <Button props = {primary} />
              <Button props = {icon} />
              <Button props = {labeledIcon} />
              <Button props = {dropdown} />

           </div>
          </div>
        )
  }
}

export default DashboardContainer;