import React from "react";
import { TraditionalPage } from "../index";
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TraditionalPage} />
      </Switch>
    </div>
  );
};

export default App;
