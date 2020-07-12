import React from "react";
import { HashLink } from "react-router-hash-link";

export const HashLinksNav = () => {
  return (
    <div className="HashLinksNav-container">
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
  );
};
