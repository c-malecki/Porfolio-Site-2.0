import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { TraditionalProjectCard } from "../../index";

export const Projects = () => {
  const { projects } = useContext(AppContext);
  return (
    <div className="traditional-projects" id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="traditional-projectcard-container">
        {projects.map((project) => (
          <TraditionalProjectCard
            pic={project.pic}
            alt={project.alt}
            title={project.title}
            titleId={project.titleId}
            description={project.description}
            descriptionId={project.descriptionId}
            github={project.github}
            demo={project.demo}
            key={project.title}
          />
        ))}
      </div>
    </div>
  );
};
