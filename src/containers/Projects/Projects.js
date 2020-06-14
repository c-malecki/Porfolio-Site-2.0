import React, { useContext } from "react";
import { ProjectCard } from "../../components/index";
import { AppContext } from "../../context/AppContext";

export const Projects = () => {
  const { projects } = useContext(AppContext);
  return (
    <div className="projects-background">
      <div className="projects-content">
        <div className="projects-row">
          {projects.map((project) => (
            <ProjectCard
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
    </div>
  );
};
