import React from "react";
import { ScreenContainer, TraditionalPage } from "../index";
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TraditionalPage} />
        <Route path="/fun" component={ScreenContainer} />
      </Switch>
    </div>
  );
};

export default App;
