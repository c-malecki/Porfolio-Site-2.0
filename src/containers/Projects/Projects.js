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
    </div>
  );
};
