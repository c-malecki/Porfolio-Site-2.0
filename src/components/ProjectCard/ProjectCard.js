import React from "react";

export const ProjectCard = (props) => {
  const { title, description, github, demo, pic, alt, tech, addClass } = props;
  return (
    <div className="project-card-container">
      <div className={`projectcard-content ${addClass}`}>
        <div className="card-img">
          <img src={pic} alt={alt} />
        </div>
        <div className={`projectcard-info ${addClass}`}>
          <h3>{title}</h3>
          <p>{description}</p>
          <h5 className="card-tech">Tech:</h5>
          <p>{tech}</p>
          <span className="card-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
