import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { ProjectInfo } from "./ProjectInfo/ProjectInfo";

export const Projects = () => {
  const { projects } = useContext(AppContext);
  return (
    <div className="Projects-container">
      {projects.map((project) => (
        <div className="Projects-row" key={project.title}>
          <div className="Projects-col">
            <ProjectCard pic={project.pic} alt={project.alt} />
          </div>
          <div className="Projects-col">
            <ProjectInfo
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
