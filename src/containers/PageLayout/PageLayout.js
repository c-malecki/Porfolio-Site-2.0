import React from "react";
import {
  Banner,
  About,
  Projects,
  Contact,
  Footer,
  Header,
} from "../../components/index";

export const PageLayout = (props) => {
  return (
    <div className="page-layout">
      <Header />
      <Banner />
      <div className="page-content">
        <div className="page-about-section" id="about">
          <About />
        </div>
        <div className="section-buffer">
          <h2 className="section-heading">Projects</h2>
        </div>
        <div className="page-projects-section" id="projects">
          <Projects />
        </div>
        <div className="section-buffer">
          <h2 className="section-heading">Contact</h2>
        </div>
        <div className="page-contact-section" id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};
