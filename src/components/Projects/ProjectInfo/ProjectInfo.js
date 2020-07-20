import React from "react";

export const ProjectInfo = (props) => {
  const {
    title,
    description,
    tech,
    github,
    demo,
    time,
    link,
    link_text,
  } = props;
  return (
    <div className="ProjectInfo-contaner">
      <h3 className="sub-heading">{title}</h3>
      <p>{time}</p>
      <p>
        {description}{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link_text}
          </a>
        ) : null}
      </p>
      <p className="tech-p">{tech}</p>
      <div className="ProjectInfo-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          demo
        </a>
      </div>
    </div>
  );
};
