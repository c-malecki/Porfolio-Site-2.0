import React from "react";
import portrait from "../../assets/images/Portrait.png";

export const AboutMe = () => {
  return (
    <div className="about-background">
      <div className="about-content">
        <div className="about-row">
          <div className="blurb">
            <img src={portrait} alt="8 bit art Chris" className="portrait" />
            <h3>What do I do?</h3>
            <p>
              I am a Fullstack Developer. The frontend is my origin where I
              express creativity in dynamic, responsive, and intuitive UI/UX,
              but I like working on all aspects of an application.
            </p>
            <h3>What do I make?</h3>
            <p>
              All kinds of applications. React is my preference, but I enjoy the
              challenge of learning different technologies. New problems present
              new learning opportunities. It's the reason why I have such a
              passion for programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
