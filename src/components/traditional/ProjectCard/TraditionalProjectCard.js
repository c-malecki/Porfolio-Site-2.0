import React from "react";

export const TraditionalProjectCard = (props) => {
  const { title, description, github, demo, pic, alt, tech } = props;
  return (
    <div className="t-project-card-container">
      <div className="t-projectcard-content">
        <div className="t-card-img">
          <img src={pic} alt={alt} />
        </div>
        <div className="t-projectcard-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="t-card-tech">Tech:</span>
          <span>{tech}</span>
          <span className="t-card-links">
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
