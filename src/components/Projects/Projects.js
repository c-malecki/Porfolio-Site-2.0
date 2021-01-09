import React, { useContext } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { ProjectInfo } from "./ProjectInfo/ProjectInfo";
import { ContentContext } from "../../context/ContentContext";

export const Projects = () => {
  const { isLoading, projects } = useContext(ContentContext);
  const projectsContent = () => {
    if (isLoading) {
      return <div>Loading</div>;
    }
    return (
      <>
        {projects.map((project) => (
          <div className="Project-wrapper" key={project.title}>
            <div className="Project-container">
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
          </div>
        ))}
      </>
    );
  };
  return <>{projectsContent()}</>;
};
