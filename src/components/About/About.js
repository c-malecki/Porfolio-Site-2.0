import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import ReactMarkdown from "react-markdown";

export const About = () => {
  const { pageContent } = useContext(ContentContext);
  const { aboutCaption, aboutWhatDoIDo, aboutWhatDoIMake } = pageContent[0];
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="about-col">
          <h3 className="sub-heading">Who am I?</h3>
          <div className="about-img">
            <img
              src="https://portfolio-site-imgs.s3.us-east-2.amazonaws.com/profile.jpg"
              alt="Chris Malecki"
            />
          </div>
          <ReactMarkdown>{aboutCaption}</ReactMarkdown>
        </div>
        <div className="about-col">
          <h3 className="sub-heading">What do I do?</h3>
          <ReactMarkdown>{aboutWhatDoIDo}</ReactMarkdown>
          <h3 className="sub-heading">What do I make?</h3>
          <ReactMarkdown>{aboutWhatDoIMake}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
