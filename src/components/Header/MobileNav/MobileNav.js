import React from "react";
import { HashLink } from "react-router-hash-link";

export const MobileNav = (props) => {
  const { isOpen } = props;
  return (
    <div className={`MobileNav-container ${isOpen ? "open-mobile" : ""}`}>
      <div className="MobileNav-content">
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
  );
};
