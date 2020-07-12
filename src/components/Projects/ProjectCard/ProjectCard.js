import React from "react";

export const ProjectCard = (props) => {
  const { pic, alt } = props;
  return (
    <div className="project-card-container">
      <img src={pic} alt={alt} />
    </div>
  );
};
