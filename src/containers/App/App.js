import React from "react";
import { PageLayout } from "../index";
import { Switch, Route } from "react-router-dom";
// import { BlogPage } from "../index";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PageLayout} />
        {/* <Route path="/blog" component={BlogPage} /> */}
      </Switch>
    </div>
  );
};

export default App;
