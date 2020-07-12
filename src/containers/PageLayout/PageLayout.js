import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import {
  Banner,
  About,
  Projects,
  Contact,
  Footer,
  Header,
} from "../../components/index";

export const PageLayout = (props) => {
  const { getRef } = useContext(AppContext);
  const about = useRef();
  useEffect(() => {
    getRef(about.current);
  }, [getRef]);
  return (
    <div className="page-layout">
      <Header />
      <Banner />
      <div className="page-content">
        <div className="page-about-section" id="about" ref={about}>
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
