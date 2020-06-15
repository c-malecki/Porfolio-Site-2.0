import React from "react";
import { withRouter, Route } from "react-router-dom";
import { LandingPage, AboutMe, Projects, Contact } from "../index";
import { MainNavigation, MobileNavigation } from "../../components/index";

const Screen = () => {
  return (
    <div className="overflow-frame">
      <div className="screen-frame">
        <div className="content">
          <Route exact path="/fun" component={LandingPage} />
          <Route exact path="/fun/about" component={AboutMe} />
          <Route exact path="/fun/projects" component={Projects} />
          <Route exact path="/fun/contact" component={Contact} />
          <MainNavigation />
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
};

export const ScreenContainer = withRouter(Screen);
