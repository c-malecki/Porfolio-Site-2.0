import React from "react";

export const TraditionalProjectCard = (props) => {
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
    <div className="t-project-card-container">
      <span className="t-mobile-title">{title}</span>
      <div className="t-card-image">
        <img src={pic} alt={alt} />
      </div>
      <div className="t-card-title" id={`title-id-${titleId}`}>
        <div className="t-title-background">{title}</div>
      </div>
      <div
        className="t-card-description"
        id={`description-id-${descriptionId}`}
      >
        <div className="t-description-background">{description}</div>
      </div>
      <div className="t-card-links">
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
