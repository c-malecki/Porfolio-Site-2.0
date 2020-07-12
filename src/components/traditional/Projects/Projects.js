import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { ProjectCard } from "../../index";

export const Projects = () => {
  const { projects } = useContext(AppContext);
  return (
    <div className="traditional-projects" id="projects">
      <div className="projects-row">
        {projects.map((project) => (
          <ProjectCard
            pic={project.pic}
            alt={project.alt}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
            key={project.title}
            addClass="fun-bg"
          />
        ))}
      </div>
    </div>
  );
};
