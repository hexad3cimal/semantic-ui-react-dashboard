import React, { Component } from "react";
import Button from "../view/button.jsx";
import Table from "../view/Table/table.jsx";
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
      yellowBtn: { type: "yellow", size: "tiny", text: "Yellow" },
      primary: { type: "primary", text: "Primary" },
      icon: { text: "Icon", icon: true, iconClass: "heart" },
      labeledIcon: {
        text: "Labeled Icon",
        icon: true,
        labeled: true,
        iconClass: "heart"
      },
      table: {
        aligned: true,
        right: true,
        celled: true,
        data: [
          ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
          ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
          ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
          ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
          ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
          ["Mason Porter", "Chile", "Gloucester", "$78,615"]
        ],
        headers: ["Name", "Country", "City", "Salary"]
      }
    };
  }

  render() {
    const { yellowBtn, primary, icon, labeledIcon, table } = this.state;
    return (
      <div className="ui two column grid">
        <div className="three wide column" />
        <div className="nine wide column">
          <h1>Buttons</h1>
          <div className="ui divider" />
          <Button props={yellowBtn} />
          <Button props={primary} />
          <Button props={icon} />
          <Button props={labeledIcon} />
          <div className="ui divider" />
          <h1>Table</h1>
          <div className="ui two column relaxed grid">
            <Table props={table} />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
