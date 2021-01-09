import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Banner, About, Projects, Contact, Footer, Header, Loader } from "../../components/index";

export const PageLayout = (props) => {
  const { isLoading, error } = useContext(ContentContext);
  const renderSite = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <div>error</div>;
    }
    return (
      <div className="page-layout">
        <Header />
        <Banner />
        <div className="page-content">
          <div id="about">
            <About />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  return <>{renderSite()}</>;
};
