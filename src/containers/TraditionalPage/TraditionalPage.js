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
        <div className="traditional-about-section">
          <About />
        </div>
        <div className="buffer">
          <h2 className="section-heading">Projects</h2>
        </div>
        <div className="traditional-projects-section">
          <Projects />
        </div>
        <div className="buffer">
          <h2 className="section-heading">Contact</h2>
        </div>
        <div className="traditional-contact-section">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};
