import React, { useContext } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { ProjectInfo } from "./ProjectInfo/ProjectInfo";
import { ContentContext } from "../../context/ContentContext";

export const Projects = () => {
  const { projects } = useContext(ContentContext);
  return (
    <>
      {projects.map((project) => (
        <div className="Project-container" key={project.title}>
          <div className="Project-row">
            <div className="Project-col">
              <ProjectCard pic={project.image.fields.file.url} alt={project.alt} />
            </div>
            <div className="Project-col">
              <ProjectInfo
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                link={project.link}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
