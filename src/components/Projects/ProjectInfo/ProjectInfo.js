import React from "react";

export const ProjectInfo = (props) => {
  const { title, subtitle, description, link } = props;
  const formatDescription = description.split(`\n`).filter((text) => text !== "");
  return (
    <div className="ProjectInfo-contaner">
      <h3 className="sub-heading">{title}</h3>
      <h5 className="subtitle">{subtitle}</h5>
      {formatDescription.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Check It Out!
        </a>
      ) : null}
    </div>
  );
};
