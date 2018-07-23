import React, { Component } from "react";
import Button from "../view/button/button.jsx";
import Table from "../view/Table/table.jsx";
import Input from "../view/Input/input.jsx";
import BasicCard from "../view/cards/basiccard.jsx";
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
      },
      basicInput: { type: "text", placeholder: "Basic input..." },
      labeledInput: {
        type: "text",
        placeholder: "Basic input...",
        label: "Label"
      },
      cornerInput: {
        type: "text",
        placeholder: "Input...",
        corner: true,
        label: true,
        iconName: "search"
      },
      searchInput: {
        type: "text",
        placeholder: "Input...",
        label: "Search",
        iconName: "search",
        icon: true
      },
      basicCard: {
        contentHeader: "Test",
        image: true,
        content: true,
        dimmable: true,
        imageContent: "Test content",
        contentMeta: "Test meta",
        contentDesc: "Test desc"
      }
    };
  }

  render() {
    const {
      yellowBtn,
      primary,
      icon,
      labeledIcon,
      table,
      basicInput,
      labeledInput,
      cornerInput,
      searchInput,
      basicCard
    } = this.state;
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
          <div className="ui divider" />
          <h1>Input</h1>
          <div className="ui two column grid">
            <div className="column">
              <Input props={basicInput} />
            </div>
            <div className="column">
              <Input props={labeledInput} />
            </div>
            <div className="column">
              <Input props={cornerInput} />
            </div>
            <div className="column">
              <Input props={searchInput} />
            </div>
          </div>
          <div className="ui divider" />
          <h1>Cards</h1>
          <BasicCard props={basicCard} />
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
