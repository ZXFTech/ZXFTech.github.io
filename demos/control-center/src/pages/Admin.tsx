import React from "react";

import Frame from "../components/Frame";

import { Switch, Redirect, Route } from "react-router-dom";
import { adminRoutes } from "../routes/index";

function Admin() {
  return (
    <Frame>
      <Switch>
        {adminRoutes.map((route: any) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps: any) => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        <Redirect to={adminRoutes[0].path} from="/admin" exact />
        <Redirect to="/404" />
      </Switch>
    </Frame>
  );
}

export default Admin;
