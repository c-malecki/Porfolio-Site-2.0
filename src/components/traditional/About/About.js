import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import profile from "../../../assets/images/biggerprofile.png";

export const About = () => {
  return (
    <div className="traditional-about" id="about">
      <h2 className="section-heading">About</h2>
      <div className="traditional-about-row">
        <div className="traditional-about-col">
          <h3 className="sub-heading">Who am I?</h3>
          <div className="about-img">
            <img src={profile} alt="Chris Malecki" />
          </div>
          <span className="about-text">
            I am a musician, lover of games, and I enjoy pushing the boundaries
            of creativity and logic. Be sure to check out my{" "}
            <Link smooth to="/#toggle">
              alternate layout
            </Link>{" "}
            theme to see what I mean!
          </span>
        </div>
        <div className="traditional-about-col">
          <h3 className="sub-heading">What do I do?</h3>

          <span className="about-text">
            I am a Fullstack Developer. The frontend is my origin where I
            express creativity in dynamic, responsive, and intuitive UI/UX, but
            I like working on all aspects of an application.
          </span>
        </div>
      </div>
    </div>
  );
};