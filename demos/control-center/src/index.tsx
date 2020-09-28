import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Admin from "./pages/Admin";

import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { mainRoutes } from "./routes/index";

import "./index.css";

ReactDOM.render(
  <Router>
    {/* 通用路由 */}
    <Switch>
      <Route path="/admin" render={(props: any) => <Admin {...props} />} />
      <Route
        path="/test"
        component={(routeProps: any) => {
          console.log(routeProps);

          return <h1>test</h1>;
        }}
      />
      {mainRoutes.map((route: any) => {
        return <Route key={route.path} {...route} />;
      })}
      <Redirect to="/admin" from="/" exact />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
