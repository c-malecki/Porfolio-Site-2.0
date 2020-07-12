import React from "react";
import "./ProjectDetail.scss";

export const ProjectDetail = (props) => {
  const { description, tech } = props;
  return (
    <div className="ProjectDetail-container">
      <h4>Description:</h4>
      <p>{description}</p>
      <h4>Tech:</h4>
      <p>{tech}</p>
    </div>
  );
};
