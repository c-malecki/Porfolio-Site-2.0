import React from "react";

export const ProjectCard = (props) => {
  const {
    title,
    description,
    github,
    demo,
    pic,
    alt,
    titleId,
    descriptionId,
  } = props;
  return (
    <div className="project-card-container">
      <span className="mobile-title">{title}</span>
      <div className="card-image">
        <img src={pic} alt={alt} />
      </div>
      <div className="card-title" id={`title-id-${titleId}`}>
        <div className="title-background">{title}</div>
      </div>
      <div className="card-description" id={`description-id-${descriptionId}`}>
        <div className="description-background">{description}</div>
      </div>
      <div className="card-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};
