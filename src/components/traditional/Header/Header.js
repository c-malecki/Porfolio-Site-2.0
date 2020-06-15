import React, { useState } from "react";
import { TraditionalMobileMenu } from "../../index";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header-z">
      <div className="header-container">
        <div className="toggle-container">
          <span>
            Make it <Link to="/fun">fun!</Link>
          </span>
        </div>
        <div className="hash-links-container">
          <div className="hash-links-menu">
            <HashLink smooth to="/#home">
              Home
            </HashLink>
            <HashLink smooth to="/#about">
              About
            </HashLink>
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </div>
        </div>
        <div className="traditional-mobile-menu-container">
          <TraditionalMobileMenu toggle={toggleMenu} isOpen={isOpen} />
        </div>
      </div>
      <div
        className={`hash-links-container-mobile ${
          isOpen ? "open-container" : ""
        }`}
      >
        <div className={`hash-links-menu-mobile ${isOpen ? "open-menu" : ""}`}>
          <HashLink smooth to="/#home">
            Home
          </HashLink>
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </div>
      </div>
    </div>
  );
};
