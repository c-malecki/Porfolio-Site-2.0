import React from "react";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="about-col">
          <div className="about-text-wrapper">
            <h3 className="sub-heading">Who am I?</h3>
            <div className="about-img">
              <img
                src="https://portfolio-site-imgs.s3.us-east-2.amazonaws.com/profile.jpg"
                alt="Chris Malecki"
              />
            </div>
            <p>
              My name is Chris. I am a musician, lover of games, and I enjoy
              pushing the boundaries of creativity and logic.
            </p>
          </div>
        </div>
        <div className="about-col">
          <div className="about-text-wrapper">
            <h3 className="sub-heading">What do I do?</h3>
            <p>
              I am a Fullstack Developer. The frontend is my origin where I
              express creativity in dynamic, responsive, and intuitive UI/UX,
              but I like working on all aspects of an application, including
              databases, web servers, and APIs.
            </p>
          </div>
          <div className="about-text-wrapper">
            <h3 className="sub-heading">What do I make?</h3>
            <p>
              All kinds of applications from civic tech or social media to
              gaming tools. React is my framework of choice, but I enjoy the
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
