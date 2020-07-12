import React from "react";
import {
  Header,
  Banner,
  About,
  Projects,
  Contact,
  Footer,
} from "../../components/index";

export const PageLayout = (props) => {
  return (
    <div className="page-layout">
      <Header />
      <Banner />
      <div className="page-content">
        <div className="page-about-section">
          <About />
        </div>
        <div className="section-buffer">
          <h2 className="section-heading">Projects</h2>
        </div>
        <div className="page-projects-section">
          <Projects />
        </div>
        <div className="section-buffer">
          <h2 className="section-heading">Contact</h2>
        </div>
        <div className="page-contact-section">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};
