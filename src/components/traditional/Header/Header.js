import React, { useState } from "react";
import { ToggleSwitch, TraditionalMobileMenu } from "../../index";
import { HashLink as Link } from "react-router-hash-link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header-z">
      <div className="header-container">
        <div className="toggle-container" id="toggle">
          <span>Make it fun!</span>
          <ToggleSwitch />
        </div>
        <div className="hash-links-container">
          <div className="hash-links-menu">
            <Link smooth to="/#home">
              Home
            </Link>
            <Link smooth to="/#about">
              About
            </Link>
            <Link smooth to="/#projects">
              Projects
            </Link>
            <Link smooth to="/#contact">
              Contact
            </Link>
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
          <Link smooth to="/#home">
            Home
          </Link>
          <Link smooth to="/#about">
            About
          </Link>
          <Link smooth to="/#projects">
            Projects
          </Link>
          <Link smooth to="/#contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
