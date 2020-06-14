import React, { useContext } from "react";
import { LandingPage, AboutMe, Projects, Contact } from "../index";
import { MainNavigation, MobileNavigation } from "../../components/index";
import { withRouter } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Screen = () => {
  const { page } = useContext(AppContext);
  const displayPage = () => {
    if (page === 0) {
      return <LandingPage />;
    } else if (page === 1) {
      return <AboutMe />;
    } else if (page === 2) {
      return <Projects />;
    } else if (page === 3) {
      return <Contact />;
    }
  };

  return (
    <div className="overflow-frame">
      <div className="screen-frame">
        <div className="content">
          {displayPage()}
          <MainNavigation />
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
};

export const ScreenContainer = withRouter(Screen);
