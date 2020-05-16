import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Lod from "./../images/Lod.png";
import FTA from "./../images/FinancialTrackerApp.png";
import Flo from "./../images/floswhistle.png";
import "./styles/Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="content">
        <div className="projects-background">
          <div className="projects-content">
            <div className="projects-row">
              <ProjectCard
                pic={Flo}
                title={`Flo's Whistle: Pandemic`}
                titleId={2}
                description="Anonymous reporting platform for medical professionals amidst COVID-19 pandemic with visual data dashboard."
                descriptionId={2}
                github="https://github.com/codefordayton/floswhistle-pandemic-v2"
                demo="https://beta.floswhistle.org"
              />
              <ProjectCard
                pic={Lod}
                title="Diablo II Character Calculator"
                titleId={1}
                description={`Complex calculator built with MERN stack that recreates Diablo II's game logic and UI.`}
                descriptionId={1}
                github="https://github.com/c-malecki/pod-character-calculator"
                demo="https://diabloii-cc.netlify.app/"
              />
              <ProjectCard
                pic={FTA}
                title="Financial Tracker App"
                titleId={2}
                description="Personal finance tracker similar to banking app. Uses React, React-Router, Redux, Formik, Yup, Bootstrap."
                descriptionId={2}
                github="https://github.com/c-malecki/FinancialTrackerApp"
                demo="https://codesandbox.io/s/github/c-malecki/FinancialTrackerApp"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
