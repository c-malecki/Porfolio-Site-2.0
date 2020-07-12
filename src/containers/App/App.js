import React from "react";
import { PageLayout } from "../index";
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PageLayout} />
      </Switch>
    </div>
  );
};

export default App;
