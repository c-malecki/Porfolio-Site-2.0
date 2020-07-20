import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { ProjectInfo } from "./ProjectInfo/ProjectInfo";

export const Projects = () => {
  const { projects } = useContext(AppContext);
  return (
    <>
      {projects.map((project) => (
        <div className="Project-wrapper" key={project.title}>
          <div className="Project-container">
            <div className="Project-row">
              <div className="Project-col">
                <ProjectCard pic={project.pic} alt={project.alt} />
              </div>
              <div className="Project-col">
                <ProjectInfo
                  title={project.title}
                  time={project.time}
                  description={project.description}
                  link={project.link}
                  link_text={project.link_text}
                  tech={project.tech}
                  github={project.github}
                  demo={project.demo}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
