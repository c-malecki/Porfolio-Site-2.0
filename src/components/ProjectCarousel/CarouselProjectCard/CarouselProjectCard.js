import React from "react";
import "./CarouselProjectCard.scss";

export const ProjectCard = (props) => {
  const { img, alt } = props;
  return (
    <div className="ProjectCard-container">
      <img src={img} alt={alt} />
    </div>
  );
};
