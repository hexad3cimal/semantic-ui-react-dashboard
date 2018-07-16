import '../semantic/dist/semantic.css';

import $ from 'jquery'
import jQuery from 'jquery'
window.jQuery = jQuery

require('../semantic/dist/semantic');
require('../semantic/dist/components/dimmer');
require('../semantic/dist/components/transition');
require('../semantic/dist/components/dropdown');
require('../semantic/dist/components/modal');
require('../semantic/dist/components/rating');
require('../semantic/dist/components/tab');
require('../semantic/dist/components/popup');
require('../semantic/dist/components/sticky');
require('../semantic/dist/components/sidebar');


import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "./routes/index";
const hist = createBrowserHistory();


ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("container")
);
