import React, { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../../../assets/images/biggerprofile.png";
import { AppContext } from "../../../context/AppContext";

export const About = () => {
  const { changePage, getRef } = useContext(AppContext);
  const about = useRef();
  useEffect(() => {
    getRef(about.current);
  }, [getRef]);
  return (
    <div className="traditional-about" id="about" ref={about}>
      <div className="traditional-about-row">
        <div className="traditional-about-col">
          <div className="about-wrapper">
            <h3 className="sub-heading">Who am I?</h3>
            <div className="about-img">
              <img src={profile} alt="Chris Malecki" />
            </div>
            <p>
              I am a musician, lover of games, and I enjoy pushing the
              boundaries of creativity and logic. Be sure to check out my{" "}
              <Link to="/fun" onClick={() => changePage(0)}>
                alternate layout
              </Link>{" "}
              theme to see what I mean!
            </p>
          </div>
        </div>
        <div className="traditional-about-col">
          <div className="about-wrapper">
            <h3 className="sub-heading">What do I do?</h3>
            <p>
              I am a Fullstack Developer. The frontend is my origin where I
              express creativity in dynamic, responsive, and intuitive UI/UX,
              but I like working on all aspects of an application, including
              databases, web servers, and APIs.
            </p>
          </div>
          <div className="about-wrapper">
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
