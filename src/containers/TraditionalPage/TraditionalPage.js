import React from "react";
import {
  Header,
  Banner,
  About,
  Projects,
  Contact,
  Footer,
} from "../../components/index";

export const TraditionalPage = (props) => {
  return (
    <div className="traditional-layout">
      <Header />
      <Banner />
      <div className="traditional-content">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
